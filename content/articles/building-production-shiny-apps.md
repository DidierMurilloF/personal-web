---
title: "Building Production-Grade R Shiny Applications"
date: "2025-01-15"
description: "Lessons learned from deploying R Shiny apps at scale — modular architecture, testing strategies, and Docker-based workflows that keep things maintainable."
tags: ["R Shiny", "Docker", "Production"]
readingTime: "8 min read"
---

# Building Production-Grade R Shiny Applications

R Shiny makes it deceptively easy to build interactive web applications. A few hundred lines of code and you have a working dashboard. But the gap between a working prototype and a production system that teams rely on daily is significant.

After years of shipping Shiny apps across healthcare, finance, and agriculture, here are the patterns that have consistently made the difference.

## Modular Architecture with `box`

The single biggest improvement you can make to a Shiny codebase is adopting modules. Not just Shiny modules (though those are essential), but a proper module system for your entire project.

The [`box`](https://github.com/klmr/box) package brings Python-style imports to R:

```r
box::use(
  app/logic/data_processing[clean_data, validate_input],
  app/view/sidebar[sidebar_ui, sidebar_server]
)
```

This eliminates the `source()` spaghetti that plagues most Shiny projects and makes dependencies explicit at the file level.

## Testing Beyond Unit Tests

Unit tests are necessary but not sufficient. For Shiny apps, you need three layers:

1. **Unit tests** — Pure logic functions with `testthat`
2. **Integration tests** — Module behavior with `shinytest2`
3. **Snapshot tests** — UI regression detection

```r
test_that("filter module returns correct subset", {
  testServer(filter_server, {
    session$setInputs(category = "A", date_range = c("2024-01-01", "2024-12-31"))
    expect_equal(nrow(filtered_data()), 142)
  })
})
```

The investment in `shinytest2` pays off quickly — catching UI regressions before they reach users saves hours of back-and-forth.

## Docker: Non-Negotiable for Deployment

Every Shiny app I build ships in a Docker container. The `Dockerfile` is part of the project from day one, not an afterthought.

A minimal production setup:

```dockerfile
FROM rocker/shiny:4.3.2

COPY renv.lock renv.lock
RUN Rscript -e "renv::restore()"

COPY app /srv/shiny-server/app
EXPOSE 3838

CMD ["R", "-e", "shiny::runApp('/srv/shiny-server/app', port = 3838, host = '0.0.0.0')"]
```

Combined with `renv` for dependency locking, this guarantees that what runs on your machine runs identically in production.

## Configuration Over Hard-Coding

Production apps need to adapt to their environment. Database credentials, API endpoints, feature flags — none of these should be hard-coded.

I use a combination of environment variables and a `config.yml` file:

```yaml
default:
  database:
    host: "localhost"
    port: 5432
    name: "analytics"

production:
  database:
    host: !expr Sys.getenv("DB_HOST")
    port: !expr as.integer(Sys.getenv("DB_PORT"))
    name: !expr Sys.getenv("DB_NAME")
```

The `config` package makes this seamless — `config::get("database")` returns the right values based on `R_CONFIG_ACTIVE`.

## Closing Thoughts

Production Shiny development is software engineering. The R community has built excellent tooling — `box`, `renv`, `shinytest2`, `golem`, `rhino` — that brings the discipline of modern software development to the Shiny ecosystem.

The upfront investment in architecture and testing isn't overhead. It's what makes it possible to maintain and evolve these applications over years, not just weeks.
