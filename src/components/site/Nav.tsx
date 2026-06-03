import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 flex items-center justify-between rounded-2xl transition-all duration-500 ${
          scrolled ? "glass shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] py-3 px-5" : ""
        }`}
      >
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-metallic-glow grid place-items-center shadow-[0_0_20px_-4px_var(--metallic)]">
            <span className="font-display font-bold text-primary-foreground text-lg">P</span>
          </div>
          <div className="leading-none">
            <div className="font-display font-semibold text-sm tracking-wider uppercase">Palmetto Elite</div>
            <div className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">Detailing</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            activeProps={{ className: "text-sm font-medium text-foreground" }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            activeProps={{ className: "text-sm font-medium text-foreground" }}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-metallic-glow px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_var(--metallic)] hover:shadow-[0_12px_40px_-8px_var(--metallic-glow)] transition-all hover:scale-[1.03]"
          >
            Get a Quote
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-lg glass"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-6 mt-2 glass rounded-2xl p-6 flex flex-col gap-4 animate-fade-up">
          <Link to="/" onClick={() => setOpen(false)} className="text-base font-medium">
            Home
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="text-base font-medium">
            Contact
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center rounded-full bg-gradient-to-r from-primary to-metallic-glow px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
