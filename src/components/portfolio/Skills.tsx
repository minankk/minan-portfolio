"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    { title: "Languages", skills: ["Python", "C#", "Java", "JavaScript", "Ruby", "SQL"] },
    { title: "Frontend", skills: ["React", "Next.js", "TypeScript", "HTML", "CSS", "Tailwind"] },
    { title: "Backend & APIs", skills: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "MySQL", "Docker"] },
    { title: "AI & Data", skills: ["Scikit-learn", "Pandas", "NumPy", "XGBoost", "Matplotlib", "Jupyter"] },
    { title: "Platforms & Tools", skills: ["Unity (Meta Quest)", "Git", "Agile/Scrum", "Jira", "Bitbucket", "Vercel"] }
  ];

  const certifications = [
    "Nvidia DLI - AI on Jetson Nano",
    "CMI Level 7",
    "Le Wagon Full Stack",
    "NYU Computing"
  ];

  return (
    <section id="skills" className="py-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto border-t border-border/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-text">What I work with</h2>
      </motion.div>

      <div className="space-y-12">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 pb-8 border-b border-border/30 last:border-0 last:pb-0"
          >
            <h3 className="w-48 text-sm font-mono uppercase tracking-widest text-slate-500 shrink-0">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-card border border-border rounded-md text-sm text-slate-300 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-16 border-t border-border flex flex-col md:flex-row md:items-start gap-4 md:gap-12"
        >
          <h3 className="w-48 text-sm font-mono uppercase tracking-widest text-primary shrink-0 mt-2">
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="px-6 py-4 bg-card border border-border rounded-lg text-sm font-medium text-slate-200 border-l-2 border-l-primary/50 hover:border-l-primary transition-colors"
              >
                {cert}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
