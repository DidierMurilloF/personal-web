// Everything personal about the site lives here. Edit this file to update
// the text on the home and about pages; sections with no entries are hidden.

export const site = {
  name: "Didier Murillo",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://didiermurillo.com",
  role: "Agricultural Data Scientist",
  title: "Agricultural Data Scientist",
  description:
    "Didier Murillo is an agricultural data scientist: genomic and phenomic prediction for plant breeding, field trial analysis, satellite crop monitoring, and the software that puts those models to use.",
  links: {
    github: "https://github.com/DidierMurilloF",
    linkedin: "https://www.linkedin.com/in/damurillof/",
    email: "didier.statistician@gmail.com",
    cv: "/didier-murillo-cv.pdf", // built from /cv by scripts/build-cv-pdf.mjs
  },
};

// "Right now" box on the about page.
export const now = [
  {
    label: "Working on",
    text: "Agricultural data analytics at North Dakota State University (NDSU)",
  },
  { label: "Based in", text: "Fargo, North Dakota" },
  // { label: "Learning", text: "..." },
];

// "From the field to a decision" steps on the home page.
export const pipeline = [
  {
    step: "Field",
    title: "Experimental design",
    text: "Randomized, augmented and p-rep trials built so the data can answer the question.",
    icon: "plots",
  },
  {
    step: "Data",
    title: "Data pipelines",
    text: "Phenotypic, genomic and environmental data cleaned and joined into one reproducible pipeline.",
    icon: "data",
  },
  {
    step: "Model",
    title: "Predictive modeling",
    text: "Linear mixed models with spatial adjustment, GAMs, machine learning and genomic prediction, validated honestly.",
    icon: "curve",
  },
  {
    step: "Decision",
    title: "Decision tools",
    text: "Shiny apps, APIs and forecasting services that put the model in the hands of breeders and growers.",
    icon: "screen",
  },
];

export const focus = [
  {
    title: "Digital agriculture",
    text: "Field trials, plant breeding and agricultural statistics, turned into data products for research programs and the state's farm economy.",
  },
  {
    title: "Predictive modeling",
    text: "Spatial trends, genotype effects and forecasting: models that separate the genetic signal from the field noise.",
  },
  {
    title: "Satellite crop monitoring",
    text: "Satellite imagery and vegetation indices turned into field-level forecasts and crop-stress alerts.",
  },
];

export const topics = [
  "Digital agriculture",
  "Predictive modeling",
  "Genomic prediction",
  "Satellite crop monitoring",
  "Machine learning",
  "Experimental design",
  "R & Shiny",
];

// Work and education, newest first. The section is hidden while empty.
// { when: "2020 – Present", title: "Role, Organization", text: "What you did." }
export const timeline = [];

// The /work-with-me page and the "Work with me" band on the home page.
export const collab = {
  pitch:
    "I work with breeding programs, research teams and ag-tech companies that have field, genomic or satellite data and a decision to make with it.",
  subject: "Consulting / collaboration inquiry",
  services: [
    {
      title: "Trial design & analysis",
      text: "Randomized, augmented and partially replicated (p-rep) designs, then linear mixed model analysis with spatial adjustment, through to genotype rankings you can defend.",
      proof: [
        { label: "FielDHub", href: "https://cran.r-project.org/package=FielDHub" },
        { label: "PhenoGAMs", href: "/blog/pheno-gams" },
      ],
    },
    {
      title: "Predictive modeling",
      text: "Genomic and phenomic prediction, machine learning and growth-curve forecasting, validated against what matters for selection, not only model fit.",
      proof: [{ label: "Likelihood vs Accuracy", href: "/blog/likelihood-vs-accuracy" }],
    },
    {
      title: "Ag data pipelines & apps",
      text: "Shiny apps, REST APIs and data pipelines, from satellite vegetation indices to trial databases, deployed with Docker so your team can use them every day.",
      proof: [
        { label: "Satellite crop monitoring", href: "/projects" },
        { label: "ND Agriculture KPIs", href: "https://nd-ag.didiermurillo.com/" },
      ],
    },
    {
      title: "Training & workshops",
      text: "Hands-on training in R, Shiny, experimental design and mixed models for breeding teams, analysts and students.",
      proof: [],
    },
  ],
  steps: [
    { title: "Send a short email", text: "A few lines about your data, your question and your timeline." },
    { title: "Scoping call", text: "A short call to understand the problem and whether I'm the right fit." },
    { title: "Written proposal", text: "Scope, deliverables and timeline in writing before any work starts." },
  ],
};
