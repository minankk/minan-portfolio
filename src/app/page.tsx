import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import CaseStudy from "@/components/portfolio/CaseStudy";
import Capabilities from "@/components/portfolio/Capabilities"; // Swapped import
import Skills from "@/components/portfolio/Skills";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import Philosophy from "@/components/portfolio/Philosophy";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200">

      <Navbar />

      <div className="max-w-6xl mx-auto px-6">
        <Hero />
      </div>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-800/50">
        <CaseStudy />
      </section>

      {/* Replaced Experience with Capabilities */}
      <section id="capabilities" className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-800/50">
        <Capabilities />
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-800/50">
        <Skills />
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-800/50">
        <Contact />
      </section>

      <Footer />

    </main>
  );
}
