import Image from "next/image";

export const metadata = {
  title: "About | Didier Murillo",
  description:
    "Learn about Didier Murillo — R Shiny Developer and Data Scientist with 6+ years building interactive, data-driven applications.",
};

const stats = [
  { value: "6+", label: "Years of Experience" },
  { value: "R & Python", label: "Core Languages" },
  { value: "End-to-End", label: "From Analysis to Deployment" },
];

export default function About() {
  return (
    <>
      {/* Header + Bio */}
      <section className="pt-8 pb-8 md:pt-10 md:pb-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 opacity-20 blur-xl" />
              <Image
                src="/didier-profile.jpeg"
                alt="Didier Murillo"
                width={280}
                height={280}
                className="relative rounded-2xl object-cover shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Didier Murillo
            </h1>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed max-w-2xl">
              <p>
                I&apos;m a Data Scientist and R Shiny Developer with over six
                years of experience turning complex datasets into interactive
                applications that people actually enjoy using.
              </p>
              <p>
                My work sits at the intersection of statistical rigor and
                software engineering — I build dashboards, APIs, and R packages
                that are not just analytically sound but also production-ready,
                well-tested, and easy to maintain.
              </p>
              <p>
                I&apos;ve worked across industries including healthcare, finance,
                and agriculture, helping teams move from ad-hoc scripts to
                scalable, containerized solutions that deliver insights
                reliably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="pb-8 md:pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-gray-800 bg-gray-900/50 px-6 py-5 text-center"
            >
              <p className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-8 md:pb-10">
        <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Let&apos;s build something together
          </h2>
          <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
            Whether you need a custom dashboard, an R package, or a full
            analytical pipeline — I&apos;d love to hear about your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://cal.com/your-username/discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40"
            >
              Book a Free Call
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
            </a>
            <a
              href="mailto:didier.statistician@gmail.com"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg border border-gray-600 text-gray-200 hover:border-gray-400 hover:text-white transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              Send an Email
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
