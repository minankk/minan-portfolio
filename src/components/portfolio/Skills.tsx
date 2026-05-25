"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const stack = [
    "Python", "C#", "JavaScript", "TypeScript",
    "Ruby on Rails", "React", "Node.js", "SQL",
    "PostgreSQL", "Agile / Scrum", "Git Workflow"
  ];

  return (
    <section className="py-24 bg-black text-white" id="skills">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-b border-neutral-900 py-16 flex flex-col md:flex-row md:items-start justify-between gap-12"
        >
          <div className="md:w-1/3">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 mb-6">
              Index
            </p>
            <h2 className="text-3xl font-serif tracking-tight">
              The Stack.
            </h2>
          </div>

          <div className="md:w-2/3">
            <ul className="flex flex-wrap gap-x-8 gap-y-4 font-mono text-sm uppercase tracking-widest text-neutral-400">
              {stack.map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
