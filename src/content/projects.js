// Projects shown on the home and projects pages. The first `featured` project
// gets the large card. Live apps run on their own subdomain
// (<app>.didiermurillo.com); write-ups live on the blog (/blog/<slug>).
// `visual` picks the card graphic: "design" | "bars" | "residual" | "trend".

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
