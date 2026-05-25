"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "AR/VR Empathetic Agent",
      descriptor: "MSc Dissertation — Highest mark in cohort + Departmental Prize",
      description: "Built a rule-based Keyword-Gated Expression Mapping system in Unity/C# that generates real-time facial micro-expressions on a virtual agent based on emotional trigger patterns. Deployed on Oculus Meta Quest 3. Validated through a controlled experiment with real participants, achieving Cohen's d = 2.32 — a very large, statistically significant improvement in perceived empathy.",
      tech: ["C#", "Unity", "Python", "Pandas", "NumPy", "Meta Quest 3", "HCI"],
      github: "#",
      demo: null,
      featured: true
    },
    {
      title: "Peptide Epitope Prediction",
      descriptor: "End-to-end ML Data Pipeline",
      description: "Built a complete data mining pipeline in Python on a real-world biological dataset of 45,000 samples across 1,290 high-dimensional features. Handled severe class imbalance (98% positive class), applied PCA and UMAP for dimensionality reduction, and achieved 0.93 balanced accuracy using XGBoost with GroupKFold cross-validation.",
      tech: ["Python", "Scikit-learn", "XGBoost", "Pandas", "SMOTE", "PCA"],
      github: "#",
      demo: null,
      featured: false
    },
    {
      title: "Vinyl Vault",
      descriptor: "Full-Stack E-Commerce Platform",
      description: "Led a cross-functional team of 6 as Product Owner and Full-Stack Lead to build a production-quality e-commerce platform for vinyl records. React frontend, Node.js/Express backend, MySQL database. Delivered secure authentication, cart management, order processing, and wishlist functionality end to end.",
      tech: ["React", "Node.js", "Express", "MySQL", "Git", "Agile"],
      github: "#",
      demo: null,
      featured: false
    },
    {
      title: "PlayOffPro",
      descriptor: "Competitive Gaming & Wagering Platform",
      description: "Designed and built a full-stack platform for competitive video game wagering. Implemented RESTful APIs, PostgreSQL schemas for financial transactions, JWT authentication, HTTPS, and Docker containerisation. Conducted unit and integration testing using RSpec.",
      tech: ["PostgreSQL", "Docker", "JWT", "Ruby", "RSpec", "REST APIs"],
      github: "#",
      demo: null,
      featured: false
    },
    {
      title: "Clinic Sharing Network",
      descriptor: "Healthcare Resource Exchange Platform",
      description: "Built and deployed a React/Vite platform for clinic resource sharing featuring a credit-based exchange model, SHA-256-based Blind-Match Protocol for privacy-preserving matching, and behavioural nudge mechanics. Deployed on Vercel.",
      tech: ["React", "Vite", "SHA-256", "Vercel", "TypeScript"],
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto border-t border-border/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-text mb-4">Featured Work</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative flex flex-col bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 ${project.featured ? 'md:col-span-2' : 'col-span-1'}`}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm font-mono text-primary uppercase tracking-widest">
                {project.descriptor}
              </p>
            </div>

            <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8 mt-auto">
              {project.tech.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-background border border-border rounded text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-border/50">
              <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                GitHub
              </a>
              {project.demo && (
                <a href={project.demo} className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
