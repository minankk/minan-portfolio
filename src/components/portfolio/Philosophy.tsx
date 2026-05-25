"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden" id="philosophy">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 mb-12">
            The Thesis
          </p>

          <h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-[1.3] text-neutral-300">
            Great software is not just a technical challenge; it is a <span className="text-white italic">human</span> one. By anchoring robust system architecture in cognitive principles, we build digital infrastructure that actually resonates.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-24 grid md:grid-cols-3 gap-12 text-left border-t border-neutral-900 pt-16"
        >
          <div>
            <span className="text-white font-serif text-xl italic mb-4 block">01. Empathy</span>
            <p className="text-xs font-sans text-neutral-500 leading-relaxed">
              Understanding the user is not an afterthought. A deep foundation in psychology ensures that every architectural decision serves the human on the other side of the screen.
            </p>
          </div>
          <div>
            <span className="text-white font-serif text-xl italic mb-4 block">02. Rigour</span>
            <p className="text-xs font-sans text-neutral-500 leading-relaxed">
              Ideas mean nothing without execution. From Distinction-graded AI research to full-stack delivery, the focus is always on scalable, maintainable, and high-performance code.
            </p>
          </div>
          <div>
            <span className="text-white font-serif text-xl italic mb-4 block">03. Impact</span>
            <p className="text-xs font-sans text-neutral-500 leading-relaxed">
              Avoiding technology for technology's sake. Whether acting as a Backend Lead or driving Agile sprints, the ultimate metric is measurable, real-world utility.
            </p>
          </div>
        </motion.div>

      </div>

      {/* Subtle warm/moody film gradient to break up the pure black */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[radial-gradient(ellipse_at_center,rgba(50,40,30,0.15),transparent_70%)] pointer-events-none mix-blend-screen" />
    </section>
  );
}
