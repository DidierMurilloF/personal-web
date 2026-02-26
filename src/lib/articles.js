import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export function getAllArticles() {
  const filenames = fs.readdirSync(articlesDirectory);

  const articles = filenames
    .filter((name) => name.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(articlesDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        tags: data.tags || [],
        readingTime: data.readingTime || "5 min read",
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return articles;
}

export function getArticleBySlug(slug) {
  const filePath = path.join(articlesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    tags: data.tags || [],
    readingTime: data.readingTime || "5 min read",
    content,
  };
}

export function getAllSlugs() {
  const filenames = fs.readdirSync(articlesDirectory);

  return filenames
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}
