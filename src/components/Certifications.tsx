"use client";

import { motion } from "framer-motion";
import { Award, ChevronRight } from "lucide-react";
import { useState } from "react";
import { CertificationModal } from "@/components/CertificationModal";
import { Section } from "@/components/Section";
import { certifications, type Certification } from "@/data/portfolio";

export function Certifications() {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  return (
    <>
      <Section
        id="certifications"
        label="Certifications"
        title="Salesforce credentials"
        description="Click a credential to view the certificate and what I practiced to earn it."
      >
        <motion.div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.button
              key={cert.id}
              type="button"
              onClick={() => setActiveCert(cert)}
              className="group relative w-full overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900/60 to-slate-950/80 p-5 text-left transition hover:border-brand-500/40 hover:shadow-[0_0_24px_-8px_rgba(59,130,246,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -2 }}
            >
              <motion.div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-brand-500/10 blur-2xl transition group-hover:bg-brand-500/20" />
              <motion.div className="relative flex items-start gap-4">
                <motion.div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10">
                  <Award className="size-5 text-brand-400" />
                </motion.div>
                <motion.div className="min-w-0 flex-1">
                  <h3 className="font-medium leading-snug text-white">
                    {cert.shortName}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {cert.issuer} | {cert.date}
                  </p>
                  <p className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-brand-300 transition group-hover:gap-2">
                    View credential
                    <ChevronRight className="size-3.5" />
                  </p>
                </motion.div>
              </motion.div>
            </motion.button>
          ))}
        </motion.div>
      </Section>

      <CertificationModal
        cert={activeCert}
        onClose={() => setActiveCert(null)}
      />
    </>
  );
}
