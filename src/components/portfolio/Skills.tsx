export default function Skills() {
  return (
    <section className="mt-24 space-y-12">

      {/* header */}
      <div>
        <p className="text-sm uppercase tracking-widest text-indigo-500">
          Skills
        </p>

        <h2 className="text-3xl font-bold mt-3">
          Technical depth with product and analytical thinking
        </h2>
      </div>

      {/* grid */}
      <div className="grid md:grid-cols-2 gap-8">

        <div className="space-y-3">
          <h3 className="font-semibold">Product & Strategy</h3>
          <p className="text-neutral-600">
            Requirements analysis, stakeholder communication, Agile delivery,
            product thinking, user-focused decision making.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">Full-Stack Engineering</h3>
          <p className="text-neutral-600">
            React, Node.js, Express, MySQL, REST APIs, authentication systems,
            scalable web architecture.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">AR/VR & Systems</h3>
          <p className="text-neutral-600">
            Unity (C#), XR development, real-time systems, performance constraints,
            immersive interaction design.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">Data & Analysis</h3>
          <p className="text-neutral-600">
            Python (Pandas, NumPy), statistical testing, experimental design,
            performance analysis, data interpretation.
          </p>
        </div>

      </div>

    </section>
  );
}
