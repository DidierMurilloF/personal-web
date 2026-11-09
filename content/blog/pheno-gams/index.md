---
title: "Smoothers in the Field: GAMs for Capturing Treatment Effects and Spatial Trends in Plant Breeding Trials"
date: "2025-05-05"
summary: "How Generalized Additive Models can model spatial trends and estimate genotype effects in plant breeding trials, compared side by side with a classical ASReml spatial model."
tags: ["Statistics", "Experimental design", "R"]
cover: "figures/cover.jpg"
coverAlt: "Illustration of smooth spatial trends across a field trial"
code: "https://github.com/DidierMurilloF/PhenoGAMs"
---


## Introduction

Agricultural field trials are essential for evaluating genotype performance across diverse environments in plant breeding. Yet spatial trends—driven by soil variability, irrigation, or microclimatic gradients—often introduce noise that can obscure the true genetic signal. Traditional linear mixed models have long been the standard approach for accounting for this spatial structure while estimating treatment effects.

Generalized Additive Models (GAMs) offer a flexible, non-parametric alternative capable of modeling smooth spatial surfaces and complex field patterns. Despite their strong theoretical appeal, GAMs remain underutilized in plant breeding applications. In this article, we explore how GAMs can be applied to field trial data and compare their performance to a classical spatial mixed model built using ASReml. We focus on model-fit diagnostics, spatial trend capture, and agreement in genotype rankings—measured using correlation and Kendall’s tau—to assess their utility in modern breeding experiments.

## Data

The dataset originates from a simulation study based on a partially replicated (p-rep) field trial design, involving 180 genotypes (treatments) evaluated across five environments. For the purposes of this article, we focus on a single environment to illustrate a within-location spatial analysis. The dataset includes field layout information (row and column positions), genotype identifiers (treatments), and grain yield as the primary response variable.

Note: Throughout this article, we use the terms genotype and treatment interchangeably. Each treatment corresponds to a unique genotype evaluated in the field trial.

|  ID | EXPT  | LOCATION | YEAR | PLOT | ROW | COLUMN | CHECKS | ENTRY | TREATMENT | YIELD |
|----:|:------|:---------|-----:|-----:|----:|-------:|-------:|------:|:----------|------:|
|   1 | Expt1 | LOC1     | 2025 |    1 |   1 |      1 |      0 |    72 | G-72      | 68.20 |
|   2 | Expt1 | LOC1     | 2025 |    2 |   1 |      2 |      3 |     3 | G-3       | 73.34 |
|   3 | Expt1 | LOC1     | 2025 |    3 |   1 |      3 |    146 |   146 | G-146     | 63.28 |
|   4 | Expt1 | LOC1     | 2025 |    4 |   1 |      4 |      0 |    48 | G-48      | 73.25 |
|   5 | Expt1 | LOC1     | 2025 |    5 |   1 |      5 |      0 |    54 | G-54      | 63.99 |
|   6 | Expt1 | LOC1     | 2025 |    6 |   1 |      6 |      0 |    45 | G-45      | 61.59 |

## Basic GAM Model

In a GAM model, we replace strictly linear terms with smooth functions estimated from the data. For example, instead of assuming a linear relationship between yield and row, we estimate a smooth function $f_1(ROW)$. The goal is to capture subtle trends in the field that would otherwise be modeled as random effects or spatial residuals.

### Model Equation:

We begin with a model for the yield $y_{ijk}$ at each plot $(i,j)$ with treatment $k$:

$$
YIELD = f_1(ROW) + f_2(COLUMN) + f_3(ROW_{fc}) + f_4(COLUMN_{fc}) + f_5(TREATMENT)
$$

Where:

- $f_1$ and $f_2$ are smooth spatial trends modeled with penalized splines (bs = “ps”)

- $f_3$ and $f_4$ are random row and column effects (bs = “re”)

- $f_5$ is the treatment random effect (bs = “re”)

The model is fitted using the `bam()` function from the `mgcv` package:

```r
gam_m1 <- bam(
  YIELD ~ 
    s(ROW, bs = "ps") + s(COLUMN, bs = "ps") +
    s(ROW_fc, bs = "re") + s(COLUMN_fc, bs = "re") +
    s(TREATMENT, bs = "re"),
  data = yield_data_single_gam,
  method = "fREML"
)
```

### Genotype-Level Predictions

To extract genotype-level predictions from the model, we predict treatment effects while fixing all spatial covariates at their field-centered values. The way we created the `newdata` set for GAM model prediction, as shown below:

