"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type SectionSpacing = "default" | "compact" | "tight-top" | "tight-bottom";

type SectionProps = {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  spacing?: SectionSpacing;
};

const spacingClasses: Record<SectionSpacing, string> = {
  default: "py-20 sm:py-28",
  compact: "py-14 sm:py-20",
  "tight-top": "pb-20 pt-10 sm:pb-28 sm:pt-14",
  "tight-bottom": "pb-10 pt-20 sm:pb-14 sm:pt-28",
};

export function Section({
  id,
  label,
  title,
  description,
  children,
  className = "",
  spacing = "default",
}: SectionProps) {
  return (
    <section id={id} className={`${spacingClasses[spacing]} ${className}`}>
      <motion.div
        className="section-container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="section-heading">{label}</p>
        <h2 className="section-title">{title}</h2>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
            {description}
          </p>
        )}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
}
