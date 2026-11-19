"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { achievements, type Achievement } from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";

/** Full-screen certificate viewer: closes on Esc, close button, or click outside */
function CertificateViewer({ item, onClose }: { item: Achievement; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} certificate`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050806]/95 backdrop-blur-md p-4 sm:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close certificate"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 flex items-center justify-center border border-[#B7FF45] bg-[#0C130F] text-[#B7FF45] font-mono text-lg hover:bg-[#B7FF45] hover:text-[#050806] transition-colors"
      >
        ✕
      </button>
      <motion.figure
        className="max-w-5xl w-full"
        initial={{ scale: 0.96, y: 10 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.96, y: 10 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.certificate}
          alt={`${item.title} certificate`}
          className="w-full max-h-[80vh] object-contain bg-[#0C130F] border border-[rgba(183,255,69,0.3)] shadow-[0_0_40px_rgba(183,255,69,0.2)]"
        />
        <figcaption className="mt-3 font-mono text-xs text-[#AAB6AA] text-center">
          {[item.title, item.organizer, item.date].filter(Boolean).join(" · ")}
        </figcaption>
      </motion.figure>
    </motion.div>
  );
}

export default function Achievements() {
  const [viewing, setViewing] = useState<Achievement | null>(null);

  return (
    <section id="achievements" className="wrap py-[120px] bg-transparent relative">
      <SectionHeader
        title="Achievements"
        subtitle="Competitions, hackathons, and innovation challenges undertaken with distinguished technical results."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
            className="group flex flex-col p-6 sm:p-7 border border-[rgba(183,255,69,0.2)] bg-[#0C130F] transition-all duration-300 hover:border-[#B7FF45] hover:shadow-[0_0_28px_rgba(183,255,69,0.22)] hover:-translate-y-1 relative"
          >
            {/* Top corner tick */}
            <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-[#B7FF45]/50 group-hover:border-[#B7FF45]" />
            <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 border-[#B7FF45]/50 group-hover:border-[#B7FF45]" />

            {/* 1. TOPIC ON TOP: Result + Date + Title + Organizer */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="px-3 py-1 bg-[#101812] border border-[#B7FF45]/40 text-[#B7FF45] font-mono text-xs font-bold uppercase tracking-wider">
                {item.result}
              </span>
              {item.date && (
                <span className="font-mono text-xs text-[#778379]">{item.date}</span>
              )}
            </div>

            <h3 className="mt-4 font-heading text-xl font-bold text-[#F5F8F4] group-hover:text-[#B7FF45] transition-colors leading-snug">
              {item.title}
            </h3>

            <p className="mt-1.5 font-mono text-xs text-[#8CFF72]">
              {item.organizer}
              {item.team && <span className="text-[#AAB6AA]"> · Team: {item.team}</span>}
            </p>

            {/* 2. CERTIFICATE IMAGE: Large & clearly visible on initial load */}
            {item.certificate && (
              <div
                onClick={() => setViewing(item)}
                className="mt-5 w-full h-60 sm:h-64 md:h-72 border border-[rgba(183,255,69,0.25)] bg-[#050806] p-2 flex items-center justify-center overflow-hidden cursor-pointer group/cert relative shadow-[inset_0_0_24px_rgba(0,0,0,0.85)] hover:border-[#B7FF45] transition-all duration-300"
                title={`Click to enlarge ${item.title} certificate`}
              >
                <img
                  src={item.certificate}
                  alt={`${item.title} Certificate`}
                  className="w-full h-full object-contain group-hover/cert:scale-[1.03] transition-transform duration-300"
                />

                {/* Sci-fi HUD corner accents */}
                <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#B7FF45]/70" />
                <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-[#B7FF45]/70" />
                <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-[#B7FF45]/70" />
                <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#B7FF45]/70" />

                {/* Hover hint badge */}
                <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 bg-[#050806]/90 border border-[#B7FF45] text-[#B7FF45] font-mono text-[10px] tracking-wider uppercase opacity-0 group-hover/cert:opacity-100 transition-opacity flex items-center gap-1.5 shadow-[0_0_12px_rgba(183,255,69,0.3)]">
                  <span>CLICK TO EXPAND</span>
                  <span>⤢</span>
                </div>
              </div>
            )}

            {/* 3. DESCRIPTION: Below certificate image */}
            <p className="mt-5 text-sm leading-relaxed text-[#AAB6AA]">{item.description}</p>

            {/* 4. VIEW CREDENTIALS: Below description at bottom */}
            {(Boolean(item.certificate) || (item.links?.length ?? 0) > 0) && (
              <div className="mt-auto pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/5">
                {item.certificate && (
                  <button
                    onClick={() => setViewing(item)}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-[#B7FF45] bg-[#101812] text-[#B7FF45] hover:bg-[#B7FF45] hover:text-[#050806] font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-[0_0_14px_rgba(183,255,69,0.15)] hover:shadow-[0_0_22px_rgba(183,255,69,0.4)]"
                    aria-label={`View ${item.title} credentials`}
                  >
                    <span>VIEW CREDENTIALS</span>
                    <span className="arrow-nudge">↗</span>
                  </button>
                )}
                {item.links && item.links.length > 0 && (
                  <div className="flex flex-wrap gap-4 font-mono text-xs font-bold">
                    {item.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#B7FF45] hover:text-[#F5F8F4] transition-colors"
                      >
                        {link.label} <span className="arrow-nudge">↗</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {viewing && <CertificateViewer item={viewing} onClose={() => setViewing(null)} />}
      </AnimatePresence>
    </section>
  );
}
