"use client";

import { motion } from "framer-motion";

export default function TransformationSection() {
  const beforeVideos = [
    { views: "3,363", image: "📹", label: "Initial Video 1" },
    { views: "2,807", image: "📹", label: "Initial Video 2" },
    { views: "3,752", image: "📹", label: "Initial Video 3" },
  ];

  const afterVideos = [
    { views: "21.9K", image: "🎬", label: "Optimized Video 1", title: "Life With Nitin" },
    { views: "45.3K", image: "🎬", label: "Optimized Video 2", title: "Viral Hook Setup" },
    { views: "7.5M", image: "🎬", label: "Breakthrough Reel", title: "Sky Climb Reel" },
  ];

  return (
    <section id="results" className="relative py-32 overflow-hidden bg-background">
      {/* Background Orbs specific to this section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-red-500/5 blur-[80px]" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-amber-500/5 blur-[80px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <motion.div
            className="section-label justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            02 Case Study
          </motion.div>
          <motion.h2
            className="font-clash font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary uppercase tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Content <span className="text-gradient">Transformation</span>
          </motion.h2>
          <motion.p
            className="text-text-secondary text-md font-mono tracking-wider uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Strategy • Storytelling • Engagement
          </motion.p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* BEFORE COLUMN — 5 Cols */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-between p-6 md:p-8 rounded-3xl bg-white border border-red-200/50 shadow-2xl relative overflow-hidden transition-all duration-300 hover:shadow-red-100"
            style={{
              boxShadow: "0 20px 50px -12px rgba(239, 68, 68, 0.08)",
            }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Header Badge */}
            <div className="flex justify-between items-center mb-6">
              <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-red-500 text-white shadow-lg shadow-red-500/20">
                BEFORE
              </span>
              <span className="font-mono text-xs text-red-500 font-semibold uppercase tracking-wider">
                📉 Low Engagement
              </span>
            </div>

            {/* Thumbnails Container */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {beforeVideos.map((vid, index) => (
                <div
                  key={index}
                  className="rounded-xl p-4 flex flex-col items-center justify-center bg-slate-50 border border-slate-100 relative group overflow-hidden"
                >
                  <span className="text-2xl mb-2 grayscale opacity-60 group-hover:scale-110 transition-transform">{vid.image}</span>
                  <p className="font-clash font-bold text-slate-800 text-sm">
                    👁️ {vid.views}
                  </p>
                  <p className="text-[9px] text-slate-400 font-mono mt-1 text-center leading-none">
                    {vid.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Result Box */}
            <div className="border-t border-slate-100 pt-6">
              <p className="font-mono text-[10px] text-red-500 uppercase tracking-widest font-semibold mb-2">RESULT</p>
              <div className="grid grid-cols-2 gap-4 bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <div className="border-r border-slate-200 pr-2">
                  <p className="text-[10px] text-slate-500 font-mono">LOW VIEWS</p>
                  <p className="font-clash font-bold text-2xl text-red-500 leading-none mt-1">~9.9K</p>
                  <p className="text-[9px] text-slate-400 font-mono mt-0.5">TOTAL VIEWS</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span className="text-3xl leading-none">☹️</span>
                  <p className="text-[9px] text-slate-500 font-mono mt-1 font-semibold uppercase">Low Engagement</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* MIDDLE ARROW — 2 Cols (lg:flex, hidden in mobile) */}
          <div className="lg:col-span-2 flex flex-col justify-center items-center py-4 lg:py-0">
            <motion.div
              className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 shadow-md shadow-amber-500/5 rotate-90 lg:rotate-0"
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.div>
          </div>

          {/* AFTER COLUMN — 5 Cols */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-between p-6 md:p-8 rounded-3xl bg-white border border-amber-200/50 shadow-2xl relative overflow-hidden transition-all duration-300 hover:shadow-amber-100"
            style={{
              boxShadow: "0 20px 50px -12px rgba(245, 158, 11, 0.08)",
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Background glow flare */}
            <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-amber-500/10 blur-2xl" />

            {/* Header Badge */}
            <div className="flex justify-between items-center mb-6">
              <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-amber-500 text-white shadow-lg shadow-amber-500/20">
                AFTER
              </span>
              <span className="font-mono text-xs text-amber-600 font-semibold uppercase tracking-wider">
                🚀 High Engagement
              </span>
            </div>

            {/* Thumbnails Container */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {afterVideos.map((vid, index) => (
                <div
                  key={index}
                  className="rounded-xl p-4 flex flex-col items-center justify-center bg-amber-50/30 border border-amber-100/50 relative group overflow-hidden hover:bg-amber-50/50 transition-colors"
                >
                  <span className="text-2xl mb-2 group-hover:scale-120 transition-transform">{vid.image}</span>
                  <p className="font-clash font-bold text-amber-700 text-sm">
                    👁️ {vid.views}
                  </p>
                  <p className="text-[9px] text-slate-500 font-mono mt-1 text-center leading-none font-semibold">
                    {vid.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Result Box */}
            <div className="border-t border-slate-100 pt-6">
              <p className="font-mono text-[10px] text-amber-600 uppercase tracking-widest font-semibold mb-2">RESULT</p>
              <div className="grid grid-cols-2 gap-4 bg-amber-50/30 rounded-2xl p-4 border border-amber-100/40">
                <div className="border-r border-amber-200/50 pr-2">
                  <p className="text-[10px] text-slate-500 font-mono">HIGH VIEWS</p>
                  <p className="font-clash font-bold text-2xl text-amber-500 leading-none mt-1">~7.5M+</p>
                  <p className="text-[9px] text-slate-400 font-mono mt-0.5">TOTAL VIEWS</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span className="text-3xl leading-none animate-bounce">😊</span>
                  <p className="text-[9px] text-amber-600 font-mono mt-1 font-semibold uppercase">High Engagement</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Philosophy tagline */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-block py-2.5 px-6 rounded-2xl bg-slate-50 border border-slate-100">
            <p className="font-mono text-xs text-text-secondary">
              <span className="font-semibold text-text-primary">STRATEGY</span> +{" "}
              <span className="font-semibold text-text-primary">CREATIVITY</span> ={" "}
              <span className="text-amber-600 font-bold">IMPACT</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
