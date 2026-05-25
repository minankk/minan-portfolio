"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-32 md:py-48 bg-black text-white" id="contact">
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 mb-8">
            Initiate
          </p>
          <h2 className="text-5xl md:text-8xl font-serif tracking-tight mb-12">
            Let's <span className="text-neutral-500 italic font-light">Connect.</span>
          </h2>
          <p className="text-sm md:text-base font-sans text-neutral-400 max-w-lg mx-auto leading-relaxed mb-16">
            Open to product, strategy, and engineering roles. If you are building systems that require both technical rigour and psychological insight, I would like to hear from you.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 font-mono text-xs uppercase tracking-widest text-neutral-500">
            <a href="mailto:your.email@example.com" className="hover:text-white transition-colors relative group py-2">
              Email
              <span className="absolute bottom-0 left-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors relative group py-2">
              LinkedIn
              <span className="absolute bottom-0 left-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
            <a href="https://github.com/minankk" target="_blank" rel="noreferrer" className="hover:text-white transition-colors relative group py-2">
              GitHub
              <span className="absolute bottom-0 left-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
