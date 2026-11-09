import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

// Each post is a folder: content/blog/<slug>/index.md plus its images.
// Folders starting with "_" (like _template) are ignored.
const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function isExternal(src) {
  return /^([a-z]+:)?\/\//i.test(src) || src.startsWith("/") || src.startsWith("data:");
}

// Image paths in the Markdown are relative to the post folder. The assets are
// copied to public/blog/<slug>/ (scripts/copy-post-assets.mjs), so point them there.
export function assetUrl(slug, src) {
  if (!src || isExternal(src)) return src;
  return `/blog/${slug}/${src.replace(/^\.\//, "")}`;
}

function rehypePostImages(slug) {
  return () => (tree) => {
    const walk = (node) => {
      if (node.type === "element" && node.tagName === "img") {
        node.properties.src = assetUrl(slug, node.properties.src);
        node.properties.loading = "lazy";
        node.properties.decoding = "async";
      }
      node.children?.forEach(walk);
    };
    walk(tree);
  };
}

function readingTime(text) {
  const words = text.replace(/```[\s\S]*?```/g, "").split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}

function readPostFile(slug) {
  const file = path.join(BLOG_DIR, slug, "index.md");
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date ?? "");
  return {
    slug,
    title: data.title ?? slug,
    date,
    summary: data.summary ?? data.description ?? "",
    tags: data.tags ?? [],
    cover: data.cover ? assetUrl(slug, data.cover) : null,
    coverAlt: data.coverAlt ?? "",
    code: data.code ?? null,
    draft: data.draft === true,
    readingTime: readingTime(content),
    content,
  };
}

const showDrafts = process.env.NODE_ENV !== "production";

export function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith("_"))
    .map((d) => readPostFile(d.name))
    .filter((p) => p && (showDrafts || !p.draft))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ content, ...meta }) => meta);
}

export async function getPost(slug) {
  const post = readPostFile(slug);
  if (!post || (post.draft && !showDrafts)) return null;
  const html = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeKatex)
    .use(rehypeHighlight, { detect: false })
    .use(rehypePostImages(slug))
    .use(rehypeStringify)
    .process(post.content);
  const { content, ...meta } = post;
  return { ...meta, html: String(html) };
}

export { formatDate } from "./format";
