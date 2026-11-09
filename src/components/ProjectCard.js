import Link from "next/link";
import { card } from "@/src/app/ui";

export function SmartLink({ href, className, children }) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export default function ProjectCard({ project }) {
  return (
    <article className={`${card} flex flex-col gap-3 p-6`}>
      <h3 className="font-display text-xl font-semibold">{project.name}</h3>
      <p className="leading-relaxed text-muted">{project.summary}</p>
      <p className="text-sm text-subtle">{project.tech.join(" · ")}</p>
      <p className="mt-auto flex flex-wrap gap-x-5 gap-y-1 pt-2 text-[15px] font-semibold">
        {project.links.map((l) => (
          <SmartLink key={l.href} href={l.href} className="text-accent hover:text-accent-dark">
            {l.label} <span aria-hidden="true">→</span>
          </SmartLink>
        ))}
      </p>
    </article>
  );
}
