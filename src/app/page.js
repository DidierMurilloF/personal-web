import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Didier Murillo - Expert R Shiny Developer | Data Scientist
        </title>
        <meta
          name="description"
          content="Didier Murillo, an experienced R Shiny Developer and Data Scientist, specializes in creating dynamic, data-driven applications. Discover custom solutions for your data needs."
        />
        <meta
          name="keywords"
          content="R Shiny Developer, Data Scientist, Data Analysis, Custom R Shiny Apps, R Package Development, Data Visualization, API Development, Time Series Analysis"
        />
      </Head>
      <div className="main-content">
        <div className="py-1">
          <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left mb-4">
            Transforming Data into Dynamic Solutions
          </h1>
          <p className="text-md md:text-lg mb-4">
            Empower your data with cutting-edge, data-driven solutions that
            unleash its full potential.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 py-8 pt-3">
          <div className="flex w-full justify-center md:w-1/3">
            <Image
              src="/didier-profile.jpeg"
              alt="Didier Murillo smiling, professional R Shiny Developer and Data Scientist"
              width={300}
              height={200}
              className="rounded"
              layout="intrinsic"
            />
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-md md:text-lg mb-4">
              Welcome! I'm Didier Murillo
            </p>
            <p className="text-md md:text-lg mb-4">
              I'm a Data Scientist and R Shiny Developer passionate about
              creating dynamic, data-driven applications. With over six years of
              experience, I specialize in turning complex data into interactive,
              user-friendly solutions. Discover how I can turn your data
              challenges into opportunities.
            </p>
            <h1 className="text-2xl md:text-2xl font-bold mb-3">
              How I Can Elevate Your Data:
            </h1>
            <ul className="list-disc list-inside space-y-2">
              <li>Develop Custom R Shiny Apps/Dashboards</li>
              <li>R Package Development</li>
              <li>API Development with R Plumber and Node.js</li>
              <li>App Containerization</li>
              <li>Forecasting & Time Series Analysis</li>
              <li>Experimental Design & Mixed Model Analysis</li>
            </ul>
            <br />
            <div className="mt-4 flex flex-col md:flex-row justify-left gap-4 items-stretch">
              <Link href="/projects" passHref>
                <button className="px-6 py-2 border border-gray-700 text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 w-full md:w-auto">
                  See my Projects
                </button>
              </Link>
              <a
                href="/path-to-your-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-gray-700 text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 w-full md:w-auto inline-flex justify-center items-center"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
        <div className="py-2">
          <h1 className="text-2xl md:text-2xl font-bold text-center md:text-left mb-3">
            Let's Transform Your Data
          </h1>
          <p className="text-md md:text-lg mb-4">
            Reach out to discover how we can transform your data into dynamic
            solutions that drive growth and innovation.
          </p>
          <button className="px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out animate-pulse w-full md:w-auto">
            Hire Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
