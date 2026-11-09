import Image from "next/image";
import { site, skills, timeline } from "@/src/content/site";
import { btnSecondary, card, pageTitle, sectionTitle, wrap } from "../ui";

export const metadata = {
  title: "About",
  description:
    "About Didier Murillo: statistician and R Shiny developer working in agricultural data analytics at North Dakota State University.",
};

export default function About() {
  const { linkedin, cv } = site.links;
  return (
    <>
      <section className={`${wrap} pb-14 pt-16 sm:pt-20`}>
        <div className="flex flex-wrap items-start gap-12">
          <Image
            src="/didier-profile.jpeg"
            alt="Portrait of Didier Murillo"
            width={220}
            height={270}
            className="h-[270px] w-[220px] rounded-2xl object-cover"
          />
          <div className="min-w-0 flex-[999_1_480px] text-lg leading-[1.7] text-[#33332F] sm:text-[19px]">
            <h1 className={`${pageTitle} mb-6 text-ink`}>About me</h1>
            <p className="mb-5">
              I&rsquo;m Didier Murillo, a statistician by training and a
              developer by calling. I work in agricultural data analytics at
              North Dakota State University (NDSU), based in Fargo.
            </p>
            <p className="mb-5">
              My work focuses on experimental design, predictive pipelines, and
              bringing genomic and phenotypic data together for predictive
              modeling in plant breeding. I also build R Shiny applications
              that turn complex analytical workflows into web tools that
              researchers, breeders and stakeholders can actually use.
            </p>
            <p>
              Outside of work I love reading, traveling and learning about
              investing.
            </p>
          </div>
        </div>
      </section>

      <section className={`${wrap} pb-16`}>
        <h2 className={`${sectionTitle} mb-6`}>What I know well</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {skills.map((s) => (
            <div key={s.title} className={`${card} p-6`}>
              <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
              <p className="leading-relaxed text-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {timeline.length > 0 && (
        <section className={`${wrap} pb-16`}>
          <h2 className={`${sectionTitle} mb-6`}>Along the way</h2>
          <ol className="border-l-2 border-[#CFE3E0]">
            {timeline.map((t) => (
              <li key={t.title} className="pb-7 pl-7 last:pb-0">
                <p className="mb-1 text-sm text-subtle">{t.when}</p>
                <p className="mb-1 text-lg font-semibold">{t.title}</p>
                {t.text && <p className="leading-relaxed text-muted">{t.text}</p>}
              </li>
            ))}
          </ol>
        </section>
      )}

      <section className={`${wrap} pb-24`}>
        <div className="flex flex-wrap items-center justify-between gap-5 rounded-2xl bg-accent-soft p-9">
          <div className="max-w-md">
            <h2 className="mb-2 font-display text-2xl font-bold text-accent-ink">
              Want the formal version?
            </h2>
            <p className="leading-relaxed text-[#24433F]">
              My full work history lives on LinkedIn.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={linkedin}
              className="inline-flex min-h-[44px] items-center rounded-lg bg-accent px-5 font-semibold text-white no-underline hover:bg-accent-dark"
            >
              LinkedIn
            </a>
            {cv && (
              <a href={cv} className={btnSecondary}>
                Download CV
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
