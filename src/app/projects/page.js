import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Projects | Didier Murillo",
  description:
    "A curated selection of R Shiny applications, data pipelines, and analytics tools built by Didier Murillo.",
};

const projects = [
  {
    title: "Project One",
    subtitle: "Interactive R Shiny Dashboard",
    description:
      "A production-grade analytics dashboard built with R Shiny that visualizes key business metrics in real time. Features dynamic filtering, drill-down capabilities, and automated report generation.",
    tags: ["R Shiny", "Plotly", "Docker", "PostgreSQL"],
    image: "/images/first.jpg",
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    title: "Project Two",
    subtitle: "R Package for Statistical Analysis",
    description:
      "An open-source R package providing a streamlined API for mixed-effects modeling and experimental design analysis. Published on CRAN with comprehensive documentation and vignettes.",
    tags: ["R", "CRAN", "Mixed Models", "Testing"],
    image: "/images/second.jpg",
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    title: "Project Three",
    subtitle: "Forecasting API & Pipeline",
    description:
      "A containerized forecasting service combining R Plumber APIs with an automated data pipeline. Delivers demand forecasts via REST endpoints consumed by downstream applications.",
    tags: ["R Plumber", "Node.js", "Docker", "Time Series"],
    image: "/images/third.jpg",
    links: {
      live: "#",
      github: "#",
    },
  },
];

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      className="w-4 h-4 ml-1.5"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}

function ProjectCard({ project, index }) {
  const isReversed = index % 2 !== 0;

  return (
    <div className="group rounded-2xl border border-gray-800 bg-gray-900/50 overflow-hidden hover:border-gray-700 transition-all duration-300">
      <div
        className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}
      >
        {/* Image */}
        <div className="relative w-full lg:w-5/12 aspect-video lg:aspect-auto overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10 lg:hidden" />
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-7/12 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
          <p className="text-blue-400 text-sm font-semibold tracking-wide uppercase mb-2">
            {project.subtitle}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">
            {project.title}
          </h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-300 border border-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              Live Demo
              <ExternalIcon />
            </a>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center text-sm font-semibold text-gray-400 hover:text-gray-200 transition-colors duration-200"
            >
              Source Code
              <ExternalIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <>
      {/* Header */}
      <section className="pt-8 pb-8 md:pt-10 md:pb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Selected Projects
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          A curated collection of applications, packages, and data solutions
          I&apos;ve built. Each project reflects real-world challenges solved
          with clean code and thoughtful design.
        </p>
      </section>

      {/* Project Cards */}
      <section className="pb-8 md:pb-10 space-y-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </section>

      {/* CTA */}
      <section className="pb-8 md:pb-10">
        <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Interested in working together?
          </h2>
          <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
            I&apos;m always open to discussing new projects and opportunities.
            Let&apos;s connect and explore what we can build.
          </p>
          <a
            href="https://www.linkedin.com/in/damurillof/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40"
          >
            Get in Touch
            <ArrowIcon />
          </a>
        </div>
      </section>
    </>
  );
}
