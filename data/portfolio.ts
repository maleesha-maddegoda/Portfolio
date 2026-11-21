// ═══════════════════════════════════════════════════════════
//  CENTRAL DATA FILE — All portfolio content lives here.
//  Components import and map over these arrays/objects.
//  Configured exclusively for Maleesha Maddegoda.
// ═══════════════════════════════════════════════════════════

export const personalInfo = {
  name: "Maleesha Maddegoda",
  title: "AI & ML Engineer | Full-Stack Developer",
  university: "SLIIT",
  degree: "B.Sc. (Hons) in Information Technology",
  specialization: "Artificial Intelligence",
  location: "Sri Lanka",
  email: "maleeshamaddegoda@gmail.com",
  github: "https://github.com/maleesha-maddegoda",
  linkedin: "https://www.linkedin.com/in/maleesha-maddegoda/",
  instagram: "",
  whatsappNumber: "+94 77 123 4567",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  resumeLink: "/Resume.pdf",
  bio: "Hello! My name is Maleesha. I'm pursuing a B.Sc. (Hons) in Information Technology at SLIIT, specializing in Artificial Intelligence. I architect intelligent, data-driven systems where machine learning models meet robust full-stack software craftsmanship. Specializing in computer vision, neural architectures, and scalable web solutions.",
  heroBio:
    "Third-year SLIIT undergraduate specializing in Artificial Intelligence. I build deep learning architectures, computer vision pipelines, and production-grade full-stack web applications using PyTorch, Next.js, FastAPI, and TypeScript. Seeking an AI / Machine Learning Internship.",
  typewriterPhrases: [
    "I build deep learning architectures.",
    "I develop computer vision pipelines.",
    "I build full-stack web solutions.",
    "I train neural networks.",
  ],
};

export const heroStats = [
  { value: "3+", label: "Flagship Projects" },
  { value: "3rd", label: "Year @ SLIIT" },
  { value: "AI & ML", label: "Specialization" },
  { value: "LK", label: "Based in Sri Lanka" },
];

import { IconType } from "react-icons";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJupyter,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiFigma,
  SiGit,
  SiPostman,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiFlask,
  SiFastapi,
  SiPytorch,
  SiTensorflow,
  SiOpencv,
  SiLinux,
  SiVercel,
  SiGithub,
  SiCplusplus,
  SiHuggingface,
  SiLangchain,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

// ─── SKILLS ────────────────────────────────────────────────
export interface SkillCategory {
  category: string;
  color: string;
  icon: string;
  items: {
    name: string;
    Icon?: IconType;
    iconUrl?: string;
    brandColor: string;
    darkBrandColor?: string;
    bgColor: string;
    hoverGlow: string;
  }[];
}

