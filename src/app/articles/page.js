import { pageTitle } from "../ui";

// Hidden from the nav until articles are published.
export const metadata = {
  title: "Articles",
  description: "Articles by Didier Murillo on R Shiny, R packages and statistics.",
  robots: { index: false },
};

export default function Articles() {
  return (
    <>
      <h1 className={pageTitle}>Articles</h1>
      <p className="text-lg">Articles are coming soon.</p>
    </>
  );
}
