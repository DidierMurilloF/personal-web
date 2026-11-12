import Link from "next/link";
import FieldMap from "./FieldMap";

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

const BARS = [52, 58, 55, 63, 70, 66, 74, 88, 96, 84];

export function ProjectVisual({ project, className = "" }) {
  return (
    <div className={`flex items-center justify-center bg-[#F1F5F4] p-6 ${className}`}>
      {project.visual === "bars" ? (
        <div
          role="img"
          aria-label={project.visualLabel}
          className="flex h-full w-full items-end gap-2"
        >
          {BARS.map((h, i) => (
            <div
              key={i}
              className={`flex-1 rounded-t ${i === BARS.length - 1 ? "bg-accent" : "bg-[#9CCBC4]"}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      ) : (
        <FieldMap
          kind={project.visual}
          label={project.visualLabel}
          className="h-full w-full"
        />
      )}
    </div>
  );
}

export default function ProjectCard({ project, showLinks = false }) {
  const primary = project.links[0];
  return (
    <article className="relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-colors hover:border-accent">
      <ProjectVisual project={project} className="h-44" />
      <div className="flex flex-1 flex-col gap-2 p-6">
        <p className="font-mono text-xs text-subtle">{project.kind}</p>
        <h3 className="font-display text-[22px] font-semibold">
          {showLinks ? (
            project.name
          ) : (
            <SmartLink
              href={primary.href}
              className="text-ink no-underline after:absolute after:inset-0"
            >
              {project.name}
            </SmartLink>
          )}
        </h3>
        <p className="leading-relaxed text-muted">
          {showLinks ? project.summary : project.short}
        </p>
        {showLinks && (
          <>
            <p className="text-sm text-subtle">{project.tech.join(" · ")}</p>
            <p className="mt-auto flex flex-wrap gap-x-5 gap-y-1 pt-2 text-[15px] font-semibold">
              {project.links.map((l) => (
                <SmartLink key={l.href} href={l.href} className="text-accent hover:text-accent-dark">
                  {l.label} <span aria-hidden="true">→</span>
                </SmartLink>
              ))}
            </p>
          </>
        )}
      </div>
    </article>
  );
}
