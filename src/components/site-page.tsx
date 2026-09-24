import { ArrowRight, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

const logo = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-dark-Mjq6QLLvql8SIWpTm74w4mGFPQBv7W.png";

export function SitePage({ eyebrow, title, intro, children }: { eyebrow: string; title: ReactNode; intro: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const links = [["About Us", "/about"], ["Services", "/services"], ["Projects", "/projects"], ["Contact", "/contact"]] as const;
  return <main className="site-shell page-shell">
    <header className="topbar">
      <Link to="/" className="brand"><img src={logo} alt="NextBiz Studio logo" /><span>NextBiz Studio</span></Link>
      <nav aria-label="Main navigation">{links.map(([label, to]) => <Link key={to} to={to}>{label}</Link>)}</nav>
      <Link to="/contact" className="call"><ArrowRight size={17} /><span><small>Start a project</small><b>Let's talk</b></span></Link>
      <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      {open && <div className="mobile-menu"><nav aria-label="Mobile navigation">{links.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)}>{label}</Link>)}</nav><Link className="action action-dark" to="/contact" onClick={() => setOpen(false)}>Start a project <ArrowRight size={14} /></Link><div className="mobile-legal"><Link to="/privacy-policy">Privacy</Link><Link to="/terms">Terms</Link></div></div>}
    </header>
    <section className="page-hero section-pad"><div><div className="eyebrow"><span>◎</span>{eyebrow}</div><h1>{title}</h1><p>{intro}</p></div></section>
    {children}
    <footer className="footer section-pad"><div className="footer-brand"><Link to="/" className="brand"><img src={logo} alt="NextBiz Studio logo" /><span>NextBiz Studio</span></Link><p>A creative agency focused on building brands, products and experiences that make a difference.</p></div><div className="footer-links"><b>Explore</b>{links.map(([label, to]) => <Link key={to} to={to}>{label}</Link>)}</div><div className="footer-links"><b>Resources</b><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms">Terms of Service</Link></div><div className="copyright"><span>© 2026 NextBiz Studio. All rights reserved.</span><span>Ideas become impact.</span></div></footer>
  </main>;
}

export function PageSection({ children, className = "" }: { children: ReactNode; className?: string }) { return <section className={`page-section section-pad ${className}`}>{children}</section>; }
export function PageCard({ number, title, children }: { number?: string; title: string; children: ReactNode }) { return <article className="page-card">{number && <span className="page-number">{number}</span>}<h3>{title}</h3><p>{children}</p></article>; }
export { ArrowRight };

type RoutePath = "/about" | "/services" | "/projects" | "/contact";
export function PageLink({ to, children }: { to: RoutePath; children: ReactNode }) { return <Link className="text-link" to={to}>{children}<ArrowRight size={14} /></Link>; }

type LegalPath = "/privacy-policy" | "/terms";
export function LegalLink({ to, children }: { to: LegalPath; children: ReactNode }) { return <Link to={to}>{children}</Link>; }

export const pageMeta = (title: string, description: string) => ({ meta: [{ title: `${title} | NextBiz Studio` }, { name: "description", content: description }] });
export const pageLinks: [string, RoutePath][] = [["About Us", "/about"], ["Services", "/services"], ["Projects", "/projects"], ["Contact", "/contact"]];
export const legalLinks: [string, LegalPath][] = [["Privacy Policy", "/privacy-policy"], ["Terms of Service", "/terms"]];
export const logoUrl = logo;
export const iconArrow = ArrowRight;
export const iconMenu = Menu;
export const iconClose = X;
