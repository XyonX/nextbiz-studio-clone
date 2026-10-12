import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

import aboutImage from "@/assets/nextbiz-about.jpg";
import logoAsset from "@/assets/nextbiz-studio-logo-dark.png.asset.json";
import teamImage from "@/assets/nextbiz-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About NextBiz Studio | Your Digital Team" },
      { name: "description", content: "Meet NextBiz Studio, a focused technology partner helping businesses build, improve and automate their digital operations." },
      { property: "og:title", content: "About NextBiz Studio | Your Digital Team" },
      { property: "og:description", content: "A close-knit digital team bringing practical technology and the right expertise to your business." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
] as const;

const principles = [
  ["01", "Plan around the real need", "We learn how your business works, then identify the problem or opportunity worth solving."],
  ["02", "Build the right solution", "We choose the right mix of technology, development and expertise for the job—not a preset package."],
  ["03", "Improve the operation", "We make practical changes that help your systems and day-to-day work perform better."],
  ["04", "Iterate with purpose", "We keep learning from real use and refine the solution as your business changes."],
] as const;

function AboutBrand() {
  return <Link to="/" className="about-brand" aria-label="Back to NextBiz Studio home"><img src={logoAsset.url} alt="" /><span>NextBiz Studio</span></Link>;
}

function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="about-page about-editorial-page">
      <header className="about-topbar">
        <AboutBrand />
        <nav aria-label="Main navigation">{navItems.map(({ label, to }) => <Link key={label} to={to}>{label}</Link>)}</nav>
        <Link to="/" className="about-back"><ArrowLeft size={14} /> Back to Home</Link>
        <button className="about-menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X /> : <Menu />}</button>
        {menuOpen && <div className="about-mobile-menu">{navItems.map(({ label, to }) => <Link key={label} to={to} onClick={() => setMenuOpen(false)}>{label}</Link>)}<Link to="/" onClick={() => setMenuOpen(false)}><ArrowLeft size={14} /> Back to Home</Link></div>}
      </header>

      <section className="about-editorial-hero about-pad">
        <div className="about-editorial-copy">
          <div className="eyebrow"><span className="eyebrow-orbit">◎</span> The studio, up close</div>
          <p className="about-editorial-kicker">YOUR DIGITAL TEAM, WHEN YOU NEED IT</p>
          <h1>Good technology<br />starts with <em>your</em><br />business.</h1>
          <p className="about-editorial-lede">NextBiz Studio helps businesses build, improve and automate their digital operations—with practical technology shaped around the way they work.</p>
          <Link to="/services" className="about-action"><span>See how we work</span><ArrowRight size={15} /></Link>
        </div>
        <div className="about-editorial-photo">
          <img src={aboutImage} width={1008} height={1104} alt="A strategist considering a new digital project" />
          <div className="about-photo-caption"><span>01 / THE STUDIO</span><span>Independent thinking.<br />Useful outcomes.</span></div>
          <span className="about-photo-seal">NB<br /><i>STUDIO</i></span>
        </div>
        <div className="about-editorial-index"><span>WHO WE ARE</span><i /> <span>01—04</span></div>
      </section>

      <section className="about-point-of-view about-pad" id="approach">
        <div className="about-point-label"><span className="eyebrow-orbit">◎</span><span>Our point of view</span><b>01</b></div>
        <div className="about-point-copy"><h2>Useful technology.<br /><span>Meaningful progress.</span></h2><p>We work with businesses to understand their needs, find opportunities to improve, and create practical solutions around their operations.</p><p>That might mean a digital experience, custom software, an internal tool, connected systems, workflow automation or a practical AI solution. We also support marketing and WhatsApp needs, including Meta Proxy, our WhatsApp Business API product being built and prepared for market.</p><Link to="/services" className="about-inline-link">A closer look at our capabilities <ArrowUpRight size={15} /></Link></div>
        <figure className="about-point-photo"><img src={teamImage} loading="lazy" alt="The NextBiz Studio team working through a project together" /><figcaption>Small core. Broad perspective.</figcaption></figure>
      </section>

      <section className="about-method about-pad">
        <div className="about-method-head"><div className="eyebrow"><span className="eyebrow-orbit">◎</span> How we move work forward</div><h2>Four steps.<br />No mystery.</h2><p>Good work is a clear, shared process—from the first question through the next improvement.</p></div>
        <div className="about-method-list">{principles.map(([number, title, copy]) => <article className="about-method-step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div><ArrowUpRight size={17} /></article>)}</div>
        <div className="about-method-track" aria-hidden="true"><span /><span /><span /><span /></div>
      </section>

      <section className="about-dossier about-pad" id="team">
        <figure className="about-dossier-photo"><img src={aboutImage} loading="lazy" alt="A member of the NextBiz Studio team at work" /><figcaption>Direct access to the people doing the work.</figcaption></figure>
        <div className="about-dossier-copy"><div className="eyebrow"><span className="eyebrow-orbit">◎</span> The people behind it</div><h2>A focused core.<br />The right expertise.</h2><p>NextBiz Studio has a core team of three, supported by trusted collaborators and specialists selected for each project. Together, we bring the technology, development, design, AI and automation skills the work calls for—without layers between you and the people doing the work.</p><div className="about-dossier-stats"><div><strong>03</strong><span>people in our<br />core team</span></div><div><strong>+</strong><span>trusted specialists<br />when needed</span></div></div></div>
      </section>

      <section className="about-editorial-cta about-pad">
        <span className="about-cta-index">NEXTBIZ STUDIO / 2026</span><div><div className="eyebrow"><span className="eyebrow-orbit">◎</span> Make the next move</div><h2>Have a problem<br />worth solving?</h2></div><div className="about-editorial-cta-side"><p>Bring us the challenge, idea or opportunity. We’ll help find the right way forward.</p><Link to="/services" className="about-editorial-action"><span>Explore our capabilities</span><ArrowRight size={16} /></Link></div><span className="about-cta-mark" aria-hidden="true">NB</span>
      </section>

      <footer className="about-footer about-pad">
        <div><AboutBrand /><p>A digital solutions studio helping businesses build, improve and automate their digital operations.</p></div>
        <div className="about-footer-links"><b>Explore</b><Link to="/">Home</Link><Link to="/services">Services</Link><Link to="/projects">Projects</Link><a href="#approach">Our approach</a><a href="#team">Our team</a></div>
        <div className="about-footer-mark"><span className="scribble">Ideas into<br />impact.</span><Link to="/" className="about-back"><ArrowLeft size={14} /> Back to Home</Link></div>
        <div className="about-copyright"><span>© 2026 NextBiz Studio. All rights reserved.</span><span>Made with intent.</span></div>
      </footer>
    </main>
  );
}