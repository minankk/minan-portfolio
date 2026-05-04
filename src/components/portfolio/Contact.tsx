export default function Contact() {
  return (
    <section id="contact" className="mt-24 space-y-10">

      {/* header */}
      <div>
        <p className="text-sm uppercase tracking-widest text-indigo-500">
          Contact
        </p>

        <h2 className="text-3xl font-bold mt-3">
          Open to product, strategy & consulting roles
        </h2>

        <p className="mt-4 text-neutral-600 max-w-xl leading-relaxed">
          I’m interested in roles that combine technical understanding with
          problem solving, product thinking, and measurable impact.
          If you’re working on something interesting, I’d be happy to connect.
        </p>
      </div>

      {/* actions */}
      <div className="flex flex-wrap gap-4">

        <a
          href="mailto:your.email@example.com"
          className="px-5 py-3 rounded-lg bg-black text-white text-sm font-medium hover:bg-neutral-800 transition"
        >
          Email Me
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          className="px-5 py-3 rounded-lg border border-neutral-300 text-sm font-medium hover:border-neutral-500 transition"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com"
          target="_blank"
          className="px-5 py-3 rounded-lg border border-neutral-300 text-sm font-medium hover:border-neutral-500 transition"
        >
          GitHub
        </a>

      </div>

    </section>
  );
}
