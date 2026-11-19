"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { SECTIONS } from "@/lib/sections";

// Nav order and numbering come from the shared section list, so they always match the page.
const NAV_ITEMS = SECTIONS;


export default function Nav() {
  const [active,    setActive]    = useState("home");
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  const { scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, top: Infinity };
        return { id: item.id, top: Math.abs(el.getBoundingClientRect().top) };
      });

      const homeEl = document.getElementById("home");
      if (homeEl) {
        sections.push({ id: "home", top: Math.abs(homeEl.getBoundingClientRect().top) });
      }

      const closest = sections.reduce((a, b) => (a.top < b.top ? a : b));
      setActive(closest.id);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? "backdrop-blur-xl border-[rgba(183,255,69,0.2)] bg-[#050806]/85 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
            : "border-transparent bg-transparent"
        }`}
      >
        {/* Scroll progress indicator */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B7FF45] to-[#8CFF72] shadow-[0_0_8px_#B7FF45] origin-left"
          style={{ scaleX: scrollProgress }}
        />

        <div className="wrap flex items-center justify-between h-[74px]">

          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2 font-mono font-bold text-[0.95rem] text-[#F5F8F4] hover:text-[#B7FF45] transition-colors group"
          >
            <span className="text-[#B7FF45]/60 group-hover:text-[#B7FF45] transition-colors">&lt;</span>
            <b className="grid place-items-center w-[32px] h-[32px] bg-[#0C130F] border border-[#B7FF45]/40 text-[#B7FF45] text-[0.8rem] font-mono font-bold shadow-[0_0_10px_rgba(183,255,69,0.25)] group-hover:bg-[#B7FF45] group-hover:text-[#050806] transition-all">
              MM
            </b>
            <span className="text-[#B7FF45]/60 group-hover:text-[#B7FF45] transition-colors">/&gt;</span>
          </button>

          {/* Telemetry status badge */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-[#0C130F] border border-[rgba(183,255,69,0.2)] text-[0.7rem] font-mono tracking-widest text-[#AAB6AA]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-[#B7FF45] opacity-75 animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-[#B7FF45]" />
            </span>
            <span className="text-[#B7FF45]">SYSTEM: ONLINE</span>
            <span className="text-[#778379]">•</span>
            <span>AVAILABLE</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-2">
            <ul className="flex items-center gap-1 font-mono text-[0.8rem]">
              {NAV_ITEMS.map(({ id, label }) => {
                const isActive = active === id;
                return (
                  <li key={id}>
                    <button
                      onClick={() => scrollTo(id)}
                      className={`relative px-3 py-1.5 transition-colors duration-200 uppercase tracking-wider ${
                        isActive
                          ? "text-[#B7FF45] font-semibold"
                          : "text-[#AAB6AA] hover:text-[#F5F8F4] hover:bg-[#B7FF45]/5"
                      }`}
                    >
                      {label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-underline"
                          className="absolute left-2 right-2 bottom-0 h-0.5 bg-[#B7FF45] shadow-[0_0_8px_#B7FF45]"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Resume Button */}
            <a
              href={personalInfo.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-2 px-4 py-2 border border-[#B7FF45]/40 bg-[#0C130F] text-[0.78rem] font-mono font-bold tracking-wider text-[#B7FF45] hover:bg-[#B7FF45] hover:text-[#050806] hover:shadow-[0_0_15px_rgba(183,255,69,0.35)] transition-all duration-200"
            >
              [ CV / RESUME ]
              <svg className="arrow-nudge" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>

          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="flex xl:hidden items-center gap-3">
            <button
              id="mobile-menu-btn"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle mobile menu"
              className="p-2 text-[#B7FF45] border border-[rgba(183,255,69,0.3)] bg-[#0C130F] hover:bg-[#B7FF45]/10 transition-colors"
            >
              {menuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="xl:hidden overflow-hidden border-t border-[rgba(183,255,69,0.2)] bg-[#050806]/95 backdrop-blur-xl"
            >
              <div className="wrap py-4 flex flex-col gap-1 font-mono text-[0.85rem]">
                {NAV_ITEMS.map(({ id, label }, i) => (
                  <motion.button
                    key={id}
                    onClick={() => scrollTo(id)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                    className={`text-left py-2.5 border-b border-[rgba(183,255,69,0.12)] transition-colors ${
                      active === id
                        ? "text-[#B7FF45] font-bold"
                        : "text-[#AAB6AA] hover:text-[#F5F8F4]"
                    }`}
                  >
                    {label}
                  </motion.button>
                ))}
                <motion.a
                  href={personalInfo.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: NAV_ITEMS.length * 0.04, duration: 0.2 }}
                  className="mt-3 px-4 py-2 border border-[#B7FF45] bg-[#B7FF45] text-[#050806] font-bold text-[0.82rem] flex items-center justify-center gap-2 w-full"
                >
                  DOWNLOAD CV <span className="arrow-nudge">↗</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
