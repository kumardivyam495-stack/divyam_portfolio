"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioItems, portfolioCategories } from "@/content/projects";

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.categorySlug === activeCategory);

  return (
    <section id="work" className="relative py-32">
      <div className="section-container">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <motion.div
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            04 Portfolio
          </motion.div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <motion.h2
              className="font-clash font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Featured{" "}
              <span className="text-gradient">Work</span>
            </motion.h2>
            <motion.p
              className="text-text-secondary max-w-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A selection of projects across platforms and content types.
            </motion.p>
          </div>
        </div>

        {/* Category Tabs */}
        <motion.div
          className="flex gap-2 flex-wrap mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {portfolioCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? "text-white"
                  : "text-text-secondary hover:text-text-primary"
              }`}
              style={
                activeCategory === cat.id
                  ? {
                      background: "linear-gradient(135deg, #3B82F6, #7C3AED)",
                      boxShadow: "0 0 20px rgba(59,130,246,0.3)",
                    }
                  : {
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }
              }
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.a
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-card glass-card rounded-2xl overflow-hidden group block"
                data-cursor-hover
              >
                {/* Image or placeholder */}
                <div
                  className="relative h-48 overflow-hidden bg-slate-50"
                  style={{
                    background: `linear-gradient(135deg, rgba(37,99,235,0.04), rgba(99,102,241,0.04))`,
                  }}
                >
                  {item.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    /* Placeholder visual */
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <div
                          className="w-12 h-12 rounded-xl mx-auto flex items-center justify-center"
                          style={{ background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.2)" }}
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5">
                            <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21,15 16,10 5,21" />
                          </svg>
                        </div>
                        <p className="font-mono text-[10px] text-text-muted">
                          Portfolio Asset
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="portfolio-card-overlay" />

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="font-mono text-[10px] px-2 py-1 rounded-full"
                      style={{
                        background: "rgba(5,8,22,0.8)",
                        border: "1px solid rgba(59,130,246,0.3)",
                        color: "#60A5FA",
                      }}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Metric badge */}
                  {item.metric && (
                    <div className="absolute top-3 right-3">
                      <span
                        className="font-clash font-semibold text-xs px-2 py-1 rounded-full text-white"
                        style={{ background: "linear-gradient(135deg, #3B82F6, #7C3AED)" }}
                      >
                        {item.metric}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="font-clash font-semibold text-text-primary text-lg group-hover:text-gradient transition-all">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(15, 23, 42, 0.04)",
                          border: "1px solid rgba(15, 23, 42, 0.08)",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metric & Link Area */}
                  <div className="flex items-center justify-between pt-2">
                    {item.metric && item.metricLabel ? (
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        <span className="font-mono text-xs text-blue-600 font-medium">
                          {item.metric} {item.metricLabel}
                        </span>
                      </div>
                    ) : (
                      <div />
                    )}

                    {item.link && (
                      <div
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 group-hover:text-blue-800 transition-colors"
                      >
                        <span>View Asset</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Upload note */}
        <motion.div
          className="mt-10 p-4 rounded-xl text-center"
          style={{
            background: "rgba(59,130,246,0.04)",
            border: "1px dashed rgba(59,130,246,0.2)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-mono text-xs text-text-muted">
            📁 Drop your real portfolio images in{" "}
            <code className="text-blue-400">/public/portfolio/</code>{" "}
            and update{" "}
            <code className="text-blue-400">content/projects.ts</code>{" "}
            with the file names
          </p>
        </motion.div>
      </div>
    </section>
  );
}
