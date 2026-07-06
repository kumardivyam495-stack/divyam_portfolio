"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          className={`mt-4 mx-4 w-full max-w-5xl px-6 py-3 rounded-2xl flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "glass border border-white/8"
              : "border border-transparent"
          }`}
          style={scrolled ? { backdropFilter: "blur(20px)" } : {}}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #3B82F6, #7C3AED)" }}
            >
              <span className="font-clash font-bold text-white text-sm">DK</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-clash font-semibold text-text-primary text-sm leading-none">Divyam Kumar</p>
              <p className="font-mono text-[10px] text-blue-600/70 tracking-widest mt-0.5 font-semibold">FANSPARK MEDIA</p>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className={`nav-link text-sm font-medium cursor-pointer ${
                  activeSection === link.href.slice(1) ? "text-text-primary active" : ""
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <MagneticButton>
              <button
                onClick={() => scrollTo("#contact")}
                className="relative px-5 py-2 rounded-xl text-sm font-semibold text-white cursor-pointer overflow-hidden group"
                style={{ background: "linear-gradient(135deg, #3B82F6, #7C3AED)" }}
              >
                <span className="relative z-10">Let&apos;s Talk</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(135deg, #60A5FA, #A78BFA)" }} />
              </button>
            </MagneticButton>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-6 h-px bg-text-primary"
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 5 : 0 }}
            />
            <motion.span
              className="block w-4 h-px bg-text-primary/60"
              animate={{ opacity: menuOpen ? 0 : 1 }}
            />
            <motion.span
              className="block w-6 h-px bg-text-primary"
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -5 : 0 }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ background: "rgba(255,255,255,0.98)", backdropFilter: "blur(20px)" }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="font-clash text-4xl font-semibold text-text-primary hover:text-blue-600 transition-colors cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollTo("#contact")}
                className="mt-4 px-8 py-3 rounded-xl text-white font-semibold cursor-pointer"
                style={{ background: "linear-gradient(135deg, #3B82F6, #7C3AED)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
              >
                Let&apos;s Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
