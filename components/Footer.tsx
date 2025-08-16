import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 py-6 text-sm text-[var(--muted)] dark:border-white/10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p>© {new Date().getFullYear()} Utkarsh Upadhyay. All rights reserved.</p>
          <p className="opacity-80">Built with Next.js, TailwindCSS & Framer Motion.</p>
        </div>
      </Container>
    </footer>
  );
}
