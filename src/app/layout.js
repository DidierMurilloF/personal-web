import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Didier Murillo",
  description: "R Shiny Developer & Data Scientist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <div className="flex-grow">
          <div className="main-content">
            <nav className="nav-gradient text-white py-4 font-sans flex justify-between items-center">
              <ul className="flex space-x-4">
                <li>
                  <a href="/" className="hover:text-gray-300">Home</a>
                </li>
                <li>
                  <a href="/projects" className="hover:text-gray-300">Projects</a>
                </li>
                <li>
                  <a href="/articles" className="hover:text-gray-300">Articles</a>
                </li>
                <li>
                  <a href="/about" className="hover:text-gray-300">About</a>
                </li>
              </ul>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/DidierMurilloF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.725-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .32.215.694.825.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/damurillof/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.8-0.8-1.8-1.8s0.8-1.8 1.8-1.8 1.8 0.8 1.8 1.8-0.8 1.8-1.8 1.8zm13.5 11.3h-3v-5.6c0-1.3 0-3-1.8-3-1.8 0-2.1 1.4-2.1 2.9v5.7h-3v-10h2.9v1.4h0.1c0.4-0.7 1.3-1.5 2.8-1.5 3 0 3.5 2 3.5 4.6v5.5z" />
                  </svg>
                </a>
                <a
                  href="https://cal.com/your-username/discovery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 px-4 py-1.5 text-sm font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-500 transition-all duration-200"
                >
                  Book a Call
                </a>
              </div>
            </nav>
            {children}
          </div>
        </div>
        <footer className="py-4 bg-black text-white text-center w-full">
          <div className="container mx-auto px-4">
            <p>
              &copy; {new Date().getFullYear()} Didier Murillo. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
