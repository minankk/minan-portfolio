"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 items-start">

        {/* Left Column: Image/Visual Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/3 aspect-[4/5] relative rounded-2xl overflow-hidden bg-card border border-border group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
          <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-mono text-sm uppercase tracking-widest">
            [Headshot]
          </div>
        </motion.div>

        {/* Right Column: Copy & Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-2/3 flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-text">The Intersection</h2>

          <div className="space-y-6 text-slate-400 leading-relaxed text-lg mb-12">
            <p>
              I have a Computer Science MSc and a Psychology BSc. Most people pick one. I think the combination is more interesting — it means I can build the thing and understand the person using it. That shows up in everything from how I design systems to how I run user research to how I communicate across teams.
            </p>
            <p>
              I build full-stack software, design data pipelines, work with AI systems, and lead product delivery. I have shipped production code for platforms serving 100,000+ users, built and deployed VR research platforms on Meta Quest hardware, trained ML models on 45,000-sample datasets, and led engineering teams from brief to launch.
            </p>
            <p>
              I am looking for roles at the intersection of engineering and product — places where technical depth and human understanding both matter. I am immediately available and based in London.
            </p>
          </div>

          {/* Hard Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border">
            <motion.div whileHover={{ scale: 1.05 }} className="transition-transform">
              <p className="text-3xl font-bold text-primary mb-1">5+</p>
              <p className="text-sm font-mono text-slate-500 uppercase tracking-wider">Projects shipped</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="transition-transform">
              <p className="text-3xl font-bold text-primary mb-1">100k+</p>
              <p className="text-sm font-mono text-slate-500 uppercase tracking-wider">Daily users impacted</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="transition-transform">
              <p className="text-3xl font-bold text-primary mb-1">0.93</p>
              <p className="text-sm font-mono text-slate-500 uppercase tracking-wider">ML accuracy achieved</p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
