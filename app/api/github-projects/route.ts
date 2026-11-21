import { NextResponse } from "next/server";
import { fetchGitHubProjects } from "@/lib/github";
import { minorProjects } from "@/data/portfolio";

export const runtime = "nodejs";
export const revalidate = 300; // Cache for 5 minutes (ISR)

export async function GET() {
  try {
    const liveProjects = await fetchGitHubProjects();

    return NextResponse.json({
      success: true,
      source: "github",
      count: liveProjects.length,
      lastUpdated: new Date().toISOString(),
      projects: liveProjects,
    });
  } catch (error: any) {
    console.error("Error syncing GitHub repositories:", error);

    // Graceful fallback to static portfolio data if offline or rate-limited
    return NextResponse.json({
      success: false,
      source: "fallback",
      error: error.message || "Failed to fetch from GitHub",
      count: minorProjects.length,
      lastUpdated: new Date().toISOString(),
      projects: minorProjects,
    });
  }
}
