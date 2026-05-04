export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center">

      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_60%)]" />

      <div className="max-w-3xl">

        {/* Label */}
        <p className="text-xs uppercase tracking-widest text-indigo-500">
          Product • Strategy • Technology
        </p>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-semibold mt-6 leading-tight tracking-tight">
          I design and build{" "}
          <span className="text-indigo-500 underline decoration-indigo-200 underline-offset-4">
            intelligent systems
          </span>{" "}
          that translate technical complexity into{" "}
          <span className="text-indigo-500 underline decoration-indigo-200 underline-offset-4">
            real-world impact
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-neutral-600 text-lg leading-relaxed">
          MSc Computer Science (Distinction, award-winning dissertation).
          I work at the intersection of technology, product, and strategy —
          turning complex systems into measurable outcomes.
        </p>

        {/* Metrics */}
        <div className="mt-10 flex flex-wrap gap-10">
          <div>
            <p className="text-xl font-semibold text-indigo-500">Distinction</p>
            <p className="text-sm text-neutral-500">MSc Result</p>
          </div>

          <div>
            <p className="text-xl font-semibold text-indigo-500">2.32</p>
            <p className="text-sm text-neutral-500">Cohen’s d</p>
          </div>

          <div>
            <p className="text-xl font-semibold text-indigo-500">40%</p>
            <p className="text-sm text-neutral-500">UX improvement</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex gap-4">
          <a
            href="/case-study"
            className="px-5 py-3 rounded-lg bg-black text-white text-sm font-medium
            hover:bg-neutral-800 transition-all duration-200
            shadow-sm hover:shadow-md hover:-translate-y-[1px]"
          >
            View Case Study
          </a>

          <a
            href="#contact"
            className="px-5 py-3 rounded-lg border border-neutral-300 text-sm font-medium
            hover:border-neutral-500 hover:bg-neutral-50 transition-all"
          >
            Contact
          </a>
        </div>

      </div>
    </section>
  );
}
