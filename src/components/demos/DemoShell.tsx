import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type DemoShellProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export function DemoShell({ title, subtitle, children }: DemoShellProps) {
  return (
    <div className="min-h-dvh bg-slate-950 text-slate-200">
      <header className="border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Back to portfolio
          </Link>
          <span className="inline-flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-slate-700/50">
            <Image
              src="/parvez-logo.png"
              alt="Parvez Shaik"
              width={512}
              height={512}
              className="size-[92%] object-contain"
              unoptimized
            />
          </span>
        </div>
        <div className="mx-auto max-w-6xl px-5 pb-6 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
            Live demo
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
            {title}
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-400 sm:text-base">
            {subtitle}
          </p>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-5 py-8 sm:px-8">{children}</main>
    </div>
  );
}
