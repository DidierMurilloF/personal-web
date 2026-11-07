import Image from "next/image";
import {
  btnPrimary,
  btnSecondary,
  sectionTitle,
  CONTACT_URL,
  GITHUB_URL,
} from "./ui";

export const metadata = {
  title: { absolute: "Didier Murillo | R Shiny Developer & Data Scientist" },
};

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center gap-8 md:flex-row md:items-start">
        <div className="flex w-full justify-center md:w-1/3">
          <Image
            src="/didier-profile.jpeg"
            alt="Portrait of Didier Murillo"
            width={300}
            height={514}
            priority
            sizes="(min-width: 768px) 300px, 80vw"
            className="h-auto w-full max-w-[300px] rounded-lg"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">Didier Murillo</h1>
          <p className="mb-6 text-lg text-gray-700 md:text-xl">
            Data Scientist &amp; R Shiny Developer
          </p>
          <p className="mb-6 text-base md:text-lg">
            I&rsquo;m a data scientist and R Shiny developer who builds
            interactive, data-driven applications. With over six years of
            experience, I turn complex data into user-friendly tools that people
            actually use.
          </p>
          <h2 className={sectionTitle}>What I can help with</h2>
          <ul className="mb-8 list-inside list-disc space-y-2">
            <li>Custom R Shiny apps and dashboards</li>
            <li>R package development</li>
            <li>API development with R Plumber and Node.js</li>
            <li>App containerization with Docker</li>
            <li>Forecasting and time series analysis</li>
            <li>Experimental design and mixed model analysis</li>
          </ul>
          <div className="flex flex-col gap-4 md:flex-row">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={btnSecondary}
            >
              See my work on GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className={sectionTitle}>Let&rsquo;s work together</h2>
        <p className="mb-4 text-base md:text-lg">
          Have an analysis that should be an app? Reach out and tell me about
          it.
        </p>
        <a
          href={CONTACT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={btnPrimary}
        >
          Contact me on LinkedIn
        </a>
      </section>
    </>
  );
}
