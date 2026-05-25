export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10" />

      <div className="max-w-4xl z-10">
        <div className="inline-flex items-center space-x-3 mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-primary text-xs sm:text-sm tracking-widest uppercase">
            Available for opportunities
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
          <span className="block text-text">Engineer.</span>
          <span className="block text-text">Product thinker.</span>
          <span className="block text-primary">Built differently.</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
          MSc Computer Science. BSc Psychology. I build things that work and understand why people use them.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#projects"
            className="bg-primary hover:bg-blue-600 text-white font-medium py-3.5 px-8 rounded-lg transition-colors duration-200 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="text-text hover:text-primary font-medium py-3.5 px-8 rounded-lg border border-border hover:border-primary transition-all duration-200 bg-card/50 backdrop-blur-sm"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-6 sm:left-12 lg:left-24 animate-pulse opacity-60">
        <span className="block w-[1px] h-16 bg-gradient-to-b from-primary to-transparent"></span>
      </div>
    </section>
  );
}
