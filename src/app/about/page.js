import { pageTitle, sectionTitle } from "../ui";

export const metadata = {
  title: "About",
  description:
    "About Didier Murillo: R Shiny developer and data scientist with 6+ years building Shiny apps, R packages and Plumber APIs.",
};

export default function About() {
  return (
    <>
      <h1 className={pageTitle}>About me</h1>
      <section>
        <p className="text-lg">
          As an R Shiny developer with over six years of experience, I
          specialize in building R Shiny applications and dashboards, developing
          APIs, and creating R packages. I care about interactive tools that
          make the most of R and that hold up in real use.
        </p>
      </section>
      <section className="my-8">
        <h2 className={sectionTitle}>What I bring</h2>
        <ul className="list-inside list-disc space-y-3">
          <li>
            <strong>R Shiny development:</strong> I build interactive R Shiny
            apps and dashboards using Shiny modules and the R package
            &lsquo;box&rsquo;, so they stay fast, maintainable and scalable.
          </li>
          <li>
            <strong>Custom R packages:</strong> I create R packages that
            integrate with REST APIs and extend app functionality to fit each
            project&rsquo;s requirements.
          </li>
          <li>
            <strong>API development:</strong> I develop secure, efficient APIs
            with the Plumber R package, integrating complex data sources and
            letting applications exchange and process data reliably.
          </li>
          <li>
            <strong>Deployment with Docker:</strong> I containerize software
            with Docker for easy deployment, scaling and maintenance across
            environments.
          </li>
        </ul>
      </section>
    </>
  );
}
