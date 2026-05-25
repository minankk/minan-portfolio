export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-neutral-900 text-neutral-600 font-mono text-[10px] uppercase tracking-widest">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p>© {new Date().getFullYear()} Minan Kahai.</p>
        <p className="flex items-center gap-3">
          London <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> UK
        </p>
      </div>
    </footer>
  );
}
