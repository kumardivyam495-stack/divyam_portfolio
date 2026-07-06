"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/content/testimonials";

const platformColors: Record<string, string> = {
  Instagram: "#E1306C",
  YouTube: "#FF0000",
  LinkedIn: "#0A66C2",
};

export default function TestimonialsSection() {
  const hasRealTestimonials = testimonials.some((t) => t.verified);

  return (
    <section id="testimonials" className="relative py-32">
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
            09 Testimonials
          </motion.div>
          <motion.h2
            className="font-clash font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Client{" "}
            <span className="text-gradient">Stories</span>
          </motion.h2>
        </div>

        {!hasRealTestimonials ? (
          /* Placeholder state */
          <motion.div
            className="rounded-3xl p-12 md:p-20 text-center shadow-sm"
            style={{
              background: "var(--card)",
              border: "1px dashed var(--border)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: "rgba(37,99,235,0.06)", border: "1px solid rgba(37,99,235,0.15)" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className="font-clash text-2xl font-semibold text-text-primary mb-3">Client Testimonials Coming Soon</h3>
            <p className="text-text-secondary text-sm max-w-md mx-auto leading-relaxed">
              Real client feedback and success stories will be featured here. Each testimonial will be verified and linked to actual project results.
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-xs text-text-secondary font-semibold">Currently building client relationships</span>
            </div>
          </motion.div>
        ) : (
          /* Real testimonials grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                className="glass-card rounded-2xl p-6 space-y-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Platform */}
                {t.platform && (
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: platformColors[t.platform] || "#3B82F6" }}
                    />
                    <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">
                      via {t.platform}
                    </span>
                  </div>
                )}

                {/* Quote */}
                <blockquote className="text-text-secondary text-sm leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: "var(--border)" }}>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #3B82F6, #7C3AED)" }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-text-primary text-sm font-semibold">{t.name}</p>
                    <p className="text-text-secondary text-xs">{t.title}{t.company ? ` · ${t.company}` : ""}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
