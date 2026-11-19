"use client";

import { motion } from "framer-motion";
import { personalInfo, heroStats } from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const RECENT = [
  "Python / PyTorch", "React / Next.js",
  "FastAPI / Node.js", "OpenCV / YOLOv8",
  "PostgreSQL / MongoDB", "Scikit-Learn / SciPy",
  "LLMs & Generative AI", "Docker / Cloud Deploy",
  "TypeScript / REST APIs",
];

export default function About() {
  return (
    <section id="about" className="wrap py-[120px] relative">
      <SectionHeader
        title="About Me"
        subtitle="Identity profile and technical capabilities of an AI & ML Engineer and Full-Stack Developer."
      />

      <div className="grid grid-cols-2 lg:grid-cols-12 gap-4">

        {/* ── Photo HUD Terminal ── */}
        <motion.div
          className="col-span-2 lg:col-span-4 lg:row-span-2 min-h-[460px] bg-[#0C130F] text-[#F5F8F4] flex flex-col justify-between overflow-hidden relative border border-[rgba(183,255,69,0.25)] shadow-[0_0_25px_rgba(0,0,0,0.6)] group"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Futuristic corner brackets */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#B7FF45] z-20 pointer-events-none" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#B7FF45] z-20 pointer-events-none" />
          <div className="absolute bottom-12 left-2 w-3 h-3 border-b-2 border-l-2 border-[#B7FF45] z-20 pointer-events-none" />
          <div className="absolute bottom-12 right-2 w-3 h-3 border-b-2 border-r-2 border-[#B7FF45] z-20 pointer-events-none" />

          {/* Telemetry header tag */}
          <div className="px-4 py-2.5 bg-[#050806]/90 border-b border-[rgba(183,255,69,0.18)] font-mono text-[0.68rem] tracking-[0.2em] uppercase text-[#AAB6AA] flex items-center justify-between z-10">
            <span className="flex items-center gap-1.5 text-[#B7FF45]">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B7FF45] animate-pulse" />
              PROFILE_ID::MM-2026
            </span>
            <span className="text-white/40">SEC//01</span>
          </div>

          <div className="relative flex-1 min-h-[360px] overflow-hidden">
            <img
              src="/profile.jpg"
              alt={personalInfo.name}
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Futuristic HUD scanning beam */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#B7FF45]/10 to-transparent h-12 w-full animate-hud-scan opacity-60" />

            {/* Subtle green overlay gradient */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0C130F] via-transparent to-transparent opacity-80" />

            {/* Floating tech HUD chips strictly placed in outer corners (zero overlap with face) */}
            {/* Top-Left: Python & PyTorch */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
              className="absolute left-2.5 top-2.5 px-2 py-1 bg-[#050806]/90 backdrop-blur-md border border-[#B7FF45]/40 text-[0.68rem] font-mono text-[#F5F8F4] flex items-center gap-1.5 shadow-[0_0_10px_rgba(183,255,69,0.2)] z-10"
            >
              <i className="devicon-python-plain colored text-xs" />
              <span>Python / PyTorch</span>
            </motion.div>

            {/* Top-Right: Next.js & React */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.5 }}
              className="absolute right-2.5 top-2.5 px-2 py-1 bg-[#050806]/90 backdrop-blur-md border border-[#B7FF45]/40 text-[0.68rem] font-mono text-[#F5F8F4] flex items-center gap-1.5 shadow-[0_0_10px_rgba(183,255,69,0.2)] z-10"
            >
              <i className="devicon-react-original colored text-xs" />
              <span>Next.js / React</span>
            </motion.div>

            {/* Bottom-Left: Neural Architectures on dark jacket */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 1 }}
              className="absolute left-2.5 bottom-3 px-2 py-1 bg-[#050806]/90 backdrop-blur-md border border-[#B7FF45]/50 text-[0.68rem] font-mono text-[#B7FF45] flex items-center gap-1.5 shadow-[0_0_12px_rgba(183,255,69,0.25)] z-10"
            >
              <span className="w-1.5 h-1.5 bg-[#B7FF45] rounded-full animate-ping" />
              <span>NEURAL ARCHITECTURES</span>
            </motion.div>

            {/* Bottom-Right: LLMs & GenAI on dark jacket */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3.9, ease: "easeInOut", delay: 1.5 }}
              className="absolute right-2.5 bottom-3 px-2 py-1 bg-[#050806]/90 backdrop-blur-md border border-[#B7FF45]/50 text-[0.68rem] font-mono text-[#8CFF72] flex items-center gap-1 shadow-[0_0_12px_rgba(183,255,69,0.25)] z-10"
            >
              <span className="text-[#B7FF45] text-xs">⚡</span>
              <span>LLMs &amp; GenAI</span>
            </motion.div>
          </div>

          {/* ── HUD Telemetry Core Stack Tray ── */}
          <div className="px-3.5 py-2.5 bg-[#050806]/95 border-t border-[rgba(183,255,69,0.18)]">
            <div className="flex items-center justify-between font-mono text-[0.62rem] text-[#778379] uppercase tracking-widest mb-1.5">
              <span className="text-[#B7FF45]">CORE CAPABILITIES:</span>
              <span>ACTIVE MATRIX</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 bg-[#101812] border border-[rgba(183,255,69,0.25)] text-[0.66rem] font-mono text-[#D4FFAD]">Computer Vision</span>
              <span className="px-2 py-0.5 bg-[#101812] border border-[rgba(183,255,69,0.25)] text-[0.66rem] font-mono text-[#F5F8F4]">YOLOv8</span>
              <span className="px-2 py-0.5 bg-[#101812] border border-[rgba(183,255,69,0.25)] text-[0.66rem] font-mono text-[#B7FF45]">FastAPI</span>
              <span className="px-2 py-0.5 bg-[#101812] border border-[rgba(183,255,69,0.25)] text-[0.66rem] font-mono text-[#F5F8F4]">Node.js</span>
              <span className="px-2 py-0.5 bg-[#101812] border border-[rgba(183,255,69,0.25)] text-[0.66rem] font-mono text-[#8CFF72]">TypeScript</span>
              <span className="px-2 py-0.5 bg-[#101812] border border-[rgba(183,255,69,0.25)] text-[0.66rem] font-mono text-[#D4FFAD]">PostgreSQL</span>
            </div>
          </div>

          <div className="px-4 py-3 bg-[#050806] font-mono text-[0.72rem] tracking-wider text-[#AAB6AA] flex justify-between items-center border-t border-[rgba(183,255,69,0.18)]">
            <span className="text-[#F5F8F4] font-semibold">{personalInfo.university}</span>
            <span className="text-[#B7FF45]">{personalInfo.specialization}</span>
          </div>
        </motion.div>

        {/* ── Bio Terminal Cell ── */}
        <motion.div
          className="col-span-2 lg:col-span-8 p-7 md:p-9 bg-[#0C130F] border border-[rgba(183,255,69,0.2)] relative shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Top-right corner tag */}
          <div className="absolute top-3 right-4 font-mono text-[0.68rem] tracking-[0.2em] uppercase text-[#B7FF45]/60">
            // TERMINAL_LOG
          </div>

          <div className="flex items-center gap-2 mb-3 font-mono text-xs text-[#B7FF45]">
            <span>&gt;</span>
            <span className="uppercase tracking-widest">AUTHENTICATED USER INTRO</span>
          </div>

          <h3 className="font-heading text-[clamp(1.6rem,2.8vw,2.3rem)] leading-[1.1] tracking-[-0.025em] font-bold text-[#F5F8F4] mb-5">
            Engineering intelligence. Crafting{" "}
            <span className="text-[#B7FF45]">scalable systems.</span>
          </h3>

          <p className="text-[#AAB6AA] text-[1rem] sm:text-[1.05rem] mb-4 leading-relaxed max-w-[700px]">
            {personalInfo.bio}
          </p>

          <p className="text-[#AAB6AA] text-[0.95rem] leading-relaxed max-w-[700px]">
            Actively seeking an internship opportunity for 2026 where I can deploy robust machine learning pipelines, optimize computational workloads, and deliver production-grade software in an innovative engineering environment.
          </p>
        </motion.div>

        {/* ── Stat HUD Panels ── */}
        {heroStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            custom={i + 2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-2 min-h-[140px] p-5 bg-[#0C130F] border border-[rgba(183,255,69,0.2)] relative flex flex-col justify-between transition-all duration-300 hover:border-[#B7FF45] hover:shadow-[0_0_20px_rgba(183,255,69,0.15)] group"
          >
            <div className="flex items-center justify-between font-mono text-[0.68rem] tracking-widest text-[#778379] uppercase">
              <span>STAT::0{i + 1}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF45]/40 group-hover:bg-[#B7FF45] transition-colors" />
            </div>

            <b className="font-heading text-[clamp(1.4rem,2.2vw,2rem)] leading-[1] tracking-[-0.03em] font-extrabold text-[#F5F8F4] group-hover:text-[#B7FF45] transition-colors mt-2">
              {stat.value}
            </b>

            <span className="font-mono text-[0.75rem] text-[#AAB6AA] tracking-wide mt-1">
              {stat.label}
            </span>
          </motion.div>
        ))}

        {/* ── Active Neural-Network Tooling ── */}
        <motion.div
          className="col-span-2 lg:col-span-12 p-6 md:p-7 bg-[#090E0B] border border-[rgba(183,255,69,0.2)]"
          custom={6}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-[rgba(183,255,69,0.15)] font-mono text-[0.75rem] tracking-[0.2em] uppercase text-[#B7FF45]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#B7FF45] rounded-full animate-ping" />
              ACTIVE NEURAL CAPABILITIES &amp; CORE TECH:
            </span>
            <span className="hidden sm:inline text-[#778379]">READY TO DEPLOY</span>
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
            {RECENT.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 py-2 border-b border-white/5 text-[0.92rem] font-mono text-[#F5F8F4] transition-colors hover:text-[#B7FF45]"
              >
                <span className="text-[#B7FF45] font-bold text-xs">◈</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
