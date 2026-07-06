"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "@/components/ui/MagneticButton";

const floatingStats = [
  { label: "Video Views", value: "1M+", color: "#3B82F6" },
  { label: "Reels Managed", value: "150+", color: "#22D3EE" },
  { label: "Organic Reach", value: "12K+", color: "#A78BFA" },
];

const platforms = ["Instagram", "YouTube", "LinkedIn"];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Particle-like decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? "#3B82F6" : i % 3 === 1 ? "#22D3EE" : "#A78BFA",
              opacity: 0.3 + Math.random() * 0.4,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          {/* Main Content — Left 7 cols */}
          <div className="lg:col-span-7 space-y-8">
            {/* Section label */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-text-secondary tracking-widest uppercase">
                  Available for Projects
                </span>
              </div>
              <div className="h-px flex-1 max-w-16" style={{ background: "linear-gradient(90deg, rgba(59,130,246,0.5), transparent)" }} />
              <span className="font-mono text-xs text-blue-400">// Social Media Strategist</span>
            </motion.div>

            {/* Main headline */}
            <div className="space-y-3">
              <motion.h1
                className="font-clash font-bold text-5xl md:text-6xl lg:text-7xl text-text-primary leading-[1.05] tracking-tight"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                Helping Creators
                <br />
                <span className="text-gradient">& Brands Grow</span>
                <br />
                <span className="text-text-primary/80">Through Strategy.</span>
              </motion.h1>
            </div>

            {/* Subheadline */}
            <motion.p
              className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              I create content systems that drive engagement, increase reach, and turn audiences into loyal communities across{" "}
              {platforms.map((p, i) => (
                <span key={p}>
                  <span className="text-text-primary font-medium">{p}</span>
                  {i < platforms.length - 1 && ", "}
                </span>
              ))}.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <MagneticButton>
                <button
                  onClick={() => scrollTo("#work")}
                  className="group relative px-8 py-4 rounded-2xl font-semibold text-white text-sm overflow-hidden cursor-pointer"
                  style={{ background: "linear-gradient(135deg, #3B82F6, #7C3AED)" }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(135deg, #60A5FA, #A78BFA)" }} />
                </button>
              </MagneticButton>

              <MagneticButton>
                <button
                  onClick={() => scrollTo("#results")}
                  className="px-8 py-4 rounded-2xl font-semibold text-text-primary text-sm cursor-pointer border transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/5 shadow-md shadow-slate-100 bg-white"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="flex items-center gap-2">
                    See Results
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
                    </svg>
                  </span>
                </button>
              </MagneticButton>
            </motion.div>

            {/* Platform tags */}
            <motion.div
              className="flex items-center gap-4 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <span className="font-mono text-xs text-text-muted">Platforms:</span>
              {platforms.map((p) => (
                <span
                  key={p}
                  className="px-3 py-1 rounded-full font-mono text-xs border"
                  style={{
                    borderColor: "rgba(59,130,246,0.3)",
                    background: "rgba(59,130,246,0.05)",
                    color: "#94A3B8",
                  }}
                >
                  {p}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Floating Stats Panel — Right 5 cols */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-72 lg:w-80"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Main image card */}
              <div
                className="glass-card rounded-3xl overflow-hidden shadow-xl aspect-[4/5] relative group"
                style={{ border: "1px solid var(--border)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hero-section.jpeg"
                  alt="Divyam Kumar"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                />
                
                {/* Subtle gradient overlay to blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent pointer-events-none" />

                {/* Dashboard info overlaid at the bottom */}
                <div className="absolute bottom-0 inset-x-0 p-5 space-y-2 bg-gradient-to-t from-slate-900/90 to-transparent pt-10">
                  <p className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase font-semibold">Fanspark Media</p>
                  <div className="flex items-center justify-between">
                    <p className="font-clash text-base font-semibold text-white">Divyam Kumar</p>
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-2 flex items-center gap-2"
                style={{ border: "1px solid rgba(34,211,238,0.2)" }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#22D3EE">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <span className="font-mono text-xs text-cyan-400">Data-Driven</span>
              </motion.div>

              {/* Bottom floating tag */}
              <motion.div
                className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-4 py-2 flex items-center gap-2"
                style={{ border: "1px solid rgba(124,58,237,0.2)" }}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2">
                  <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
                </svg>
                <span className="font-mono text-xs text-violet-300">1M+ Views</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="font-mono text-xs text-text-muted">Scroll</span>
          <motion.div
            className="w-px h-12"
            style={{ background: "linear-gradient(180deg, rgba(59,130,246,0.5), transparent)" }}
            animate={{ scaleY: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
