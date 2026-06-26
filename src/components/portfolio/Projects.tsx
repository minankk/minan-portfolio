"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: "01",
    label: "VR_DATA_STREAM",
    title: "AR/VR Empathetic Agent",
    subtitle: "MSc Dissertation | Highest mark in cohort",
    description: "Built a rule-based Keyword-Gated Expression Mapping system in Unity/C# that generates real-time facial micro-expressions based on emotional triggers. Validated through a controlled experiment achieving Cohen's d = 2.32.",
    tech: ["C#", "Unity", "Python", "HCI"],
    link: "https://github.com/minankk/MSc-AR-VR-Empathetic_Agent",
  },
  {
    id: "02",
    label: "ENTERPRISE_SCALE",
    title: "aosphere Platform",
    subtitle: "Allen & Overy | Skandiam Technologies",
    description: "Collaborated directly with Allen & Overy to engineer production features for a legal platform serving 120,000+ daily users. Delivered measurable performance improvements across SQL pipelines, server architecture, and front-end infrastructure within a professional Agile team.",
    tech: ["SQL", "React", "Node.js", "Architecture"],
    link: "https://www.aosphere.com/",
  },
  {
    id: "03",
    label: "ZERO_KNOWLEDGE_NET",
    title: "Clinic Sharing Network",
    subtitle: "B2B SaaS | Incentive Design & Cryptography",
    description: "Architected a B2B healthcare data-sharing network to solve a clinical prisoner's dilemma. Implemented a symmetric credit-exchange model and a zero-knowledge SHA-256 Blind-Match Protocol to make data sharing the strictly selfish, mathematically rational choice without compromising patient PHI.",
    tech: ["React", "Web Crypto API", "Game Theory"],
    link: "https://github.com/minankk/clinic-sharing-network",
  },
  {
    id: "04",
    label: "DB_TRANSACTION_LOG",
    title: "Vinyl Vault",
    subtitle: "Full-Stack E-Commerce Platform",
    description: "Led a cross-functional team of 6 as Product Owner and Full-Stack Lead to build a production-quality e-commerce platform for vinyl records. React frontend, Node.js backend, MySQL database.",
    tech: ["React", "Node.js", "MySQL"],
    link: "https://github.com/minankk/Vinyl-Vault",
  },
  {
    id: "05",
    label: "ML_PIPELINE",
    title: "Peptide Research",
    subtitle: "Data Science & Classification",
    description: "Architected an end-to-end data science pipeline on a real-world biological dataset. Built, trained, and validated a machine learning classification model from scratch.",
    tech: ["Python", "Scikit-learn", "Pandas", "ML"],
    link: "https://github.com/minankk/peptide-research",
  },
  {
    id: "06",
    label: "SYS_ARCHITECTURE",
    title: "PlayOffPro",
    subtitle: "Wagering Platform",
    description: "Designed and built a full-stack platform for competitive video game wagering. Implemented RESTful APIs, PostgreSQL schemas for financial transactions, and Docker containerisation.",
    tech: ["PostgreSQL", "Docker", "Ruby"],
    link: "https://github.com/vedl1/play_off_pro",
  }
];

export default function Projects() {
  return (
    <section id="work" className="relative w-full py-32 px-6 sm:px-12 lg:px-24 flex justify-center z-10 border-t border-neutral-900">
      <div className="max-w-7xl w-full flex flex-col gap-24">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#d2a050]">
              02. Featured Work
            </p>
            <div className="h-[1px] flex-1 bg-neutral-900 max-w-xs" />
          </div>
          <h3 className="text-4xl md:text-5xl font-serif text-white tracking-tight">
            Proof of <span className="italic text-neutral-500">Concept.</span>
          </h3>
        </motion.div>

        {/* Vertical Case Studies */}
        <div className="flex flex-col gap-24 md:gap-32">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="flex flex-col md:flex-row gap-8 md:gap-16 items-start group"
            >
              {/* Left Column: Sticky Number & Label */}
              <div className="md:w-1/4 flex flex-col gap-4 md:sticky md:top-40 transition-opacity duration-500 group-hover:opacity-100 opacity-70">
                <span className="text-5xl md:text-7xl font-serif text-neutral-600 tracking-tighter transition-colors duration-500 group-hover:text-neutral-200">
                  {project.id}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#d2a050]">
                  {project.label}
                </span>
              </div>

              {/* Right Column: Project Details */}
              <div className="md:w-3/4 flex flex-col gap-6 pt-2">

                {/* Title & Subtitle */}
                <div className="flex flex-col gap-2 pb-6 border-b border-neutral-900">
                  <h4 className="text-3xl md:text-4xl font-serif text-white group-hover:text-[#d2a050] transition-colors duration-500">
                    {project.title}
                  </h4>
                  <span className="text-sm md:text-base font-mono text-neutral-500 tracking-widest uppercase">
                    {project.subtitle}
                  </span>
                </div>

                {/* Description */}
                <p className="text-base md:text-lg font-sans text-neutral-400 leading-relaxed max-w-3xl mt-2">
                  {project.description}
                </p>

                {/* Tech Stack & Links */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-6">

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-black border border-neutral-800 rounded text-[10px] md:text-xs font-mono text-neutral-400 uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Structured CTA Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-white border border-neutral-800 hover:border-white py-3 px-6 transition-colors duration-300 shrink-0"
                  >
                    View Project <span className="opacity-50 group-hover:opacity-100 transition-opacity">↗</span>
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
