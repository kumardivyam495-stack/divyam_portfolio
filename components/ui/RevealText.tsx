"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function RevealText({ text, className = "", delay = 0, as: Tag = "p" }: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="text-reveal-container">
      <motion.span
        className={`text-reveal-line ${className}`}
        style={{ display: "block" }}
        animate={isInView ? { translateY: 0, opacity: 1 } : { translateY: "110%", opacity: 0 }}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.span>
    </div>
  );
}