export const skills: SkillCategory[] = [
  {
    category: "LANGUAGES",
    color: "bg-blue-50 border-blue-200",
    icon: "💻",
    items: [
      { name: "Python", Icon: SiPython, brandColor: "#3776AB", darkBrandColor: "#5aa7e8", bgColor: "rgba(55, 118, 171, 0.12)", hoverGlow: "rgba(55, 118, 171, 0.35)" },
      { name: "TypeScript", Icon: SiTypescript, brandColor: "#3178C6", darkBrandColor: "#5b9ee8", bgColor: "rgba(49, 120, 198, 0.12)", hoverGlow: "rgba(49, 120, 198, 0.35)" },
      { name: "JavaScript", Icon: SiJavascript, brandColor: "#F7DF1E", darkBrandColor: "#f7e54f", bgColor: "rgba(247, 223, 30, 0.12)", hoverGlow: "rgba(247, 223, 30, 0.35)" },
      { name: "Java", Icon: FaJava, brandColor: "#ED8B00", darkBrandColor: "#f5a73b", bgColor: "rgba(237, 139, 0, 0.12)", hoverGlow: "rgba(237, 139, 0, 0.35)" },
      { name: "C++", Icon: SiCplusplus, brandColor: "#00599C", darkBrandColor: "#3d96db", bgColor: "rgba(0, 89, 156, 0.12)", hoverGlow: "rgba(0, 89, 156, 0.35)" },
      { name: "SQL", Icon: FaDatabase, brandColor: "#336791", darkBrandColor: "#5d99cc", bgColor: "rgba(51, 103, 145, 0.12)", hoverGlow: "rgba(51, 103, 145, 0.35)" },
      { name: "HTML5", Icon: SiHtml5, brandColor: "#E34F26", darkBrandColor: "#fa734d", bgColor: "rgba(227, 79, 38, 0.12)", hoverGlow: "rgba(227, 79, 38, 0.35)" },
      { name: "CSS3", Icon: SiCss, brandColor: "#1572B6", darkBrandColor: "#429adb", bgColor: "rgba(21, 114, 182, 0.12)", hoverGlow: "rgba(21, 114, 182, 0.35)" },
    ],
  },
  {
    category: "AI & MACHINE LEARNING",
    color: "bg-purple-50 border-purple-200",
    icon: "🧠",
    items: [
      { name: "PyTorch", Icon: SiPytorch, brandColor: "#EE4C2C", darkBrandColor: "#f76e52", bgColor: "rgba(238, 76, 44, 0.12)", hoverGlow: "rgba(238, 76, 44, 0.35)" },
      { name: "TensorFlow", Icon: SiTensorflow, brandColor: "#FF6F00", darkBrandColor: "#ff9033", bgColor: "rgba(255, 111, 0, 0.12)", hoverGlow: "rgba(255, 111, 0, 0.35)" },
      { name: "OpenCV", Icon: SiOpencv, brandColor: "#5C3EE8", darkBrandColor: "#846cf0", bgColor: "rgba(92, 62, 232, 0.12)", hoverGlow: "rgba(92, 62, 232, 0.35)" },
      { name: "Scikit-Learn", Icon: SiScikitlearn, brandColor: "#F7931E", darkBrandColor: "#f9aa4f", bgColor: "rgba(247, 147, 30, 0.12)", hoverGlow: "rgba(247, 147, 30, 0.35)" },
      { name: "Hugging Face", Icon: SiHuggingface, brandColor: "#FFD21E", darkBrandColor: "#ffe169", bgColor: "rgba(255, 210, 30, 0.12)", hoverGlow: "rgba(255, 210, 30, 0.35)" },
      { name: "LangChain", Icon: SiLangchain, brandColor: "#1C3C3C", darkBrandColor: "#489999", bgColor: "rgba(28, 60, 60, 0.15)", hoverGlow: "rgba(72, 153, 153, 0.40)" },
      { name: "Pandas", Icon: SiPandas, brandColor: "#150458", darkBrandColor: "#7c6bb5", bgColor: "rgba(21, 4, 88, 0.15)", hoverGlow: "rgba(124, 107, 181, 0.40)" },
      { name: "NumPy", Icon: SiNumpy, brandColor: "#013243", darkBrandColor: "#4eaec9", bgColor: "rgba(1, 50, 67, 0.15)", hoverGlow: "rgba(78, 174, 201, 0.40)" },
      { name: "Jupyter", Icon: SiJupyter, brandColor: "#F37626", darkBrandColor: "#f59658", bgColor: "rgba(243, 118, 38, 0.12)", hoverGlow: "rgba(243, 118, 38, 0.35)" },
    ],
  },
  {
    category: "WEB & FRAMEWORKS",
    color: "bg-emerald-50 border-emerald-200",
    icon: "🌐",
    items: [
      { name: "React", Icon: SiReact, brandColor: "#61DAFB", bgColor: "rgba(97, 218, 251, 0.12)", hoverGlow: "rgba(97, 218, 251, 0.35)" },
      { name: "Next.js", Icon: SiNextdotjs, brandColor: "#000000", darkBrandColor: "#ffffff", bgColor: "rgba(255, 255, 255, 0.08)", hoverGlow: "rgba(255, 255, 255, 0.35)" },
      { name: "FastAPI", Icon: SiFastapi, brandColor: "#009688", darkBrandColor: "#33ab9f", bgColor: "rgba(0, 150, 136, 0.12)", hoverGlow: "rgba(0, 150, 136, 0.35)" },
      { name: "Node.js", Icon: SiNodedotjs, brandColor: "#339933", darkBrandColor: "#57b857", bgColor: "rgba(51, 153, 51, 0.12)", hoverGlow: "rgba(51, 153, 51, 0.35)" },
      { name: "Express", Icon: SiExpress, brandColor: "#000000", darkBrandColor: "#cccccc", bgColor: "rgba(255, 255, 255, 0.08)", hoverGlow: "rgba(200, 200, 200, 0.35)" },
      { name: "Flask", Icon: SiFlask, brandColor: "#000000", darkBrandColor: "#e0e0e0", bgColor: "rgba(255, 255, 255, 0.08)", hoverGlow: "rgba(224, 224, 224, 0.35)" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, brandColor: "#06B6D4", bgColor: "rgba(6, 182, 212, 0.12)", hoverGlow: "rgba(6, 182, 212, 0.35)" },
    ],
  },
  {
    category: "DATABASES & STORAGE",
    color: "bg-amber-50 border-amber-200",
    icon: "🗄️",
    items: [
      { name: "PostgreSQL", Icon: SiPostgresql, brandColor: "#4169E1", darkBrandColor: "#6b8df2", bgColor: "rgba(65, 105, 225, 0.12)", hoverGlow: "rgba(65, 105, 225, 0.35)" },
      { name: "MySQL", Icon: SiMysql, brandColor: "#4479A1", darkBrandColor: "#6ea0c7", bgColor: "rgba(68, 121, 161, 0.12)", hoverGlow: "rgba(68, 121, 161, 0.35)" },
      { name: "MongoDB", Icon: SiMongodb, brandColor: "#47A248", darkBrandColor: "#68be69", bgColor: "rgba(71, 162, 72, 0.12)", hoverGlow: "rgba(71, 162, 72, 0.35)" },
      { name: "SQLite", Icon: FaDatabase, brandColor: "#003B57", darkBrandColor: "#4590b5", bgColor: "rgba(0, 59, 87, 0.12)", hoverGlow: "rgba(69, 144, 181, 0.35)" },
    ],
  },
  {
    category: "TOOLS & PLATFORMS",
    color: "bg-indigo-50 border-indigo-200",
    icon: "🛠️",
    items: [
      { name: "Docker", Icon: SiDocker, brandColor: "#2496ED", darkBrandColor: "#57aef2", bgColor: "rgba(36, 150, 237, 0.12)", hoverGlow: "rgba(36, 150, 237, 0.35)" },
      { name: "Git", Icon: SiGit, brandColor: "#F05032", darkBrandColor: "#f3725b", bgColor: "rgba(240, 80, 50, 0.12)", hoverGlow: "rgba(240, 80, 50, 0.35)" },
      { name: "GitHub", Icon: SiGithub, brandColor: "#181717", darkBrandColor: "#e6edf3", bgColor: "rgba(255, 255, 255, 0.08)", hoverGlow: "rgba(255, 255, 255, 0.35)" },
      { name: "Linux", Icon: SiLinux, brandColor: "#FCC624", darkBrandColor: "#fcd45c", bgColor: "rgba(252, 198, 36, 0.12)", hoverGlow: "rgba(252, 198, 36, 0.35)" },
      { name: "Postman", Icon: SiPostman, brandColor: "#FF6C37", darkBrandColor: "#ff8c61", bgColor: "rgba(255, 108, 55, 0.12)", hoverGlow: "rgba(255, 108, 55, 0.35)" },
      { name: "VS Code", Icon: VscVscode, brandColor: "#007ACC", darkBrandColor: "#3ea2e6", bgColor: "rgba(0, 122, 204, 0.12)", hoverGlow: "rgba(0, 122, 204, 0.35)" },
      { name: "Vercel", Icon: SiVercel, brandColor: "#000000", darkBrandColor: "#ffffff", bgColor: "rgba(255, 255, 255, 0.08)", hoverGlow: "rgba(255, 255, 255, 0.35)" },
    ],
  },
  {
    category: "DESIGN",
    color: "bg-rose-50 border-rose-200",
    icon: "🖌️",
    items: [
      { name: "Figma", Icon: SiFigma, brandColor: "#A259FF", darkBrandColor: "#b87dff", bgColor: "rgba(162, 89, 255, 0.12)", hoverGlow: "rgba(162, 89, 255, 0.35)" },
      { name: "Canva", iconUrl: "/canva.svg", brandColor: "#00C4CC", darkBrandColor: "#3dd4db", bgColor: "rgba(0, 196, 204, 0.12)", hoverGlow: "rgba(0, 196, 204, 0.35)" },
    ],
  },
];

