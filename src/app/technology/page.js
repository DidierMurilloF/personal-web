import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image"; // Import Image component from next/image for optimized images

const Technology = () => {
  return (
    <>
      <Head>
        <title>
          Didier Murillo - Tech Expertise in R Shiny, Docker, and More
        </title>
      </Head>
      <div className="intro-section text-left px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Technology Stack</h1>
        <p className="text-lg mb-4">
          A blend of technology and creativity drives my approach to delivering
          dynamic, data-driven solutions. Here's a glimpse into the tools and
          technologies I harness to turn data into actionable insights.
        </p>
      </div>
      <div className="technology-section mb-8 px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">R Shiny</h2>
            <p className="text-lg mb-4">
              My expertise lies in leveraging R Shiny and data visualization to
              transform complex data into interactive dashboards. These custom
              applications enhance storytelling and decision-making, offering
              clients across industries—from healthcare to finance—intuitive and
              engaging insights for their data-driven strategies.
            </p>
            <Link
              href="/projects/r-shiny"
              className="inline-block px-6 py-2 border border-gray-700 text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700"
              passHref
            >
              R Shiny Projects
            </Link>
          </div>
          <div className="w-full md:w-1/2 px-4 flex justify-center items-center">
            <Image
              src="/images/first.jpg"
              alt="R Shiny Hex Logo"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0 pt-5">
            <h2 className="text-2xl font-bold mb-4">R Packages and APIs</h2>
            <p className="text-lg mb-2">
              I specialize in developing custom R packages to streamline
              workflows, enhance data analysis capabilities, and offer reusable
              solutions to complex data processing challenges. My packages are
              designed with efficiency and user-friendliness in mind. Leveraging
              R Plumber, I design and develop robust APIs that facilitate
              seamless data exchange and integration for web-based applications.
              This enables the creation of dynamic, scalable, and secure
              data-driven solutions.
            </p>
            <Link href="/projects/r-packages" passHref>
              <button className="px-6 py-2 border border-gray-700 text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 w-full md:w-auto">
                R Package Projects
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 px-4 flex justify-center items-center">
            {/* Example Image - replace src with your image path */}
            <Image
              src="/images/second.jpg"
              alt="R Shiny Hex Logo"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0 pt-5">
            <h2 className="text-2xl font-bold mb-4">SQL Databases</h2>
            <p className="text-lg mb-2">
              With a focus on PostgreSQL, I implement sophisticated database
              solutions that support complex data storage, retrieval, and
              manipulation needs. My expertise ensures high performance,
              reliability, and scalability of database systems.
            </p>
            <Link href="/projects/sql-databases" passHref>
              <button className="px-6 py-2 border border-gray-700 text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 w-full md:w-auto">
                SQL Database Projects
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 px-4 flex justify-center items-center">
            <Image
              src="/images/first.jpg"
              alt="R Shiny Hex Logo"
              width={200}
              height={100}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0 pt-5">
            <h2 className="text-2xl font-bold mb-4">
              Docker and Docker Compose
            </h2>
            <p className="text-lg mb-2">
              Utilizing Docker and Docker Compose, I containerize applications
              and their environments to ensure consistency across development,
              testing, and production. This approach streamlines deployment
              processes and enhances application portability and scalability.
            </p>
            <Link href="/projects/docker" passHref>
              <button className="px-6 py-2 border border-gray-700 text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 w-full md:w-auto">
                Docker Projects
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 px-4 flex justify-center items-center pt-5">
            <Image
              src="/images/fourth.jpg"
              alt="R Shiny Hex Logo"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="skills-section text-center px-4 py-5"></div>
      <div className="cta-section text-center px-4 py-8">
        <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300">
          Let's Work Together
        </button>
      </div>
    </>
  );
};

export default Technology;
