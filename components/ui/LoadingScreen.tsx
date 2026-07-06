"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background glows */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] orb-blue glow-orb opacity-20" />
            <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] orb-violet glow-orb opacity-15" />
          </div>

          {/* Logo */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* DK Monogram */}
            <div className="relative">
              <motion.div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #3B82F6, #7C3AED)",
                  boxShadow: "0 0 40px rgba(59,130,246,0.4)",
                }}
                animate={{ boxShadow: ["0 0 40px rgba(59,130,246,0.4)", "0 0 60px rgba(124,58,237,0.4)", "0 0 40px rgba(59,130,246,0.4)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="font-clash font-bold text-white text-xl tracking-tight">DK</span>
              </motion.div>
            </div>

            {/* Brand name */}
            <div className="text-center">
              <motion.p
                className="font-mono text-xs tracking-[0.25em] text-blue-600 font-semibold uppercase mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Fanspark Media
              </motion.p>
              <motion.h1
                className="font-clash text-2xl font-semibold text-text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Divyam Kumar
              </motion.h1>
            </div>

            {/* Progress bar */}
            <div className="w-48 h-px bg-text-primary/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #0D9488, #2563EB, #6366F1)",
                }}
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <motion.p
              className="font-mono text-xs text-text-primary/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {Math.min(Math.round(progress), 100)}%
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
