import ProjectCard, { SmartLink } from "@/src/components/ProjectCard";
import { projects } from "@/src/content/projects";
import { site } from "@/src/content/site";
import { btnPrimary, btnSecondary, card, eyebrow, pageTitle, sectionTitle, wrap } from "../ui";

export const metadata = {
  title: "Projects",
  description:
    "Apps, R packages and analyses by Didier Murillo, including FielDHub and the ND Agriculture KPIs dashboard.",
};

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => p !== featured);
  return (
    <>
      <section className={`${wrap} pb-12 pt-16 sm:pt-20`}>
        <h1 className={`${pageTitle} mb-4`}>Projects</h1>
        <p className="max-w-[640px] text-lg leading-relaxed text-muted sm:text-[19px]">
          A few things I&rsquo;ve built, mostly open source. Each one started as
          a real problem someone had.
        </p>
      </section>

      {featured && (
        <section className={`${wrap} pb-14`}>
          <article className={`${card} flex flex-col gap-4 p-8 sm:p-10`}>
            <p className={eyebrow}>Featured</p>
            <h2 className="font-display text-3xl font-bold">{featured.name}</h2>
            <p className="max-w-[720px] text-[17px] leading-relaxed text-muted">
              {featured.summary}
            </p>
            <p className="text-sm text-subtle">{featured.tech.join(" · ")}</p>
            <div className="mt-2 flex flex-wrap gap-3">
              {featured.links.map((l, i) => (
                <SmartLink
                  key={l.href}
                  href={l.href}
                  className={i === 0 ? btnPrimary : btnSecondary}
                >
                  {l.label}
                </SmartLink>
              ))}
            </div>
          </article>
        </section>
      )}

      <section className={`${wrap} pb-24`}>
        <h2 className={`${sectionTitle} mb-6`}>More projects</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {rest.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
        <p className="mt-10 text-muted">
          More experiments and smaller things live on{" "}
          <a href={site.links.github} className="font-semibold">
            GitHub
          </a>
          .
        </p>
      </section>
    </>
  );
}
