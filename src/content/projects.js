// Projects shown on the home and projects pages. The first `featured` project
// gets the large card. Live apps run on their own subdomain
// (<app>.didiermurillo.com); write-ups live on the blog (/blog/<slug>).

export const projects = [
  {
    name: "FielDHub",
    featured: true,
    summary:
      "An R Shiny app and package for design of experiments: traditional, unreplicated, augmented and partially replicated (p-rep) designs for agriculture, plant breeding, forestry, animal and biological sciences.",
    tech: ["R", "Shiny", "Experimental design", "CRAN"],
    links: [
      { label: "Code", href: "https://github.com/DidierMurilloF/FielDHub" },
      { label: "Docs", href: "https://didiermurillof.github.io/FielDHub/" },
      { label: "CRAN", href: "https://cran.r-project.org/package=FielDHub" },
    ],
  },
  {
    name: "ND Agriculture KPIs",
    summary:
      "A dashboard of North Dakota agriculture: crops, livestock, economics, weather and county data from the state's annual agricultural report.",
    tech: ["R", "Shiny"],
    links: [{ label: "Live app", href: "https://nd-ag.didiermurillo.com/" }],
  },
  {
    name: "PhenoGAMs",
    summary:
      "Generalized Additive Models for spatial trends and genotype effects in plant breeding trials, compared with a classical ASReml spatial model.",
    tech: ["R", "mgcv", "ASReml"],
    links: [
      { label: "Write-up", href: "/blog/pheno-gams" },
      { label: "Code", href: "https://github.com/DidierMurilloF/PhenoGAMs" },
    ],
  },
];
