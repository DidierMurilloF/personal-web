"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Projects and Articles are hidden until they have real content.
const links = [
  ["/", "Home"],
  ["/technology", "Technology"],
  ["/about", "About"],
];

export default function NavLinks() {
  const path = usePathname();
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-1">
      {links.map(([href, label]) => {
        const active = href === "/" ? path === "/" : path.startsWith(href);
        return (
          <li key={href}>
            <Link
              href={href}
              aria-current={active ? "page" : undefined}
              className={`rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                active
                  ? "font-semibold underline underline-offset-4"
                  : "hover:text-gray-300"
              }`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
