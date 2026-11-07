import { btnSecondary, pageTitle, GITHUB_URL } from "../ui";

// Hidden from the nav until real case studies are added.
export const metadata = {
  title: "Projects",
  description: "Projects by Didier Murillo: R Shiny apps, R packages and APIs.",
  robots: { index: false },
};

export default function Projects() {
  return (
    <>
      <h1 className={pageTitle}>Projects</h1>
      <p className="mb-6 text-lg">
        Case studies are on the way. In the meantime, you can browse my work on
        GitHub.
      </p>
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={btnSecondary}
      >
        View GitHub
      </a>
    </>
  );
}
