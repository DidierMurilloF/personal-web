import { SmartLink } from "@/src/components/ProjectCard";
import { pageMetadata } from "@/src/lib/seo";
import { collab, site } from "@/src/content/site";
import { contactHref } from "@/src/lib/contact";
import { card, eyebrow, pageTitle, sectionTitle, wrap } from "../ui";

export const metadata = pageMetadata({
  path: "/work-with-me",
  title: "Work with me",
  description:
    "Consulting and research collaboration with Didier Murillo: field trial design and analysis, genomic and phenomic prediction, ag data pipelines and apps, and training."
});

export default function WorkWithMe() {
  const { email } = site.links;
  return (
    <>
      <section className={`${wrap} pb-14 pt-16 sm:pt-20`}>
        <p className={`${eyebrow} mb-3`}>Consulting &amp; collaboration</p>
        <h1 className={`${pageTitle} mb-5 max-w-[760px]`}>Work with me</h1>
        <p className="mb-8 max-w-[640px] text-lg leading-relaxed text-muted sm:text-[19px]">
          {collab.pitch}
        </p>
        <a
          href={contactHref()}
          className="inline-flex min-h-[44px] items-center rounded-lg bg-accent px-5 font-semibold text-white no-underline hover:bg-accent-dark"
        >
          Start a conversation
        </a>
      </section>

      <section className={`${wrap} pb-16`}>
        <h2 className={`${sectionTitle} mb-6`}>How I can help</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {collab.services.map((s) => (
            <article key={s.title} className={`${card} flex flex-col gap-3 p-7`}>
              <h3 className="font-display text-[22px] font-semibold">{s.title}</h3>
              <p className="leading-relaxed text-muted">{s.text}</p>
              {s.proof.length > 0 && (
                <p className="mt-auto flex flex-wrap gap-x-5 gap-y-1 pt-1 text-[15px] font-semibold">
                  {s.proof.map((l) => (
                    <SmartLink key={l.label} href={l.href} className="text-accent hover:text-accent-dark">
                      {l.label} <span aria-hidden="true">→</span>
                    </SmartLink>
                  ))}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className={`${wrap} pb-16`}>
        <h2 className={`${sectionTitle} mb-6`}>How it works</h2>
        <ol className="grid gap-5 md:grid-cols-3">
          {collab.steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl bg-accent-soft p-7">
              <p className="mb-2 font-mono text-xs text-accent-dark">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-2 font-display text-xl font-bold text-accent-ink">{s.title}</h3>
              <p className="leading-relaxed text-[#24433F]">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={`${wrap} pb-24`}>
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-forest p-9 text-white">
          <div className="max-w-xl">
            <h2 className="mb-2 font-display text-2xl font-bold">Have a project in mind?</h2>
            <p className="leading-relaxed text-forest-text">
              Tell me about your data and the decision you need to make.
              {email && (
                <>
                  {" "}
                  Or write to <span className="text-white">{email}</span>.
                </>
              )}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={contactHref()}
              className="inline-flex min-h-[44px] items-center rounded-lg bg-mint px-5 font-semibold text-forest no-underline hover:bg-white"
            >
              Email me
            </a>
            {site.links.cv && (
              <a
                href={site.links.cv}
                className="inline-flex min-h-[44px] items-center rounded-lg border border-forest-border px-5 font-semibold text-white no-underline hover:border-mint"
              >
                Download CV
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
