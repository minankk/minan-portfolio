"use client";

export default function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border px-6 sm:px-12 lg:px-24 py-4 flex justify-between items-center">

      <div
        className="font-bold text-xl text-text cursor-pointer hover:text-primary transition-colors flex items-center"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="text-primary mr-0.5">M</span>K
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
        <button onClick={() => scrollTo("about")} className="hover:text-primary transition-colors">About</button>
        <button onClick={() => scrollTo("skills")} className="hover:text-primary transition-colors">Skills</button>
        <button onClick={() => scrollTo("projects")} className="hover:text-primary transition-colors">Projects</button>
        <button onClick={() => scrollTo("experience")} className="hover:text-primary transition-colors">Experience</button>
        <button onClick={() => scrollTo("contact")} className="hover:text-primary transition-colors">Contact</button>
      </nav>

      <div className="hidden sm:flex items-center gap-2 border border-border px-3 py-1.5 rounded-full bg-card/50">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider">Available</span>
      </div>

    </header>
  );
}
