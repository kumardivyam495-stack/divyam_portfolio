"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { socials } from "@/content/socials";
import MagneticButton from "@/components/ui/MagneticButton";

const socialLinks = [
  {
    label: "Email",
    value: socials.email,
    href: `mailto:${socials.email}`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    color: "#3B82F6",
  },
  {
    label: "Instagram",
    value: "@fanspark.media",
    href: socials.instagram,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    color: "#E1306C",
  },
  {
    label: "WhatsApp",
    value: "+91 87662 40820",
    href: socials.whatsapp,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    color: "#25D366",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opens email client — replace with Formspree or API route if needed
    window.location.href = `mailto:${socials.email}?subject=${encodeURIComponent(form.subject || "Portfolio Enquiry")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    setStatus("sent");
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: "linear-gradient(180deg, transparent, rgba(124,58,237,0.4), transparent)" }} />

      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            className="section-label justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            10 Contact
          </motion.div>
          <motion.h2
            className="font-clash font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Let&apos;s Build Something{" "}
            <span className="text-gradient">Great</span>
          </motion.h2>
          <motion.p
            className="text-text-secondary max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to grow your brand through strategic content? Let&apos;s start a conversation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left — Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Status */}
            <div
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl"
              style={{
                background: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.2)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs text-green-400 uppercase tracking-widest">
                Available for New Projects
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="font-clash font-semibold text-text-primary text-2xl">
                Ready to grow your social media?
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Whether you need a complete content strategy, a platform audit, or ongoing social media management — I&apos;m here to help you build a stronger, more strategic digital presence.
              </p>
            </div>

            {/* What you get */}
            <div className="space-y-3">
              {[
                "Free discovery conversation",
                "Custom growth strategy",
                "Clear project timeline",
                "Transparent communication",
              ].map((item, i) => (
                <div key={item} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(37,99,235,0.12)" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="3">
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                  </div>
                  <span className="text-text-secondary text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="space-y-3 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
              <p className="font-mono text-xs text-text-muted uppercase tracking-widest font-semibold">Or reach me directly</p>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors group cursor-pointer"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                    style={{
                      background: "rgba(15,23,42,0.02)",
                      border: "1px solid var(--border)",
                      color: "#64748B",
                    }}
                  >
                    <span style={{ color: link.color }}>{link.icon}</span>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-text-muted">{link.label}</p>
                    <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {status === "sent" ? (
              <div
                className="h-full rounded-3xl p-10 flex flex-col items-center justify-center text-center space-y-4 shadow-sm"
                style={{
                  background: "var(--card)",
                  border: "1px solid rgba(34,197,94,0.3)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: "rgba(34,197,94,0.1)" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                </div>
                <h3 className="font-clash text-xl font-semibold text-text-primary">Message sent!</h3>
                <p className="text-text-secondary text-sm">I&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl p-6 md:p-8 space-y-5 bg-white shadow-lg"
                style={{
                  border: "1px solid var(--border)",
                }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-text-muted font-semibold">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none transition-colors"
                      style={{
                        background: "rgba(15,23,42,0.02)",
                        border: "1px solid var(--border)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--blue)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-text-muted font-semibold">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none transition-colors"
                      style={{
                        background: "rgba(15,23,42,0.02)",
                        border: "1px solid var(--border)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--blue)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-text-muted font-semibold">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="e.g. Social Media Strategy Enquiry"
                    className="w-full px-4 py-3 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none transition-colors"
                    style={{
                      background: "rgba(15,23,42,0.02)",
                      border: "1px solid var(--border)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--blue)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-text-muted font-semibold">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your goals, your brand, and how I can help..."
                    className="w-full px-4 py-3 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none transition-colors resize-none"
                    style={{
                      background: "rgba(15,23,42,0.02)",
                      border: "1px solid var(--border)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--blue)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>

                <MagneticButton className="w-full">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-semibold text-white text-sm cursor-pointer flex items-center justify-center gap-2 group relative overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #3B82F6, #7C3AED)" }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22,2 15,22 11,13 2,9 22,2" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "linear-gradient(135deg, #60A5FA, #A78BFA)" }} />
                  </button>
                </MagneticButton>

                <p className="font-mono text-xs text-text-muted text-center">
                  Typically responds within 24 hours
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
