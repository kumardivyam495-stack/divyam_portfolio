"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { serviceCategories } from "@/content/services";

export default function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="relative py-32">
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
            03 Services
          </motion.div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <motion.h2
              className="font-clash font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              What I Do{" "}
              <span className="text-gradient">Best</span>
            </motion.h2>
            <motion.p
              className="text-text-secondary max-w-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              A full suite of social media services — from strategy to execution to analysis.
            </motion.p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {serviceCategories.map((service, i) => (
            <motion.div
              key={service.id}
              className={`relative rounded-2xl p-6 cursor-pointer group overflow-hidden transition-all duration-500 ${
                service.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{
                background: hoveredId === service.id
                  ? "var(--card-hover)"
                  : "var(--card)",
                border: hoveredId === service.id
                  ? "1px solid rgba(37,99,235,0.2)"
                  : "1px solid var(--border)",
                boxShadow: hoveredId === service.id
                  ? "0 20px 40px -10px rgba(15,23,42,0.12)"
                  : "0 4px 20px -2px rgba(15,23,42,0.04)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Background glow on hover */}
              <AnimatePresence>
                {hoveredId === service.id && (
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                    style={{
                      background: "radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)",
                      filter: "blur(20px)",
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                  />
                )}
              </AnimatePresence>

              {/* Category badge */}
              <span
                className="inline-block font-mono text-[10px] tracking-widest uppercase px-2 py-1 rounded-full mb-4"
                style={{
                  background: "rgba(59,130,246,0.1)",
                  color: "#60A5FA",
                  border: "1px solid rgba(59,130,246,0.2)",
                }}
              >
                {service.category}
              </span>

              {/* Icon */}
              <div className="text-3xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="font-clash font-semibold text-text-primary mb-3 group-hover:text-gradient transition-all">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Items */}
              <ul className="space-y-1.5">
                {service.items.slice(0, 4).map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-text-muted">
                    <div
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: "#3B82F6" }}
                    />
                    {item}
                  </li>
                ))}
                {service.items.length > 4 && (
                  <li className="text-xs text-blue-600 font-mono ml-3 font-semibold">
                    +{service.items.length - 4} more
                  </li>
                )}
              </ul>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700"
                style={{ background: "linear-gradient(90deg, #3B82F6, #7C3AED)" }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors cursor-pointer group"
          >
            Ready to grow?{" "}
            <span className="text-blue-400 group-hover:text-cyan-400 underline underline-offset-4 transition-colors">
              Let&apos;s talk about your goals →
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
