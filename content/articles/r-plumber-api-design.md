---
title: "Designing Clean APIs with R Plumber"
date: "2024-11-20"
description: "A practical guide to building well-structured REST APIs in R — routing conventions, input validation, error handling, and authentication patterns."
tags: ["R", "API", "Plumber"]
readingTime: "6 min read"
---

# Designing Clean APIs with R Plumber

R Plumber turns R functions into API endpoints with a few comment annotations. It's powerful, but the simplicity can lead to poorly structured APIs if you're not intentional about design.

Here's how I approach Plumber API development for production use.

## Project Structure

A clean Plumber project separates routing from business logic:

```
api/
├── plumber.R          # Root router — mounts sub-routers
├── routes/
│   ├── forecasts.R    # /forecasts endpoints
│   ├── models.R       # /models endpoints
│   └── health.R       # /health endpoint
├── logic/
│   ├── forecast.R     # Forecasting functions
│   └── validation.R   # Input validation helpers
└── middleware/
    ├── auth.R         # Authentication filter
    └── logging.R      # Request logging
```

The root `plumber.R` file only mounts routers:

```r
#* @plumber
function(pr) {
  pr |>
    pr_mount("/forecasts", plumber::pr("routes/forecasts.R")) |>
    pr_mount("/models", plumber::pr("routes/models.R")) |>
    pr_mount("/health", plumber::pr("routes/health.R"))
}
```

This keeps each file focused and makes the API easy to navigate.

## Input Validation

Never trust incoming data. Validate early, fail clearly:

```r
validate_forecast_request <- function(horizon, frequency) {
  errors <- character()

  if (!is.numeric(horizon) || horizon < 1 || horizon > 365) {
    errors <- c(errors, "horizon must be a number between 1 and 365")
  }

  if (!frequency %in% c("daily", "weekly", "monthly")) {
    errors <- c(errors, "frequency must be one of: daily, weekly, monthly")
  }

  if (length(errors) > 0) {
    rlang::abort(paste(errors, collapse = "; "), class = "validation_error")
  }
}
```

Return proper HTTP status codes — `400` for bad input, `404` for missing resources, `500` for unexpected failures.

## Error Handling

Plumber's default error responses are not great for API consumers. A custom error handler standardizes the format:

```r
custom_error_handler <- function(req, res, err) {
  status <- if (inherits(err, "validation_error")) 400L else 500L
  res$status <- status

  list(
    error = TRUE,
    status = status,
    message = conditionMessage(err)
  )
}
```

Register it globally so every endpoint benefits:

```r
pr_set_error(pr, custom_error_handler)
```

## Authentication

For internal APIs, a simple token-based filter works well:

```r
#* @filter auth
function(req, res) {
  token <- req$HTTP_AUTHORIZATION

  if (is.null(token) || !validate_token(token)) {
    res$status <- 401L
    return(list(error = TRUE, message = "Unauthorized"))
  }

  plumber::forward()
}
```

For more complex scenarios, consider OAuth2 or integrating with your organization's identity provider.

## Practical Tips

- **Version your API** — Use `/v1/forecasts` so you can evolve without breaking consumers
- **Add a `/health` endpoint** — Load balancers and monitoring tools need it
- **Log every request** — Timestamp, method, path, duration, and status code
- **Document with OpenAPI** — Plumber generates Swagger docs automatically; keep them accurate
- **Test with `httr2`** — Write integration tests that hit a running instance

## Wrapping Up

R Plumber is underrated as a production tool. With proper structure, validation, and error handling, it can power reliable data services that integrate seamlessly with the rest of your stack.

The key is treating your API code with the same rigor you'd apply to any other software project — not as a quick wrapper around a model, but as a contract your consumers depend on.
