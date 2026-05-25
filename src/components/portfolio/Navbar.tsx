"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-neutral-900/50 px-6 md:px-12 py-5 flex justify-between items-center"
    >
      {/* Brand Monogram */}
      <div
        className="font-serif text-xl italic text-white cursor-pointer hover:text-neutral-400 transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        MK.
      </div>

      {/* Navigation Links & CV */}
      <div className="flex items-center gap-8 md:gap-12">
        <nav className="hidden md:flex gap-8 text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400">
          <button onClick={() => scrollTo("capabilities")} className="hover:text-white transition-colors">
            Capabilities
          </button>
          <button onClick={() => scrollTo("skills")} className="hover:text-white transition-colors">
            Index
          </button>
          <button onClick={() => scrollTo("contact")} className="hover:text-white transition-colors">
            Contact
          </button>
        </nav>

        {/* Persistent CV Button */}
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 border border-neutral-700 text-[10px] font-mono uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-colors duration-300"
        >
          View CV
        </a>
      </div>
    </motion.header>
  );
}
