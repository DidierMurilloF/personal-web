import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export const metadata = {
  title: "Articles | Didier Murillo",
  description:
    "Technical articles on R Shiny development, data science, API design, and statistical modeling by Didier Murillo.",
};

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Articles() {
  const articles = getAllArticles();

  return (
    <>
      {/* Header */}
      <section className="pt-8 pb-8 md:pt-10 md:pb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Articles</h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          Thoughts on R development, data engineering, and statistical
          modeling — drawn from real project experience.
        </p>
      </section>

      {/* Articles List */}
      <section className="pb-8 md:pb-10">
        <div className="space-y-4">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group block rounded-xl border border-gray-800 bg-gray-900/50 p-6 md:p-8 hover:border-gray-700 hover:bg-gray-800/60 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-100 group-hover:text-white mb-2 transition-colors duration-200">
                    {article.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-4 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-gray-800 text-gray-400 border border-gray-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-center gap-4 text-sm text-gray-500 md:text-right md:flex-col md:items-end md:gap-1">
                  <time dateTime={article.date}>{formatDate(article.date)}</time>
                  <span>{article.readingTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
