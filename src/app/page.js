import Image from "next/image";
import Link from "next/link";
import PostRow from "@/src/components/PostRow";
import ProjectCard from "@/src/components/ProjectCard";
import { getAllPosts } from "@/src/lib/posts";
import { projects } from "@/src/content/projects";
import { now, site, topics } from "@/src/content/site";
import {
  btnPrimary,
  btnSecondary,
  card,
  eyebrow,
  sectionTitle,
  wrap,
} from "./ui";

export const metadata = {
  title: { absolute: `${site.name} | Statistician & R developer` },
};

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  return (
    <>
      <section className={`${wrap} pb-16 pt-16 sm:pt-24`}>
        <div className="flex flex-wrap items-center gap-12">
          <div className="min-w-0 flex-[999_1_520px]">
            <p className={`${eyebrow} mb-4`}>{site.role}</p>
            <h1 className="mb-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-[56px]">
              Hi, I&rsquo;m Didier. I turn statistics into tools people can
              use.
            </h1>
            <p className="mb-8 max-w-[600px] text-lg leading-relaxed text-muted sm:text-[19px]">
              I build R Shiny apps, R packages and APIs, with a background in
              experimental design and mixed models. This is my corner of the
              internet: who I am, what I&rsquo;m learning, and the things
              I&rsquo;ve made along the way.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/blog" className={btnPrimary}>
                Read the blog
              </Link>
              <Link href="/about" className={btnSecondary}>
                More about me
              </Link>
            </div>
          </div>
          <div className="flex flex-[1_1_260px] justify-center">
            <Image
              src="/didier-profile.jpeg"
              alt="Portrait of Didier Murillo"
              width={280}
              height={340}
              priority
              className="h-[340px] w-[280px] rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {now.length > 0 && (
        <section className={`${wrap} pb-16`}>
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

      {posts.length > 0 && (
        <section className={`${wrap} pb-20`}>
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
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
        </section>
      )}

      <section className={`${wrap} pb-20`}>
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
          <h2 className={sectionTitle}>Things I&rsquo;ve built</h2>
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
        <h2 className={`${sectionTitle} mb-5`}>What I write about</h2>
        <ul className="flex flex-wrap gap-2.5">
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
    </>
  );
}
