import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import CaseStudy from "@/components/portfolio/CaseStudy";
import Experience from "@/components/portfolio/Experience";
import Skills from "@/components/portfolio/Skills";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <main className="bg-white">

      <Navbar />

      <div className="max-w-6xl mx-auto px-6">
        <Hero />
      </div>

      <section id="case-study" className="max-w-6xl mx-auto px-6 py-24 border-t border-neutral-100">
        <CaseStudy />
      </section>

      <section id="experience" className="max-w-6xl mx-auto px-6 py-24 border-t border-neutral-100">
        <Experience />
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-6 py-24 border-t border-neutral-100">
        <Skills />
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-24 border-t border-neutral-200">
        <Contact />
      </section>

      <Footer />

    </main>
  );
}