// ─── FEATURED PROJECTS ────────────────────────────────────
export interface FeaturedProject {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  tags: string[];
  github: string;
  live?: string;
  role: string;
  reversed?: boolean;
}

export const featuredProjects: FeaturedProject[] = [];

// ─── MINOR PROJECTS ───────────────────────────────────────
export interface MinorProject {
  title: string;
  description: string;
  tags: string[];
  category: "AI / ML" | "Web Development" | "Mobile App" | "Fullstack" | "Design";
  github: string;
  live?: string;
  imageUrl?: string;
  stars?: number;
  updatedAt?: string;
  isFork?: boolean;
}

export const minorProjects: MinorProject[] = [
  {
    title: "Serenity AI Companion",
    description:
      "An empathetic, trilingual AI voice and text companion providing emotional support in English, Sinhala, and Tamil. Powered by Google Gemini with speech analysis.",
    tags: ["Google Gemini", "JavaScript", "NLP", "Speech Synthesis", "Trilingual AI"],
    category: "AI / ML",
    github: "https://github.com/maleesha-maddegoda/serenity-ai-companion",
    imageUrl: "https://opengraph.githubassets.com/1/maleesha-maddegoda/serenity-ai-companion",
    stars: 0,
  },
  {
    title: "Earth Scope",
    description:
      "Worldwide Earth-science trend analysis platform powered by real NASA POWER satellite data, rigorous statistical tests (OLS, Mann-Kendall, FDR), and Google Gemini AI.",
    tags: ["Python", "NASA POWER API", "Google Gemini AI", "Statistics", "Machine Learning"],
    category: "AI / ML",
    github: "https://github.com/maleesha-maddegoda/Earth-Scope",
    imageUrl: "https://opengraph.githubassets.com/1/maleesha-maddegoda/Earth-Scope",
    stars: 0,
  },
  {
    title: "Agrinova AI",
    description:
      "AI-powered crop disease early warning system featuring EfficientNet leaf diagnosis, HSV severity estimation, trilingual farmer advisory (Sinhala, Tamil, English), regional outbreak surveillance, and an Agriculture Officer triage dashboard.",
    tags: ["EfficientNet", "Computer Vision", "Deep Learning", "JavaScript", "HSV Analysis"],
    category: "AI / ML",
    github: "https://github.com/maleesha-maddegoda/agrinova-ai",
    imageUrl: "https://opengraph.githubassets.com/1/maleesha-maddegoda/agrinova-ai",
    stars: 0,
  },
  {
    title: "Legal Mind AI",
    description:
      "An intelligent legal intelligence platform powered by Google Gemini and FastAPI for contract risk scoring, automated summarization, deadline extraction, and interactive legal AI chat.",
    tags: ["FastAPI", "Google Gemini", "Python", "Contract Analysis", "Fullstack"],
    category: "Fullstack",
    github: "https://github.com/maleesha-maddegoda/legal-mind-ai",
    imageUrl: "https://opengraph.githubassets.com/1/maleesha-maddegoda/legal-mind-ai",
    stars: 0,
  },
  {
    title: "Intermission Cinema App",
    description:
      "A full-stack cinema management and ticket booking application built with React Native (Expo), Node.js, Express, and MongoDB.",
    tags: ["React Native", "Expo", "Node.js", "Express", "MongoDB"],
    category: "Mobile App",
    github: "https://github.com/maleesha-maddegoda/intermission-cinema-app",
    imageUrl: "https://opengraph.githubassets.com/1/maleesha-maddegoda/intermission-cinema-app",
    stars: 0,
  },
  {
    title: "Portfolio",
    description:
      "Personal portfolio showcasing my journey as an AI & ML undergraduate. Exploring Artificial Intelligence & Machine Learning architectures, neural systems, and modern full-stack web engineering.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
    category: "Web Development",
    github: "https://github.com/maleesha-maddegoda/Portfolio",
    live: "https://maleesha-maddegoda.vercel.app",
    imageUrl: "https://opengraph.githubassets.com/1/maleesha-maddegoda/Portfolio",
    stars: 0,
  },
];

