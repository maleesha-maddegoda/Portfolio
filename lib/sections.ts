import { achievements } from "@/data/portfolio";

// Achievements is only rendered once data/portfolio.ts has at least one entry.
export const SHOW_ACHIEVEMENTS = achievements.length > 0;

/** Page sections in order; the nav is built from this list. */
export const SECTIONS = [
  { id: "about",          label: "About" },
  { id: "projects",       label: "Projects" },
  { id: "skills",         label: "Skills" },
  { id: "experience",     label: "Experience" },
  ...(SHOW_ACHIEVEMENTS ? [{ id: "achievements", label: "Achievements" }] : []),
  { id: "certifications", label: "Certifications" },
  { id: "contact",        label: "Contact" },
];
