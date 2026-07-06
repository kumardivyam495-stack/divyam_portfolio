"use client";

import { motion } from "framer-motion";

export default function CinematicBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-background" />

      {/* Dot grid pattern */}
      <div className="absolute inset-0 dot-pattern opacity-60" />

      {/* Aurora layers */}
      <motion.div
        className="aurora-layer"
        style={{
          width: "700px",
          height: "700px",
          top: "-10%",
          left: "10%",
          background: "radial-gradient(circle, rgba(59,130,246,0.3), transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 0.9, 1.1, 1],
          x: [0, 30, -20, 15, 0],
          y: [0, -20, 30, -10, 0],
          opacity: [0.12, 0.18, 0.10, 0.16, 0.12],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="aurora-layer"
        style={{
          width: "600px",
          height: "600px",
          bottom: "10%",
          right: "5%",
          background: "radial-gradient(circle, rgba(124,58,237,0.25), transparent 70%)",
        }}
        animate={{
          scale: [1, 0.9, 1.1, 1, 1.05],
          x: [0, -20, 15, -10, 0],
          y: [0, 20, -15, 25, 0],
          opacity: [0.12, 0.08, 0.15, 0.10, 0.12],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <motion.div
        className="aurora-layer"
        style={{
          width: "400px",
          height: "400px",
          top: "40%",
          left: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.15), transparent 70%)",
        }}
        animate={{
          scale: [1, 1.15, 0.95, 1.08, 1],
          x: [0, 20, -30, 10, 0],
          y: [0, -30, 20, -15, 0],
          opacity: [0.08, 0.12, 0.06, 0.10, 0.08],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />

      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient" style={{
        background: "radial-gradient(ellipse at center, transparent 60%, rgba(15,23,42,0.04) 100%)"
      }} />
    </div>
  );
}
