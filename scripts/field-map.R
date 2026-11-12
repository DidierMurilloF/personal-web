# Builds src/content/field-trial.json, the data behind the field maps on the
# home and projects pages. Data: one location (LOC1) of the simulated p-rep
# trial from the PhenoGAMs post (github.com/DidierMurilloF/PhenoGAMs).
#
# Run from the repo root:  Rscript scripts/field-map.R
library(mgcv)

d <- read.csv("scripts/data/FARGO_pREP_2025-04-18.csv")
d <- d[d$LOCATION == "LOC1", ]
d$TREATMENT <- factor(d$TREATMENT)
d <- d[order(d$ROW, d$COLUMN), ]

m <- gam(YIELD ~ s(ROW, COLUMN, k = 40) + s(TREATMENT, bs = "re"),
         data = d, method = "REML")

# Spatial trend only: the smooth field surface the model separates from genotypes.
trend <- predict(m, type = "terms")[, "s(ROW,COLUMN)"]
scale01 <- function(x) round((x - min(x)) / (max(x) - min(x)), 3)

reps <- table(d$TREATMENT)
out <- list(
  source = "PhenoGAMs simulated p-rep trial, LOC1; spatial GAM s(ROW, COLUMN) + genotype random effect",
  rows = max(d$ROW),
  cols = max(d$COLUMN),
  plots = nrow(d),
  genotypes = nlevels(d$TREATMENT),
  trend = scale01(trend),
  residual = round(residuals(m) / sd(residuals(m)), 2),
  replicated = as.vector(reps[as.character(d$TREATMENT)] > 1)
)
jsonlite::write_json(out, "src/content/field-trial.json", auto_unbox = TRUE)
cat("plots:", out$plots, " genotypes:", out$genotypes,
    " replicated plots:", sum(out$replicated), "\n")
