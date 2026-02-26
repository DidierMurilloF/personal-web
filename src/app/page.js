import Link from "next/link";
import ServicesCarousel from "@/components/ServicesCarousel";

export const metadata = {
  title: "Didier Murillo - R Shiny Developer & Data Scientist",
  description:
    "Didier Murillo — experienced R Shiny Developer and Data Scientist specializing in dynamic, data-driven applications and custom analytics solutions.",
  keywords:
    "R Shiny Developer, Data Scientist, Data Analysis, Custom R Shiny Apps, R Package Development, Data Visualization, API Development, Time Series Analysis",
};

const services = [
  {
    title: "R Shiny Applications",
    description:
      "Custom interactive dashboards and web applications built with R Shiny, tailored to your data workflows.",
    iconSvg: `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v-5.5"/></svg>`,
  },
  {
    title: "R Package Development",
    description:
      "Well-documented, tested R packages that extend your team's analytical capabilities and promote code reuse.",
    iconSvg: `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"/></svg>`,
  },
  {
    title: "API Development",
    description:
      "Production-ready APIs with R Plumber and Node.js to serve your models and data pipelines at scale.",
    iconSvg: `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/></svg>`,
  },
  {
    title: "Containerization & DevOps",
    description:
      "Docker-based deployment strategies that make your R applications portable, scalable, and reproducible.",
    iconSvg: `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0h.375a2.625 2.625 0 0 1 0 5.25H17.25"/></svg>`,
  },
  {
    title: "AI & Agent Workflows",
    description:
      "LLM-powered applications, agentic pipelines, and RAG systems that automate reasoning, research, and decision-making at scale.",
    iconSvg: `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"/></svg>`,
  },
  {
    title: "Machine Learning Modeling",
    description:
      "End-to-end ML pipelines — from feature engineering and model training to deployment and monitoring in production environments.",
    iconSvg: `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/></svg>`,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-8 pb-8 md:pt-10 md:pb-10">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Transforming Data into{" "}
            <span className="gradient-text">Dynamic Solutions</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-3">
            I turn complex datasets into clear insights and intelligent
            decision-making tools. Eight years of production-grade experience
            across R Shiny apps, APIs, and analytical pipelines, spanning
            classical statistical and machine learning modeling to modern
            AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40"
            >
              View Projects
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
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg border border-gray-600 text-gray-200 hover:border-gray-400 hover:text-white transition-all duration-200"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Services Section */}
      <section className="pt-14 pb-8 md:pt-18 md:pb-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How I Can Help
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            End-to-end data + AI solutions — from statistical modeling and
            package development to AI-powered dashboards, agent workflows, and
            production-ready APIs.
          </p>
        </div>
        <ServicesCarousel services={services} />
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-10">
        <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Have a data challenge that needs a custom solution? I&apos;d love to
            hear about your project and explore how we can turn your data into
            actionable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://cal.com/your-username/discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40"
            >
              Book a Free Call
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
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
            </a>
            <a
              href="mailto:didier.statistician@gmail.com"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg border border-gray-600 text-gray-200 hover:border-gray-400 hover:text-white transition-all duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              Send an Email
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
