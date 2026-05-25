"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Software Development Intern",
      subtitle: "Skandiam Technologies",
      desc: "Worked on the aosphere platform serving 120,000+ daily users, collaborating directly with Allen & Overy on production features. Delivered measurable performance improvements across SQL, server optimisation, and front-end development within a professional Agile team."
    },
    {
      title: "Peptide Research Pipeline",
      subtitle: "Academic Research Project",
      desc: "End-to-end data science project on a real-world biological dataset. Built, trained, and validated an ML classification pipeline from scratch."
    }
  ];

  const education = [
    {
      title: "MSc Computer Science — Distinction",
      subtitle: "BCS Accredited | Highest dissertation mark in cohort"
    },
    {
      title: "BSc Psychology — First Class Honours",
      subtitle: "BPS Certified | Research methodologies, statistical analysis, human behaviour"
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto border-t border-border/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-text">Experience & Education</h2>
      </motion.div>

      <div className="relative border-l border-border/50 ml-4 md:ml-6 space-y-16">

        {/* Experience Entries */}
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            <div className="absolute w-4 h-4 bg-background border-2 border-primary rounded-full -left-[9px] top-1"></div>
            <div className="mb-2">
              <h3 className="text-xl font-bold text-text">{exp.title}</h3>
              <p className="text-sm font-mono text-primary uppercase tracking-widest mt-1">{exp.subtitle}</p>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-3xl">
              {exp.desc}
            </p>
          </motion.div>
        ))}

        {/* Divider for Education */}
        <div className="relative pl-8 md:pl-12 pt-8">
           <div className="absolute w-8 h-px bg-border/50 -left-4 top-8"></div>
        </div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <motion.div
            key={edu.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 + (index * 0.2) }}
            className="relative pl-8 md:pl-12"
          >
            <div className="absolute w-3 h-3 bg-border rounded-full -left-[6.5px] top-1.5"></div>
            <div className="mb-1">
              <h3 className="text-lg font-bold text-slate-200">{edu.title}</h3>
            </div>
            <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">
              {edu.subtitle}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
