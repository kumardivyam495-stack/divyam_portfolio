"use client";

import { motion } from "framer-motion";
import { profile } from "@/content/profile";

const differentiators = [
  { icon: "🧠", text: "Strategy-First Approach" },
  { icon: "📊", text: "Data-Driven Decisions" },
  { icon: "🌱", text: "Sustainable Organic Growth" },
  { icon: "🎨", text: "Creative Content Systems" },
  { icon: "💬", text: "Clear Communication" },
  { icon: "🏗️", text: "Long-Term Brand Building" },
];

const floatingCards = [
  {
    title: "Platforms",
    value: "Instagram · YouTube · LinkedIn",
    color: "#3B82F6",
    delay: 0,
  },
  {
    title: "Languages",
    value: "English · Hindi",
    color: "#22D3EE",
    delay: 0.5,
  },
  {
    title: "Availability",
    value: "Open to Projects",
    color: "#A78BFA",
    delay: 1,
    dot: true,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: "linear-gradient(180deg, transparent, rgba(59,130,246,0.4), transparent)" }} />

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
            07 About
          </motion.div>
          <motion.h2
            className="font-clash font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            The Strategy{" "}
            <span className="text-gradient">Behind</span>
            <br />
            the Content
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Story */}
          <div className="space-y-8">
            {/* About paragraphs */}
            <div className="space-y-5">
              {profile.about.map((para, i) => (
                <motion.p
                  key={i}
                  className="text-text-secondary leading-relaxed"
                  style={{ fontSize: i === 0 ? "1.05rem" : "0.95rem" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  {i === 0 ? (
                    <>
                  I&apos;m{" "}
                  <span className="text-text-primary font-semibold">Divyam Kumar</span>, the founder of{" "}
                  <span className="text-gradient font-semibold">Fanspark Media</span>, where I help creators, startups, and businesses build a stronger digital presence through strategic content and social media management.
                </>
              ) : para}
            </motion.p>
          ))}
        </div>

        {/* Philosophy quote */}
        <motion.blockquote
          className="relative pl-5 py-4"
          style={{ borderLeft: "2px solid #3B82F6" }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="font-clash text-lg md:text-xl font-semibold text-text-primary leading-snug">
            &ldquo;{profile.philosophy}&rdquo;
          </p>
        </motion.blockquote>

        {/* What Makes Me Different */}
        <div className="space-y-4">
          <motion.h3
            className="font-clash font-semibold text-text-primary text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                What Makes My Approach Different
              </motion.h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {differentiators.map((d, i) => (
                  <motion.div
                    key={d.text}
                    className="flex items-center gap-3 py-2 px-3 rounded-xl"
                    style={{
                      background: "rgba(15,23,42,0.02)",
                      border: "1px solid var(--border)",
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                  >
                    <span className="text-sm">{d.icon}</span>
                    <span className="text-sm text-text-secondary">{d.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Abstract visual + info cards */}
          <div className="relative">
            {/* Custom about photo */}
            <motion.div
              className="relative rounded-3xl overflow-hidden h-80 lg:h-96 mb-6 shadow-md"
              style={{
                border: "1px solid var(--border)",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/about-section.jpeg"
                alt="Divyam Kumar"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay shadow to integrate into the page design */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Info cards */}
            <div className="space-y-3">
              {floatingCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  className="flex items-center justify-between p-4 rounded-2xl shadow-sm"
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: card.delay }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: card.color,
                        boxShadow: `0 0 8px ${card.color}`,
                        ...(card.dot ? { animation: "pulse 2s ease-in-out infinite" } : {}),
                      }}
                    />
                    <span className="font-mono text-xs text-text-muted">{card.title}</span>
                  </div>
                  <span className="text-sm text-text-secondary font-medium">{card.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
