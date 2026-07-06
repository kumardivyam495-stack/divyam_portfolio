"use client";

import { motion } from "framer-motion";

interface GlowOrbProps {
  color?: "blue" | "violet" | "cyan";
  size?: number;
  className?: string;
}

export default function GlowOrb({ color = "blue", size = 400, className = "" }: GlowOrbProps) {
  const colorMap = {
    blue: "rgba(59,130,246,0.15)",
    violet: "rgba(124,58,237,0.12)",
    cyan: "rgba(34,211,238,0.10)",
  };

  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${colorMap[color]}, transparent 70%)`,
        filter: "blur(60px)",
      }}
      animate={{
        scale: [1, 1.15, 0.95, 1],
        opacity: [0.6, 1, 0.6, 0.8],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
