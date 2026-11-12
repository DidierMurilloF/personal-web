import Image from "next/image";
import { focus, now, site, timeline } from "@/src/content/site";
import { btnSecondary, card, pageTitle, sectionTitle, wrap } from "../ui";

export const metadata = {
  title: "About",
  description:
    "About Didier Murillo: statistician working in digital agriculture and predictive modeling at North Dakota State University.",
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
            priority
            className="h-[270px] w-[220px] rounded-2xl object-cover"
          />
          <div className="min-w-0 flex-[999_1_480px] text-lg leading-[1.7] text-[#33332F] sm:text-[19px]">
            <h1 className={`${pageTitle} mb-6 text-ink`}>About me</h1>
            <p className="mb-5">
              I&rsquo;m Didier Murillo, a statistician by training and a
              developer by calling. I work in digital agriculture at North
              Dakota State University (NDSU), in Fargo.
            </p>
            <p className="mb-5">
              My work sits where field trials meet predictive modeling: I
              design experiments, build models that combine genomic and
              phenotypic data to predict performance in plant breeding, and
              separate real genetic signal from the spatial noise of the field.
            </p>
            <p className="mb-5">
              Then I turn those models into R Shiny apps, APIs and AI-assisted
              tools, so researchers, breeders and stakeholders can use them
              without writing code.
            </p>
            <p>
              Outside of work I love reading, traveling and learning about
              investing.
            </p>
          </div>
        </div>
      </section>

      {now.length > 0 && (
        <section className={`${wrap} pb-14`}>
          <div className={`${card} flex flex-wrap gap-x-8 gap-y-4 px-8 py-7`}>
            <h2 className="w-36 font-display text-xl font-bold">Right now</h2>
            <ul className="grid flex-1 basis-[400px] gap-2.5 leading-relaxed">
              {now.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}:</strong> {item.text}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className={`${wrap} pb-16`}>
        <h2 className={`${sectionTitle} mb-6`}>What I focus on</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {focus.map((f) => (
            <div key={f.title} className="rounded-2xl bg-accent-soft p-7">
              <h3 className="mb-2.5 font-display text-xl font-bold text-accent-ink">
                {f.title}
              </h3>
              <p className="leading-relaxed text-[#24433F]">{f.text}</p>
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
        <div className="flex flex-wrap items-center justify-between gap-5 rounded-2xl bg-forest p-9 text-white">
          <div className="max-w-md">
            <h2 className="mb-2 font-display text-2xl font-bold">
              Want the formal version?
            </h2>
            <p className="leading-relaxed text-forest-text">
              My full work history lives on LinkedIn.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={linkedin}
              className="inline-flex min-h-[44px] items-center rounded-lg bg-mint px-5 font-semibold text-forest no-underline hover:bg-white"
            >
              LinkedIn
            </a>
            {cv && (
              <a href={cv} className={`${btnSecondary} border-forest-border text-white`}>
                Download CV
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
