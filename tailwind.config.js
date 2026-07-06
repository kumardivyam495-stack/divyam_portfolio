import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        surface: "var(--surface)",
        card: "var(--card)",
        "card-hover": "var(--card-hover)",
        "electric-blue": "var(--blue)",
        "blue-light": "var(--blue-light)",
        cyan: "var(--cyan)",
        violet: "var(--violet)",
        "violet-light": "var(--violet-light)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        border: "var(--border)",
      },
      fontFamily: {
        clash: ["Clash Display", "system-ui", "sans-serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #3B82F6 0%, #22D3EE 50%, #A78BFA 100%)",
        "gradient-blue": "linear-gradient(135deg, #3B82F6 0%, #22D3EE 100%)",
        "gradient-violet": "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
        "gradient-dark": "linear-gradient(180deg, #050816 0%, #0B1020 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(17,24,39,0.8), rgba(11,16,32,0.9))",
      },
      boxShadow: {
        "glow-blue": "0 0 40px rgba(59,130,246,0.15), 0 0 80px rgba(59,130,246,0.05)",
        "glow-violet": "0 0 40px rgba(124,58,237,0.15), 0 0 80px rgba(124,58,237,0.05)",
        "glow-cyan": "0 0 40px rgba(34,211,238,0.12)",
        "card-hover": "0 30px 60px rgba(0,0,0,0.4), 0 0 40px rgba(59,130,246,0.1)",
        "glass": "0 8px 32px rgba(0,0,0,0.4)",
      },
      animation: {
        "float": "float 10s ease-in-out infinite",
        "aurora": "aurora 12s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "shimmer": "shimmer 2s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-20px) rotate(5deg)" },
          "66%": { transform: "translateY(10px) rotate(-3deg)" },
        },
        aurora: {
          "0%, 100%": { transform: "scale(1) translateX(0) translateY(0)", opacity: "0.12" },
          "25%": { transform: "scale(1.1) translateX(5%) translateY(-5%)", opacity: "0.18" },
          "50%": { transform: "scale(0.95) translateX(-3%) translateY(8%)", opacity: "0.10" },
          "75%": { transform: "scale(1.05) translateX(8%) translateY(3%)", opacity: "0.15" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59,130,246,0.15)" },
          "50%": { boxShadow: "0 0 40px rgba(59,130,246,0.3), 0 0 60px rgba(59,130,246,0.1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
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
