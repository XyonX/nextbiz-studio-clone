import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

import aboutImage from "@/assets/nextbiz-about.jpg";
import logoAsset from "@/assets/nextbiz-studio-logo-dark.png.asset.json";
import stillLifeImage from "@/assets/nextbiz-studio-stilllife.jpg";
import teamImage from "@/assets/nextbiz-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About NextBiz Studio | Creative Partners" },
      { name: "description", content: "Meet NextBiz Studio: a focused team shaping distinctive brands, digital experiences and ideas built to last." },
      { property: "og:title", content: "About NextBiz Studio | Creative Partners" },
      { property: "og:description", content: "A closer look at the people, principles and craft behind NextBiz Studio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const principles = [
  ["01", "Form follows feeling", "We pair emotional resonance with functional precision, so every detail earns its place."],
  ["02", "Radical simplicity", "We remove the noise until the essential idea has room to be remembered."],
  ["03", "Made, not assembled", "Every identity, interface and interaction is shaped around the brand—not pulled from a kit."],
  ["04", "Built for the long view", "We make decisions that keep working after the launch moment has passed."],
] as const;

const navItems = ["About", "Approach", "Team"] as const;

function AboutBrand() {
  return (
    <Link to="/" className="about-brand" aria-label="Back to NextBiz Studio home">
      <img src={logoAsset.url} alt="" />
      <span>NextBiz Studio</span>
    </Link>
  );
}

function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="about-page">
      <header className="about-topbar">
        <AboutBrand />
        <nav aria-label="About page navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </nav>
        <Link to="/" className="about-back"><ArrowLeft size={14} /> Back to Home</Link>
        <button className="about-menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <div className="about-mobile-menu">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
            <Link to="/" onClick={() => setMenuOpen(false)}><ArrowLeft size={14} /> Back to Home</Link>
          </div>
        )}
      </header>

      <section className="about-hero about-pad" id="about">
        <div className="about-hero-copy">
          <div className="eyebrow"><span className="eyebrow-orbit">◎</span> Behind the Studio</div>
          <p className="about-kicker">A small studio with a wide point of view.</p>
          <h1>We build ideas that outgrow the ordinary.</h1>
          <p className="about-lede">NextBiz Studio is a creative partner for ambitious people. We turn the early spark into a clear, memorable and useful expression of what comes next.</p>
          <Link to="/" className="about-action"><span>Back to the home story</span><ArrowRight size={15} /></Link>
        </div>
        <div className="about-hero-visual">
          <div className="about-hero-block" />
          <img src={aboutImage} width={1008} height={1104} alt="Creative strategist reviewing work in a sunlit studio" />
          <span className="scribble about-hero-note">Est. 2018<br />built on craft.</span>
          <span className="about-hero-index">01 <i>/</i> 04</span>
        </div>
      </section>

      <section className="about-manifesto about-pad" id="approach">
        <div className="about-section-label"><span className="eyebrow-orbit">◎</span> Our point of view</div>
        <div className="about-manifesto-copy">
          <h2>Good work starts<br />with a point of view.</h2>
          <div>
            <p>We started NextBiz Studio because the most important brands deserve more than a polished surface. They deserve a clear idea, a considered voice and a world people want to step into.</p>
            <p>Our team moves between strategy, design and technology without handing the important bits over the wall. That closeness is where the unexpected detail usually appears.</p>
            <span className="scribble about-manifesto-note">Make it<br />matter <ArrowUpRight size={24} /></span>
          </div>
        </div>
        <div className="about-manifesto-image"><img src={stillLifeImage} loading="lazy" alt="Materials and notes on a creative studio desk" /></div>
      </section>

      <section className="about-principles about-pad">
        <div className="about-principles-heading"><div className="eyebrow"><span className="eyebrow-orbit">◎</span> How we work</div><h2>Four things<br />we believe.</h2></div>
        <div className="principle-list">
          {principles.map(([number, title, copy]) => (
            <article className="principle" key={number}>
              <span className="principle-number">{number}</span>
              <div><h3>{title}</h3><p>{copy}</p></div>
              <ArrowUpRight size={17} />
            </article>
          ))}
        </div>
      </section>

      <section className="about-team about-pad" id="team">
        <div className="about-team-image"><img src={teamImage} loading="lazy" alt="The NextBiz Studio team working together" /><span className="scribble about-team-note">Different minds.<br />One direction.</span></div>
        <div className="about-team-copy"><div className="eyebrow"><span className="eyebrow-orbit">◎</span> The people behind it</div><h2>Small enough<br />to stay close.</h2><p>We are strategists, designers, writers and builders who like to sit at the same table. You get senior thinking from the first conversation, and a team that stays curious all the way through.</p><div className="about-team-meta"><strong>05</strong><span>people<br />in the core studio</span><strong>20+</strong><span>partners<br />across the world</span></div></div>
      </section>

      <section className="about-cta about-pad">
        <div><div className="eyebrow"><span className="eyebrow-orbit">◎</span> Make the next move</div><h2>Ready to build<br />something unforgettable?</h2></div>
        <div className="about-cta-side"><ArrowDownRight className="about-cta-arrow" /><p>Bring us the rough idea.<br />We’ll help shape what it can become.</p><Link to="/" className="about-action about-action-dark"><span>Start a conversation</span><ArrowRight size={15} /></Link></div>
      </section>

      <footer className="about-footer about-pad">
        <div><AboutBrand /><p>A creative agency focused on building brands, products and experiences that make a difference.</p></div>
        <div className="about-footer-links"><b>Explore</b><Link to="/">Home</Link><a href="#approach">Our approach</a><a href="#team">Our team</a></div>
        <div className="about-footer-mark"><span className="scribble">Ideas into<br />impact.</span><Link to="/" className="about-back"><ArrowLeft size={14} /> Back to Home</Link></div>
        <div className="about-copyright"><span>© 2026 NextBiz Studio. All rights reserved.</span><span>Made with intent.</span></div>
      </footer>
    </main>
  );
}