"use client";

import { motion } from "framer-motion";

export default function Capabilities() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const capabilities = [
    {
      id: "01",
      title: "AI & Affective Computing",
      desc: "Designing agentic systems and Semantic Keyword-Gated models in C#. Focused on balancing nuanced emotional responses with strict real-time performance constraints for AR/VR environments."
    },
    {
      id: "02",
      title: "Backend Architecture",
      desc: "Building scalable, secure RESTful APIs and robust database schemas. Experienced in structuring complex relational data using PostgreSQL and Ruby on Rails to handle intensive matching and scoring logic."
    },
    {
      id: "03",
      title: "Full-Stack Delivery",
      desc: "Driving end-to-end application development from user requirements to deployment. Proficient in crafting responsive, interactive front-ends using React and modern JavaScript/TypeScript ecosystems."
    },
    {
      id: "04",
      title: "Product Ownership",
      desc: "Translating commercial needs into technical tickets. Highly effective in managing Agile sprints, leading daily stand-ups, and ensuring engineering efforts directly map to strategic product growth."
    }
  ];

  return (
    <section className="py-24 bg-black text-white" id="capabilities">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="mb-20 border-b border-neutral-900 pb-12"
        >
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 mb-6">
            The Foundation
          </p>
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight">
            Technical <br />
            <span className="text-neutral-500 italic font-light">Capabilities.</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-x-12 gap-y-16"
        >
          {capabilities.map((cap) => (
            <motion.div key={cap.id} variants={itemVariants} className="group relative">
              <div className="border-t border-neutral-900 pt-6">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 mb-4 transition-colors group-hover:text-white">
                  {cap.id}
                </p>
                <h3 className="text-2xl font-serif mb-4 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-sm font-sans text-neutral-400 leading-relaxed max-w-md">
                  {cap.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
