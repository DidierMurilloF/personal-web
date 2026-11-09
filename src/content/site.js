// Everything personal about the site lives here. Edit this file to update
// the text on the home and about pages; sections with no entries are hidden.

export const site = {
  name: "Didier Murillo",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://didiermurillo.com",
  role: "Statistician · Data scientist · R developer",
  tagline: "Statistician by training and developer by calling.",
  description:
    "Didier Murillo's personal site: writing on R, Shiny, statistics and experimental design, plus the apps and packages he has built.",
  links: {
    github: "https://github.com/DidierMurilloF",
    linkedin: "https://www.linkedin.com/in/damurillof/",
    email: "", // e.g. "hello@didiermurillo.com" — shown in the footer when set
    cv: "", // e.g. "/didier-murillo-cv.pdf" — shown on the about page when set
  },
};

// "Right now" box on the home page.
export const now = [
  {
    label: "Working on",
    text: "Agricultural data analytics at North Dakota State University (NDSU)",
  },
  { label: "Based in", text: "Fargo, North Dakota" },
  // { label: "Learning", text: "..." },
];

export const topics = [
  "R Shiny",
  "R packages",
  "Statistics",
  "Experimental design",
  "Plant breeding",
  "APIs & Docker",
];

export const skills = [
  {
    title: "R Shiny apps",
    text: "Interactive apps and dashboards that turn analytical workflows into tools researchers and breeders can use, built with Shiny modules and box.",
  },
  {
    title: "R packages & APIs",
    text: "Reusable R packages and Plumber APIs, containerized with Docker so they run the same everywhere.",
  },
  {
    title: "Statistics",
    text: "Experimental design, mixed and additive models, and predictive pipelines that combine genomic and phenotypic data.",
  },
];

// Work and education, newest first. The section is hidden while empty.
// { when: "2020 – Present", title: "Role, Organization", text: "What you did." }
export const timeline = [];
