import { certifications, education } from "@/data/portfolio";

export function Certifications() {
  return (
    <section className="divider bg-sf-blue-dark py-16 text-white sm:py-20">
      <div className="page-wrap">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-sf-cloud">
          Trailblazer credentials
        </p>
        <h2 className="mt-2 font-serif text-3xl font-normal tracking-tight">
          Certified on the Salesforce platform
        </h2>

        <ul className="mt-10 flex flex-wrap gap-3">
          {certifications.map((cert) => (
            <li
              key={cert.name}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm"
            >
              <span className="font-medium">{cert.name}</span>
              <span className="ml-2 text-sf-cloud">· {cert.date}</span>
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-6 border-t border-white/15 pt-10 sm:grid-cols-2">
          {education.map((item) => (
            <div key={item.degree}>
              <h3 className="font-serif text-lg">{item.degree}</h3>
              <p className="mt-1 text-sm text-sf-cloud">{item.school}</p>
              <p className="mt-1 text-xs text-white/60">{item.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
