import React from "react";
import Head from "next/head";

const Articles = () => {
  return (
    <>
      <Head>
        <title>Articles</title>
        <meta
          name="description"
          content="Learn more about my work as an R Shiny Developer."
        />
      </Head>
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-12">Articles</h1>
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
      </main>
    </>
  );
};

export default Articles;
