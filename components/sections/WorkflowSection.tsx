"use client";

import { motion } from "framer-motion";
import { type ReactElement } from "react";
import { processSteps } from "@/content/process";

const iconMap: Record<string, ReactElement> = {
  compass: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88 16.24,7.76" />
    </svg>
  ),
  search: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  target: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  ),
  layout: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),
  zap: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
    </svg>
  ),
  "bar-chart": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  ),
};

const stepColors = ["#3B82F6", "#22D3EE", "#A78BFA", "#3B82F6", "#22D3EE", "#A78BFA"];

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-32">
      <div className="section-container">
        {/* Header */}
        <div className="mb-20 space-y-4">
          <motion.div
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            06 Process
          </motion.div>
          <motion.h2
            className="font-clash font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            How I{" "}
            <span className="text-gradient">Work</span>
          </motion.h2>
          <motion.p
            className="text-text-secondary max-w-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A proven 6-step system built to deliver measurable growth at every stage.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connecting line on desktop */}
          <div
            className="hidden lg:block absolute left-8 top-8 bottom-8 w-px"
            style={{ background: "linear-gradient(180deg, #3B82F6, #7C3AED, transparent)" }}
          />

          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div
                  className="lg:ml-20 rounded-2xl p-6 md:p-8 group cursor-pointer transition-all duration-500 hover:border-blue-500/20"
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {/* Dot on the line */}
                  <div
                    className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full items-center justify-center z-10"
                    style={{
                      background: stepColors[i],
                      boxShadow: `0 0 20px ${stepColors[i]}50`,
                    }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    {/* Step number + icon */}
                    <div className="md:col-span-2 flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
                      <span
                        className="font-clash font-bold text-4xl"
                        style={{ color: stepColors[i], opacity: 0.6 }}
                      >
                        {step.number}
                      </span>
                      <div style={{ color: stepColors[i] }}>
                        {iconMap[step.icon]}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-6 space-y-3">
                      <h3 className="font-clash font-semibold text-xl md:text-2xl text-text-primary">
                        {step.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Detail bullets */}
                    <div className="md:col-span-4">
                      <ul className="space-y-2">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2 text-sm text-text-muted">
                            <div
                              className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                              style={{ background: stepColors[i] }}
                            />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Hover accent bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px w-0 group-hover:w-full transition-all duration-700 rounded-b-2xl"
                    style={{ background: `linear-gradient(90deg, ${stepColors[i]}, transparent)` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
