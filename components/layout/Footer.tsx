"use client";

import { motion } from "framer-motion";
import { socials } from "@/content/socials";

const quickLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "Instagram", href: socials.instagram, icon: "ig" },
  { label: "Email", href: `mailto:${socials.email}`, icon: "✉" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t" style={{ borderColor: "var(--border)" }}>
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #3B82F6, #7C3AED)" }}
              >
                <span className="font-clash font-bold text-white text-sm">DK</span>
              </div>
              <div>
                <p className="font-clash font-semibold text-text-primary text-sm">Divyam Kumar</p>
                <p className="font-mono text-[10px] text-blue-600/70 tracking-widest font-semibold">COFFEEE MEDIA</p>
              </div>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Social Media Manager & Content Strategist helping creators and brands grow through strategic content systems.
            </p>
            <p
              className="font-clash font-semibold text-sm"
              style={{ background: "linear-gradient(135deg, #3B82F6, #22D3EE, #A78BFA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            >
              Strategy. Creativity. Measurable Growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs tracking-[0.15em] text-blue-600 uppercase font-bold">Navigation</h3>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-text-secondary hover:text-text-primary transition-colors text-sm text-left cursor-pointer w-fit"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs tracking-[0.15em] text-blue-600 uppercase font-bold">Connect</h3>
            <div className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors text-sm cursor-pointer group"
                >
                  <span className="text-blue-600 group-hover:text-cyan-600 transition-colors text-xs font-mono">[{link.icon}]</span>
                  {link.label}
                </a>
              ))}
              {socials.whatsapp && (
                <a
                  href={socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors text-sm cursor-pointer group"
                >
                  <span className="text-blue-600 group-hover:text-cyan-600 transition-colors text-xs font-mono">[wa]</span>
                  WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-text-muted text-xs">
            © 2026 Divyam Kumar. All Rights Reserved. · Founder of Coffeee Media
          </p>
          <p className="text-text-muted text-xs font-mono">
            Built with Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
