// Everything personal about the site lives here. Edit this file to update
// the text on the home and about pages; sections with no entries are hidden.

export const site = {
  name: "Didier Murillo",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://didiermurillo.com",
  role: "Digital agriculture · Predictive modeling · AI",
  title: "Digital agriculture & predictive modeling",
  description:
    "Didier Murillo is a statistician working in digital agriculture: field experiments, predictive models for plant breeding, and the apps that put them to use.",
  links: {
    github: "https://github.com/DidierMurilloF",
    linkedin: "https://www.linkedin.com/in/damurillof/",
    email: "", // e.g. "hello@didiermurillo.com" — shown in the footer when set
    cv: "", // e.g. "/didier-murillo-cv.pdf" — shown on the about page when set
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
    text: "Spatial and mixed models, GAMs, machine learning and genomic prediction, validated honestly.",
    icon: "curve",
  },
  {
    step: "Decision",
    title: "Decision tools",
    text: "Shiny apps, APIs and AI-assisted tools that put the model in the hands of breeders and growers.",
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
    title: "AI in agriculture",
    text: "Machine learning and AI where they earn their place: faster analysis, clearer results and data people can explore in plain language.",
  },
];

export const topics = [
  "Digital agriculture",
  "Predictive modeling",
  "Machine learning & AI",
  "Experimental design",
  "R & Shiny",
];

// Work and education, newest first. The section is hidden while empty.
// { when: "2020 – Present", title: "Role, Organization", text: "What you did." }
export const timeline = [];
