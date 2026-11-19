import type { Metadata } from "next";
import "./globals.css";
import Preloader from "@/components/Preloader";
import PointerLight from "@/components/PointerLight";
import { personalInfo } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${personalInfo.name} | AI & ML Engineer | Full-Stack Portfolio`,
  description:
    "Portfolio of Maleesha Maddegoda — Artificial Intelligence & Data Science undergraduate at SLIIT, architecting intelligent neural pipelines and robust full-stack applications.",
  keywords: ["AI Engineer", "Machine Learning", "Computer Vision", "PyTorch", "Full Stack", "SLIIT", "Maleesha Maddegoda"],
  authors: [{ name: "Maleesha Maddegoda" }],
  openGraph: {
    title: "Maleesha Maddegoda | AI & ML Portfolio",
    description: "Artificial Intelligence undergraduate at SLIIT architecting intelligent systems and full-stack software.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans antialiased transition-colors duration-300"
      >
        <Preloader />
        <PointerLight />
        {children}
      </body>
    </html>
  );
}
