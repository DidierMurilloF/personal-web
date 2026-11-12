import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import "katex/dist/katex.min.css";
import { formatDate, getAllPosts, getPost } from "@/src/lib/posts";
import { site } from "@/src/content/site";
import { card } from "../../ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      publishedTime: post.date,
      images: post.cover ? [post.cover] : ["/didier-profile.jpeg"],
    },
  };
}

export default async function Post({ params }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const all = getAllPosts();
  const i = all.findIndex((p) => p.slug === post.slug);
  const newer = all[i - 1];
  const older = all[i + 1];

  return (
    <article className="pb-24">
      <header className="mx-auto max-w-read px-4 pt-14 sm:px-8">
        <Link href="/blog" className="text-sm font-semibold no-underline">
          ← All posts
        </Link>
        <p className="mb-3 mt-8 text-sm text-subtle">
          <time dateTime={post.date}>{formatDate(post.date)}</time> ·{" "}
          {post.readingTime}
          {post.tags[0] && (
            <>
              {" · "}
              <span className="font-semibold text-accent">{post.tags[0]}</span>
            </>
          )}
        </p>
        <h1 className="mb-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-[44px]">
          {post.title}
        </h1>
        {post.summary && (
          <p className="mb-10 text-lg leading-relaxed text-muted sm:text-xl">
            {post.summary}
          </p>
        )}
      </header>

      {post.cover && (
        <div className="mx-auto mb-12 max-w-[860px] px-4 sm:px-8">
          <Image
            src={post.cover}
            alt={post.coverAlt}
            width={1024}
            height={640}
            priority
            sizes="(min-width: 860px) 800px, 100vw"
            className="h-auto w-full rounded-2xl"
          />
        </div>
      )}

      <div
        className="post-body prose prose-lg mx-auto max-w-read px-4 sm:px-8 prose-pre:rounded-xl prose-pre:text-sm"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />

      <footer className="mx-auto mt-12 max-w-read px-4 sm:px-8">
        {post.tags.length > 0 && (
          <ul className="mb-10 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <li key={t} className="rounded-full bg-[#EFEDE7] px-3 py-1.5 text-sm">
                {t}
              </li>
            ))}
          </ul>
        )}

        <div className={`${card} flex flex-wrap items-center gap-5 p-6`}>
          <Image
            src="/didier-profile.jpeg"
            alt=""
            width={64}
            height={64}
            className="h-16 w-16 rounded-full object-cover"
          />
          <div className="flex-1 basis-[300px]">
            <p className="mb-1 font-semibold">Written by {site.name}</p>
            <p className="text-[15px] leading-relaxed text-muted">
              Statistician working on digital agriculture and predictive
              modeling. <Link href="/about">More about me</Link> ·{" "}
              <a href={site.links.linkedin}>Say hi on LinkedIn</a>
              {post.code && (
                <>
                  {" · "}
                  <a href={post.code}>Code for this post</a>
                </>
              )}
            </p>
          </div>
        </div>

        {(older || newer) && (
          <nav aria-label="More posts" className="mt-8 grid gap-4 sm:grid-cols-2">
            {older ? (
              <Link
                href={`/blog/${older.slug}`}
                className={`${card} flex flex-col gap-1.5 p-5 text-ink no-underline hover:border-accent`}
              >
                <span className="text-sm text-subtle">← Older</span>
                <span className="font-semibold">{older.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {newer && (
              <Link
                href={`/blog/${newer.slug}`}
                className={`${card} flex flex-col gap-1.5 p-5 text-right text-ink no-underline hover:border-accent`}
              >
                <span className="text-sm text-subtle">Newer →</span>
                <span className="font-semibold">{newer.title}</span>
              </Link>
            )}
          </nav>
        )}
      </footer>
    </article>
  );
}
