"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 bg-black overflow-hidden">

      <div className="max-w-6xl w-full mx-auto relative z-10">

        {/* Top Minimalist Data */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4 md:gap-8 mb-10"
        >
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400">
              London, UK
            </span>
          </div>
          <div className="hidden md:block h-px w-12 bg-neutral-800"></div>
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400">
            Software & Strategy
          </span>
        </motion.div>

        {/* The Refined Name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-[6.5rem] leading-[1.05] text-white font-serif tracking-tight mb-8">
            Minan Kahai<span className="text-neutral-600">.</span>
          </h1>
        </motion.div>

        {/* The Pitch - Keeping it open for multiple roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-2 gap-12 mt-8 border-t border-neutral-900 pt-12"
        >
          <div>
            <p className="text-2xl md:text-4xl font-serif text-neutral-300 leading-snug">
              Bridging the gap between <span className="text-white italic">human behaviour</span> and technical execution.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-sm md:text-base font-sans text-neutral-400 leading-relaxed max-w-md">
              Fusing a background in Psychology with a Distinction-graded MSc in Computer Science. Architecting scalable backend infrastructure, agentic AI systems, and robust full-stack applications—always with a relentless focus on the end user and commercial growth.
            </p>

            {/* Capabilities / Tags */}
            <ul className="flex flex-wrap gap-3 text-[9px] md:text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
              <li className="border border-neutral-800 px-4 py-2 rounded-full">Forward-Deployed Engineering</li>
              <li className="border border-neutral-800 px-4 py-2 rounded-full">Product Growth</li>
              <li className="border border-neutral-800 px-4 py-2 rounded-full">Backend Architecture</li>
            </ul>
          </div>
        </motion.div>

      </div>

      {/* Moody Film Texture - Kodak Portra aesthetic */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-screen bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />

      {/* Subtle lighting gradient */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_60%)] pointer-events-none" />
    </section>
  );
}
