"use client";

import { motion } from "framer-motion";
import { ArrowDown, Cloud, Linkedin, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

const stats = [
  { value: "3+", label: "Years Salesforce" },
  { value: "5K+", label: "CRM users supported" },
  { value: "63.9%", label: "AI auto-resolution" },
  { value: "4", label: "Certifications" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 sm:pt-28">
      <motion.div
        className="pointer-events-none absolute inset-0 grid-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative flex min-h-[calc(100vh-6rem)] flex-col justify-center pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs text-slate-300">
            <Cloud className="size-3.5 text-brand-400" />
            {siteConfig.availability}
          </span>
        </motion.div>

        <motion.h1
          className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="gradient-text">{siteConfig.name}</span>
          <br />
          <span className="text-slate-400">{siteConfig.title}</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-4 text-brand-400" />
            {siteConfig.location}
          </span>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-400"
          >
            Contact me
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-600 hover:bg-slate-800"
          >
            <Linkedin className="size-4" />
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-600 hover:bg-slate-800"
          >
            <Mail className="size-4" />
            Email
          </a>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass-card p-4 sm:p-5"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + i * 0.06 }}
            >
              <p className="text-2xl font-semibold text-white sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-slate-500 transition hover:text-brand-400 sm:inline-flex"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-label="Scroll to about"
        >
          <ArrowDown className="size-5" />
        </motion.a>
      </div>
    </section>
  );
}
