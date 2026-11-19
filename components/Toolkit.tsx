"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";

export default function Toolkit() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="tech-stack" className="py-[120px] bg-[#050806] relative">
      <div className="wrap">
        <SectionHeader
          title="Tech Stack"
          subtitle="Neural network tooling, deep learning frameworks, languages, and full-stack engineering instruments."
        />

        {/* Category tabs */}
        <motion.div
          className="flex flex-wrap gap-2.5 mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {skills.map((cat, i) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(i)}
              className={`relative flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-wider border overflow-hidden transition-all duration-200 ${
                activeCategory === i
                  ? "text-[#050806] font-bold border-[#B7FF45] shadow-[0_0_15px_rgba(183,255,69,0.35)]"
                  : "bg-[#0C130F] text-[#AAB6AA] border-[rgba(183,255,69,0.2)] hover:border-[#B7FF45] hover:text-[#B7FF45]"
              }`}
            >
              {activeCategory === i && (
                <motion.span
                  layoutId="toolkit-tab-pill"
                  className="absolute inset-0 bg-[#B7FF45]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{cat.category}</span>
            </button>
          ))}
        </motion.div>

        {/* Neural Network Skill Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3.5"
          >
            {skills[activeCategory].items.map((skill, i) => {
              const activeColor = skill.darkBrandColor ?? skill.brandColor ?? "#B7FF45";

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03, duration: 0.25 }}
                  whileHover={{
                    y: -4,
                    borderColor: "#B7FF45",
                    boxShadow: "0 0 20px rgba(183, 255, 69, 0.25)",
                  }}
                  className="group relative overflow-hidden flex flex-col items-center justify-center gap-3 p-5 bg-[#0C130F] border border-[rgba(183,255,69,0.18)] cursor-default transition-all duration-300"
                >
                  {/* Subtle top corner tick */}
                  <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-[#B7FF45]/40 group-hover:border-[#B7FF45] transition-colors" />
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-[#B7FF45]/40 group-hover:border-[#B7FF45] transition-colors" />

                  {/* Tile sweep */}
                  <span aria-hidden="true" className="tile-sweep" />

                  {skill.Icon ? (
                    <skill.Icon
                      className="relative text-[34px] transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:scale-110"
                      style={{ color: activeColor }}
                    />
                  ) : skill.iconUrl ? (
                    <img
                      src={skill.iconUrl}
                      alt={skill.name}
                      className="relative w-[34px] h-[34px] transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:scale-110 object-contain"
                    />
                  ) : null}

                  <span
                    className="relative font-mono text-[0.75rem] text-center text-[#AAB6AA] tracking-wide leading-tight group-hover:text-[#F5F8F4] transition-colors duration-200"
                  >
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
