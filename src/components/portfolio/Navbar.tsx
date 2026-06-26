"use client";

import { useState } from "react";
import Magnetic from "./Magnetic";

export default function Navbar() {
  const [isAnalog, setIsAnalog] = useState(false);

  const toggleAnalogMode = () => {
    setIsAnalog(!isAnalog);
    if (!isAnalog) {
      document.documentElement.classList.add("analog-mode");
    } else {
      document.documentElement.classList.remove("analog-mode");
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-transparent px-6 sm:px-12 lg:px-24 pt-6 pb-12 flex justify-between items-start pointer-events-none">

      {/* Logo */}
      <Magnetic>
        <div
          className="font-serif font-bold text-2xl text-white hover:text-neutral-300 transition-colors duration-300 flex items-center pointer-events-auto cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          MK<span className="text-[#d2a050]">.</span>
        </div>
      </Magnetic>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-10 text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400 pointer-events-auto mt-2">
        <Magnetic>
          <button onClick={() => scrollTo("about")} className="hover:text-[#d2a050] transition-colors py-2 px-4">About</button>
        </Magnetic>
        <Magnetic>
          <button onClick={() => scrollTo("work")} className="hover:text-[#d2a050] transition-colors py-2 px-4">Work</button>
        </Magnetic>
        <Magnetic>
          <button onClick={() => scrollTo("experience")} className="hover:text-[#d2a050] transition-colors py-2 px-4">Credentials</button>
        </Magnetic>
        <Magnetic>
          <button onClick={() => scrollTo("contact")} className="hover:text-[#d2a050] transition-colors py-2 px-4">Contact</button>
        </Magnetic>
      </nav>

      {/* Right Action (Analog Toggle) */}
      <div className="flex items-center gap-6 pointer-events-auto mt-2">
        <Magnetic>
          <button
            onClick={toggleAnalogMode}
            className="group flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 hover:text-[#d2a050] transition-colors p-2"
            title="Toggle Analog Lens"
          >
            <span className="hidden sm:inline transition-colors duration-300 group-hover:text-white">
              {isAnalog ? "Analog Lens" : "Digital Lens"}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-700 ease-in-out ${isAnalog ? 'rotate-180 text-[#d2a050]' : ''}`}
            >
              <circle cx="12" cy="12" r="10"/>
              <path d="m14.31 8 5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4-5.74 9.94"/>
            </svg>
          </button>
        </Magnetic>
      </div>

    </header>
  );
}
