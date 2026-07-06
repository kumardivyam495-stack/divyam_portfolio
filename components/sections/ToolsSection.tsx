"use client";

import { useState, type ReactElement } from "react";
import { motion } from "framer-motion";
import { toolCategories } from "@/content/tools";

// Pre-computed RGB values for accent colors
const accentColorRGBs = [
  "59,130,246",   // blue
  "34,211,238",   // cyan
  "167,139,250",  // violet-light
  "59,130,246",
  "34,211,238",
];

const categoryIconMap: Record<string, ReactElement> = {
  palette: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" /><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" /><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" /><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
      <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c0.926,0,1.648-0.745,1.5-1.66c-0.07-0.413-0.305-0.755-0.515-1.074C12.553,18.772,12.5,18.457,12.5,18c0-1.105,0.895-2,2-2h2c2.762,0,5-2.238,5-5C21.5,6.134,17.134,2,12,2z" />
    </svg>
  ),
  film: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="2.18" /><line x1="7" y1="2" x2="7" y2="22" /><line x1="17" y1="2" x2="17" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /><line x1="2" y1="7" x2="7" y2="7" /><line x1="2" y1="17" x2="7" y2="17" /><line x1="17" y1="17" x2="22" y2="17" /><line x1="17" y1="7" x2="22" y2="7" />
    </svg>
  ),
  briefcase: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16,7V5a2,2,0,0,0-2-2H10A2,2,0,0,0,8,5V7" /><line x1="12" y1="12" x2="12" y2="12" />
    </svg>
  ),
  cpu: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  ),
  "bar-chart": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  ),
};

const accentColors = ["#3B82F6", "#22D3EE", "#A78BFA", "#3B82F6", "#22D3EE"];

export default function ToolsSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="tools" className="relative py-32">
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
            08 Tools
          </motion.div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <motion.h2
              className="font-clash font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Tools &{" "}
              <span className="text-gradient">Workflow</span>
            </motion.h2>
            <motion.p
              className="text-text-secondary max-w-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A carefully selected stack for maximum output and efficiency.
            </motion.p>
          </div>
        </div>

        {/* Tool categories */}
        <div className="space-y-5">
          {toolCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              className="rounded-2xl overflow-hidden shadow-sm"
              style={{
                background: activeCategory === category.id
                  ? "var(--card-hover)"
                  : "var(--card)",
                border: activeCategory === category.id
                  ? `1px solid rgba(${catIndex === 0 ? "59,130,246" : catIndex === 1 ? "34,211,238" : "124,58,237"},0.3)`
                  : "1px solid var(--border)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              onMouseEnter={() => setActiveCategory(category.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="p-6 flex flex-col sm:flex-row sm:items-center gap-6">
                {/* Category info */}
                <div className="flex items-center gap-3 sm:w-48 flex-shrink-0">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{
                      background: `rgba(${accentColorRGBs[catIndex % accentColorRGBs.length]},0.15)`,
                      color: `rgb(${accentColorRGBs[catIndex % accentColorRGBs.length]})`,
                    }}
                  >
                    {categoryIconMap[category.icon]}
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest">Stack</p>
                    <p className="font-semibold text-text-primary text-sm">{category.label}</p>
                  </div>
                </div>

                {/* Separator */}
                <div className="hidden sm:block w-px h-10" style={{ background: "var(--border)" }} />

                {/* Tool chips */}
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool) => (
                    <span
                      key={tool.name}
                      className="px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-300"
                      style={{
                        background: activeCategory === category.id
                          ? `rgba(${accentColorRGBs[catIndex % accentColorRGBs.length]},0.1)`
                          : "rgba(15, 23, 42, 0.03)",
                        border: activeCategory === category.id
                          ? `1px solid rgba(${accentColorRGBs[catIndex % accentColorRGBs.length]},0.25)`
                          : "1px solid var(--border)",
                        color: activeCategory === category.id
                          ? `rgb(${accentColorRGBs[catIndex % accentColorRGBs.length]})`
                          : "var(--text-secondary)",
                      }}
                    >
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