```r
# Center values for marginal prediction
mean_row <- mean(yield_data_single_gam$ROW)
mean_column <- mean(yield_data_single_gam$COLUMN)
row_fc_center <- as.factor(mean_row)
col_fc_center <- as.factor(mean_column)

# Generate prediction dataset
newdata_gam <- tibble::tibble(
  TREATMENT = levels(yield_data_single_gam$TREATMENT),
  ROW = mean_row,
  COLUMN = mean_column,
  ROW_fc = row_fc_center,
  COLUMN_fc = col_fc_center
)
```

Then we use the dataset `newdata_gam` to predict based on the GAM model.

```r
preds_treatment <- predict(gam_m1, newdata = newdata_gam, se.fit = TRUE, type = "response")

BLUPs_gam_single <- newdata_gam |>
  mutate(
    predicted_value = preds_treatment$fit,
    se = preds_treatment$se.fit
  ) |>
  add_confidence_intervals(pred_col = predicted_value, se_col = se) |> 
  select(TREATMENT, predicted_value, se, lower, upper)
```

These predictions include the predicted yield for each genotype, associated standard errors, and 95% confidence intervals.

| TREATMENT | predicted_value |        se |    lower |    upper |
|:----------|----------------:|----------:|---------:|---------:|
| G-1       |        72.94142 | 0.6964169 | 71.57647 | 74.30638 |
| G-10      |        79.16499 | 0.6992232 | 77.79454 | 80.53545 |
| G-100     |        72.40972 | 0.7032285 | 71.03142 | 73.78803 |
| G-101     |        71.74768 | 0.7038866 | 70.36809 | 73.12727 |
| G-102     |        63.89210 | 0.6993908 | 62.52132 | 65.26288 |
| G-103     |        64.46539 | 0.4942801 | 63.49662 | 65.43416 |
| G-104     |        68.04633 | 0.5023555 | 67.06173 | 69.03093 |
| G-105     |        61.96776 | 0.7157062 | 60.56500 | 63.37052 |
| G-106     |        70.03113 | 0.6925318 | 68.67379 | 71.38847 |
| G-107     |        61.49745 | 0.4939305 | 60.52937 | 62.46554 |

## Basic ASReml Model

To evaluate the GAM approach in context, we fit a traditional linear mixed model using the ASReml package. This model includes fixed effects for field layout (ROW and COLUMN), along with smooth spatial trends (`spl()`) and random effects for genotype (`TREATMENT`). The model setup mirrors the structure used in the GAM, allowing for a fair comparison of best linear unbiased predictions (BLUPs) and spatial adjustment.

The equivalent Mixed model using the R package `ASReml` is

```r
asreml_m1 <- asreml(
  fixed = YIELD ~ ROW + COLUMN,
  random = ~ spl(ROW) + spl(COLUMN) + TREATMENT,
  data = yield_data_single_asreml,
  trace = FALSE
)

asreml_m1 <- update(asreml_m1)
```

### Genotype-Level Predictions - ASReml

Once the ASReml model is fitted, extracting the predicted genotype is straightforward using the `predict()` function. We augmented the predictions with 95% confidence intervals based on the standard errors:

```r
pred_asreml <- predict(asreml_m1, classify = "TREATMENT", sed = TRUE)$pvals
pred_asreml |> 
  add_confidence_intervals(pred_col = predicted.value, se_col = std.error)
```

| TREATMENT | predicted.value | std.error | status    |    lower |    upper |
|:----------|----------------:|----------:|:----------|---------:|---------:|
| G-1       |        73.08999 | 0.6760442 | Estimable | 71.76497 | 74.41501 |
| G-10      |        79.36837 | 0.6561950 | Estimable | 78.08225 | 80.65448 |
| G-100     |        72.51368 | 0.6734186 | Estimable | 71.19381 | 73.83356 |
| G-101     |        71.77298 | 0.6654286 | Estimable | 70.46876 | 73.07719 |
| G-102     |        63.93678 | 0.6644683 | Estimable | 62.63445 | 65.23911 |
| G-103     |        64.44600 | 0.4667985 | Estimable | 63.53109 | 65.36091 |
| G-104     |        68.05137 | 0.4791859 | Estimable | 67.11218 | 68.99056 |
| G-105     |        62.15638 | 0.6983488 | Estimable | 60.78764 | 63.52512 |
| G-106     |        69.92584 | 0.6565846 | Estimable | 68.63896 | 71.21272 |
| G-107     |        61.63472 | 0.4738108 | Estimable | 60.70606 | 62.56337 |

## Model fit diagnostics

