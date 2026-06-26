import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";
import GlobalBackground from "@/components/portfolio/GlobalBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505]">

      {/* Interactive Global Environment */}
      <GlobalBackground />

      {/* Page Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>

    </main>
  );
}
