"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies } from "@/content/caseStudies";

export default function CaseStudiesSection() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="case-studies" className="relative py-32">
      {/* Top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24" style={{ background: "linear-gradient(180deg, transparent, rgba(124,58,237,0.4), transparent)" }} />

      <div className="section-container">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <motion.div
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            05 Case Studies
          </motion.div>
          <motion.h2
            className="font-clash font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Strategy in{" "}
            <span className="text-gradient">Action</span>
          </motion.h2>
          <motion.p
            className="text-text-secondary max-w-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Deep dives into how strategy, research, and creative execution drive measurable results.
          </motion.p>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-4">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.id}
              className="rounded-2xl overflow-hidden cursor-pointer"
              style={{
                background: "var(--card)",
                border: expanded === study.id
                  ? "1px solid rgba(37,99,235,0.3)"
                  : "1px solid var(--border)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Card header — always visible */}
              <button
                className="w-full p-6 md:p-8 flex items-center gap-6 text-left cursor-pointer group"
                onClick={() => setExpanded(expanded === study.id ? null : study.id)}
              >
                {/* Number */}
                <span
                  className="font-clash font-bold text-5xl md:text-6xl flex-shrink-0"
                  style={{
                    background: expanded === study.id
                      ? "linear-gradient(135deg, #3B82F6, #7C3AED)"
                      : "rgba(15,23,42,0.06)",
                    WebkitBackgroundClip: expanded === study.id ? "text" : undefined,
                    WebkitTextFillColor: expanded === study.id ? "transparent" : "#E2E8F0",
                    backgroundClip: expanded === study.id ? "text" : undefined,
                  }}
                >
                  {study.number}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <span
                      className="font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full"
                      style={{
                        background: "rgba(37,99,235,0.1)",
                        border: "1px solid rgba(37,99,235,0.2)",
                        color: "#2563EB",
                      }}
                    >
                      {study.category}
                    </span>
                    <span className="font-mono text-[10px] text-text-secondary">{study.duration}</span>
                  </div>
                  <h3 className="font-clash font-bold text-2xl md:text-3xl text-text-primary group-hover:text-gradient transition-all">
                    {study.title}
                  </h3>
                  <p className="text-text-secondary text-sm mt-1">{study.subtitle}</p>
                </div>

                {/* Platform tags */}
                <div className="hidden md:flex gap-2 flex-shrink-0">
                  {study.platforms.map((p) => (
                    <span
                      key={p}
                      className="font-mono text-[10px] px-2 py-1 rounded-full"
                      style={{
                        background: "rgba(15,23,42,0.04)",
                        border: "1px solid rgba(15,23,42,0.08)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>

                {/* Expand icon */}
                <motion.div
                  animate={{ rotate: expanded === study.id ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-slate-50"
                  style={{
                    border: "1px solid var(--border)",
                    color: expanded === study.id ? "#3B82F6" : "#64748B",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </motion.div>
              </button>

              {/* Expanded content */}
              <AnimatePresence>
                {expanded === study.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-6 md:px-8 pb-8 pt-2"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                        {/* Problem */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="w-1 h-4 rounded-full bg-red-400" />
                            <h4 className="font-mono text-xs text-red-400 uppercase tracking-widest">Problem</h4>
                          </div>
                          <p className="text-text-secondary text-sm leading-relaxed">{study.problem}</p>
                        </div>

                        {/* Strategy */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="w-1 h-4 rounded-full bg-blue-400" />
                            <h4 className="font-mono text-xs text-blue-400 uppercase tracking-widest">Strategy</h4>
                          </div>
                          <p className="text-text-secondary text-sm leading-relaxed">{study.strategy}</p>
                          <ul className="space-y-1">
                            {study.execution.map((step) => (
                              <li key={step} className="flex items-start gap-2 text-xs text-text-muted">
                                <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                                {step}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Results */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="w-1 h-4 rounded-full bg-green-400" />
                            <h4 className="font-mono text-xs text-green-400 uppercase tracking-widest">Results</h4>
                          </div>
                          <div className="space-y-2">
                            {study.results.map((r) => (
                              <div
                                key={r.metric}
                                className="flex items-center justify-between p-2 rounded-lg"
                                style={{ background: "rgba(15,23,42,0.02)", border: "1px solid var(--border)" }}
                              >
                                <span className="text-text-secondary text-xs">{r.metric}</span>
                                <span className="font-clash font-semibold text-sm text-text-primary">{r.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
