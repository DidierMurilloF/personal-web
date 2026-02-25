import React from "react";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Me - R Shiny Developer</title>
        <meta
          name="description"
          content="Learn more about my work as an R Shiny Developer."
        />
      </Head>
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-12">About Me</h1>
        <section>
          <p className="text-lg">
            As an R Shiny Developer with over six years of experience, I
            specialize in creating dynamic R Shiny applications/dashboards,
            developing robust APIs, and building comprehensive R packages. My
            career is marked by a passion for developing interactive solutions
            that leverage the full potential of R, ensuring that each project
            not only meets but exceeds client expectations.
          </p>
        </section>
        <section className="my-8">
          <h2 className="text-3xl font-bold my-4">Why Choose Me?</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>R Shiny Development Expertise:</strong> I develop
              interactive and visually appealing R Shiny apps/dashboards. By
              utilizing advanced features and modular coding practices, such as
              Shiny modules and the R package 'box,' I deliver high-performance
              applications that are both maintainable and scalable.
            </li>
            <li>
              <strong>Custom R Package Development:</strong> I excel in creating
              custom R packages for seamless interaction with REST APIs,
              enhancing app functionality, and offering solutions that perfectly
              fit your project's requirements.
            </li>
            <li>
              <strong>API Development Proficiency:</strong> I develop secure and
              efficient APIs with the Plumber R package, enabling complex data
              source integrations and smooth application exchange and
              processing.
            </li>
            <li>
              <strong>Deployment Mastery with Docker:</strong> I use Docker to
              containerize software, ensuring easy deployment, scalability, and
              maintenance across any environment.
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default About;
