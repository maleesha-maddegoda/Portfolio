import { MinorProject, personalInfo } from "@/data/portfolio";

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics?: string[];
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
  created_at: string;
}

const GITHUB_USERNAME =
  personalInfo.github?.replace(/\/$/, "").split("/").pop() || "maleesha-maddegoda";

/**
 * Intelligent categorization based on repository topics, languages, and descriptions.
 */
export function categorizeRepo(
  repo: GitHubRepo
): "AI / ML" | "Web Development" | "Mobile App" | "Fullstack" | "Design" {
  const topics = (repo.topics || []).map((t) => t.toLowerCase());
  const name = repo.name.toLowerCase();
  const desc = (repo.description || "").toLowerCase();
  const lang = (repo.language || "").toLowerCase();
  const text = `${name} ${desc} ${topics.join(" ")}`;

  // AI & ML
  if (
    topics.some((t) =>
      [
        "ai",
        "machine-learning",
        "deep-learning",
        "pytorch",
        "tensorflow",
        "opencv",
        "computer-vision",
        "nlp",
        "llm",
        "rag",
        "neural-network",
        "keras",
        "yolo",
        "scikit-learn",
        "artificial-intelligence",
        "gemini",
      ].includes(t)
    ) ||
    text.includes("machine learning") ||
    text.includes("deep learning") ||
    text.includes("neural network") ||
    text.includes("computer vision") ||
    text.includes("pytorch") ||
    text.includes("tensorflow") ||
    text.includes("yolo") ||
    text.includes("langchain") ||
    text.includes("huggingface") ||
    text.includes("gemini") ||
    text.includes("efficientnet") ||
    text.includes("ai-powered") ||
    text.includes("ai companion") ||
    text.includes("crop disease") ||
    name.includes("ai") ||
    desc.includes(" ai ") ||
    desc.startsWith("ai ") ||
    lang === "jupyter notebook"
  ) {
    return "AI / ML";
  }

  // Mobile App
  if (
    topics.some((t) =>
      [
        "flutter",
        "react-native",
        "android",
        "ios",
        "swift",
        "kotlin",
        "expo",
        "mobile-app",
        "mobile",
      ].includes(t)
    ) ||
    text.includes("react native") ||
    text.includes("flutter") ||
    text.includes("android") ||
    text.includes("ios") ||
    text.includes("mobile app") ||
    lang === "dart" ||
    lang === "kotlin" ||
    lang === "swift"
  ) {
    return "Mobile App";
  }

  // Fullstack / Backend
  if (
    topics.some((t) =>
      [
        "fullstack",
        "full-stack",
        "mern",
        "mean",
        "fastapi",
        "django",
        "flask",
        "express",
        "backend",
        "springboot",
        "spring-boot",
        "nestjs",
      ].includes(t)
    ) ||
    text.includes("fullstack") ||
    text.includes("full-stack") ||
    text.includes("backend") ||
    text.includes("fastapi") ||
    text.includes("express") ||
    text.includes("spring boot")
  ) {
    return "Fullstack";
  }

  // Design
  if (
    topics.some((t) => ["design", "ui", "ux", "figma"].includes(t)) ||
    text.includes("figma") ||
    text.includes("ui/ux") ||
    text.includes("design system")
  ) {
    return "Design";
  }

  // Default heuristic based on primary language
  if (lang === "python") {
    return "AI / ML";
  }

  return "Web Development";
}

/**
 * Converts repository kebab-case or snake_case name into a clean, professional title.
 */
export function formatRepoTitle(rawName: string): string {
  const parts = rawName.split(/[-_]+/);
  const acronyms = new Set([
    "AI",
    "ML",
    "API",
    "NLP",
    "RAG",
    "CNN",
    "RNN",
    "GAN",
    "YOLO",
    "LLM",
    "UI",
    "UX",
    "SLIIT",
    "CV",
    "MVP",
    "IoT",
    "AR",
    "VR",
    "SDK",
    "REST",
  ]);

  return parts
    .map((word) => {
      const upper = word.toUpperCase();
      if (acronyms.has(upper)) return upper;
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

/**
 * Combines repository language and topics into curated tags.
 */
export function getRepoTags(repo: GitHubRepo): string[] {
  const tags: string[] = [];

  if (repo.language && repo.language !== "null") {
    tags.push(repo.language);
  }

  if (repo.topics && Array.isArray(repo.topics)) {
    for (const topic of repo.topics) {
      const formatted = topic
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
      if (!tags.includes(formatted) && tags.length < 5) {
        tags.push(formatted);
      }
    }
  }

  if (tags.length === 0) {
    tags.push("Software Engineering");
  }

  return tags;
}

/**
 * Fetches all public repositories for the configured GitHub username.
 */
export async function fetchGitHubProjects(): Promise<MinorProject[]> {
  const url = `https://api.github.com/users/${encodeURIComponent(
    GITHUB_USERNAME
  )}/repos?sort=pushed&direction=desc&per_page=100`;

  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Portfolio-GitHub-Sync/1.0",
  };

  const token = process.env.GITHUB_TOKEN || process.env.GITHUB_PAT;
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    headers,
    next: { revalidate: 300 }, // Cache and revalidate every 5 minutes
  });

  if (!response.ok) {
    throw new Error(
      `GitHub API error: ${response.status} ${response.statusText}`
    );
  }

  const repos: GitHubRepo[] = await response.json();

  if (!Array.isArray(repos)) {
    return [];
  }

  // Filter out:
  // 1. Profile README repository (where repo name matches username)
  // 2. Archived repos if desired, but keep active public repositories
  return repos
    .filter((repo) => repo.name.toLowerCase() !== GITHUB_USERNAME.toLowerCase())
    .map((repo) => {
      const category = categorizeRepo(repo);
      const title = formatRepoTitle(repo.name);
      const description =
        repo.description?.trim() ||
        `Production-grade repository exploring ${category.toLowerCase()} architecture, clean code standards, and modern deployment.`;
      const tags = getRepoTags(repo);
      const live =
        repo.homepage && repo.homepage.startsWith("http")
          ? repo.homepage
          : undefined;

      return {
        title,
        description,
        tags,
        category,
        github: repo.html_url,
        live,
        stars: repo.stargazers_count,
        updatedAt: repo.pushed_at,
        isFork: repo.fork,
      };
    });
}
