export default function Section({
  id,
  label,
  title,
  children,
}: {
  id?: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-24 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-12">
          <p className="text-sm uppercase tracking-widest text-indigo-500">
            {label}
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            {title}
          </h2>
        </div>

        {children}
      </div>
    </section>
  );
}
