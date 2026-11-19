"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { featuredProjects, minorProjects } from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

const categories = ["AI / ML", "Web Development", "Mobile App", "Fullstack", "Design"] as const;
type Filter = "All" | (typeof categories)[number];
const filters: Filter[] = ["All", ...categories];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filteredProjects =
    activeFilter === "All"
      ? minorProjects
      : minorProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-[120px] bg-[#050806] relative">
      <div className="wrap">
        <SectionHeader
          title="Projects"
          subtitle="Curated spacecraft systems and intelligent architectures spanning deep learning, computer vision, and full-stack engineering."
        />

        {featuredProjects.length === 0 && minorProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full p-10 sm:p-14 border border-[rgba(183,255,69,0.25)] bg-[#0C130F] relative overflow-hidden text-center max-w-3xl mx-auto my-8 shadow-[0_16px_50px_rgba(0,0,0,0.8)]"
          >
            {/* Corner ticks */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#B7FF45]" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#B7FF45]" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#B7FF45]" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#B7FF45]" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#101812] border border-[#B7FF45]/40 text-[#B7FF45] font-mono text-xs uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-[#B7FF45] animate-ping" />
              <span>GITHUB REPOSITORIES INCOMING</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F5F8F4] mb-3">
              Projects Being Synchronized
            </h3>

            <p className="text-[#AAB6AA] text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-6 font-sans">
              Currently curating and deploying new machine learning models, neural architectures, and full-stack applications directly from GitHub. Check out active repositories below.
            </p>

            <a
              href="https://github.com/maleesha-maddegoda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 border border-[#B7FF45] bg-[#101812] text-[#B7FF45] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#B7FF45] hover:text-[#050806] shadow-[0_0_20px_rgba(183,255,69,0.2)] transition-all duration-300"
            >
              <GitHubIcon />
              <span>EXPLORE GITHUB DIRECTLY</span>
              <span className="arrow-nudge">↗</span>
            </a>
          </motion.div>
        ) : (
          <>
            {/* ── Featured Projects (alternating layout) ── */}
            {featuredProjects.length > 0 && (
              <div className="space-y-28 mb-32">
                {featuredProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`group/row grid lg:grid-cols-12 gap-8 items-center ${project.reversed ? "lg:text-right" : ""}`}
                  >
                    {/* Image Terminal: on hover a green glow blooms, light sweep, and corner highlights */}
                    <a
                      href={project.live ?? project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.live ? "Open live site" : "View code"}: ${project.title}`}
                      className={`group relative block lg:col-span-7 ${project.reversed ? "lg:order-2" : ""}`}
                    >
                      {/* Luminous green glow on hover */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-3 bg-[#B7FF45]/15 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />

                      <div className="relative overflow-hidden aspect-video bg-[#0C130F] border border-[rgba(183,255,69,0.25)] group-hover:border-[#B7FF45] transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                        {/* Futuristic corner tick marks */}
                        <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-[#B7FF45] z-10" />
                        <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 border-[#B7FF45] z-10" />
                        <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b-2 border-l-2 border-[#B7FF45] z-10" />
                        <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b-2 border-r-2 border-[#B7FF45] z-10" />

                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <span aria-hidden="true" className="shine-sweep" />

                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute bottom-4 left-4 z-[3] translate-y-2 bg-[#050806]/90 border border-[#B7FF45]/40 px-3 py-1 font-mono text-[0.72rem] font-bold uppercase tracking-wider text-[#B7FF45] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                        >
                          {project.live ? "ACCESS LIVE SYSTEM" : "INSPECT SOURCE"} <span className="arrow-nudge">↗</span>
                        </span>
                      </div>
                    </a>

                    {/* Content Panel */}
                    <div className={`lg:col-span-5 space-y-4 ${project.reversed ? "lg:order-1" : ""}`}>
                      <div className={`flex items-center gap-2 font-mono text-[0.72rem] tracking-widest text-[#B7FF45] uppercase ${project.reversed ? "lg:justify-end" : ""}`}>
                        <span className="w-1.5 h-1.5 bg-[#B7FF45] rounded-full animate-ping" />
                        <span>SYSTEM_DEPLOYMENT::0{idx + 1}</span>
                      </div>

                      <h3 className="font-heading text-2xl lg:text-3xl font-bold text-[#F5F8F4] transition-colors duration-300 group-hover/row:text-[#B7FF45]">
                        {project.title}
                      </h3>

                      <div className="relative z-10 p-5 bg-[#0C130F] border border-[rgba(183,255,69,0.2)] shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                        <p className="text-[#AAB6AA] text-sm leading-relaxed">{project.description}</p>
                        <p className="text-[#778379] text-xs mt-2.5 leading-relaxed font-mono">{project.longDescription}</p>
                      </div>

                      {/* Tags */}
                      <div className={`flex flex-wrap gap-2 ${project.reversed ? "lg:justify-end" : ""}`}>
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-xs font-mono font-medium bg-[#101812] text-[#D4FFAD] border border-[rgba(183,255,69,0.25)] transition-all duration-200 hover:border-[#B7FF45] hover:text-[#B7FF45]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Telemetry Links */}
                      <div className={`flex gap-4 pt-1 ${project.reversed ? "lg:justify-end" : ""}`}>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} source code on GitHub`}
                          className="p-2 border border-white/10 bg-[#0C130F] text-[#AAB6AA] hover:text-[#B7FF45] hover:border-[#B7FF45] hover:shadow-[0_0_12px_rgba(183,255,69,0.2)] transition-all duration-200"
                        >
                          <GitHubIcon />
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} live site`}
                            className="p-2 border border-white/10 bg-[#0C130F] text-[#AAB6AA] hover:text-[#B7FF45] hover:border-[#B7FF45] hover:shadow-[0_0_12px_rgba(183,255,69,0.2)] transition-all duration-200"
                          >
                            <ExternalLinkIcon />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* ── Other Noteworthy Projects: cohesive dark spacecraft database ── */}
            {minorProjects.length > 0 && (
              <div className="pt-16 border-t border-[rgba(183,255,69,0.18)]">
                <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-1.5 bg-[#B7FF45]" />
                      <span className="font-mono text-xs uppercase tracking-widest text-[#B7FF45]">
                        DATABASE_ARCHIVE
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#F5F8F4]">
                      Other Noteworthy Projects
                    </h3>
                    <p className="mt-1 text-sm text-[#AAB6AA]">
                      Experiments, machine learning models, and tools developed across various stacks.
                    </p>
                  </div>

                  {/* Category tabs with sliding active pill */}
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    {filters.map((f) => (
                      <button
                        key={f}
                        onClick={() => setActiveFilter(f)}
                        aria-pressed={activeFilter === f}
                        className={`relative font-mono text-xs uppercase tracking-wider px-3.5 py-2 border overflow-hidden transition-all duration-200 ${
                          activeFilter === f
                            ? "text-[#050806] font-bold border-[#B7FF45] shadow-[0_0_12px_rgba(183,255,69,0.35)]"
                            : "border-[rgba(183,255,69,0.2)] bg-[#0C130F] text-[#AAB6AA] hover:border-[#B7FF45] hover:text-[#B7FF45]"
                        }`}
                      >
                        {activeFilter === f && (
                          <motion.span
                            layoutId="other-projects-tab"
                            className="absolute inset-0 bg-[#B7FF45]"
                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                          />
                        )}
                        <span className="relative z-10">{f}</span>
                      </button>
                    ))}
                  </motion.div>
                </div>

                {/* Database Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => {
                      const primary = project.live ?? project.github;
                      return (
                        <motion.div
                          layout
                          key={project.title}
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.96 }}
                          transition={{ duration: 0.3 }}
                          className="flex"
                        >
                          <article className="group flex w-full flex-col border border-[rgba(183,255,69,0.2)] bg-[#0C130F] transition-all duration-300 hover:border-[#B7FF45] hover:shadow-[0_0_24px_rgba(183,255,69,0.2)] hover:-translate-y-1 relative">
                            {/* Full screenshot */}
                            {project.imageUrl && (
                              <a
                                href={primary}
                                target="_blank"
                                rel="noopener noreferrer"
                                tabIndex={-1}
                                aria-hidden="true"
                                className="relative block aspect-video overflow-hidden bg-[#050806] border-b border-[rgba(183,255,69,0.15)]"
                              >
                                <img
                                  src={project.imageUrl}
                                  alt=""
                                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <span aria-hidden="true" className="shine-sweep" />
                              </a>
                            )}

                            <div className="flex flex-1 flex-col p-6 sm:p-7">
                              {/* Category badge */}
                              <div className="flex flex-wrap items-center justify-between gap-3">
                                <span className="px-2.5 py-1 bg-[#101812] border border-[#B7FF45]/30 text-[#B7FF45] font-mono text-[0.72rem] font-bold uppercase tracking-wider">
                                  {project.category}
                                </span>
                              </div>

                              <h4 className="mt-4 font-heading text-xl font-bold text-[#F5F8F4] group-hover:text-[#B7FF45] transition-colors">
                                {project.title}
                              </h4>

                              <p className="mt-1 font-mono text-xs text-[#8CFF72]/80 leading-relaxed">
                                {project.tags.join(" · ")}
                              </p>

                              <p className="mt-3.5 text-sm leading-relaxed text-[#AAB6AA]">
                                {project.description}
                              </p>

                              {/* Telemetry Links */}
                              <div className="mt-auto pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/5">
                                <a
                                  href={primary}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-mono text-xs font-bold text-[#B7FF45] hover:text-[#F5F8F4] transition-colors flex items-center gap-1.5"
                                >
                                  <span>{project.live ? "ACCESS LIVE" : "INSPECT CODE"}</span>
                                  <span className="arrow-nudge">↗</span>
                                </a>

                                {project.live && (
                                  <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${project.title} source code on GitHub`}
                                    className="font-mono text-xs font-bold text-[#AAB6AA] hover:text-[#B7FF45] transition-colors flex items-center gap-1"
                                  >
                                    <span>GITHUB</span>
                                    <span className="arrow-nudge">↗</span>
                                  </a>
                                )}
                              </div>
                            </div>
                          </article>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </motion.div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
