"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactElement } from "react";
import { stats } from "@/content/stats";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const iconMap: Record<string, ReactElement> = {
  play: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="5,3 19,12 5,21 5,3" />
    </svg>
  ),
  video: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="7" width="15" height="10" rx="1" /><polygon points="17,8 21,5 21,19 17,16" />
    </svg>
  ),
  trending: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" /><polyline points="17,6 23,6 23,12" />
    </svg>
  ),
  grid: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
    </svg>
  ),
  pen: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 20h9" /><path d="M16.5,3.5a2.121,2.121,0,0,1,3,3L7,19l-4,1,1-4Z" />
    </svg>
  ),
  calendar: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  users: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  star: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2" />
    </svg>
  ),
};

const accentColors = ["#3B82F6", "#22D3EE", "#A78BFA", "#3B82F6", "#22D3EE", "#A78BFA", "#3B82F6", "#22D3EE"];

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="relative py-32">
      {/* Subtle separator line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24" style={{ background: "linear-gradient(180deg, transparent, rgba(59,130,246,0.4), transparent)" }} />

      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-20 space-y-4">
          <motion.div
            className="section-label justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            02 Results
          </motion.div>
          <motion.h2
            className="font-clash font-bold text-4xl md:text-5xl lg:text-6xl text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Numbers That{" "}
            <span className="text-gradient">Prove It</span>
          </motion.h2>
          <motion.p
            className="text-text-secondary text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Real metrics from real projects. Every number here represents strategic execution, not luck.
          </motion.p>
        </div>

        {/* Stats grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              className="glass-card rounded-2xl p-6 space-y-3 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ boxShadow: `inset 0 0 40px ${accentColors[i % accentColors.length]}15` }}
              />

              {/* Icon */}
              <div style={{ color: accentColors[i % accentColors.length] }}>
                {iconMap[stat.icon]}
              </div>

              {/* Value */}
              <div className="font-clash font-bold text-3xl md:text-4xl text-white">
                {isInView ? (
                  <>
                    <AnimatedCounter
                      target={stat.numericValue}
                      suffix={stat.suffix}
                      duration={1500}
                    />
                  </>
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>

              {/* Label */}
              <div>
                <p className="text-white font-medium text-sm">{stat.label}</p>
                {stat.sublabel && (
                  <p className="text-text-muted text-xs mt-0.5">{stat.sublabel}</p>
                )}
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${accentColors[i % accentColors.length]}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Philosophy quote */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <blockquote
            className="font-clash text-xl md:text-2xl font-semibold max-w-3xl mx-auto px-4"
            style={{ color: "rgba(248,250,252,0.7)" }}
          >
            &ldquo;I don&apos;t just create content —{" "}
            <span className="text-gradient">I build strategic content systems</span>{" "}
            that compound over time.&rdquo;
          </blockquote>
          <p className="font-mono text-xs text-text-muted mt-4">— Divyam Kumar, Founder of Fanspark Media</p>
        </motion.div>
      </div>
    </section>
  );
}
