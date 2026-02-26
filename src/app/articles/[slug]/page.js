import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getArticleBySlug, getAllSlugs } from "@/lib/articles";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  try {
    const article = getArticleBySlug(params.slug);
    return {
      title: `${article.title} | Didier Murillo`,
      description: article.description,
    };
  } catch {
    return { title: "Article Not Found" };
  }
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ArticlePage({ params }) {
  let article;
  try {
    article = getArticleBySlug(params.slug);
  } catch {
    notFound();
  }

  return (
    <>
      {/* Back link */}
      <div className="pt-10 md:pt-14">
        <Link
          href="/articles"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200"
        >
          <svg
            className="w-4 h-4 mr-1.5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          All Articles
        </Link>
      </div>

      {/* Article Header */}
      <header className="pt-8 pb-10 border-b border-gray-800">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-blue-600/10 text-blue-400 border border-blue-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          {article.title}
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-6">
          {article.description}
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span className="w-1 h-1 rounded-full bg-gray-600" />
          <span>{article.readingTime}</span>
        </div>
      </header>

      {/* Article Body */}
      <article className="prose py-12 md:py-16">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {article.content}
        </ReactMarkdown>
      </article>

      {/* Footer nav */}
      <div className="pb-16 md:pb-20 border-t border-gray-800 pt-10">
        <Link
          href="/articles"
          className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200"
        >
          <svg
            className="w-4 h-4 mr-1.5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Back to all articles
        </Link>
      </div>
    </>
  );
}
