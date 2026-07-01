"use client";

import { motion } from "framer-motion";

export default function Credentials() {
  return (
    <section id="credentials" className="relative w-full py-32 px-6 sm:px-12 lg:px-24 flex justify-center z-10 border-t border-neutral-900 border-b border-neutral-900">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-16 md:gap-24 items-start">

        {/* Left Column: Sticky Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/3 flex flex-col gap-6 md:sticky md:top-40"
        >
          <div className="flex items-center gap-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#d2a050]">
              03. Credentials
            </p>
            <div className="h-[1px] flex-1 bg-neutral-900 max-w-xs" />
          </div>
          <h3 className="text-4xl md:text-5xl font-serif text-white tracking-tight leading-[1.1]">
            Academic <br />
            <span className="italic text-neutral-500">Excellence</span>
          </h3>
        </motion.div>

        {/* Right Column: Education & Certifications */}
        <div className="md:w-2/3 flex flex-col gap-24 pt-2">

          {/* Education Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-2 border-b border-neutral-900 pb-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-600">Education</span>
            </div>

            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-2 group">
                <h4 className="text-2xl font-serif text-white group-hover:text-[#d2a050] transition-colors duration-500">MSc Computer Science | Distinction</h4>
                <span className="text-sm font-mono text-neutral-400 uppercase tracking-widest">BCS Accredited</span>
                <span className="text-base text-neutral-500 italic mt-1 max-w-3xl">Achieved highest dissertation mark in cohort.</span>
              </div>

              <div className="flex flex-col gap-2 group">
                <h4 className="text-2xl font-serif text-white group-hover:text-[#d2a050] transition-colors duration-500">BSc Psychology</h4>
                <span className="text-sm font-mono text-neutral-400 uppercase tracking-widest">BPS Accredited</span>
                <span className="text-base text-neutral-500 italic mt-1 max-w-3xl">Focus on research methodologies, statistical analysis, and human behaviour.</span>
              </div>
            </div>
          </motion.div>

          {/* Certifications Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-2 border-b border-neutral-900 pb-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-600">Certifications</span>
            </div>

            <div className="flex flex-col gap-10">
              {/* 01 */}
              <div className="flex items-start gap-5 group">
                <span className="font-mono text-[#d2a050] text-sm mt-1.5 shrink-0">-</span>
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <h4 className="text-xl font-serif text-white group-hover:text-[#d2a050] transition-colors duration-500">CMI Level 7 Award in Strategic Management</h4>
                    {/* <span className="font-mono text-xs text-neutral-500 tracking-widest uppercase shrink-0">Dec 2024</span> */}
                  </div>
                  <span className="text-sm font-mono text-neutral-400 uppercase tracking-widest">Chartered Management Institute</span>
                  <span className="text-base text-neutral-500 italic mt-1 max-w-3xl">Master’s-level qualification focused on navigating ambiguity, resource allocation, and delivering complex projects under pressure.</span>
                </div>
              </div>

              {/* 02 */}
              <div className="flex items-start gap-5 group">
                <span className="font-mono text-[#d2a050] text-sm mt-1.5 shrink-0">-</span>
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <h4 className="text-xl font-serif text-white group-hover:text-[#d2a050] transition-colors duration-500">Full Stack Web Development Bootcamp</h4>
                    {/* <span className="font-mono text-xs text-neutral-500 tracking-widest uppercase shrink-0">May 2024</span> */}
                  </div>
                  <span className="text-sm font-mono text-neutral-400 uppercase tracking-widest">Le Wagon</span>
                  <span className="text-base text-neutral-500 italic mt-1 max-w-3xl">Ruby on Rails, JavaScript, PostgreSQL, Git, RSpec</span>
                </div>
              </div>

              {/* 03 */}
              <div className="flex items-start gap-5 group">
                <span className="font-mono text-[#d2a050] text-sm mt-1.5 shrink-0">-</span>
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <h4 className="text-xl font-serif text-white group-hover:text-[#d2a050] transition-colors duration-500">AI on Jetson Nano</h4>
                    {/* <span className="font-mono text-xs text-neutral-500 tracking-widest uppercase shrink-0">Dec 2024</span> */}
                  </div>
                  <span className="text-sm font-mono text-neutral-400 uppercase tracking-widest">Nvidia Deep Learning Institute</span>
                </div>
              </div>

              {/* 04 */}
              <div className="flex items-start gap-5 group">
                <span className="font-mono text-[#d2a050] text-sm mt-1.5 shrink-0">-</span>
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <h4 className="text-xl font-serif text-white group-hover:text-[#d2a050] transition-colors duration-500">Fundamentals of Computing and Programming</h4>
                    {/* <span className="font-mono text-xs text-neutral-500 tracking-widest uppercase shrink-0">Dec 2023</span> */}
                  </div>
                  <span className="text-sm font-mono text-neutral-400 uppercase tracking-widest">NYU (New York University)</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
