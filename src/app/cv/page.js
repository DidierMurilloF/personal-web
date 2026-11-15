import { resume } from "@/src/content/resume";
import { site } from "@/src/content/site";
import { btnPrimary, wrap } from "../ui";

export const metadata = {
  title: "CV",
  description: `Resume of ${resume.name}, ${resume.headline}: genomic and phenomic prediction, field trial analysis, satellite crop monitoring and the software that puts models to use.`,
};

const h2 =
  "mb-3 border-b border-line pb-1.5 font-mono text-[12px] font-semibold uppercase tracking-[0.08em] text-accent print:mb-2 print:text-[9px]";

function Section({ title, children, keepTogether = true }) {
  return (
    <section className={`mb-9 print:mb-4 ${keepTogether ? "break-inside-avoid" : ""}`}>
      <h2 className={h2}>{title}</h2>
      {children}
    </section>
  );
}

export default function CV() {
  const r = resume;
  return (
    <div className={`${wrap} pb-24 pt-14 print:max-w-none print:px-0 print:pb-0 print:pt-0`}>
      <article className="mx-auto max-w-[820px] text-[15.5px] leading-relaxed text-[#2A2A27] print:text-[9.6pt] print:leading-[1.38]">
        <header className="mb-9 flex flex-wrap items-end justify-between gap-6 print:mb-4">
          <div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-ink print:text-[22pt]">
              {r.name}
            </h1>
            <p className="mt-1 text-lg font-semibold text-accent print:text-[11pt]">{r.headline}</p>
          </div>
          <ul className="text-right text-sm text-muted print:text-[8.5pt]">
            <li>{r.location}</li>
            {r.email && (
              <li>
                <a href={`mailto:${r.email}`}>{r.email}</a>
              </li>
            )}
            {r.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted no-underline hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </header>

        {site.links.cv && (
          <p className="mb-9 print:hidden">
            <a href={site.links.cv} className={btnPrimary} download>
              Download PDF
            </a>
          </p>
        )}

        <Section title="Summary">
          <p>{r.summary}</p>
        </Section>

        <Section title="Experience" keepTogether={false}>
          <ol className="grid gap-7 print:gap-3">
            {r.experience.map((job) => (
              <li key={job.title + job.when} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-semibold text-ink">{job.title}</h3>
                  <p className="font-mono text-[13px] text-subtle print:text-[8.5pt]">{job.when}</p>
                </div>
                <p className="mb-2 text-muted print:mb-1">
                  {job.org} · {job.place}
                </p>
                <ul className="list-disc space-y-1 pl-5 marker:text-accent print:space-y-0.5">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
            <li className="break-inside-avoid">
              <h3 className="mb-1 font-semibold text-ink">Earlier experience</h3>
              <ul className="space-y-1 print:space-y-0.5">
                {r.earlier.map((e) => (
                  <li key={e.title}>
                    <span className="font-medium text-ink">{e.title}</span>, {e.org} ·{" "}
                    <span className="font-mono text-[13px] text-subtle print:text-[8.5pt]">{e.when}</span>
                    <br />
                    <span className="text-muted">{e.text}</span>
                  </li>
                ))}
              </ul>
            </li>
          </ol>
        </Section>

        <Section title="Technical skills">
          <dl className="grid gap-2 print:gap-1">
            {r.skills.map((s) => (
              <div key={s.group} className="grid gap-x-4 sm:grid-cols-[190px_1fr] print:grid-cols-[150px_1fr]">
                <dt className="font-semibold text-ink">{s.group}</dt>
                <dd>{s.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <div className="grid gap-x-10 sm:grid-cols-2 print:grid-cols-2">
          <Section title="Open source">
            <ul className="space-y-2 print:space-y-1">
              {r.openSource.map((p) => (
                <li key={p.name}>
                  <span className="font-semibold text-ink">{p.name}</span>{" "}
                  <span className="text-subtle">({p.role})</span>: {p.text}
                </li>
              ))}
            </ul>
          </Section>

          <div>
            <Section title="Writing">
              <ul className="space-y-2 print:space-y-1">
                {r.writing.map((w) => (
                  <li key={w.href}>
                    <a href={w.href}>{w.title}</a>
                  </li>
                ))}
              </ul>
            </Section>
            <Section title="Education">
              <ul className="space-y-2 print:space-y-1">
                {r.education.map((e) => (
                  <li key={e.degree}>
                    <span className="font-semibold text-ink">{e.degree}</span>, {e.school} · {e.year}
                  </li>
                ))}
              </ul>
            </Section>
            <Section title="Languages">
              <p>{r.languages.join(" · ")}</p>
            </Section>
          </div>
        </div>
      </article>
    </div>
  );
}
