import { getAllPosts } from "@/src/lib/posts";
import { site } from "@/src/content/site";

export default function sitemap() {
  const pages = ["", "/about", "/blog", "/projects"].map((p) => ({
    url: `${site.url}${p}`,
  }));
  const posts = getAllPosts().map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: p.date,
  }));
  return [...pages, ...posts];
}
