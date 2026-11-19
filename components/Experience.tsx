"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="wrap py-[120px] bg-transparent relative">
      <SectionHeader
        title="Experience & Education"
        subtitle="Mission logs, engineering objectives, and academic trajectories in Artificial Intelligence and Computing."
      />

      <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12">

        {/* ── Industry Experience / Active Mission ── */}
        <div className="lg:sticky lg:top-[100px] self-start">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-[#B7FF45]" />
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#B7FF45]">
              ACTIVE_MISSION_BROADCAST
            </h3>
          </div>

          <div className="space-y-4">
            {experience.map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-[#0C130F] border border-[rgba(183,255,69,0.35)] p-7 md:p-9 relative shadow-[0_0_30px_rgba(0,0,0,0.6)]"
              >
                {/* Corner indicators */}
                <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#B7FF45]" />
                <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-[#B7FF45]" />
                <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-[#B7FF45]" />
                <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#B7FF45]" />

                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block font-mono text-[0.72rem] bg-[#101812] border border-[#B7FF45]/30 text-[#B7FF45] px-2.5 py-1">
                    {item.period}
                  </span>
                  {item.type === "seeking" && (
                    <span className="flex items-center gap-1.5 font-mono text-[0.7rem] text-[#B7FF45] tracking-widest">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inset-0 rounded-full bg-[#B7FF45] opacity-75 animate-ping" />
                        <span className="relative h-2 w-2 rounded-full bg-[#B7FF45]" />
                      </span>
                      SEEKING ROLE
                    </span>
                  )}
                </div>

                <h4 className="font-heading text-2xl font-bold text-[#F5F8F4] mb-2">{item.role}</h4>
                <p className="font-mono text-sm text-[#AAB6AA] mb-4">
                  {item.company}
                </p>
                <p className="text-sm text-[#AAB6AA] mb-6 leading-relaxed">{item.description}</p>

                <ul className="mb-6 space-y-2.5 border-t border-[rgba(183,255,69,0.15)] pt-4">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-[#F5F8F4] leading-relaxed">
                      <span className="text-[#B7FF45] text-xs mt-1">◈</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2.5 py-1 bg-[#101812] border border-[rgba(183,255,69,0.25)] text-[#D4FFAD]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Academic Journey (Spacecraft Flight Log) ── */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-[#B7FF45]" />
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#B7FF45]">
              TRAJECTORY_LOG::ACADEMIC
            </h3>
          </div>

          <div className="border-t border-[rgba(183,255,69,0.2)]">
            {education.map((item, i) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-6 py-8 border-b border-[rgba(183,255,69,0.15)] group"
              >
                {/* Period & Crest */}
                <div className="flex flex-col items-start gap-3">
                  <span className="font-mono text-xs font-bold text-[#B7FF45] tracking-wider">{item.period}</span>
                  {item.logo && (
                    <div className="p-2 bg-[#0C130F] border border-[rgba(183,255,69,0.2)] rounded">
                      <img
                        src={item.logo}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        className="h-14 w-auto max-w-[80px] object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* Details */}
                <div>
                  <h4 className="font-heading text-xl font-bold text-[#F5F8F4] group-hover:text-[#B7FF45] transition-colors">
                    {item.degree}
                  </h4>
                  <p className="font-mono text-xs text-[#8CFF72] mt-1 mb-2.5">{item.institution}</p>
                  <p className="text-sm text-[#AAB6AA] leading-relaxed">{item.description}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[0.72rem] px-2.5 py-1 border border-[rgba(183,255,69,0.2)] text-[#AAB6AA] bg-[#0C130F] transition-all hover:border-[#B7FF45] hover:text-[#B7FF45]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
