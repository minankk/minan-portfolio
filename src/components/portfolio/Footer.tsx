export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-neutral-500 flex justify-between">
        <p>© {new Date().getFullYear()} Minan Kahai</p>
        <p>Built with Next.js & Tailwind</p>
      </div>
    </footer>
  );
}
