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

// Vegetation index over the season: observed points, then a dashed forecast.
function GrowthVisual({ label }) {
  const f = (x) => 0.12 + 0.72 * Math.exp(-(((x - 0.58) / 0.27) ** 2));
  const pts = Array.from({ length: 41 }, (_, i) => i / 40);
  const xy = (x) => `${8 + x * 184},${92 - f(x) * 80}`;
  const seen = pts.filter((x) => x <= 0.62);
  const ahead = pts.filter((x) => x >= 0.62 && x <= 0.8);
  return (
    <svg viewBox="0 0 200 100" role="img" aria-label={label} className="h-full w-full">
      <path d="M8 92H192" stroke="#C9DFDB" strokeWidth="1" />
      <polyline points={seen.map(xy).join(" ")} fill="none" stroke="#0E6E66" strokeWidth="2.5" strokeLinecap="round" />
      <polyline points={ahead.map(xy).join(" ")} fill="none" stroke="#0E6E66" strokeWidth="2.5" strokeDasharray="4 4" strokeLinecap="round" />
      {seen.filter((_, i) => i % 4 === 0).map((x) => {
        const [cx, cy] = xy(x).split(",");
        return <circle key={x} cx={cx} cy={cy} r="2.6" fill="#7FD3C8" stroke="#0E6E66" strokeWidth="1" />;
      })}
    </svg>
  );
}

// A likelihood curve whose peak sits away from the most accurate point.
function HillVisual({ label }) {
  const f = (x) => Math.exp(-(((x - 0.42) / 0.2) ** 2));
  const pts = Array.from({ length: 61 }, (_, i) => i / 60);
  const xy = (x) => `${8 + x * 184},${90 - f(x) * 74}`;
  return (
    <svg viewBox="0 0 200 100" role="img" aria-label={label} className="h-full w-full">
      <path d="M8 90H192" stroke="#C9DFDB" strokeWidth="1" />
      <polygon points={`8,90 ${pts.map(xy).join(" ")} 192,90`} fill="#E3F0EE" />
      <polyline points={pts.map(xy).join(" ")} fill="none" stroke="#0E6E66" strokeWidth="2.5" />
      <path d={`M${8 + 0.42 * 184} 16V90`} stroke="#0E6E66" strokeWidth="1.2" strokeDasharray="3 3" />
      <path d={`M${8 + 0.66 * 184} 16V90`} stroke="#E07B39" strokeWidth="1.6" />
      <circle cx={8 + 0.66 * 184} cy="16" r="3.5" fill="#E07B39" />
    </svg>
  );
}

export function ProjectVisual({ project, className = "" }) {
  return (
    <div className={`flex items-center justify-center bg-[#F1F5F4] p-6 ${className}`}>
      {project.visual === "growth" ? (
        <GrowthVisual label={project.visualLabel} />
      ) : project.visual === "hill" ? (
        <HillVisual label={project.visualLabel} />
      ) : project.visual === "bars" ? (
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
          {showLinks || !primary ? (
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
        {showLinks && <p className="text-sm text-subtle">{project.tech.join(" · ")}</p>}
        {showLinks && project.links.length > 0 && (
          <>
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
