"use client";

import { useEffect, useRef, useId } from "react";

const CONVOY_W = 440;
const CONVOY_H = 115;
const SPEED = 95; // px per second, so the crossing feels natural on every screen width

/**
 * Animated Alien Spacecraft Pursuit Footer
 *
 * Traverses the screen continuously from left to right (looping like the train):
 * - An alien stands on top of the spacecraft, clearly visible looking outside at the runner.
 * - In his hand, he holds a futuristic sci-fi ray blaster pistol and shoots laser bolts.
 * - The laser strikes the running human in the back / backpack!
 * - On impact: sparks burst, the human gets bumped forward, stumbles, recovers, and keeps sprinting!
 * - Once reaching the right edge, the pursuit seamlessly re-enters from the left.
 */
export default function AlienPursuit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const id = useId();

  // Set the traversal duration based on window width so movement speed is constant
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const updateDuration = () => {
      const duration = (window.innerWidth + CONVOY_W) / SPEED;
      el.style.setProperty("--pursuit-duration", `${duration}s`);
    };
    updateDuration();
    window.addEventListener("resize", updateDuration);
    return () => window.removeEventListener("resize", updateDuration);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pursuit-strip-track border-t border-[rgba(183,255,69,0.25)] select-none pointer-events-none"
    >
      {/* ── Fixed Full-Width Planetary Horizon Line ── */}
      <div className="absolute inset-x-0 bottom-[14px] h-[2px] bg-[#B7FF45] shadow-[0_0_8px_#B7FF45] z-0" />
      <div className="absolute inset-x-0 bottom-0 h-[14px] bg-[#050806] z-0" />

      {/* Subtle terrain crater ticks along the horizon */}
      <div className="absolute inset-x-0 bottom-[14px] flex justify-around opacity-30 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="text-[#8CFF72] text-[10px] font-mono select-none">
            {i % 2 === 0 ? "◈" : "+"}
          </span>
        ))}
      </div>

      {/* ── Traversing Convoy (Moves Left → Right Across the Full Screen) ── */}
      <div
        ref={containerRef}
        className="pursuit-convoy pointer-events-auto"
        style={{ width: CONVOY_W, height: CONVOY_H }}
      >
        <svg
          viewBox="0 0 440 115"
          className="w-full h-full block overflow-visible"
        >
          <defs>
            {/* Luminous Glow Filters */}
            <filter id={`${id}-glow`} x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id={`${id}-glow-intense`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.5" result="blur1" />
              <feGaussianBlur stdDeviation="1.5" result="blur2" />
              <feMerge>
                <feMergeNode in="blur1" />
                <feMergeNode in="blur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Laser Beam Gradient */}
            <linearGradient id={`${id}-laser`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#B7FF45" />
              <stop offset="100%" stopColor="#8CFF72" stopOpacity="0.2" />
            </linearGradient>

            {/* Thruster Flame Gradient */}
            <linearGradient id={`${id}-thruster`} x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#B7FF45" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            {/* Impact Blast Radial Gradient */}
            <radialGradient id={`${id}-blast`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="45%" stopColor="#B7FF45" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>

          {/* ══════════════════════════════════════════════════
              SPACECRAFT WITH ALIEN SHOOTER (Hovering on the left)
             ══════════════════════════════════════════════════ */}
          <g style={{ animation: "ship-flight-hover 3s ease-in-out infinite" }}>

            {/* Thruster exhaust plasma flame */}
            <polygon
              points="38,62 38,68 12,65"
              fill={`url(#${id}-thruster)`}
              style={{ animation: "ship-thruster-pulse 0.22s ease-in-out infinite alternate", transformOrigin: "38px 65px" }}
            />
            {/* Plasma rings */}
            <circle cx="22" cy="65" r="2.5" fill="none" stroke="#B7FF45" strokeWidth="0.8" opacity="0.6" />
            <circle cx="14" cy="65" r="3.2" fill="none" stroke="#8CFF72" strokeWidth="0.5" opacity="0.4" />

            {/* Spaceship Saucer Hull */}
            <g>
              {/* Lower hull rim */}
              <polygon
                points="40,65 75,52 135,52 170,65 145,74 65,74"
                fill="#080E0A"
                stroke="#B7FF45"
                strokeWidth="1.5"
                strokeLinejoin="round"
                filter={`url(#${id}-glow)`}
              />

              {/* White contour accent line */}
              <path
                d="M75 52 L135 52 L168 65"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1"
                strokeLinecap="round"
              />

              {/* Hull lights / energy nodes */}
              <circle cx="70" cy="64" r="1.4" fill="#B7FF45" />
              <circle cx="85" cy="64" r="1.4" fill="#FFFFFF" />
              <circle cx="105" cy="64" r="1.4" fill="#B7FF45" />
              <circle cx="125" cy="64" r="1.4" fill="#FFFFFF" />
              <circle cx="140" cy="64" r="1.4" fill="#B7FF45" />

              {/* Open cockpit hatch ring where alien stands */}
              <ellipse
                cx="108"
                cy="51"
                rx="20"
                ry="5"
                fill="#0C130F"
                stroke="#B7FF45"
                strokeWidth="1.3"
              />
            </g>

            {/* ── ALIEN STANDING OUTSIDE THE SPACECRAFT ── */}
            <g transform="translate(108, 48)">
              {/* Alien torso & collar */}
              <path
                d="M-8 2 Q0 0 8 2 L9 6 L-9 6 Z"
                fill="#050806"
                stroke="#8CFF72"
                strokeWidth="1"
              />

              {/* Distinctive elongated alien head */}
              <ellipse
                cx="0"
                cy="-8"
                rx="7"
                ry="8"
                fill="#080E0A"
                stroke="#B7FF45"
                strokeWidth="1.3"
                filter={`url(#${id}-glow)`}
              />

              {/* Large Slanted Alien Eyes looking directly at the runner */}
              <ellipse
                cx="-2.8"
                cy="-8"
                rx="2.4"
                ry="1.3"
                transform="rotate(-18 -2.8 -8)"
                fill="#FFFFFF"
              />
              <circle cx="-2.6" cy="-8" r="0.8" fill="#B7FF45" />

              <ellipse
                cx="2.8"
                cy="-8"
                rx="2.4"
                ry="1.3"
                transform="rotate(18 2.8 -8)"
                fill="#FFFFFF"
              />
              <circle cx="3" cy="-8" r="0.8" fill="#B7FF45" />

              {/* Alien's Left Hand resting on cockpit rim */}
              <circle cx="-12" cy="2" r="1.8" fill="#B7FF45" />

              {/* ── Alien's Right Arm Extended Forward Holding the Ray Gun ── */}
              <g style={{ animation: "alien-gun-recoil 3.5s ease-out infinite", transformOrigin: "4px -3px" }}>
                {/* Arm pointing forward */}
                <line x1="4" y1="-3" x2="16" y2="1" stroke="#050806" strokeWidth="3" strokeLinecap="round" />
                <line x1="4" y1="-3" x2="16" y2="1" stroke="#8CFF72" strokeWidth="1.8" strokeLinecap="round" />

                {/* Hand gripping blaster handle */}
                <circle cx="16" cy="1" r="2.2" fill="#B7FF45" />

                {/* ── Futuristic Sci-Fi Ray Gun / Blaster ── */}
                <g transform="translate(16, 1)">
                  {/* Gun handle & body */}
                  <rect x="0" y="-3" width="12" height="4.5" rx="1" fill="#0C130F" stroke="#B7FF45" strokeWidth="1" />
                  {/* Glowing energy chamber */}
                  <rect x="3" y="-2" width="5" height="2.5" rx="0.5" fill="#B7FF45" />
                  {/* Gun barrel */}
                  <line x1="12" y1="-1" x2="20" y2="0" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
                  {/* Targeting scope */}
                  <line x1="4" y1="-4.5" x2="10" y2="-4" stroke="#8CFF72" strokeWidth="1" />

                  {/* Gun muzzle tip at local (21, 0) -> global (145, 49) */}
                  <circle
                    cx="22"
                    cy="0"
                    r="4"
                    fill="#FFFFFF"
                    filter={`url(#${id}-glow-intense)`}
                    style={{ animation: "gun-muzzle-flash 3.5s ease-in-out infinite" }}
                  />
                </g>
              </g>
            </g>
          </g>

          {/* ══════════════════════════════════════════════════
              LASER PROJECTILE BOLTS (Shooting from Gun to Runner's Back)
              Gun Muzzle: ~ (145, 49) -> Runner Back: ~ (286, 84)
             ══════════════════════════════════════════════════ */}
          {/* Laser Shot 1 (at ~22% of 3.5s cycle) */}
          <g style={{ animation: "laser-shot-1 3.5s linear infinite", transformOrigin: "145px 49px" }}>
            <line
              x1="135"
              y1="46"
              x2="155"
              y2="53"
              stroke={`url(#${id}-laser)`}
              strokeWidth="3.4"
              strokeLinecap="round"
              filter={`url(#${id}-glow-intense)`}
            />
            <line
              x1="147"
              y1="50"
              x2="157"
              y2="53.5"
              stroke="#FFFFFF"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </g>

          {/* Laser Shot 2 (at ~62% of 3.5s cycle) */}
          <g style={{ animation: "laser-shot-2 3.5s linear infinite", transformOrigin: "145px 49px" }}>
            <line
              x1="135"
              y1="46"
              x2="155"
              y2="53"
              stroke={`url(#${id}-laser)`}
              strokeWidth="3.4"
              strokeLinecap="round"
              filter={`url(#${id}-glow-intense)`}
            />
            <line
              x1="147"
              y1="50"
              x2="157"
              y2="53.5"
              stroke="#FFFFFF"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </g>

          {/* ══════════════════════════════════════════════════
              IMPACT BLAST SPARK EXPLOSIONS ON RUNNER'S BACK
              Positioned at Runner's Backpack (x: 286, y: 84)
             ══════════════════════════════════════════════════ */}
          {/* Impact 1 */}
          <g
            transform="translate(286, 84)"
            style={{ animation: "impact-burst-1 3.5s ease-out infinite", transformOrigin: "286px 84px" }}
          >
            <circle cx="0" cy="0" r="10" fill={`url(#${id}-blast)`} filter={`url(#${id}-glow-intense)`} />
            <circle cx="0" cy="0" r="16" fill="none" stroke="#B7FF45" strokeWidth="1.8" />
            {/* Sparks flying off on impact */}
            <line x1="0" y1="0" x2="-8" y2="-10" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="0" y1="0" x2="6" y2="-12" stroke="#B7FF45" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="0" y1="0" x2="-10" y2="4" stroke="#8CFF72" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="0" y1="0" x2="8" y2="8" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
          </g>

          {/* Impact 2 */}
          <g
            transform="translate(286, 84)"
            style={{ animation: "impact-burst-2 3.5s ease-out infinite", transformOrigin: "286px 84px" }}
          >
            <circle cx="0" cy="0" r="11" fill={`url(#${id}-blast)`} filter={`url(#${id}-glow-intense)`} />
            <circle cx="0" cy="0" r="18" fill="none" stroke="#B7FF45" strokeWidth="2" />
            <line x1="0" y1="0" x2="-9" y2="-11" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="0" y1="0" x2="7" y2="-13" stroke="#B7FF45" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="0" y1="0" x2="-12" y2="5" stroke="#8CFF72" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="0" y1="0" x2="9" y2="9" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* ══════════════════════════════════════════════════
              RUNNING HUMAN EXPLORER (BUMPS & RESUMES SPRINTING)
              Feet on ground at y = 110
             ══════════════════════════════════════════════════ */}
          <g
            transform="translate(280, 0)"
            style={{ animation: "runner-bump-cycle 3.5s ease-in-out infinite", transformOrigin: "295px 105px" }}
          >
            {/* Back Arm (Behind Body) */}
            <g
              style={{
                animation: "runner-arm-back 0.44s ease-in-out infinite",
                transformOrigin: "295px 82px",
              }}
            >
              <line x1="295" y1="82" x2="286" y2="89" stroke="#B7FF45" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="286" y1="89" x2="292" y2="95" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* Back Leg (High Stride) */}
            <g
              style={{
                animation: "runner-leg-back 0.44s ease-in-out infinite",
                transformOrigin: "294px 94px",
              }}
            >
              <line x1="294" y1="94" x2="284" y2="102" stroke="#0C130F" strokeWidth="3.2" strokeLinecap="round" />
              <line x1="294" y1="94" x2="284" y2="102" stroke="#8CFF72" strokeWidth="2" strokeLinecap="round" />
              <line x1="284" y1="102" x2="278" y2="110" stroke="#B7FF45" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="278" y1="110" x2="283" y2="110" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
            </g>

            {/* Backpack on the runner's back (Target that gets hit!) */}
            <rect
              x="285"
              y="78"
              width="6"
              height="13"
              rx="1.5"
              fill="#080E0A"
              stroke="#B7FF45"
              strokeWidth="1.2"
              filter={`url(#${id}-glow)`}
            />
            <circle cx="288" cy="81" r="1" fill="#FFFFFF" />
            <circle cx="288" cy="85" r="1" fill="#B7FF45" />

            {/* Human Torso */}
            <polygon
              points="293,76 300,76 298,94 292,94"
              fill="#050806"
              stroke="#FFFFFF"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            {/* Suit details */}
            <line x1="294" y1="82" x2="299" y2="82" stroke="#B7FF45" strokeWidth="1" />
            <line x1="294" y1="86" x2="298" y2="86" stroke="#8CFF72" strokeWidth="1" />

            {/* Astronaut Explorer Helmet */}
            <circle
              cx="298"
              cy="70"
              r="7"
              fill="#080E0A"
              stroke="#B7FF45"
              strokeWidth="1.4"
            />
            {/* Visor with neon glint */}
            <path
              d="M297 65 Q303 66 304 70 Q303 74 298 75 Z"
              fill="#B7FF45"
              filter={`url(#${id}-glow)`}
              opacity="0.9"
            />
            <path
              d="M299 67 Q302 68 302 71"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeLinecap="round"
            />

            {/* Front Leg (Driving Forward) */}
            <g
              style={{
                animation: "runner-leg-front 0.44s ease-in-out infinite",
                transformOrigin: "296px 94px",
              }}
            >
              <line x1="296" y1="94" x2="304" y2="101" stroke="#050806" strokeWidth="3.4" strokeLinecap="round" />
              <line x1="296" y1="94" x2="304" y2="101" stroke="#B7FF45" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="304" y1="101" x2="300" y2="110" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" />
              <line x1="300" y1="110" x2="306" y2="110" stroke="#B7FF45" strokeWidth="2.2" strokeLinecap="round" />
            </g>

            {/* Front Arm (Pumping Forward with Glove) */}
            <g
              style={{
                animation: "runner-arm-front 0.44s ease-in-out infinite",
                transformOrigin: "297px 82px",
              }}
            >
              <line x1="297" y1="82" x2="305" y2="87" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" />
              <line x1="305" y1="87" x2="299" y2="93" stroke="#B7FF45" strokeWidth="2.2" strokeLinecap="round" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
