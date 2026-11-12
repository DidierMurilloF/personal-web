import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/src/components/SiteHeader";
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
    default: `${site.name} | ${site.title}`,
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
        <SiteHeader name={site.name} github={github} />

        <main id="main" className="flex-grow">
          {children}
        </main>

        <footer className="bg-forest text-forest-text">
          <div
            className={`${wrap} flex flex-wrap justify-between gap-8 pb-10 pt-14`}
          >
            <div className="max-w-md">
              <p className="mb-2 font-display text-2xl font-semibold text-white">
                Say hi
              </p>
              <p className="leading-relaxed">
                Working on field data, predictive models or ag tools? I&rsquo;d
                like to hear about it.
              </p>
            </div>
            <ul
              aria-label="Elsewhere"
              className="flex flex-wrap items-center gap-6 font-medium"
            >
              <li>
                <a href={linkedin} className="text-white hover:text-mint">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={github} className="text-white hover:text-mint">
                  GitHub
                </a>
              </li>
              {email && (
                <li>
                  <a
                    href={`mailto:${email}`}
                    className="text-white hover:text-mint"
                  >
                    Email
                  </a>
                </li>
              )}
              <li>
                <a href="/rss.xml" className="text-white hover:text-mint">
                  RSS
                </a>
              </li>
            </ul>
          </div>
          <p className={`${wrap} pb-8 text-sm text-forest-dim`}>
            &copy; {new Date().getFullYear()} {site.name}
          </p>
        </footer>
      </body>
    </html>
  );
}
