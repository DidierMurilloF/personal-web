import { btnPrimary, pageTitle, sectionTitle, CONTACT_URL } from "../ui";

export const metadata = {
  title: "Technology",
  description:
    "The stack Didier Murillo works with: R Shiny, R packages and Plumber APIs, PostgreSQL, Docker and Docker Compose.",
};

const stack = [
  {
    name: "R Shiny",
    text: "I use R Shiny and data visualization to turn complex data into interactive dashboards that support storytelling and decision-making.",
  },
  {
    name: "R Packages and APIs",
    text: "I develop custom R packages that streamline workflows and make complex data processing reusable. With R Plumber, I build APIs that let web applications exchange and integrate data reliably and securely.",
  },
  {
    name: "SQL Databases",
    text: "With a focus on PostgreSQL, I design databases that support complex storage, retrieval and manipulation needs, with attention to performance and reliability.",
  },
  {
    name: "Docker and Docker Compose",
    text: "I containerize applications and their environments with Docker and Docker Compose to keep development, testing and production consistent and deployments simple.",
  },
];

export default function Technology() {
  return (
    <>
      <h1 className={pageTitle}>My technology stack</h1>
      <p className="mb-10 text-lg">
        These are the tools I use to turn data into working applications.
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {stack.map(({ name, text }) => (
          <section
            key={name}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h2 className={sectionTitle}>{name}</h2>
            <p className="text-lg">{text}</p>
          </section>
        ))}
      </div>
      <div className="py-12 text-center">
        <a
          href={CONTACT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={btnPrimary}
        >
          Let&rsquo;s work together
        </a>
      </div>
    </>
  );
}
