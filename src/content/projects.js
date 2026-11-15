// Projects shown on the home and projects pages. The first `featured` project
// gets the large card. Live apps run on their own subdomain
// (<app>.didiermurillo.com); write-ups live on the blog (/blog/<slug>).
// `visual` picks the card graphic: "design" | "bars" | "residual" | "trend" | "growth" | "hill".
// `links` may be empty (client work): the card then has no link.

export const projects = [
  {
    name: "FielDHub",
    featured: true,
    kind: "Experimental design",
    short: "Shiny app and R package for designing field trials, on CRAN.",
    summary:
      "An R Shiny app and package for design of experiments: traditional, unreplicated, augmented and partially replicated (p-rep) designs for agriculture, plant breeding, forestry, animal and biological sciences.",
    tech: ["R", "Shiny", "Experimental design", "CRAN"],
    visual: "design",
    visualLabel: "Partially replicated field layout; replicated genotypes highlighted",
    links: [
      { label: "Code", href: "https://github.com/DidierMurilloF/FielDHub" },
      { label: "Docs", href: "https://didiermurillof.github.io/FielDHub/" },
      { label: "CRAN", href: "https://cran.r-project.org/package=FielDHub" },
    ],
  },
  {
    name: "Satellite crop monitoring",
    kind: "Production system · client work",
    short: "Daily satellite vegetation indices, forecasts and crop-stress alerts for every field.",
    summary:
      "The data backbone and forecasting API of a commercial crop-monitoring app: Python services ingest daily satellite imagery, vegetation indices (NDVI, NDRE, NDMI, RECI, MSAVI) and weather forecasts for each field, and an R Plumber API forecasts each index from crop growth curves and flags possible stress in corn and soybeans.",
    tech: ["Python", "R", "Plumber", "PostgreSQL", "Google Cloud", "Docker"],
    visual: "growth",
    visualLabel: "Vegetation index growth curve over the season with a dashed forecast",
    links: [],
  },
  {
    name: "Likelihood vs Accuracy",
    kind: "Predictive modeling · write-up",
    short: "Why a higher REML likelihood doesn't guarantee better genotype predictions.",
    summary:
      "A simulation study, with a from-scratch REML implementation in base R, showing when a higher log-likelihood fails to give more accurate predictions of genotype effects in mixed models.",
    tech: ["R", "REML", "Mixed models", "Simulation"],
    visual: "hill",
    visualLabel: "Likelihood curve with its peak away from the point of best prediction accuracy",
    links: [
      { label: "Write-up", href: "/blog/likelihood-vs-accuracy" },
      { label: "Code", href: "https://github.com/DidierMurilloF/LikelihoodVsAccuracy" },
    ],
  },
  {
    name: "ND Agriculture KPIs",
    kind: "Live app · nd-ag.didiermurillo.com",
    short: "North Dakota crops, livestock, economics and weather in one dashboard.",
    summary:
      "A dashboard of North Dakota agriculture: crops, livestock, economics, weather and county data from the state's annual agricultural report.",
    tech: ["R", "Shiny"],
    visual: "bars",
    visualLabel: "Bar chart illustration of a ten-year crop value trend",
    links: [{ label: "Live app", href: "https://nd-ag.didiermurillo.com/" }],
  },
  {
    name: "PhenoGAMs",
    kind: "Predictive modeling · write-up",
    short: "GAMs vs. ASReml for spatial trends and genotype rankings.",
    summary:
      "Generalized Additive Models for spatial trends and genotype effects in plant breeding trials, compared with a classical ASReml spatial model.",
    tech: ["R", "mgcv", "ASReml"],
    visual: "residual",
    visualLabel: "Heatmap of model residuals across the field",
    links: [
      { label: "Write-up", href: "/blog/pheno-gams" },
      { label: "Code", href: "https://github.com/DidierMurilloF/PhenoGAMs" },
    ],
  },
];