// ─── EXPERIENCE ───────────────────────────────────────────
export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: "seeking" | "education" | "work";
  description: string;
  bullets: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "AI & ML Engineering Intern",
    company: "Open to Opportunities",
    period: "Seeking · 2026",
    type: "seeking",
    description:
      "Actively seeking an internship opportunity where I can contribute to production-grade artificial intelligence, computer vision, or full-stack software development teams. Ready to deliver impact from day one.",
    bullets: [
      "Rigorous background in neural architectures, computer vision, and deep learning",
      "Hands-on expertise training and optimizing PyTorch and TensorFlow models",
      "Proficient in modern full-stack engineering with Next.js, FastAPI, and TypeScript",
      "Disciplined version control, automated testing, and clean software architecture",
    ],
    tags: ["Artificial Intelligence", "Machine Learning", "Computer Vision", "Full-Stack"],
  },
];

// ─── EDUCATION ────────────────────────────────────────────
export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  tags: string[];
  logo?: string;
}

export const education: EducationItem[] = [
  {
    degree: "B.Sc. (Hons) in Information Technology",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    period: "2024 — 2028 (Expected)",
    description:
      "Specialization in Artificial Intelligence. Comprehensive curriculum encompassing advanced mathematical modeling, machine learning theory, deep learning architectures, computer vision, NLP, and production software engineering.",
    tags: ["Artificial Intelligence Specialization", "SLIIT Malabe"],
    logo: "/sliit-logo.png",
  },
  {
    degree: "G.C.E. Advanced Level (A/L) — Technology Stream",
    institution: "Mahinda Rajapaksha College – Homagama",
    period: "Completed",
    description:
      "Secondary education completed with a focus on Engineering Technology, Science for Technology, and Information Technology, establishing strong analytical and engineering fundamentals.",
    tags: ["Engineering Technology", "Science for Technology", "IT"],
    logo: "/mrc-logo.png",
  },
];

