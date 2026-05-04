export default function Experience() {
  return (
    <section className="mt-24 space-y-12">

      {/* header */}
      <div>
        <p className="text-sm uppercase tracking-widest text-indigo-500">
          Experience
        </p>

        <h2 className="text-3xl font-bold mt-3">
          Cross-domain impact across product, engineering & research
        </h2>
      </div>

      {/* role 1 */}
      <div className="border-t border-neutral-200 pt-8 space-y-3">

        <div>
          <h3 className="text-lg font-semibold">
            Software Development Intern — Skandiam Technologies
          </h3>
          <p className="text-sm text-neutral-500">
            London · Aug 2023 – Feb 2024
          </p>
        </div>

        <p className="text-neutral-600 leading-relaxed">
          Worked directly with enterprise stakeholders (Allen & Overy) to translate
          business requirements into measurable technical improvements across a high-traffic platform.
        </p>

        <div className="grid md:grid-cols-3 gap-4 pt-3">

          <div className="p-4 bg-neutral-50 rounded-lg">
            <p className="font-semibold">25% faster load times</p>
            <p className="text-sm text-neutral-500">24s → 18s</p>
          </div>

          <div className="p-4 bg-neutral-50 rounded-lg">
            <p className="font-semibold">1.5× DB performance</p>
            <p className="text-sm text-neutral-500">120k+ users/day</p>
          </div>

          <div className="p-4 bg-neutral-50 rounded-lg">
            <p className="font-semibold">+40% engagement</p>
            <p className="text-sm text-neutral-500">UI redesign impact</p>
          </div>

        </div>
      </div>

      {/* role 2 */}
      <div className="border-t border-neutral-200 pt-8 space-y-3">

        <div>
          <h3 className="text-lg font-semibold">
            Product Owner & Full-Stack Lead — Vinyl Vault
          </h3>
          <p className="text-sm text-neutral-500">
            Oct 2024 – Apr 2025
          </p>
        </div>

        <p className="text-neutral-600 leading-relaxed">
          Led a 6-person Agile team, translating product requirements into a full-stack e-commerce
          platform with a focus on user experience, scalability, and delivery cadence.
        </p>

        <div className="grid md:grid-cols-3 gap-4 pt-3">

          <div className="p-4 bg-neutral-50 rounded-lg">
            <p className="font-semibold">Full-stack system</p>
            <p className="text-sm text-neutral-500">React + Node + MySQL</p>
          </div>

          <div className="p-4 bg-neutral-50 rounded-lg">
            <p className="font-semibold">Agile delivery</p>
            <p className="text-sm text-neutral-500">6-person team</p>
          </div>

          <div className="p-4 bg-neutral-50 rounded-lg">
            <p className="font-semibold">End-to-end product</p>
            <p className="text-sm text-neutral-500">Auth → checkout flow</p>
          </div>

        </div>
      </div>

      {/* role 3 */}
      <div className="border-t border-neutral-200 pt-8 space-y-3">

        <div>
          <h3 className="text-lg font-semibold">
            MSc Research — AR/VR Empathetic Agent
          </h3>
          <p className="text-sm text-neutral-500">
            Dissertation · Distinction
          </p>
        </div>

        <p className="text-neutral-600 leading-relaxed">
          Designed and implemented a real-time emotional response system in Unity,
          combining behavioural modelling with low-latency constraints for immersive environments.
        </p>

        <div className="grid md:grid-cols-3 gap-4 pt-3">

          <div className="p-4 bg-neutral-50 rounded-lg">
            <p className="font-semibold">Cohen’s d = 2.32</p>
            <p className="text-sm text-neutral-500">large effect size</p>
          </div>

          <div className="p-4 bg-neutral-50 rounded-lg">
            <p className="font-semibold">p &lt; 0.001</p>
            <p className="text-sm text-neutral-500">statistical significance</p>
          </div>

          <div className="p-4 bg-neutral-50 rounded-lg">
            <p className="font-semibold">Quest deployment</p>
            <p className="text-sm text-neutral-500">real-time VR system</p>
          </div>

        </div>
      </div>

    </section>
  );
}