To assess how well each model captures spatial variation and explains yield variability, we begin by examining standard diagnostic plots. These include residual histograms, residuals versus fitted values, and QQ-plots. The following figure how these plot for the GAM model fitted in the previous section.

![Residual diagnostics for the basic GAM model: histogram, residuals vs fitted values and QQ-plot](figures/fig-02.png)

In parallel, we examine the diagnostic plots for the ASReml-fitted linear mixed model.

![Residual diagnostics for the ASReml spatial model: histogram, residuals vs fitted values and QQ-plot](figures/fig-03.png)

The diagnostic plots for both the GAM and ASReml models show some clear issues. In the fitted values vs residuals, we observe clustering of residuals, which likely reflect residual correlation among spatially adjacent plots. This pattern suggests that the current models have not fully accounted for spatial dependence in the errors. The QQ plots show deviations from normality, especially in the tails, and the histograms reveal slight skewness. These patterns point to remaining spatial variation or structure not yet modeled, indicating room for improvement in both approaches.

## Improving the GAM Model

To further evaluate the flexibility of Generalized Additive Models, we introduced a more complex spatial structure into the model. The objective here is to better capture residual spatial trends and improve model fit. While `ASReml` supports two-dimensional autoregressive residual structures (`AR1 ⊗ AR1`), the `mgcv` package in R only supports autoregressive modeling along a single dimension. To compensate for this limitation, we included a tensor product smoother between rows and columns using random effect bases (`bs = "re"`). This tensor interaction term acts like a spatial nugget, allowing us to capture localized deviations not explained by marginal row or column effects.

Additionally, we modeled residual correlation along the row dimension using an `AR(1)` structure. Since `mgcv::bam()` requires the autocorrelation parameter `rho` to be manually specified, we estimated it via a grid search and found the best-performing value to be `rho = 0.55`.

The upgraded GAM model can be expressed as

$$
YIELD = f_1(ROW) + f_2(COLUMN) + f_3(ROW_{fc}) + f_4(COLUMN_{fc}) + f_5(TREATMENT) +
$$
 
$$
f_6(ROW_{fc}, COLUMN_{fc})
$$

Where:

- $f_6$ is the tensor product within Rows and Columns with random effects (bs = “re”) for both factors.

The GAM model is specified as follows:

```r
gam_m2 <- bam(
  YIELD ~ 
    s(ROW, bs = "ps") + s(COLUMN, bs = "ps") +
    s(ROW_fc, bs = "re") + s(COLUMN_fc, bs = "re") +
    s(TREATMENT, bs = "re") +
    te(ROW_fc, COLUMN_fc, bs = c("re", "re")),
  rho = 0.55,
  AR.start = yield_data_single_gam$AR_start,
  data = yield_data_single_gam,
  method = "fREML"
)
```

The upgraded GAM model predictions are summarized below.

```r
preds_treatment <- predict(gam_m2, newdata = newdata_gam, se.fit = TRUE, type = "response")

BLUPs_gam_single2 <- newdata_gam |>
  mutate(
    predicted_value = preds_treatment$fit,
    se = preds_treatment$se.fit
  ) |>
  add_confidence_intervals(pred_col = predicted_value, se_col = se)|> 
  select(TREATMENT, predicted_value, se, lower, upper) 
```

| TREATMENT | predicted_value |        se |    lower |    upper |
|:----------|----------------:|----------:|---------:|---------:|
| G-1       |        73.14388 | 0.6679720 | 71.83468 | 74.45308 |
| G-10      |        79.33198 | 0.6569878 | 78.04430 | 80.61965 |
| G-100     |        72.46093 | 0.6637128 | 71.16007 | 73.76178 |
| G-101     |        71.84814 | 0.6092301 | 70.65407 | 73.04221 |
| G-102     |        63.92320 | 0.6484472 | 62.65227 | 65.19414 |
| G-103     |        64.59171 | 0.4612300 | 63.68771 | 65.49570 |
| G-104     |        68.05544 | 0.4683993 | 67.13740 | 68.97349 |
| G-105     |        62.58408 | 0.5844006 | 61.43868 | 63.72949 |
| G-106     |        70.03703 | 0.6012393 | 68.85863 | 71.21544 |
| G-107     |        61.38779 | 0.4434462 | 60.51865 | 62.25692 |

## Fully Spatial ASReml Model

To take full advantage of ASReml’s capabilities for modeling spatial correlation, we extended the previous model by specifying a two-dimensional autoregressive (`AR1 ⊗ AR1`) residual structure. This approach allows the model to directly account for residual dependencies across both rows and columns of the field layout. This is one of `ASReml’s` key strengths.