// ─── CERTIFICATIONS ───────────────────────────────────────
export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
  image?: string;
}

export const certifications: Certification[] = [
  {
    title: "AI/ML Engineer - Stage 1",
    issuer: "SLIIT",
    date: "Jul 2025",
    credentialId: "nvmv1pm18q",
    link: "https://code.sliit.org/certificates/nvmv1pml8q",
    image: "/sliit-logo.png",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    date: "Nov 2024",
    credentialId: "12985809",
    link: "https://www.skills.google/public_profiles/ac635ad9-8edd-49c1-8509-0181059d365f/badges/12985809",
    image: "/certificates/google-genai.png",
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "Google Cloud",
    date: "Nov 2024",
    credentialId: "12986456",
    link: "https://www.skills.google/public_profiles/ac635ad9-8edd-49c1-8509-0181059d365f/badges/12986456",
    image: "/certificates/google-llm.png",
  },
  {
    title: "Introduction to Responsible AI",
    issuer: "Google Cloud",
    date: "Nov 2024",
    credentialId: "12986508",
    link: "https://www.skills.google/public_profiles/ac635ad9-8edd-49c1-8509-0181059d365f/badges/12986508",
    image: "/certificates/google-responsible-ai.png",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Jul 2024",
    credentialId: "20240708-7-iz2kt1",
    link: "https://www.credly.com/badges/f4b62ec1-dd40-4fff-a8e8-14013ba15d49/linked_in_profile",
    image: "/certificates/cisco-cybersecurity.png",
  },
  {
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    date: "Feb 2024",
    credentialId: "1296456",
    link: "/certificates/Python_for_Beginners_E-Certificate.pdf",
    image: "/certificates/uom-python.png",
  },
];

// ─── ACHIEVEMENTS ─────────────────────────────────────────
export interface Achievement {
  title: string;
  organizer: string;
  date?: string;
  result: string;
  team?: string;
  description: string;
  certificate?: string;
  links?: { label: string; url: string }[];
}

export const achievements: Achievement[] = [
  {
    title: "NASA Space Apps Challenge 2026",
    organizer: "NASA & Global Space Agency Partners",
    date: "Nov 2026",
    result: "Galactic Problem Solver",
    description:
      "Awarded the Galactic Problem Solver credential for outstanding participation and engineering innovative problem-solving approaches to address critical challenges on Earth and in space.",
    certificate: "/achievements/nasa-space-apps.jpg",
  },
  {
    title: "TensorForge 2.0 — AI Engineering & MLOps Buildathon",
    organizer: "IEEE Computer Society Student Branch Chapter, KDU",
    team: "Team Ascension",
    date: "2026",
    result: "Outstanding Performance",
    description:
      "Recognized for outstanding technical contribution, dedication, and creativity in developing an end-to-end Machine Learning MVP during Phase 2 of the Inter-University AI Engineering and MLOps Buildathon.",
    certificate: "/achievements/tensorforge.jpg",
  },
  {
    title: "CodeAréna'26 — Competitive Programming Hackathon",
    organizer: "The Institution of Engineering and Technology (IET) KDU",
    team: "Zero Day",
    date: "2026",
    result: "Certificate of Appreciation",
    description:
      "Honored for active role, positive technical contribution, and collaborative problem solving with team 'Zero Day' in the CodeAréna'26 hackathon and competitive coding arena.",
    certificate: "/achievements/codearena.jpg",
  },
];
