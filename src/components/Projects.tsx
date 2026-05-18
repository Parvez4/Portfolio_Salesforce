import { projects } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";

function ProjectPreview({
  accent,
  title,
}: {
  accent: string;
  title: string;
}) {
  const gridId = `grid-${title.replace(/\s/g, "").slice(0, 12)}`;

  return (
    <div
      className={`relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-gradient-to-br ${accent}`}
      aria-hidden
    >
      <div className="absolute inset-0 opacity-30">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id={gridId}
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 24 0 L 0 0 0 24"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${gridId})`} />
        </svg>
      </div>
      <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/20 bg-white/10 p-3 backdrop-blur-sm">
        <div className="flex gap-2">
          <span className="h-2 w-2 rounded-full bg-white/80" />
          <span className="h-2 w-16 rounded-full bg-white/50" />
        </div>
        <div className="mt-3 space-y-1.5">
          <span className="block h-2 w-3/4 rounded bg-white/40" />
          <span className="block h-2 w-1/2 rounded bg-white/25" />
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="work" className="py-16 sm:py-24">
      <div className="page-wrap">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-label">Selected work</p>
            <h2 className="section-title mt-2">
              Salesforce builds with measurable impact
            </h2>
          </div>
          <a href="#contact" className="link-arrow shrink-0">
            Discuss a project
            <ArrowRight className="size-4" />
          </a>
        </div>

        <ul className="mt-12 space-y-16 sm:space-y-20">
          {projects.map((project, index) => (
            <li
              key={project.title}
              className="grid gap-8 border-t border-border pt-12 first:border-t-0 first:pt-0 lg:grid-cols-2 lg:gap-12"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <ProjectPreview accent={project.accent} title={project.title} />
              </div>

              <article className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="font-mono text-sm text-sf-blue">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm text-ink-faint">{project.category}</p>
                <h3 className="mt-2 font-serif text-2xl tracking-tight text-ink sm:text-3xl">
                  {project.subtitle}
                </h3>
                <p className="mt-1 text-lg font-medium text-ink-muted">
                  {project.title}
                </p>

                <p className="mt-5 text-base leading-relaxed text-ink-muted">
                  {project.description}
                </p>

                {project.metrics.length > 0 && (
                  <p className="mt-4 text-sm font-medium text-sf-blue">
                    {project.metrics
                      .map((m) => `${m.value} ${m.label}`)
                      .join(" · ")}
                  </p>
                )}

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border bg-canvas-muted px-3 py-1 text-xs text-ink-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="link-arrow mt-6">
                  Learn more
                  <ArrowRight className="size-4" />
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
