import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

import aboutImage from "@/assets/nextbiz-about.jpg";
import heroImage from "@/assets/nextbiz-hero.jpg";
import logoAsset from "@/assets/nextbiz-studio-logo-dark.png.asset.json";
import stillLifeImage from "@/assets/nextbiz-studio-stilllife.jpg";
import teamImage from "@/assets/nextbiz-team.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Selected Work | NextBiz Studio" },
      { name: "description", content: "Explore selected NextBiz Studio demo projects across web design, branding, digital marketing and identity work." },
      { property: "og:title", content: "Projects & Selected Work | NextBiz Studio" },
      { property: "og:description", content: "A selection of project concepts across digital products, marketing and brand identity." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  { number: "01", name: "NextGen", type: "Web Design · Branding", image: heroImage, cls: "object-[70%_45%]", copy: "A complete identity and website build for a technology startup finding its first market — naming, visual language and a launch-ready site.", tags: ["Identity", "Web Design", "Launch"] },
  { number: "02", name: "Harmony", type: "Digital Marketing", image: aboutImage, cls: "object-[50%_24%]", copy: "An ongoing growth engagement covering campaigns, ad creation and content systems for a consumer brand.", tags: ["Campaigns", "Social Media", "Creatives"] },
  { number: "03", name: "Velora", type: "Brand Identity", image: stillLifeImage, cls: "object-center", copy: "A brand system built to flex across packaging, digital and retail touchpoints without losing its character.", tags: ["Naming", "Identity", "Guidelines"] },
] as const;

const pageLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
] as const;

function ProjectsBrand() {
  return <Link to="/" className="about-brand" aria-label="NextBiz Studio home"><img src={logoAsset.url} alt="" /><span>NextBiz Studio</span></Link>;
}

function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="projects-page projects-magazine-page">
      <header className="about-topbar">
        <ProjectsBrand />
        <nav aria-label="Main navigation">{pageLinks.map(({ label, to }) => <Link key={label} to={to} activeProps={{ className: "projects-nav-active" }}>{label}</Link>)}</nav>
        <Link to="/" className="about-back"><ArrowLeft size={14} /> Back to Home</Link>
        <button className="about-menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X /> : <Menu />}</button>
        {menuOpen && <div className="about-mobile-menu">{pageLinks.map(({ label, to }) => <Link key={label} to={to} onClick={() => setMenuOpen(false)}>{label}</Link>)}<Link to="/" onClick={() => setMenuOpen(false)}><ArrowLeft size={14} /> Back to Home</Link></div>}
      </header>

      <section className="projects-magazine-masthead about-pad">
        <div className="projects-masthead-top"><span>STUDIO JOURNAL / VOL. 01</span><span>SELECTED WORK <i>·</i> 2026</span></div>
        <h1>Work in<br /><em>the making.</em></h1>
        <div className="projects-masthead-bottom"><p>A working collection of ideas carried into the world—digital experiences, campaign systems and identities with a point of view.</p><a href="#project-01" className="projects-index-jump"><span>SCROLL THE INDEX</span><ArrowDownRight size={16} /></a><div className="projects-masthead-image"><img src={teamImage} alt="The NextBiz Studio team reviewing project work" /><span>THE STUDIO / AT WORK</span></div></div>
      </section>

      <section className="projects-featured about-pad" id="project-01">
        <div className="projects-featured-top"><span>FEATURED STUDY / 01</span><span>WEB DESIGN · BRANDING</span></div>
        <div className="projects-featured-layout"><div className="projects-featured-image"><img src={heroImage} className="object-[70%_45%]" alt="NextGen visual identity and web design concept" /><span className="projects-image-index">01 <i>— 03</i></span><span className="projects-image-stamp">NEXT<br />GEN</span></div><div className="projects-featured-copy"><span className="projects-project-type">IDENTITY / DIGITAL</span><h2>NextGen</h2><p>{projects[0].copy}</p><div className="projects-tag-row">{projects[0].tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href="#project-02" className="projects-case-link"><span>Next in the collection</span><ArrowDownRight size={16} /></a></div></div>
      </section>

      <section className="projects-collection about-pad" aria-label="More selected projects">
        <div className="projects-collection-head"><div><span>THE INDEX / 02—03</span><h2>More from<br />the collection.</h2></div><span>DEMO PROJECTS<br />CONCEPT WORK</span></div>
        <article className="projects-study projects-study-harmony" id="project-02"><div className="projects-study-photo"><img src={aboutImage} className="object-[50%_24%]" loading="lazy" alt="Harmony digital marketing concept" /><span>02</span></div><div className="projects-study-meta"><div><span>02 / CAMPAIGNS</span><ArrowUpRight size={16} /></div><h3>Harmony</h3><p>{projects[1].copy}</p><div className="projects-tag-row">{projects[1].tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>
        <article className="projects-study projects-study-velora" id="project-03"><div className="projects-study-photo"><img src={stillLifeImage} className="object-center" loading="lazy" alt="Velora brand identity concept" /><span>03</span></div><div className="projects-study-meta"><div><span>03 / BRAND SYSTEM</span><ArrowUpRight size={16} /></div><h3>Velora</h3><p>{projects[2].copy}</p><div className="projects-tag-row">{projects[2].tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>
      </section>

      <section className="projects-colophon about-pad"><div className="projects-colophon-photo"><img src={teamImage} loading="lazy" alt="The NextBiz Studio team at work" /><span className="scribble">Ideas into<br />impact.</span></div><div className="projects-colophon-copy"><span>END OF VOLUME / 01</span><h2>Your project<br />could be next.</h2><p>These concepts are here to show the range of our work. Bring us what you’re building and we’ll help shape the right next step.</p><Link to="/" hash="contact" className="projects-colophon-link"><span>Start a conversation</span><ArrowRight size={16} /></Link></div><ArrowDownRight className="projects-colophon-mark" size={34} /></section>

      <footer className="about-footer about-pad"><div><ProjectsBrand /><p>A digital team for businesses building what comes next.</p></div><div className="about-footer-links"><b>Explore</b><Link to="/">Home</Link><Link to="/about">About Us</Link><Link to="/services">Services</Link><Link to="/projects">Projects</Link></div><div className="about-footer-mark"><span className="scribble">Built around<br />your business.</span><Link to="/" className="about-back"><ArrowLeft size={14} /> Back to Home</Link></div><div className="about-copyright"><span>© 2026 NextBiz Studio. All rights reserved.</span><span>Made with intent.</span></div></footer>
    </main>
  );
}