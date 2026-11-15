// The resume, shown at /cv and printed to public/didier-murillo-cv.pdf
// (scripts/build-cv-pdf.mjs). The about page timeline reads `experience` too.

export const resume = {
  name: "Didier Murillo",
  headline: "Agricultural Data Scientist",
  location: "Fargo, ND",
  // Shown in the resume header. The phone number is left off the public PDF.
  email: "didier.statistician@gmail.com",
  links: [
    { label: "didiermurillo.com", href: "https://didiermurillo.com" },
    { label: "linkedin.com/in/damurillof", href: "https://www.linkedin.com/in/damurillof/" },
    { label: "github.com/DidierMurilloF", href: "https://github.com/DidierMurilloF" },
  ],

  summary:
    "Agricultural Data Scientist who builds statistical and machine learning models for genomic and phenomic prediction in plant breeding. Expert in phenotypic analysis of field trials, from experimental design to linear mixed models with spatial adjustment for field variation. I turn models into tools that research teams use: R packages (FielDHub, on CRAN), R Shiny and React applications, REST APIs, PostgreSQL databases and Docker deployments. I also bring production experience from a regulated industry, building tested R Shiny applications for clinical trial data review as a consultant to Daiichi Sankyo.",

  experience: [
    {
      title: "Research Statistician Developer",
      org: "North Dakota State University, Ag Data Analytics",
      place: "Fargo, ND",
      when: "Feb 2022 – Present",
      bullets: [
        "Build statistical and machine learning models for genomic and phenomic prediction workflows in plant breeding.",
        "Lead phenotypic analysis of field trials, from experimental design to linear mixed models with spatial adjustment and genotype rankings.",
        "Process satellite imagery for analysis of field trials and agricultural data.",
        "Develop R Shiny, React and JavaScript applications backed by REST APIs and PostgreSQL databases, deployed with Docker.",
        "Develop R packages for web API integration.",
        "Mentor junior statisticians in agricultural statistics and Shiny development, and lead workshops and conference talks on experimental design and statistical analysis in agriculture.",
      ],
    },
    {
      title: "R Shiny Developer (Consultant)",
      org: "Daiichi Sankyo",
      place: "Remote",
      when: "Oct 2023 – Dec 2025",
      bullets: [
        "Designed, built and maintained R Shiny applications for clinical trial data review from CDISC SDTM/ADaM data, with traceable data handling and reproducible outputs.",
        "Implemented oncology tumor response visualizations (waterfall, spider and swimmer plots) within the review workflows.",
        "Owned the full delivery lifecycle in a regulated environment: modular architecture, testing, debugging across data, UI and reactivity layers, and deployment support.",
      ],
    },
    {
      title: "Data Scientist (Contract)",
      org: "CodeStack Systems",
      place: "Remote",
      when: "Jan 2024 – Dec 2024",
      bullets: [
        "Built the data backbone of a satellite crop-monitoring app: Python services in Docker that ingest daily satellite imagery, vegetation indices (NDVI, NDRE, NDMI, RECI, MSAVI) and 10-day weather forecasts for each field from the EOS satellite API, into Google Cloud Storage and PostgreSQL.",
        "Built a service that onboards newly registered fields automatically, syncing field boundaries from MySQL and backfilling their vegetation indices.",
        "Developed an R Plumber REST API that forecasts vegetation indices per field from crop growth curves (polynomial regression on days since planting), and alerts growers to possible crop stress in corn and soybeans using crop-specific thresholds.",
        "Prototyped ARIMA time-series models for NDVI forecasting, and wrote the system and data-pipeline documentation.",
      ],
    },
    {
      title: "R Shiny Developer",
      org: "North Dakota State University",
      place: "Fargo, ND",
      when: "Oct 2019 – Jan 2022",
      bullets: [
        "Created FielDHub, an R package and Shiny app on CRAN for randomizing complex field experiments in plant breeding, agronomy, forestry, animal science and biology, and published it in a peer-reviewed paper.",
        "Led 12+ statistical projects spanning experimental design, mixed models, machine learning and data governance.",
        "Automated time-consuming analysis tasks with Shiny apps and JMP add-ins.",
      ],
    },
  ],

  earlier: [
    {
      title: "Statistician Assistant",
      org: "University of Puerto Rico, Mayagüez",
      when: "2017 – 2018",
      text: "Generalized linear and mixed model analyses in R and SAS for educational research data.",
    },
    {
      title: "Statistician",
      org: "National Army Healthcare System, Bogotá",
      when: "2014 – 2015",
      text: "Automated processing and analysis of medical information system data with R and Excel.",
    },
  ],

  skills: [
    {
      group: "Statistics & modeling",
      items: [
        "Experimental design",
        "Linear mixed models (incl. spatial)",
        "GAMs",
        "Genomic & phenomic prediction",
        "Machine learning",
        "Time-series & growth-curve forecasting",
      ],
    },
    {
      group: "Agricultural data",
      items: [
        "Field trial phenotypic analysis",
        "Plant breeding",
        "Satellite image processing",
        "Vegetation indices (NDVI, NDRE, NDMI)",
      ],
    },
    {
      group: "Software",
      items: [
        "R (Shiny, Golem, Plumber, tidyverse, ggplot2, plotly)",
        "Python",
        "R package development",
        "React",
        "JavaScript",
        "REST APIs",
      ],
    },
    {
      group: "Data & deployment",
      items: ["PostgreSQL", "MySQL", "BigQuery", "Google Cloud Storage", "Docker", "AWS", "Git"],
    },
    { group: "Also", items: ["ASReml", "SAS", "JMP", "CDISC SDTM/ADaM"] },
  ],

  openSource: [
    { name: "FielDHub", role: "Developer", text: "Shiny app and R package for design of experiments in life sciences (CRAN).", href: "https://github.com/DidierMurilloF/FielDHub" },
    { name: "FIELDimageR", role: "Contributor", text: "Analysis of orthomosaic images from agricultural field trials." },
    { name: "MrBean", role: "Contributor", text: "Shiny app for large-scale plant breeding trials with linear mixed models." },
    { name: "ASRgwas", role: "Developer", text: "Preparing and auditing phenotypic and genomic data." },
  ],

  writing: [
    { title: "Likelihood vs Prediction Accuracy in Mixed Models", href: "https://didiermurillo.com/blog/likelihood-vs-accuracy" },
    { title: "Smoothers in the Field: GAMs for Spatial Trends in Plant Breeding Trials", href: "https://didiermurillo.com/blog/pheno-gams" },
  ],

  education: [
    { degree: "M.S. in Statistics", school: "University of Puerto Rico, Mayagüez", year: "2019" },
    { degree: "B.S. in Mathematics", school: "University of Tolima, Ibagué, Colombia", year: "2014" },
  ],

  languages: ["Spanish (native)", "English (advanced)"],
};
