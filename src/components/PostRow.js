import Link from "next/link";
import { formatDate } from "@/src/lib/format";

export default function PostRow({ post }) {
  return (
    <li className="border-b border-line">
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-wrap gap-x-6 gap-y-2 py-6 text-ink no-underline"
      >
        <time dateTime={post.date} className="w-32 shrink-0 pt-1 text-sm text-subtle">
          {formatDate(post.date)}
        </time>
        <span className="min-w-0 flex-1 basis-[420px]">
          <span className="mb-1.5 block text-xl font-semibold group-hover:text-accent">
            {post.title}
          </span>
          {post.summary && (
            <span className="block text-[15px] leading-relaxed text-muted">
              {post.summary}
            </span>
          )}
        </span>
        <span className="pt-1 text-sm font-semibold text-accent">
          {post.tags[0]}
          {post.tags[0] && " · "}
          {post.readingTime}
        </span>
      </Link>
    </li>
  );
}
