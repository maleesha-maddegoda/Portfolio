"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { personalInfo } from "@/data/portfolio";
import SplineRobot from "@/components/SplineRobot";
import NetworkBackground from "@/components/NetworkBackground";

// Build the typewriter sequence: [phrase, pause, ...]
const buildSequence = (phrases: string[]) => {
  const seq: (string | number)[] = [];
  phrases.forEach((p) => { seq.push(p, 2400); });
  return seq;
};

const TECH = [
  "Python", "PyTorch", "TensorFlow", "React", "Next.js", 
  "Node.js", "OpenCV", "Scikit-Learn", "FastAPI", "MongoDB", "PostgreSQL"
];

export default function Hero() {
  const [firstName, ...rest] = personalInfo.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <div className="relative min-h-screen flex flex-col justify-end pt-[clamp(84px,12vh,120px)] bg-[#050806] overflow-hidden">

      {/* Node-network background */}
      <NetworkBackground />

      {/* Subtle spaceship HUD background grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(183,255,69,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(183,255,69,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at 50% 50%, #000 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, #000 40%, transparent 80%)",
        }}
      />

      {/* Ambient green spacecraft atmosphere glow */}
      <div
        className="absolute -right-[200px] -top-[200px] w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(183,255,69,0.15), transparent 65%)" }}
      />
      <div
        className="absolute left-[-200px] bottom-[100px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(140,255,114,0.08), transparent 70%)" }}
      />

      {/* ── Interactive Spline Robot: own block under the text on phones, right side on desktop ── */}
      <motion.div
        className="relative order-2 w-full h-[420px] sm:h-[520px] z-0 pointer-events-none lg:order-none lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[58%] lg:pointer-events-auto"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <div className="absolute inset-0">
          {/* Luminous Alien Tech Green Backlight Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ paddingBottom: "18%" }}>
            <div
              style={{
                width: "520px",
                height: "520px",
                maxWidth: "92%",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(183,255,69,0.40) 0%, rgba(140,255,114,0.22) 35%, rgba(5,8,6,0.10) 65%, transparent 80%)",
                filter: "blur(36px)",
              }}
            />
          </div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ paddingBottom: "18%" }}
            animate={{ opacity: [0.75, 1, 0.75] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          >
            <div
              style={{
                width: "290px",
                height: "290px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(183,255,69,0.65) 0%, rgba(140,255,114,0.35) 45%, transparent 72%)",
                filter: "blur(18px)",
                boxShadow: "0 0 60px 20px rgba(183,255,69,0.25)",
              }}
            />
          </motion.div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ paddingBottom: "18%" }}
            animate={{ opacity: [0.6, 0.95, 0.6] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.6 }}
          >
            <div
              style={{
                width: "140px",
                height: "140px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(212,255,173,0.85) 0%, rgba(183,255,69,0.45) 55%, transparent 75%)",
                filter: "blur(12px)",
              }}
            />
          </motion.div>

          {/* Spline scene — renders on top of glow */}
          <div className="absolute inset-0 overflow-hidden bg-transparent" style={{ zIndex: 1 }}>
            <div className="w-full h-full min-h-[280px] md:min-h-[400px]">
              <SplineRobot />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Content (left column on desktop; robot fills the right) ── */}
      <div className="wrap relative z-10 order-1 pointer-events-none flex-1 flex items-center py-[clamp(14px,3.5vh,40px)]">
        <div className="w-full lg:max-w-[56%]">

          {/* Spacecraft Telemetry HUD Indicators */}
          <motion.div
            className="mb-[clamp(18px,3vh,32px)] flex flex-wrap items-center gap-2 font-mono text-[0.72rem] tracking-[0.16em] uppercase"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 border border-[#B7FF45]/35 bg-[#0C130F]/90 backdrop-blur-md px-3 py-1.5 text-[#F5F8F4] shadow-[0_0_12px_rgba(183,255,69,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-[#B7FF45] opacity-75 animate-ping" />
                <span className="relative h-2 w-2 rounded-full bg-[#B7FF45]" />
              </span>
              SYSTEM: ONLINE
            </span>

            <span className="inline-flex items-center gap-1.5 border border-white/10 bg-[#0C130F]/60 px-3 py-1.5 text-[#AAB6AA]">
              <span className="text-[#B7FF45]">CORE:</span> INITIALIZED
            </span>

            <span className="hidden sm:inline-flex items-center gap-1.5 border border-white/10 bg-[#0C130F]/60 px-3 py-1.5 text-[#AAB6AA]">
              <span className="text-[#B7FF45]">SECTOR:</span> SRI LANKA
            </span>
          </motion.div>

          {/* Professional Role Title */}
          <motion.div
            className="flex items-center gap-2 mb-2 font-mono text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#B7FF45]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span>AI &amp; ML ENGINEER</span>
            <span className="text-white/40">//</span>
            <span>FULL-STACK DEVELOPER</span>
          </motion.div>

          {/* Giant Hero Headline */}
          <motion.h1
            className="font-heading font-black uppercase leading-[0.88] tracking-[-0.03em] text-[clamp(2.8rem,11vw,4.8rem)] lg:text-[clamp(3.6rem,min(6.8vw,10.5vh),6.6rem)] text-[#F5F8F4]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {firstName}
            <span
              className="block"
              style={{
                color: "#050806",
                WebkitTextStroke: "4px #B7FF45",
                paintOrder: "stroke fill",
              }}
            >
              {lastName}.
            </span>
          </motion.h1>

          {/* Typewriter + bio, then futuristic CTAs */}
          <div className="flex flex-col gap-[clamp(16px,3vh,28px)] mt-[clamp(16px,3vh,28px)]">
            <div>
              <motion.div
                className="font-mono text-lg lg:text-xl font-medium min-h-[2rem] mb-3 flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
              >
                <span className="text-[#B7FF45]">&gt;</span>
                <TypeAnimation
                  sequence={buildSequence(personalInfo.typewriterPhrases)}
                  repeat={Infinity}
                  speed={60}
                  deletionSpeed={70}
                  className="text-[#D4FFAD]"
                />
              </motion.div>

              <motion.p
                className="text-base sm:text-lg leading-relaxed max-w-[540px] text-[#AAB6AA]"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
              >
                Building intelligent systems, exploring artificial intelligence, and engineering high-impact digital experiences for the future.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-3.5 pt-1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="pointer-events-auto inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#B7FF45] text-[#050806] font-mono text-sm font-bold tracking-wider uppercase hover:bg-[#8CFF72] hover:shadow-[0_0_24px_rgba(183,255,69,0.5)] transition-all duration-200"
              >
                EXPLORE MY WORK <span className="arrow-nudge">↗</span>
              </a>

              <a
                href={personalInfo.resumeLink}
                download
                className="pointer-events-auto inline-flex items-center gap-2.5 px-6 py-3.5 border border-[#B7FF45]/40 bg-[#0C130F] text-[#F5F8F4] font-mono text-sm font-bold tracking-wider uppercase hover:border-[#B7FF45] hover:text-[#B7FF45] hover:shadow-[0_0_18px_rgba(183,255,69,0.25)] transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                DOWNLOAD CV
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="pointer-events-auto inline-flex items-center gap-2 px-5 py-3.5 border border-white/15 bg-transparent text-[#AAB6AA] font-mono text-xs uppercase hover:text-[#B7FF45] hover:border-[#B7FF45]/40 transition-colors"
              >
                CONTACT TERMINAL
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Spacecraft Tech Telemetry Marquee ── */}
      <motion.div
        className="relative z-10 order-3 overflow-hidden whitespace-nowrap py-3.5 bg-[#0C130F]/90 backdrop-blur-md border-y border-[rgba(183,255,69,0.2)] text-[#B7FF45] font-mono font-bold text-xs sm:text-sm tracking-[0.22em]"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <div className="marquee-track flex items-center">
          {Array.from({ length: 4 }).flatMap((_, rep) =>
            TECH.map((tech) => (
              <span key={`${rep}-${tech}`} className="inline-flex items-center gap-6 mx-5 uppercase">
                <span>{tech}</span>
                <span className="text-[#8CFF72]/50 text-xs">◈</span>
              </span>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
}
