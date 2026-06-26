"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Terminal({ isOpen, onClose }: TerminalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ type: "cmd" | "output"; text: string }[]>([
    { type: "output", text: "MinanOS v2.0 initialized. Access granted." },
    { type: "output", text: "Try typing: 'who am i', 'skills', 'projects', 'clear', or 'exit'." }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Normalize input: trim and lowercase
    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { type: "cmd" as const, text: `> ${cmd}` }];

    switch (cmd) {
      case "help":
        newHistory.push({ type: "output", text: "Available commands: who am i, skills, projects, clear, exit" });
        break;
      // Accept both "who am i" and "whoami"
      case "who am i":
      case "whoami":
        newHistory.push({
          type: "output",
          text: "ACCESS GRANTED. Subject: Minan Kahai. Class: Hybrid (CompSci/Psychology). Special Abilities: Can debug legacy code and psychoanalyse why the previous dev wrote it. Side Quest: Property Investor."
        });
        break;
      case "skills":
        newHistory.push({ type: "output", text: "Python, C#, React, Node.js, Unity, PostgreSQL. Also highly skilled at nodding empathetically while looking at broken code." });
        break;
      case "projects":
        newHistory.push({ type: "output", text: "[1] AR/VR Agent (Meta Quest) | [2] Vinyl Vault (Full-Stack) | [3] PlayOffPro (Backend) -> Scroll up to see the proof." });
        break;
      case "clear":
        setHistory([
          { type: "output", text: "MinanOS v2.0 initialized. Access granted." },
          { type: "output", text: "Try typing: 'who am i', 'skills', 'projects', 'clear', or 'exit'." }
        ]);
        setInput("");
        return;
      case "exit":
        onClose();
        setInput("");
        return;
      default:
        newHistory.push({ type: "output", text: `Command not found: ${cmd}. Type 'help' for options.` });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-24 right-6 sm:right-12 z-50 w-full max-w-[400px] bg-[#050505] border border-neutral-800 rounded-lg shadow-2xl overflow-hidden font-mono text-xs"
        >
          <div className="bg-[#0a0a0a] border-b border-neutral-800 px-4 py-2 flex justify-between items-center">
            <span className="text-neutral-500 tracking-widest">guest@minan-sys:~</span>
            <button onClick={onClose} className="text-neutral-500 hover:text-white">✕</button>
          </div>

          <div className="p-4 h-[250px] overflow-y-auto text-cyan-500" onClick={() => inputRef.current?.focus()}>
            {history.map((line, i) => (
              <div key={i} className={`mb-3 ${line.type === "cmd" ? "text-neutral-500" : "text-neutral-300 leading-relaxed"}`}>
                {line.text}
              </div>
            ))}

            <form onSubmit={handleCommand} className="flex items-center mt-2">
              <span className="text-cyan-500 mr-2">{">"}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                /* Changed text-white to text-cyan-100 for that faint, ghostly cyan look */
                className="bg-transparent border-none outline-none flex-grow text-cyan-100"
                spellCheck={false}
                autoComplete="off"
              />
            </form>
            <div ref={endRef} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
