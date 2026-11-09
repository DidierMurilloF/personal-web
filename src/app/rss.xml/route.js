import { getAllPosts } from "@/src/lib/posts";
import { site } from "@/src/content/site";

export const dynamic = "force-static";

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function GET() {
  const items = getAllPosts()
    .map((p) => {
      const url = `${site.url}/blog/${p.slug}`;
      return `<item><title>${esc(p.title)}</title><link>${url}</link><guid>${url}</guid><pubDate>${new Date(`${p.date}T12:00:00Z`).toUTCString()}</pubDate><description>${esc(p.summary)}</description></item>`;
    })
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${esc(site.name)}</title><link>${site.url}</link><description>${esc(site.description)}</description>${items}</channel></rss>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
