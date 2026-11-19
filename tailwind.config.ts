import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Alien Tech × Neural Spacecraft Palette
        alien: {
          bg: "#050806",
          bgSecondary: "#090E0B",
          surface: "#101812",
          card: "#0C130F",
          neon: "#B7FF45",
          secondary: "#8CFF72",
          soft: "#D4FFAD",
          textPrimary: "#F5F8F4",
          textSecondary: "#AAB6AA",
          textMuted: "#778379",
          border: "rgba(183, 255, 69, 0.20)",
          borderSubtle: "rgba(255, 255, 255, 0.12)",
        },
        // Re-mapping indigo & blue utilities to resolve into the green system
        indigo: {
          50:  "#f3ffe6",
          100: "#e4ffcc",
          200: "#d4ffad",
          300: "#a9ff80",
          400: "#8cff72",
          500: "#b7ff45",
          600: "#9ee633",
          700: "#7cb820",
          800: "#203612",
          900: "#101812",
          950: "#0c130f",
        },
        blue: {
          50:  "#f3ffe6",
          100: "#e4ffcc",
          200: "#d4ffad",
          300: "#a9ff80",
          400: "#8cff72",
          500: "#b7ff45",
          600: "#9ee633",
          700: "#7cb820",
          800: "#203612",
          900: "#101812",
          950: "#0c130f",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        label: [["JetBrains Mono", "monospace"], { fontFeatureSettings: '"tnum"' }],
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        float: "float 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "hud-scan": "hudScan 6s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1", filter: "drop-shadow(0 0 15px rgba(183, 255, 69, 0.4))" },
          "50%": { opacity: "0.75", filter: "drop-shadow(0 0 5px rgba(183, 255, 69, 0.15))" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        hudScan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
