import Link from "next/link";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavLinks from "@/src/components/NavLinks";
import { site } from "@/src/content/site";
import { wrap } from "./ui";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-grotesk",
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Statistician & R developer`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    images: ["/didier-profile.jpeg"],
  },
  alternates: {
    types: { "application/rss+xml": "/rss.xml" },
  },
};

export default function RootLayout({ children }) {
  const { github, linkedin, email } = site.links;
  return (
    <html
      lang="en"
      className={`${inter.variable} ${grotesk.variable} ${mono.variable}`}
    >
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:bg-white focus:p-2"
        >
          Skip to content
        </a>
        <header className="border-b border-line">
          <nav
            aria-label="Main"
            className={`${wrap} flex flex-wrap items-center justify-between gap-4 py-5`}
          >
            <Link
              href="/"
              className="font-display text-xl font-bold text-ink no-underline"
            >
              {site.name}
            </Link>
            <NavLinks github={github} />
          </nav>
        </header>

        <main id="main" className="flex-grow">
          {children}
        </main>

        <footer className="bg-ink text-[#E8E8E3]">
          <div
            className={`${wrap} flex flex-wrap justify-between gap-8 pb-10 pt-14`}
          >
            <div className="max-w-md">
              <p className="mb-2 font-display text-2xl font-semibold text-white">
                Say hi
              </p>
              <p className="leading-relaxed text-[#BDBDB6]">
                Questions about a post, an idea, or just want to connect? I read
                every message.
              </p>
            </div>
            <ul
              aria-label="Elsewhere"
              className="flex flex-wrap items-center gap-6 font-medium"
            >
              <li>
                <a href={linkedin} className="text-white hover:text-accent-soft">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={github} className="text-white hover:text-accent-soft">
                  GitHub
                </a>
              </li>
              {email && (
                <li>
                  <a
                    href={`mailto:${email}`}
                    className="text-white hover:text-accent-soft"
                  >
                    Email
                  </a>
                </li>
              )}
              <li>
                <a href="/rss.xml" className="text-white hover:text-accent-soft">
                  RSS
                </a>
              </li>
            </ul>
          </div>
          <p className={`${wrap} pb-8 text-sm text-[#9A9A93]`}>
            &copy; {new Date().getFullYear()} {site.name}
          </p>
        </footer>
      </body>
    </html>
  );
}
