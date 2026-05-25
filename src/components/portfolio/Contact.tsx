"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 sm:px-12 lg:px-24 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-text mb-6">Let's talk.</h2>
        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
          I am immediately available and based in London. Whether you have a role in mind, a product to build, or just want to connect, I would love to hear from you.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
      >
        <a
          href="mailto:minankahai1@yahoo.com"
          className="w-full sm:w-auto bg-primary hover:bg-blue-600 text-white font-medium py-3.5 px-8 rounded-lg transition-colors duration-200 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          Email Me
        </a>

        <a
          href="https://github.com/minankk"
          target="_blank"
          rel="noreferrer"
          className="w-full sm:w-auto text-text hover:text-primary font-medium py-3.5 px-8 rounded-lg border border-border hover:border-primary transition-all duration-200 bg-card/50 backdrop-blur-sm flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          Open GitHub
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-32 pt-8 border-t border-border/50 text-slate-500 font-mono text-xs uppercase tracking-widest flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p>© {new Date().getFullYear()} Minan Kahai.</p>
        <p className="flex items-center gap-2">
          London <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> UK
        </p>
      </motion.div>
    </section>
  );
}
