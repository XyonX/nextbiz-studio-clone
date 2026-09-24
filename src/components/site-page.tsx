import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import type { ReactNode } from "react";

const logo = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-dark-Mjq6QLLvql8SIWpTm74w4mGFPQBv7W.png";

export function SiteHeader() {
  return <header className="topbar"><a href="/" className="brand" aria-label="NextBiz Studio home"><img src={logo} alt="NextBiz Studio logo" /><span>NextBiz Studio</span></a><nav aria-label="Main navigation"><a href="/">Home</a><a href="/about">About Us</a><a href="/services">Services</a><a href="/projects">Projects</a><a href="/contact">Contact</a></nav><a href="tel:22003567890" className="call"><Phone size={17} /><span><small>Call Any Time</small><b>22 (00) 356 7890</b></span></a></header>;
}

export function PageLabel({ children }: { children: ReactNode }) { return <div className="eyebrow"><span className="eyebrow-orbit">◎</span>{children}</div>; }

export function SitePage({ label, title, intro, children }: { label: string; title: ReactNode; intro: string; children: ReactNode }) {
  return <main className="site-shell"><SiteHeader /><section className="page-hero section-pad"><PageLabel>{label}</PageLabel><h1>{title}</h1><p>{intro}</p></section>{children}<footer className="footer section-pad"><div className="footer-brand"><a href="/" className="brand"><img src={logo} alt="NextBiz Studio logo" /><span>NextBiz Studio</span></a><p>A creative agency focused on building brands, products and experiences that make a difference.</p></div><div className="footer-links"><b>Explore</b><a href="/about">About Us</a><a href="/services">Services</a><a href="/projects">Projects</a><a href="/contact">Contact</a></div><div className="footer-links"><b>Legal</b><a href="/privacy-policy">Privacy Policy</a><a href="/terms">Terms of Service</a></div><div className="copyright"><span>© 2026 NextBiz Studio. All rights reserved.</span></div></footer></main>;
}

export function PageAction({ children, href }: { children: ReactNode; href: string }) { return <a className="action action-dark" href={href}><span>{children}</span><ArrowRight size={14} /></a>; }
export function FeatureCard({ title, copy }: { title: string; copy: string }) { return <article className="feature-card"><ArrowUpRight size={18} /><h3>{title}</h3><p>{copy}</p></article>; }
