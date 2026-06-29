"use client";

export default function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-transparent px-6 sm:px-12 lg:px-24 pt-8 pb-16 flex justify-between items-center pointer-events-none transition-all duration-300">

      {/* Logo (Left Aligned) - Updated to MKK. with tight tracking */}
      <div
        className="font-serif font-bold text-2xl tracking-tight text-white hover:text-neutral-300 transition-colors duration-300 pointer-events-auto cursor-pointer select-none"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        MKK<span className="text-[#d2a050]">.</span>
      </div>

      {/* Navigation Links (Right Aligned) */}
      <nav className="hidden md:flex items-center gap-10 text-sm font-mono uppercase tracking-[0.2em] text-neutral-400 pointer-events-auto">
        <button onClick={() => scrollTo("about")} className="hover:text-[#d2a050] transition-colors py-2 px-2">About</button>
        <button onClick={() => scrollTo("work")} className="hover:text-[#d2a050] transition-colors py-2 px-2">Work</button>
        <button onClick={() => scrollTo("credentials")} className="hover:text-[#d2a050] transition-colors py-2 px-2">Credentials</button>
        <button onClick={() => scrollTo("contact")} className="hover:text-[#d2a050] transition-colors py-2 px-2">Connect</button>
      </nav>

    </header>
  );
}
