---
title: "A Practical Guide to Time Series Forecasting in R"
date: "2024-09-05"
description: "Choosing the right forecasting model for your data — from classical decomposition to modern approaches, with real-world considerations that textbooks skip."
tags: ["R", "Time Series", "Forecasting", "Statistics"]
readingTime: "10 min read"
---

# A Practical Guide to Time Series Forecasting in R

Forecasting is one of those topics where the gap between academic treatment and real-world practice is wide. Textbooks give you clean datasets and well-behaved series. Production data gives you missing values, regime changes, and stakeholders who want to know *why* the forecast says what it says.

Here's a practical framework for approaching time series forecasting in R.

## Start with Exploration, Not Models

Before fitting anything, understand your data:

```r
library(tsibble)
library(feasts)

data |>
  as_tsibble(index = date) |>
  autoplot(value) +
  labs(title = "Raw series", y = "Value")
```

Look for:

- **Trend** — Is there a long-term direction?
- **Seasonality** — Are there repeating patterns (weekly, monthly, yearly)?
- **Structural breaks** — Did something fundamentally change?
- **Outliers** — Are there values that don't belong?

The STL decomposition is your best friend here:

```r
data |>
  model(STL(value ~ season(window = "periodic"))) |>
  components() |>
  autoplot()
```

This single plot tells you more about your series than any summary statistic.

## The Model Selection Framework

Rather than jumping to the latest deep learning model, I use a pragmatic hierarchy:

### Level 1: Baselines

Always start here. If a naive method works well enough, you don't need complexity.

```r
models <- data |>
  model(
    naive    = NAIVE(value),
    snaive   = SNAIVE(value),
    drift    = RW(value ~ drift()),
    mean     = MEAN(value)
  )
```

These are your benchmarks. Any serious model should beat them convincingly.

### Level 2: Classical Methods

ETS (exponential smoothing) and ARIMA cover a remarkable range of time series:

```r
models <- data |>
  model(
    ets   = ETS(value),
    arima = ARIMA(value)
  )
```

The `fable` package's automatic selection (`ETS()` and `ARIMA()` without arguments) is surprisingly good. It searches the model space and selects via information criteria.

### Level 3: Regression-Based

When you have external predictors (promotions, weather, holidays), dynamic regression or Prophet-style models become relevant:

```r
model_with_regressors <- data |>
  model(
    dynamic = ARIMA(value ~ temperature + promotion + fourier(period = 7, K = 3))
  )
```

### Level 4: Ensemble and ML Methods

For high-frequency or high-volume forecasting, consider ensembling or gradient-boosted approaches. But only after verifying that simpler methods aren't sufficient.

## Evaluation That Matters

Cross-validation with rolling windows reflects how your model will actually be used:

```r
cv_results <- data |>
  stretch_tsibble(.init = 365, .step = 30) |>
  model(
    ets   = ETS(value),
    arima = ARIMA(value)
  ) |>
  forecast(h = 30) |>
  accuracy(data)
```

Key metrics to report:

| Metric | What It Tells You |
|--------|-------------------|
| MAPE   | Percentage error — intuitive for stakeholders |
| RMSE   | Penalizes large errors — important if big misses are costly |
| MASE   | Scale-independent — best for comparing across series |

Always report multiple metrics. A model that looks great on MAPE might be terrible on RMSE if it occasionally produces extreme errors.

## Things Textbooks Don't Tell You

**Missing data is the norm.** Interpolation decisions matter. Linear interpolation for short gaps, model-based imputation for longer ones. Document your choices.

**Forecasts need uncertainty bounds.** A point forecast without prediction intervals is incomplete. Stakeholders need to know the range of outcomes, not just the expected value.

**Models degrade.** Set up monitoring to track forecast accuracy over time. When performance drifts past your threshold, retrain.

**Explainability wins.** A slightly less accurate model that stakeholders understand and trust will be used. A black-box model that's 2% better will be ignored.

## Recommended Stack

For time series work in R, this is my go-to toolkit:

- **`tsibble`** — Tidy temporal data structures
- **`fable`** — Modern forecasting framework
- **`feasts`** — Feature extraction and visualization
- **`slider`** — Rolling window operations
- **`prophet`** — When you need holiday effects and changepoint detection

The `fable` ecosystem is excellent for systematic, reproducible forecasting workflows. It encourages good practices by design.

## Final Thought

The best forecasting model is the one your team can maintain, your stakeholders can understand, and your pipeline can run reliably. Start simple, validate rigorously, and add complexity only when the data demands it.
