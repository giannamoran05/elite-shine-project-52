import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-metallic-glow grid place-items-center">
              <span className="font-display font-bold text-primary-foreground text-lg">P</span>
            </div>
            <div className="leading-none">
              <div className="font-display font-semibold text-sm tracking-wider uppercase">Palmetto Elite</div>
              <div className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">Detailing</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-muted-foreground max-w-sm">
            Premium auto detailing serving Lexington, Columbia, and the surrounding Midlands.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>(803) 555-0123</li>
            <li>info@palmettoelitedetailing.com</li>
            <li>Lexington, SC</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Navigate</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Palmetto Elite Detailing. All rights reserved.</span>
          <span>Lexington · Columbia · Irmo · Chapin</span>
        </div>
      </div>
    </footer>
  );
}
