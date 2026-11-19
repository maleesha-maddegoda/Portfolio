"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  id?: string;
}

/**
 * Section header: big title with the subtitle set beside it on wide screens
 * (stacked on phones), closed by a hard rule.
 */
export default function SectionHeader({ title, subtitle, id }: SectionHeaderProps) {
  // Generate a clean technical module ID from title
  const moduleId = title.toUpperCase().replace(/[^A-Z0-9]/g, "_");

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="mb-14"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="w-1.5 h-1.5 bg-[#B7FF45] shadow-[0_0_8px_#B7FF45]" />
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B7FF45]">
          MODULE::{moduleId}
        </span>
        <span className="h-px w-12 bg-[#B7FF45]/30 ml-2" />
      </div>

      <div
        className={`grid grid-cols-1 gap-4 pb-5 border-b border-[rgba(183,255,69,0.2)] ${
          subtitle ? "md:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] md:items-end md:gap-10" : ""
        }`}
      >
        <h2 className="font-heading text-[clamp(2.4rem,5.5vw,4.2rem)] leading-[0.96] tracking-[-0.03em] font-extrabold text-[#F5F8F4] [text-wrap:balance]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm md:text-[0.95rem] leading-relaxed text-[#AAB6AA] md:pb-1 [text-wrap:pretty]">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
}
