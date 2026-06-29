"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const SKILLS = [
  "Product Management", "Data Analysis", "Python", "SQL",
  "React", "Node.js", "Agile / Scrum", "Product Strategy",
  "User Research", "Systems Thinking", "Machine Learning", "Behavioural Science",
];

export default function Hero() {
  const { scrollY } = useScroll();
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 md:pt-32 pb-0 px-6 sm:px-12 lg:px-24 overflow-hidden">

      <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col flex-1 mt-16 md:mt-24">

        {/* Top row — name + status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-between items-start"
        >
          <h1 className="font-serif tracking-tighter text-white leading-[0.85] text-[clamp(72px,13vw,172px)]">
            Minan K<br />
            Kahai<span className="text-amber-500/80">.</span>
          </h1>

          <div className="hidden md:flex flex-col items-end gap-3 mt-4">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">
              London, UK
            </span>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-emerald-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available
            </span>
          </div>
        </motion.div>

        {/* Main hook */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 md:mt-32"
        >
          <h2 className="font-serif tracking-tight leading-[1.1] text-[clamp(32px,4.5vw,64px)] max-w-5xl">
            <span className="text-white">Technical enough to build it.</span><br />
            <span className="italic text-[#d2a050]/80">Human enough to know why it matters.</span>
          </h2>
        </motion.div>

        {/* Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-center gap-6 md:gap-12"
        >
          <p className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-neutral-400 flex flex-wrap items-center gap-3 md:gap-4 leading-loose">
            <span className="text-white">MSc Computer Science</span>
            <span className="text-amber-500/50 hidden md:inline">/</span>
            <span className="text-white">BSc Psychology</span>
          </p>
        </motion.div>

        {/* Spacer */}
        <div className="flex-1 min-h-[80px]" />

        {/* Skills marquee - Now enclosed with top and bottom borders */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
          className="overflow-hidden border-y border-neutral-900 py-6 md:py-8 mt-auto relative z-20"
        >
          <div className="flex w-max animate-[marquee_40s_linear_infinite]">
            {[...SKILLS, ...SKILLS].map((skill, i) => (
              <span key={i} className="flex items-center gap-6 pr-6">
                <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 whitespace-nowrap">
                  {skill}
                </span>
                <span className="text-[#d2a050]/30 text-xs">/</span>
              </span>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        style={{ opacity: scrollIndicatorOpacity }}
        className="fixed bottom-12 left-6 sm:left-12 lg:left-24 z-30 hidden sm:flex font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600 items-center gap-4"
      >
        <span className="w-10 h-[1px] bg-neutral-800" />
        Scroll
      </motion.div>

    </section>
  );
}