```r
asreml_m2 <- asreml(
  fixed = YIELD ~ ROW + COLUMN,
  random = ~ spl(ROW) + spl(COLUMN) + TREATMENT,
  residual = ~ ar1(ROW_fc):ar1(COLUMN_fc),
  data = yield_data_single_asreml,
  trace = FALSE
)

asreml_m2 <- update(asreml_m2)
```

### Genotype-Level Predictions - ASReml

The updated ASReml linear mixed model predictions are:

```r
pred_asreml2 <- predict(asreml_m2, classify = "TREATMENT", sed = TRUE)$pvals
pred_asreml2 |> 
  add_confidence_intervals(pred_col = predicted.value, se_col = std.error)
```

| TREATMENT | predicted.value | std.error | status    |    lower |    upper |
|:----------|----------------:|----------:|:----------|---------:|---------:|
| G-1       |        73.10445 | 0.6545955 | Estimable | 71.82146 | 74.38743 |
| G-10      |        79.35755 | 0.6433328 | Estimable | 78.09664 | 80.61846 |
| G-100     |        72.56156 | 0.6513914 | Estimable | 71.28486 | 73.83827 |
| G-101     |        71.86449 | 0.5954250 | Estimable | 70.69748 | 73.03150 |
| G-102     |        63.95876 | 0.6349666 | Estimable | 62.71425 | 65.20328 |
| G-103     |        64.61115 | 0.4471909 | Estimable | 63.73467 | 65.48762 |
| G-104     |        68.08010 | 0.4585557 | Estimable | 67.18135 | 68.97885 |
| G-105     |        62.57484 | 0.5715817 | Estimable | 61.45456 | 63.69512 |
| G-106     |        69.92742 | 0.5838491 | Estimable | 68.78309 | 71.07174 |
| G-107     |        61.36701 | 0.4274540 | Estimable | 60.52921 | 62.20480 |

## Model fit diagnostics

Let us check the new models result diagnostics. The following figure shows the residual histograms, fitted values vs residuals, and QQ-plots for the GAM model.

![Residual diagnostics for the GAM model with a 2D spatial smoother](figures/fig-04.png)

In the case of the ASReml model we have

![Residual diagnostics for the updated ASReml model](figures/fig-05.png)

The new diagnostic plots show a substantial improvement in model fit for both ASReml and GAM compared to our earlier models.

- **Histograms of Residuals:** The residuals for both models are now more symmetrically distributed around zero, with no major skewness or multimodal patterns, suggesting better homoscedasticity.

- **Residuals vs Fitted Values:** The previously observed systematic pattern near the center has largely diminished. The residuals now appear randomly scattered around zero, indicating reduced overfitting and improved variance stabilization across the fitted range. The slight curvature in the LOESS line is minor and expected in spatial data but no longer indicates strong model misspecification.

- **QQ Plots:** Both models show closer adherence to the theoretical normal line, especially in the central part of the distribution. Some deviation remains in the tails, but the overall alignment supports the assumption of normally distributed residuals.

Together, these results suggest that incorporating spatial structure (modeling the residuals via (`AR1 ⊗ AR1`) in ASReml and tensor product + AR1 in GAM) significantly enhanced the models’ ability to capture underlying field variability. Both models now provide a much more reliable basis for estimating treatment effects.

### Residuals heatmap

To better understand the spatial structure of model residuals, we visualize them using field-layout heatmaps. Each tile represents a plot in the field, with colors indicating the magnitude and direction of residuals:

- Dark purple for large negative residuals (underestimation),

- Green for near-zero residuals (good fit)

- Yellow for large positive residuals (overestimation).

These heatmaps help us detect residual spatial trends not captured by the models, such as blocks or streaks of consistently high or low residuals, which may suggest remaining unmodeled spatial variation.

![Field heatmaps of residuals by row and column for the GAM and ASReml models](figures/fig-06.png)

The residuals from the GAM model are mostly centered around zero, with only a few isolated high values, indicating that the spatial pattern was well captured. Similarly, the ASReml model demonstrates good residual control, with only a few small clusters, suggesting effective modeling of the spatial structure. Overall, both models exhibit a strong spatial fit, and the residual plots confirm the absence of major unmodeled patterns.

## Model Predictions: Correlation and Rankings

To assess the agreement between the two modeling approaches, we compare the predictions generated by the Generalized Additive Model (GAM) and the classical Linear Mixed Model (LMM) fitted using ASReml. We focus on both the correlation of predicted values and the consistency of genotype rankings, which are key aspects for selection decisions in breeding programs.

