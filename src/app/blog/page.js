import BlogList from "@/src/components/BlogList";
import { getAllPosts } from "@/src/lib/posts";
import { pageTitle, wrap } from "../ui";

export const metadata = {
  title: "Blog",
  description:
    "Writing by Didier Murillo on R, Shiny, statistics, experimental design and plant breeding analytics.",
};

export default function Blog() {
  const posts = getAllPosts();
  return (
    <section className={`${wrap} pb-24 pt-16 sm:pt-20`}>
      <h1 className={`${pageTitle} mb-4`}>Blog</h1>
      <p className="mb-8 max-w-[640px] text-lg leading-relaxed text-muted sm:text-[19px]">
        Notes on R, Shiny, statistics and shipping data tools. Written for my
        future self and anyone stuck on the same problem.
      </p>
      <BlogList posts={posts} />
    </section>
  );
}
