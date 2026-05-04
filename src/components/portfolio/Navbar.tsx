"use client";

export default function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="font-semibold text-neutral-900">
          Minan Kahai
        </div>

        <nav className="hidden md:flex gap-6 text-sm text-neutral-600">
          <button onClick={() => scrollTo("case-study")} className="hover:text-indigo-500 transition">
            Case Study
          </button>
          <button onClick={() => scrollTo("experience")} className="hover:text-indigo-500 transition">
            Experience
          </button>
          <button onClick={() => scrollTo("skills")} className="hover:text-indigo-500 transition">
            Skills
          </button>
          <button onClick={() => scrollTo("contact")} className="hover:text-indigo-500 transition">
            Contact
          </button>
        </nav>

      </div>
    </header>
  );
}
