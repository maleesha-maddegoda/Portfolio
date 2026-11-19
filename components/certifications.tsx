"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";

export default function Certifications() {
  return (
    <section id="certifications" className="wrap py-[120px] bg-transparent relative">
      <SectionHeader
        title="Licenses & Certifications"
        subtitle="Verified credentials issued by Google Cloud, Cisco Networking Academy, SLIIT, and University of Moratuwa."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, i) => {
          const body = (
            <div className="flex flex-col h-full justify-between">
              <div>
                {/* Telemetry header */}
                <div className="flex justify-between items-center font-mono text-[0.72rem] text-[#778379] pb-3 border-b border-[rgba(183,255,69,0.15)]">
                  <span className="font-semibold text-[#B7FF45] uppercase tracking-wider">
                    {cert.issuer ?? "Official Credential"}
                  </span>
                  <span>{cert.date ?? `REC::0${i + 1}`}</span>
                </div>

                {/* Certificate image badge preview */}
                <div className="relative w-full aspect-[1.414/1] mt-5 overflow-hidden bg-[#050806] border border-[rgba(183,255,69,0.2)] flex items-center justify-center p-4 group-hover:border-[#B7FF45]/60 transition-colors">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex w-full h-full items-center justify-center text-[#778379] font-mono text-xs">
                      [CREDENTIAL_RECORD]
                    </div>
                  )}
                </div>

                <h3 className="font-heading text-lg font-bold text-[#F5F8F4] group-hover:text-[#B7FF45] transition-colors mt-5 mb-1.5 leading-snug">
                  {cert.title}
                </h3>

                {cert.credentialId && (
                  <p className="font-mono text-xs text-[#778379] mb-4">
                    ID: <span className="text-[#AAB6AA]">{cert.credentialId}</span>
                  </p>
                )}
                {!cert.credentialId && <div className="mb-4" />}
              </div>

              {cert.link && (
                <div className="font-mono text-xs font-bold text-[#B7FF45] pt-4 mt-auto border-t border-white/5 flex items-center justify-between">
                  <span>VERIFY CREDENTIAL</span>
                  <span className="arrow-nudge">↗</span>
                </div>
              )}
            </div>
          );

          return (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.08 }}
              className="flex"
            >
              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full flex flex-col p-6 border border-[rgba(183,255,69,0.2)] bg-[#0C130F] transition-all duration-300 hover:border-[#B7FF45] hover:shadow-[0_0_24px_rgba(183,255,69,0.25)] hover:-translate-y-1"
                >
                  {/* Subtle corner tick */}
                  <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-[#B7FF45]/40 group-hover:border-[#B7FF45]" />
                  <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 border-[#B7FF45]/40 group-hover:border-[#B7FF45]" />
                  {body}
                </a>
              ) : (
                <div className="group relative w-full flex flex-col p-6 border border-[rgba(183,255,69,0.2)] bg-[#0C130F]">
                  {body}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
