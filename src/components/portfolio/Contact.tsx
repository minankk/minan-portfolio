"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Magnetic from "./Magnetic";
import Terminal from "./Terminal";

export default function Contact() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <section id="contact" className="py-32 px-6 sm:px-12 lg:px-24 max-w-4xl mx-auto text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8"
      >
        <h2 className="text-4xl sm:text-5xl font-serif text-white mb-6">Let's talk.</h2>
        <p className="text-sm font-sans text-neutral-400 leading-relaxed max-w-2xl mx-auto">
          Whether you are building a product, looking for a technical collaborator, or navigating your own path from psychology into technology, I am always open to a conversation.
          <br /><br />
          I enjoy sharing my experience with others making non-traditional moves into the industry. Feel free to reach out.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12"
      >
        <Magnetic>
          <a
            href="mailto:minankahai1@yahoo.com"
            className="text-xs font-mono uppercase tracking-[0.2em] text-black bg-white hover:bg-neutral-200 py-4 px-8 transition-colors duration-300"
          >
            Email Me
          </a>
        </Magnetic>

        <Magnetic>
          <a
            href="https://github.com/minankk"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono uppercase tracking-[0.2em] text-white border border-neutral-800 hover:border-white py-4 px-8 transition-colors duration-300"
          >
            GitHub
          </a>
        </Magnetic>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-32 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-8 relative"
      >
        <div className="text-neutral-600 font-mono text-[10px] uppercase tracking-[0.3em] flex flex-col sm:flex-row items-center gap-4">
          <p>© {new Date().getFullYear()} Minan Kahai.</p>
          <p className="flex items-center gap-2">
            London <span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span> UK
          </p>
        </div>

        <Magnetic>
          <button
            onClick={() => setTerminalOpen(!terminalOpen)}
            className="group relative flex items-center gap-3 bg-[#050505] border border-neutral-800 rounded-full px-5 py-2.5 hover:border-neutral-600 transition-all duration-300"
            title="Initialize Terminal"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 group-hover:text-white transition-colors">
              Run Secret Terminal
            </span>
            <span className="text-white font-mono font-bold text-sm">{">_"}</span>

            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
          </button>
        </Magnetic>
      </motion.div>

      <Terminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </section>
  );
}
