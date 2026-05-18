import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import { siteConfig } from "@/data/portfolio";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} · ${siteConfig.title}`,
  description: siteConfig.heroDescription,
  keywords: [
    "Salesforce Developer",
    "Apex",
    "LWC",
    "Agentforce",
    "Data Cloud",
    "Parvez Shaik",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} — Salesforce Developer`,
    description: siteConfig.heroDescription,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${instrumentSerif.variable} font-sans`}
      >
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
