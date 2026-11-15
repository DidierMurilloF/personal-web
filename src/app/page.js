import Link from "next/link";
import FieldMap, { trialInfo } from "@/src/components/FieldMap";
import PostRow from "@/src/components/PostRow";
import ProjectCard from "@/src/components/ProjectCard";
import { getAllPosts } from "@/src/lib/posts";
import { projects } from "@/src/content/projects";
import { focus, pipeline, site, topics } from "@/src/content/site";
import { sectionTitle, wrap } from "./ui";
import { contactHref } from "@/src/lib/contact";
import { JsonLd, pageMetadata, personJsonLd, websiteJsonLd } from "@/src/lib/seo";

export const metadata = {
  ...pageMetadata({ path: "/" }),
  title: { absolute: `${site.name} | ${site.title}` },
};

// Facts under the hero buttons. "10+ years" counts from the 2014 statistician role.
const proof = [
  { value: "10+ years", label: "in applied statistics" },
  { value: "FielDHub", label: "on CRAN, peer-reviewed" },
  { value: "R · Python", label: "Shiny, APIs, Docker" },
];

const monoLabel = "font-mono text-[13px] font-medium uppercase tracking-[0.06em]";

const ICONS = {
  plots: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),
  data: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </>
  ),
  curve: (
    <>
      <path d="M3 20h18" />
      <path d="M4 16c3-1 4-8 7-8s4 5 6 5 3-3 3-3" />
      <circle cx="11" cy="8" r="1.2" />
    </>
  ),
  screen: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8" />
      <path d="M7 13l3-3 3 2 4-4" />
    </>
  ),
};

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  return (
    <>
      <JsonLd data={[personJsonLd(), websiteJsonLd()]} />
      <section className="bg-forest text-white">
        <div className={`${wrap} flex flex-wrap items-center gap-14 pb-24 pt-16 sm:pt-20`}>
          <div className="min-w-0 flex-[999_1_480px]">
            <p className={`${monoLabel} mb-5 text-mint`}>{site.role}</p>
            <h1 className="mb-6 font-display text-[38px] font-bold leading-[1.05] tracking-tight sm:text-[54px]">
              Predictive models for plant breeding and crop monitoring.
            </h1>
            <p className="mb-8 max-w-[560px] text-lg leading-relaxed text-forest-text sm:text-[19px]">
              I build statistical and machine learning models that predict
              genotype performance from genomic, phenomic and field trial
              data, monitor crops from satellite imagery, and turn them into
              software that breeders and researchers use every day.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex min-h-[44px] items-center rounded-lg bg-mint px-5 font-semibold text-forest no-underline hover:bg-white"
              >
                See my work
              </Link>
              {site.links.cv && (
                <a
                  href={site.links.cv}
                  className="inline-flex min-h-[44px] items-center rounded-lg border border-forest-border px-5 font-semibold text-white no-underline hover:border-mint"
                >
                  Download CV
                </a>
              )}
              <Link
                href="/work-with-me"
                className="inline-flex min-h-[44px] items-center rounded-lg border border-forest-border px-5 font-semibold text-white no-underline hover:border-mint"
              >
                Work with me
              </Link>
            </div>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-forest-line pt-6 text-sm text-forest-dim">
              {proof.map((p) => (
                <div key={p.value}>
                  <dt className="font-display text-lg font-semibold text-white">{p.value}</dt>
                  <dd>{p.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="m-0 flex-[1_1_400px] rounded-[18px] border border-forest-line bg-forest-raised p-5 sm:p-6">
            <div className="mb-3.5 flex flex-wrap justify-between gap-2 font-mono text-xs text-forest-dim">
              <span>field_trial · {trialInfo.plots} plots</span>
              <span>model: s(ROW, COLUMN)</span>
            </div>
            <FieldMap
              kind="trend"
              label={`Map of a ${trialInfo.plots}-plot field trial, each plot colored by the spatial yield trend estimated with a GAM`}
              className="w-full"
            />
          </figure>
        </div>
      </section>

      <section className={`${wrap} pb-20 pt-20 sm:pt-24`}>
        <p className={`${monoLabel} mb-2.5 text-accent`}>How I work</p>
        <h2 className={`${sectionTitle} mb-9`}>From the field to a decision</h2>
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pipeline.map((p, i) => (
            <li key={p.step} className="rounded-2xl border border-line bg-white p-6">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0E6E66"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {ICONS[p.icon]}
              </svg>
              <p className="mb-1 mt-3.5 font-mono text-xs text-subtle">
                {String(i + 1).padStart(2, "0")} · {p.step}
              </p>
              <h3 className="mb-2 text-[19px] font-semibold">{p.title}</h3>
              <p className="leading-relaxed text-muted">{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={`${wrap} pb-20`}>
        <h2 className={`${sectionTitle} mb-7`}>What I focus on</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {focus.map((f) => (
            <div key={f.title} className="rounded-2xl bg-accent-soft p-7">
              <h3 className="mb-2.5 font-display text-[22px] font-bold text-accent-ink">
                {f.title}
              </h3>
              <p className="leading-relaxed text-[#24433F]">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${wrap} pb-20`}>
        <div className="mb-7 flex flex-wrap items-baseline justify-between gap-3">
          <h2 className={sectionTitle}>Selected work</h2>
          <Link href="/projects" className="font-semibold">
            All projects →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </section>

      <section className={`${wrap} pb-24`}>
        {posts.length > 0 && (
          <>
            <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
              <h2 className={sectionTitle}>Latest writing</h2>
              <Link href="/blog" className="font-semibold">
                All posts →
              </Link>
            </div>
            <ul className="border-t border-line">
              {posts.map((post) => (
                <PostRow key={post.slug} post={post} />
              ))}
            </ul>
          </>
        )}
        <ul aria-label="Topics I write about" className="mt-7 flex flex-wrap gap-2.5">
          {topics.map((t) => (
            <li
              key={t}
              className="rounded-full bg-accent-soft px-4 py-2.5 font-medium text-accent-dark"
            >
              {t}
            </li>
          ))}
        </ul>
      </section>
      <section className={`${wrap} pb-24`}>
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-accent-soft p-9">
          <div className="max-w-xl">
            <p className={`${monoLabel} mb-2 text-accent`}>Work with me</p>
            <h2 className="mb-2 font-display text-2xl font-bold text-accent-ink sm:text-[28px]">
              Have field, genomic or satellite data and a decision to make?
            </h2>
            <p className="leading-relaxed text-[#24433F]">
              I consult and collaborate on trial design and analysis, predictive
              modeling, ag data pipelines and apps, and training.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/work-with-me"
              className="inline-flex min-h-[44px] items-center rounded-lg bg-accent px-5 font-semibold text-white no-underline hover:bg-accent-dark"
            >
              See how I can help
            </Link>
            <a
              href={contactHref()}
              className="inline-flex min-h-[44px] items-center rounded-lg border border-accent px-5 font-semibold text-accent-dark no-underline hover:bg-white"
            >
              Email me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
