import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="divider bg-canvas-muted py-16 sm:py-24">
      <div className="page-wrap">
        <p className="section-label">Experience</p>
        <h2 className="section-title mt-2">Where I&apos;ve built</h2>

        <ol className="mt-12 divide-y divide-border border-y border-border">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.role}`}
              className="grid gap-4 py-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-8"
            >
              <div>
                <h3 className="font-serif text-xl text-ink">{job.role}</h3>
                <p className="mt-1 text-sf-blue">{job.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {job.highlights[0]}
                </p>
              </div>
              <div className="text-sm text-ink-faint sm:text-right">
                <p>{job.period}</p>
                <p className="mt-0.5">{job.location}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
