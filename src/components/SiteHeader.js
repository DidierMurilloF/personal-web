"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["/about", "About"],
  ["/blog", "Blog"],
  ["/projects", "Projects"],
];

// The home page has a dark hero, so its header is dark too.
export default function SiteHeader({ name, github }) {
  const path = usePathname();
  const dark = path === "/";
  const linkBase = dark ? "text-white hover:text-mint" : "text-ink hover:text-accent";
  const linkActive = dark
    ? "text-mint underline underline-offset-[6px]"
    : "text-accent underline underline-offset-[6px]";

  return (
    <header className={dark ? "border-b border-forest-line bg-forest" : "border-b border-line"}>
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-site flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-8"
      >
        <Link
          href="/"
          className={`font-display text-xl font-bold no-underline ${dark ? "text-white" : "text-ink"}`}
        >
          {name}
        </Link>
        <ul className="flex flex-wrap gap-x-7 gap-y-2 text-[15px] font-medium">
          {links.map(([href, label]) => {
            const active = path.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={active ? linkActive : linkBase}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li>
            <a href={github} className={linkBase}>
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
