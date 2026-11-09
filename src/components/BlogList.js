"use client";

import { useMemo, useState } from "react";
import PostRow from "./PostRow";

export default function BlogList({ posts }) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");

  const tags = useMemo(
    () => ["All", ...new Set(posts.flatMap((p) => p.tags))],
    [posts]
  );

  const q = query.trim().toLowerCase();
  const shown = posts.filter(
    (p) =>
      (tag === "All" || p.tags.includes(tag)) &&
      (!q || `${p.title} ${p.summary} ${p.tags.join(" ")}`.toLowerCase().includes(q))
  );

  const byYear = shown.reduce((acc, p) => {
    const y = p.date.slice(0, 4);
    (acc[y] ??= []).push(p);
    return acc;
  }, {});

  return (
    <>
      <label className="flex max-w-md flex-col gap-1.5 text-sm font-semibold text-muted">
        Search posts
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. mixed models"
          className="min-h-[44px] rounded-lg border border-[#CFCCC4] bg-white px-3.5 text-[15px] font-normal text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
        />
      </label>
      {tags.length > 2 && (
        <div role="group" aria-label="Filter by topic" className="mt-5 flex flex-wrap gap-2">
          {tags.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={tag === t}
              onClick={() => setTag(t)}
              className={`min-h-[40px] rounded-full border px-4 text-sm font-medium ${
                tag === t
                  ? "border-accent bg-accent text-white"
                  : "border-[#CFCCC4] bg-white text-[#33332F] hover:border-accent"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      )}

      <div className="mt-10" aria-live="polite">
        {shown.length === 0 && (
          <p className="text-muted">No posts match that search yet.</p>
        )}
        {Object.keys(byYear)
          .sort((a, b) => b.localeCompare(a))
          .map((year) => (
            <section key={year} className="mb-8">
              <h2 className="mb-2 font-display text-xl font-bold text-subtle">{year}</h2>
              <ul className="border-t border-line">
                {byYear[year].map((p) => (
                  <PostRow key={p.slug} post={p} />
                ))}
              </ul>
            </section>
          ))}
      </div>
    </>
  );
}
