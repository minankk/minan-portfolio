"use client";

import { motion } from "framer-motion";

export default function CaseStudy() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-24 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-neutral-900 pb-12"
        >
          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 mb-6">
              Selected Work
            </p>
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight">
              Engineering & <br />
              <span className="text-neutral-500 italic font-light">Architecture.</span>
            </h2>
          </div>
          <p className="text-sm font-sans text-neutral-400 max-w-xs leading-relaxed">
            Showcasing a progression from backend infrastructure to Distinction-graded human-computer interaction research.
          </p>
        </motion.div>

        {/* Project 1: Empathy by Design */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-32 md:mb-48 group"
        >
          <div className="grid md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4 flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 mb-4">
                  01 — AI / HCI
                </p>
                <h3 className="text-3xl font-serif mb-6">Empathy by Design</h3>
              </div>
              <ul className="hidden md:flex flex-col gap-2 text-xs font-mono text-neutral-500 uppercase tracking-widest mt-12">
                <li>C#</li>
                <li>Agentic AI</li>
                <li>Distinction Awarded</li>
              </ul>
            </div>
            <div className="md:col-span-8">
              <div className="aspect-[4/3] w-full bg-[#050505] border border-neutral-900 flex items-center justify-center mb-8 relative overflow-hidden group-hover:border-neutral-700 transition-colors duration-500">
              {/* Abstract grid pattern representing AI neural pathways */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
                <div className="w-32 h-32 border border-neutral-800 rounded-full flex items-center justify-center relative z-10">
                  <div className="w-16 h-16 border border-neutral-700 rounded-full animate-[spin_10s_linear_infinite]" />
                </div>
              </div>
              <p className="text-base md:text-lg font-sans text-neutral-400 leading-relaxed max-w-2xl">
                Architected a novel AI system for virtual agents. This agentic C# infrastructure balances believable, nuanced emotional responses with the strict high-performance constraints required for real-time AR/VR environments.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Project 2: PlayOffPro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-32 md:mb-48 group"
        >
          <div className="grid md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4 flex flex-col justify-between md:order-2">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 mb-4">
                  02 — Backend
                </p>
                <h3 className="text-3xl font-serif mb-6">PlayOffPro</h3>
              </div>
              <ul className="hidden md:flex flex-col gap-2 text-xs font-mono text-neutral-500 uppercase tracking-widest mt-12">
                <li>Ruby on Rails</li>
                <li>PostgreSQL</li>
                <li>RESTful API</li>
              </ul>
            </div>
            <div className="md:col-span-8 md:order-1">
              <div className="aspect-[4/3] w-full bg-[#050505] border border-neutral-900 flex items-center justify-center mb-8 relative overflow-hidden group-hover:border-neutral-700 transition-colors duration-500">
                {/* Abstract horizontal lines representing database rows/architecture */}
                <div className="absolute inset-0 flex flex-col justify-around py-12 opacity-20">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms] ease-in-out" style={{ transitionDelay: `${i * 100}ms` }} />
                  ))}
                </div>
                <div className="font-mono text-neutral-800 text-xs tracking-[0.5em] uppercase z-10">
                  POSTGRESQL_SYS
                </div>
              </div>
              <p className="text-base md:text-lg font-sans text-neutral-400 leading-relaxed max-w-2xl">
                Served as Backend Lead for a competitive gaming platform. Designed the core schema using PostgreSQL and built scalable, secure APIs with Ruby on Rails to manage complex user matching and scoring logic.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
