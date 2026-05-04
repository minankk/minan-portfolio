export default function CaseStudy() {
  return (
    <section className="space-y-10">

      {/* header */}
      <div>
        <p className="text-xs uppercase tracking-widest text-indigo-500">
          Case Study
        </p>

        <h2 className="text-3xl font-semibold mt-3">
          Empathetic AR/VR Agent
        </h2>

        <p className="mt-4 text-neutral-600 max-w-2xl">
          Designed a lightweight emotional response system for virtual agents,
          balancing realism with performance on constrained AR/VR hardware.
        </p>
      </div>

      {/* cards */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-md transition">
          <p className="text-sm text-neutral-400">Impact</p>
          <p className="mt-2 font-semibold">Highest mark in cohort</p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-md transition">
          <p className="text-sm text-neutral-400">Result</p>
          <p className="mt-2 font-semibold">Cohen’s d = 2.32</p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-md transition">
          <p className="text-sm text-neutral-400">Platform</p>
          <p className="mt-2 font-semibold">Meta Quest 3</p>
        </div>

      </div>

      <a
        href="/case-study"
        className="text-indigo-500 text-sm font-medium hover:underline"
      >
        Read full case study →
      </a>

    </section>
  );
}