### Correlation of Predicted Values

```r
cor(BLUPs_gam_single2$predicted_value, pred_asreml2$predicted.value)
```

    [1] 0.9998645

The correlation between predicted genotype values from the GAM and ASReml models is remarkably close to 1.0. This high degree of agreement suggests that, despite structural and distributional differences in the underlying models, both approaches yield very similar overall treatment effects. It reinforces the idea that GAM can serve as a robust method for spatial modeling in field trials.

### Agreement in Genotype Rankings

Accurate genotype ranking is critical in plant breeding, as decisions about advancement, selection, and crossing often rely on identifying the top-performing entries. To assess this, we compare the overall rank correlation between the two models using `Kendall's tau`, a non-parametric metric that reflects the consistency of pairwise orderings.

```r
# GAM ranks
rank_gam_total <- BLUPs_gam_single2 |>
  dplyr::select(TREATMENT, predicted_value) |>
  dplyr::mutate(rank_gam_total = rank(-predicted_value))

# ASReml ranks
rank_asreml <- pred_asreml2 |>
  dplyr::select(TREATMENT, predicted.value) |>
  dplyr::mutate(rank_asreml = rank(-predicted.value))

# Compare ranks
rank_comparison <- rank_gam_total |>
  dplyr::inner_join(rank_asreml, by = "TREATMENT") |>
  dplyr::mutate(diff = rank_gam_total - rank_asreml)
```

### Kendall Correlation:

```r
cor(rank_comparison$rank_gam_total, rank_comparison$rank_asreml, method = "kendall")
```

    [1] 0.9894475

The Kendall’s tau value for the full set of genotypes is high, indicating strong concordance in rankings between GAM and ASReml models.

To further simulate a breeder’s real-world decision-making, we computed `Kendall's tau` and the percentage of overlapping genotypes for several top-N selection thresholds. This analysis highlights how consistent the two models are in identifying the most promising genotypes.

| Top | kendall_tau | shared_pct |
|----:|------------:|-----------:|
|  10 |       1.000 |      100.0 |
|  20 |       1.000 |      100.0 |
|  30 |       0.991 |      100.0 |
|  40 |       0.987 |       97.5 |
|  50 |       0.982 |      100.0 |

As shown in the table, even when `Kendall’s tau` falls slightly below 1.0, the top-selected genotypes from both models remain nearly identical. This highlights an important insight for breeding decisions: small discrepancies in rank order do not necessarily alter selection outcomes, provided the composition of the top subset is stable. Notably, a Kendall correlation of `1.0` implies perfect agreement in both rank order and selection. However, even with slightly lower tau values, the models can select exactly the same genotypes—this occurs when minor differences in predicted values shift the internal order without changing the set itself.

We can visualize the rank agreement below. Each point represents a genotype, and the dashed line marks perfect concordance. The plot confirms that rankings from GAM and ASReml models are highly aligned:

![Scatter plot comparing genotype ranks from ASReml and GAM, with a dashed line for perfect agreement](figures/fig-07.png)

We also examine the standard errors of the predicted values. Comparing these across models provides insight into how uncertainty is estimated.

![Standard errors of predicted values per genotype for the GAM and ASReml models](figures/fig-08.png)

Despite their different formulations, both GAM and ASReml produce strikingly similar standard errors across genotypes. The GAM model appears slightly more conservative in its uncertainty estimates. Overall, it is reassuring to see that both models consistently estimate the uncertainty associated with genotype predicted values.

## Conclusions

Generalized Additive Models (GAMs) provide a flexible and interpretable framework for capturing spatial variation and estimating treatment effects in field trials. In this study, we compared a GAM implementation to a classical spatial linear mixed model fitted with ASReml. Despite their structural differences, both models produced nearly identical genotype predictions and rankings after appropriate spatial adjustments.

Our goal was not to determine which model is superior, but rather to explore how GAMs can be applied in practice and how their results compare to established methods. As the saying goes, “All models are wrong, but some are useful.” In this case, both GAM and ASReml are not perfect, yet useful tools that offer valuable insights when used thoughtfully in plant breeding pipelines.

## Reproducibility

The full code and data used in this analysis are available on [GitHub](https://github.com/DidierMurilloF/PhenoGAMs).

## References

This work draws inspiration from the book *Generalized Additive Models: An Introduction with R (2nd Edition)* by Simon Wood, an accessible and practical guide to understanding and implementing GAMs using the `mgcv` package.
