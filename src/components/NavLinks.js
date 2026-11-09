"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["/about", "About"],
  ["/blog", "Blog"],
  ["/projects", "Projects"],
];

export default function NavLinks({ github }) {
  const path = usePathname();
  return (
    <ul className="flex flex-wrap gap-x-7 gap-y-2 text-[15px] font-medium">
      {links.map(([href, label]) => {
        const active = path.startsWith(href);
        return (
          <li key={href}>
            <Link
              href={href}
              aria-current={active ? "page" : undefined}
              className={
                active
                  ? "text-accent underline underline-offset-[6px]"
                  : "text-ink hover:text-accent"
              }
            >
              {label}
            </Link>
          </li>
        );
      })}
      <li>
        <a href={github} className="text-ink hover:text-accent">
          GitHub
        </a>
      </li>
    </ul>
  );
}
