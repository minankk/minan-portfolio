"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative w-full py-32 px-6 sm:px-12 lg:px-24 flex justify-center z-10">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-16 md:gap-24 items-start">

        {/* Left Column: The Anchor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/3 flex flex-col md:sticky md:top-32"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#d2a050] mb-6">
            01. The Context
          </p>
          <h3 className="text-3xl md:text-4xl font-serif text-white tracking-tight leading-[1.2]">
            Bridging the gap between <span className="italic text-neutral-400">behaviour</span> and <span className="italic text-neutral-400">architecture.</span>
          </h3>
        </motion.div>

        {/* Right Column: The Story & Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="md:w-2/3 flex flex-col"
        >
          {/* The Narrative */}
          <div className="flex flex-col gap-8 text-lg md:text-xl font-sans leading-relaxed text-neutral-400">
            <p className="text-neutral-300">
              I spent four years decoding <strong className="text-white font-medium">human cognition</strong> before pivoting to technology. I realised the industry often suffers from a critical disconnect: we build incredibly robust systems, but fail to account for the <strong className="text-[#d2a050] font-medium">psychology of the end user</strong>.
            </p>

            <p>
              Whether I am architecting <strong className="text-neutral-200 font-medium">scalable full-stack platforms</strong> from the ground up, or developing <strong className="text-neutral-200 font-medium">award-winning research</strong> on empathetic virtual agents using a novel, rule-based <strong className="text-[#d2a050] font-medium">SKG Model</strong> in Unity, my goal remains the same.
            </p>

            <p className="font-serif italic text-white/90 mt-2">
              The architecture must be clean, the pipelines must scale, but the final product must intuitively make sense to a human being.
            </p>
          </div>

          {/* Sleek Horizontal Metadata Footer */}
          <div className="mt-16 pt-8 border-t border-neutral-900 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-600">Core Focus</span>
              <span className="text-base md:text-lg text-white font-serif italic">Affective Computing</span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-600">Design Ethos</span>
              <span className="text-base md:text-lg text-white font-serif italic">Empathetic Engineering</span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-600">Current Interest</span>
              <span className="text-base md:text-lg text-white font-serif italic">"Physical AI"</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
