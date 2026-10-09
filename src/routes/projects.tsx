import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowLeft, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

import aboutImage from "@/assets/nextbiz-about.jpg";
import heroImage from "@/assets/nextbiz-hero.jpg";
import logoAsset from "@/assets/nextbiz-studio-logo-dark.png.asset.json";
import stillLifeImage from "@/assets/nextbiz-studio-stilllife.jpg";
import teamImage from "@/assets/nextbiz-team.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Selected Work & Projects | NextBiz Studio" },
      { name: "description", content: "A look at recent NextBiz Studio projects across web design, branding, digital marketing and identity work." },
      { property: "og:title", content: "Selected Work & Projects | NextBiz Studio" },
      { property: "og:description", content: "Recent projects across web, branding, marketing and identity work." },
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
    <main className="projects-page">
      <header className="about-topbar">
        <ProjectsBrand />
        <nav aria-label="Main navigation">
          {pageLinks.map(({ label, to }) => <Link key={label} to={to} activeProps={{ className: "projects-nav-active" }}>{label}</Link>)}
        </nav>
        <Link to="/" className="about-back"><ArrowLeft size={14} /> Back to Home</Link>
        <button className="about-menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X /> : <Menu />}</button>
        {menuOpen && <div className="about-mobile-menu">{pageLinks.map(({ label, to }) => <Link key={label} to={to} onClick={() => setMenuOpen(false)}>{label}</Link>)}<Link to="/" onClick={() => setMenuOpen(false)}><ArrowLeft size={14} /> Back to Home</Link></div>}
      </header>

      <section className="projects-hero about-pad">
        <div className="projects-hero-copy">
          <div className="eyebrow"><span className="eyebrow-orbit">◎</span> Selected Work</div>
          <h1>Work that carries ideas into the world.</h1>
          <p>A closer look at the projects we've shaped — identities, websites and growth work built around each business and where it wants to go.</p>
          <div className="projects-hero-links" aria-label="Browse projects">
            {projects.map(({ number, name }) => <a key={name} href={`#project-${number}`}><span>{number}</span>{name}<ArrowDownRight size={14} /></a>)}
          </div>
        </div>
        <div className="projects-hero-visual"><div className="projects-hero-block" /><img src={teamImage} width={1408} height={800} alt="The NextBiz Studio team reviewing project work" /><span className="scribble projects-hero-note">Made with<br />intent.</span><span className="projects-hero-index">NEXTBIZ <i>/</i> SELECTED WORK</span></div>
      </section>

      <section className="projects-chapters" aria-label="Selected projects">
        {projects.map(({ number, name, type, image, cls, copy, tags }, index) => (
          <article className="projects-chapter" id={`project-${number}`} key={name}>
            <div className="projects-chapter-index"><span>{number}</span><i />{type}</div>
            <div className="projects-chapter-main"><h2>{name}</h2><p>{copy}</p><div className="services-offerings" aria-label={`${name} scope`}>{tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
            <div className="projects-chapter-image"><img src={image} className={cls} loading="lazy" alt={`${name} — ${type.toLowerCase()} project`} /><span className="projects-image-number">{number}<i> / 03</i></span></div>
          </article>
        ))}
      </section>

      <section className="services-cta about-pad">
        <div className="eyebrow"><span className="eyebrow-orbit">◎</span> Have something in mind</div>
        <div className="services-cta-row"><h2>Your project could<br />be next.</h2><div><p>Tell us what you're building. We'll help shape what it can become — and how the work above could look like yours.</p><Link to="/" hash="contact" className="about-action"><span>Start a conversation</span><ArrowRight size={15} /></Link></div></div>
        <span className="scribble services-cta-note">From idea<br />to impact.</span>
      </section>

      <footer className="about-footer about-pad"><div><ProjectsBrand /><p>A digital team for businesses building what comes next.</p></div><div className="about-footer-links"><b>Explore</b><Link to="/">Home</Link><Link to="/about">About Us</Link><Link to="/services">Services</Link><Link to="/projects">Projects</Link></div><div className="about-footer-mark"><span className="scribble">Built around<br />your business.</span><Link to="/" className="about-back"><ArrowLeft size={14} /> Back to Home</Link></div><div className="about-copyright"><span>© 2026 NextBiz Studio. All rights reserved.</span><span>Made with intent.</span></div></footer>
    </main>
  );
}
