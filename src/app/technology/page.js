import Link from "next/link";

export const metadata = {
  title: "Technology | Didier Murillo",
  description:
    "The tools, languages, and frameworks Didier Murillo uses to build data-driven applications and analytical solutions.",
};

const categories = [
  {
    name: "Languages & Frameworks",
    description: "Core languages and application frameworks I work with daily.",
    items: [
      {
        name: "R / R Shiny",
        detail: "Interactive dashboards, statistical computing, and reactive web applications.",
      },
      {
        name: "Python",
        detail: "Data pipelines, scripting, and machine learning workflows.",
      },
      {
        name: "JavaScript / Node.js",
        detail: "API services, server-side logic, and frontend integrations.",
      },
      {
        name: "SQL",
        detail: "Complex queries, stored procedures, and database design.",
      },
      {
        name: "HTML / CSS",
        detail: "Custom UI styling and responsive layouts for web apps.",
      },
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    name: "Data & Databases",
    description: "Storage, retrieval, and management of structured and unstructured data.",
    items: [
      {
        name: "PostgreSQL",
        detail: "Primary relational database for production applications.",
      },
      {
        name: "MySQL / MariaDB",
        detail: "Relational data storage for web-backed services.",
      },
      {
        name: "MongoDB",
        detail: "Document-oriented storage for flexible data models.",
      },
      {
        name: "DuckDB / SQLite",
        detail: "Embedded analytics and lightweight local databases.",
      },
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    name: "DevOps & Infrastructure",
    description: "Deployment, containerization, and CI/CD for reproducible environments.",
    items: [
      {
        name: "Docker / Docker Compose",
        detail: "Containerized deployments for portability and consistency.",
      },
      {
        name: "Git / GitHub",
        detail: "Version control, code review, and collaboration workflows.",
      },
      {
        name: "Linux / Bash",
        detail: "Server administration, scripting, and automation.",
      },
      {
        name: "CI/CD Pipelines",
        detail: "Automated testing, building, and deployment processes.",
      },
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0h.375a2.625 2.625 0 0 1 0 5.25H17.25" />
      </svg>
    ),
  },
  {
    name: "Analysis & Modeling",
    description: "Statistical methods, forecasting, and machine learning techniques.",
    items: [
      {
        name: "Time Series Forecasting",
        detail: "ARIMA, Prophet, and custom models for demand and trend prediction.",
      },
      {
        name: "Mixed-Effects Models",
        detail: "Hierarchical and longitudinal data analysis for research applications.",
      },
      {
        name: "Experimental Design",
        detail: "DOE, A/B testing frameworks, and hypothesis-driven analysis.",
      },
      {
        name: "Data Visualization",
        detail: "ggplot2, Plotly, and custom charting for clear, impactful storytelling.",
      },
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
];

function CategorySection({ category }) {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/50 overflow-hidden">
      {/* Category Header */}
      <div className="px-6 py-5 border-b border-gray-800 flex items-start gap-4">
        <div className="mt-0.5 flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600/10 text-blue-400">
          {category.icon}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-100">
            {category.name}
          </h2>
          <p className="text-sm text-gray-500 mt-0.5">{category.description}</p>
        </div>
      </div>

      {/* Items */}
      <div className="divide-y divide-gray-800/60">
        {category.items.map((item) => (
          <div
            key={item.name}
            className="px-6 py-4 flex items-baseline gap-3 hover:bg-gray-800/30 transition-colors duration-200"
          >
            <span className="text-sm font-semibold text-gray-200 whitespace-nowrap flex-shrink-0 w-44">
              {item.name}
            </span>
            <span className="text-sm text-gray-500">{item.detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Technology() {
  return (
    <>
      {/* Header */}
      <section className="pt-8 pb-8 md:pt-10 md:pb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Technology Stack
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          The languages, frameworks, databases, and methodologies I use to
          deliver reliable, production-grade data solutions.
        </p>
      </section>

      {/* Categories Grid */}
      <section className="pb-8 md:pb-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {categories.map((category) => (
          <CategorySection key={category.name} category={category} />
        ))}
      </section>

      {/* CTA */}
      <section className="pb-8 md:pb-10">
        <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need a specific technology?
          </h2>
          <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
            I&apos;m always expanding my toolkit. If your project requires
            something not listed here, let&apos;s talk — chances are I can help.
          </p>
          <a
            href="https://www.linkedin.com/in/damurillof/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40"
          >
            Let&apos;s Connect
            <svg
              className="w-4 h-4 ml-2"
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
          </a>
        </div>
      </section>
    </>
  );
}
