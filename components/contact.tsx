"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import AlienPursuit from "@/components/AlienPursuit";

const rowClass =
  "flex items-center justify-between gap-4 py-3.5 border-b border-[rgba(183,255,69,0.2)] font-mono text-sm text-[#F5F8F4] transition-all duration-200 hover:pl-2 hover:text-[#B7FF45]";
const rowValue = "min-w-0 font-mono text-xs text-[#AAB6AA] truncate";

const inputClass =
  "w-full bg-[#0C130F] border border-[rgba(183,255,69,0.25)] px-4 py-3.5 text-sm font-mono text-[#F5F8F4] placeholder-[#778379] outline-none transition-all duration-200 focus:border-[#B7FF45] focus:shadow-[0_0_15px_rgba(183,255,69,0.2)]";
const labelClass = "grid gap-1.5 font-mono text-xs text-[#AAB6AA] uppercase tracking-wider";

const displayUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = personalInfo.email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        console.error("Form submission failed");
        setStatus("idle");
        alert("Transmission error. Please try again or reach out directly via email.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setStatus("idle");
      alert("Network transmission error. Please try again later.");
    }
  };

  return (
    <div id="contact" className="flex flex-col bg-[#050806] text-[#F5F8F4] relative">
      <section className="relative w-full flex-1 flex flex-col justify-center pt-[120px] pb-[130px] overflow-hidden">

        {/* Ambient green spacecraft atmosphere glow */}
        <div
          className="absolute -right-[250px] -bottom-[250px] w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(183,255,69,0.12), transparent 70%)" }}
        />

        <div className="wrap relative z-10">

          {/* Header */}
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-[#B7FF45] shadow-[0_0_8px_#B7FF45]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B7FF45]">
                TRANSMISSION_FREQUENCY::OPEN
              </span>
              <span className="h-px w-12 bg-[#B7FF45]/30 ml-2" />
            </div>

            <h2 className="font-heading text-[clamp(2.4rem,6.5vw,5rem)] leading-[0.92] tracking-[-0.04em] font-extrabold uppercase mb-4">
              LET&apos;S BUILD SOMETHING{" "}
              <span className="text-[#B7FF45] block sm:inline">FROM THE FUTURE.</span>
            </h2>

            <p className="font-mono text-sm text-[#AAB6AA] max-w-xl">
              Open communication channel. Transmit your message, proposal, or inquiry directly into the terminal console.
            </p>
          </motion.div>

          <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-2 gap-12 lg:gap-x-16 items-start">

            {/* Details & Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#0C130F] p-8 border border-[rgba(183,255,69,0.2)] relative shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              {/* Corner ticks */}
              <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-[#B7FF45]" />
              <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 border-[#B7FF45]" />

              <div className="font-mono text-xs uppercase tracking-widest text-[#B7FF45] mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF45] animate-ping" />
                <span>TERMINAL_TELEMETRY</span>
              </div>

              <p className="text-[#AAB6AA] text-sm leading-relaxed mb-4">
                I am currently seeking internship roles in <strong className="text-[#F5F8F4]">Artificial Intelligence</strong>, <strong className="text-[#F5F8F4]">Machine Learning</strong>, and <strong className="text-[#F5F8F4]">Full-Stack Engineering</strong>.
              </p>

              <p className="text-[#AAB6AA] text-sm leading-relaxed mb-8">
                Whether you have an opportunity, a technical collaboration, or want to discuss machine learning architectures — frequency channels are open.
              </p>

              <div className="border-t border-[rgba(183,255,69,0.2)]">
                {/* Email */}
                <button
                  type="button"
                  onClick={copyEmail}
                  title="Copy email to clipboard"
                  className={`${rowClass} w-full text-left`}
                >
                  <span className="text-[#B7FF45] font-semibold">EMAIL</span>
                  <span className={rowValue}>
                    {copied ? (
                      <span className="text-[#B7FF45] font-bold">COPIED TO CLIPBOARD ◈</span>
                    ) : (
                      `${personalInfo.email} ⧉`
                    )}
                  </span>
                </button>

                {/* GitHub */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={rowClass}
                >
                  <span className="text-[#B7FF45] font-semibold">GITHUB</span>
                  <span className={rowValue}>{displayUrl(personalInfo.github)} <span className="arrow-nudge">↗</span></span>
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={rowClass}
                >
                  <span className="text-[#B7FF45] font-semibold">LINKEDIN</span>
                  <span className={rowValue}>{displayUrl(personalInfo.linkedin)} <span className="arrow-nudge">↗</span></span>
                </a>

                {/* Resume */}
                <a
                  href={personalInfo.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={rowClass}
                >
                  <span className="text-[#B7FF45] font-semibold">RESUME / CV</span>
                  <span className={rowValue}>PDF_DOWNLOAD ↓</span>
                </a>
              </div>
            </motion.div>

            {/* Transmission Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="bg-[#0C130F] p-8 border border-[rgba(183,255,69,0.2)] relative shadow-[0_10px_30px_rgba(0,0,0,0.5)] grid gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-[#B7FF45]" />
              <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 border-[#B7FF45]" />

              <div className="font-mono text-xs uppercase tracking-widest text-[#B7FF45] mb-2 flex items-center gap-2">
                <span>&gt;</span>
                <span>COMMS_TRANSMITTER</span>
              </div>

              <label htmlFor="name" className={labelClass}>
                <span>IDENTIFIER / NAME</span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name or entity"
                  required
                  className={inputClass}
                />
              </label>

              <label htmlFor="email" className={labelClass}>
                <span>FREQUENCY ADDRESS / EMAIL</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  placeholder="name@domain.com"
                  required
                  className={inputClass}
                />
              </label>

              <label htmlFor="message" className={labelClass}>
                <span>PAYLOAD / MESSAGE</span>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Transmit your message here..."
                  required
                  className={`${inputClass} min-h-[130px] resize-y`}
                />
              </label>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#B7FF45] text-[#050806] font-mono text-sm font-bold tracking-wider uppercase hover:bg-[#8CFF72] hover:shadow-[0_0_24px_rgba(183,255,69,0.5)] transition-all duration-200 disabled:opacity-50"
              >
                {status === "idle" && (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    <span>TRANSMIT MESSAGE</span>
                  </>
                )}
                {status === "sending" && <span>ENCRYPTING &amp; TRANSMITTING...</span>}
                {status === "success" && (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>TRANSMISSION CONFIRMED!</span>
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </div>

      </section>

      {/* Animated Alien Spacecraft Pursuit Strip */}
      <AlienPursuit />

      {/* Futuristic Spacecraft Footer */}
      <footer className="border-t border-[rgba(183,255,69,0.18)] bg-[#050806] text-[#AAB6AA] py-6 font-mono text-xs">
        <div className="wrap flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#B7FF45] rounded-full" />
            <span>SYSTEM STATUS: OPERATIONAL</span>
            <span className="text-white/20">//</span>
            <span>ENGINEERED BY <strong className="text-[#B7FF45] font-semibold">{personalInfo.name.toUpperCase()}</strong></span>
          </p>

          <p className="text-[#778379]">© {new Date().getFullYear()} · ALL RIGHTS RESERVED</p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 text-[#F5F8F4] hover:text-[#B7FF45] transition-colors"
          >
            <span>RETURN TO TOP</span>
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5m-6 6 6-6 6 6" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
