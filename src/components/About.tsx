import { skillCategories, summary } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="page-wrap grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="section-label">About</p>
          <h2 className="section-title mt-2">
            Salesforce engineering with an AI-forward lens
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted">
            {summary.split("\n\n").map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div>
          <p className="section-label">Capabilities</p>
          <ul className="mt-4 space-y-8">
            {skillCategories.map((cat) => (
              <li key={cat.title}>
                <h3 className="text-sm font-semibold text-ink">{cat.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-white px-3 py-1 text-xs text-ink-muted"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
