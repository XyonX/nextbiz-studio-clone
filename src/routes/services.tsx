import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Blocks, Brush, Menu, MessageCircle, RefreshCw, SlidersHorizontal, Workflow, X } from "lucide-react";
import { useState } from "react";

import aboutImage from "@/assets/nextbiz-about.jpg";
import logoAsset from "@/assets/nextbiz-studio-logo-dark.png.asset.json";
import stillLifeImage from "@/assets/nextbiz-studio-stilllife.jpg";
import teamImage from "@/assets/nextbiz-team.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Capabilities | NextBiz Studio" },
      { name: "description", content: "Explore NextBiz Studio's web and digital products, marketing and growth support, WhatsApp and Meta solutions, and upcoming Meta Proxy product." },
      { property: "og:title", content: "Services & Capabilities | NextBiz Studio" },
      { property: "og:description", content: "Digital products, marketing support and practical Meta solutions, shaped around your business." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const capabilities = [
  { id: "web-digital-products", number: "01", category: "Digital foundations", title: "Web & Digital Products", icon: Blocks, description: "Digital experiences shaped around the way your business works—from a clear first website to a more capable product or platform.", offerings: ["Websites", "Web applications", "Digital platforms", "Workflow-led interfaces"], image: aboutImage, alt: "Creative strategist reviewing digital work" },
  { id: "marketing-growth", number: "02", category: "Marketing & growth", title: "Marketing & Growth", icon: Brush, description: "A considered mix of social media, advertising and creative work that helps your business show up with a clearer, more consistent voice.", offerings: ["Social media", "Ad creation", "Campaigns", "Marketing creatives", "Simplified advertising workflows"], image: stillLifeImage, alt: "Creative planning materials on a studio desk" },
  { id: "whatsapp-meta-solutions", number: "03", category: "Customer conversations", title: "WhatsApp & Meta Solutions", icon: MessageCircle, description: "Practical WhatsApp and Meta-related solutions for businesses looking to make customer communication and day-to-day workflows simpler.", offerings: ["WhatsApp-related solutions", "Meta platform support", "Communication workflows"], image: teamImage, alt: "The studio team collaborating on a project" },
] as const;

const workflow = [
  { number: "01", label: "PLAN", copy: "Understand the idea, goals, audience, and requirements.", icon: SlidersHorizontal },
  { number: "02", label: "BUILD", copy: "Turn the direction into a real digital experience.", icon: Blocks },
  { number: "03", label: "IMPROVE", copy: "Review, test, refine, and make the details better.", icon: Brush },
  { number: "04", label: "ITERATE", copy: "Launch, learn, and keep improving as needed.", icon: RefreshCw },
] as const;

const pageLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
] as const;

function ServicesBrand() {
  return <Link to="/" className="about-brand" aria-label="NextBiz Studio home"><img src={logoAsset.url} alt="" /><span>NextBiz Studio</span></Link>;
}

function ServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="services-page">
      <header className="about-topbar">
        <ServicesBrand />
        <nav aria-label="Main navigation">
          {pageLinks.map(({ label, to }) => <Link key={label} to={to} activeProps={{ className: "services-nav-active" }}>{label}</Link>)}
        </nav>
        <Link to="/" className="about-back"><ArrowLeft size={14} /> Back to Home</Link>
        <button className="about-menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X /> : <Menu />}</button>
        {menuOpen && <div className="about-mobile-menu">{pageLinks.map(({ label, to }) => <Link key={label} to={to} onClick={() => setMenuOpen(false)}>{label}</Link>)}<Link to="/" onClick={() => setMenuOpen(false)}><ArrowLeft size={14} /> Back to Home</Link></div>}
      </header>

      <section className="services-hero about-pad">
        <div className="services-hero-copy">
          <div className="eyebrow"><span className="eyebrow-orbit">◎</span> Capabilities &amp; Architecture</div>
          <h1>Engineering, growth and products shaped around how you work.</h1>
          <p>Bring us in as your digital team, or choose a focused service or product for what you need right now. We bring the right mix of digital, marketing and technology support together.</p>
          <div className="services-hero-links" aria-label="Explore capabilities">
            {capabilities.map(({ id, number, title }) => <a key={id} href={`#${id}`}><span>{number}</span>{title}<ArrowDownRight size={14} /></a>)}
            <a href="#meta-proxy"><span>04</span>Meta Proxy<ArrowDownRight size={14} /></a>
          </div>
        </div>
        <div className="services-hero-visual"><div className="services-hero-block" /><img src={stillLifeImage} width={1408} height={912} alt="Planning materials and tools in the NextBiz Studio workspace" /><span className="scribble services-hero-note">Good ideas,<br />built to work.</span><span className="services-hero-index">NEXTBIZ <i>/</i> CAPABILITIES</span></div>
      </section>

      <section className="services-chapters" aria-label="Studio capabilities">
        {capabilities.map(({ id, number, category, title, icon: Icon, description, offerings, image, alt }, index) => (
          <article className={`services-chapter services-chapter-${index + 1}`} id={id} key={id}>
            <div className="services-chapter-index"><span>{number}</span><i />{category}</div>
            <div className="services-chapter-main"><div className="services-chapter-title"><Icon size={22} strokeWidth={1.4} /><h2>{title}</h2></div><p>{description}</p><div className="services-offerings" aria-label={`${title} includes`}>{offerings.map((item) => <span key={item}>{item}</span>)}</div></div>
            <div className="services-chapter-image"><img src={image} loading="lazy" alt={alt} /><span className="services-image-number">{number}<i> / 03</i></span></div>
          </article>
        ))}
      </section>

      <section className="meta-proxy-feature about-pad" id="meta-proxy">
        <div className="meta-proxy-copy"><div className="eyebrow"><span className="eyebrow-orbit">◎</span> A product we’re building</div><div className="meta-proxy-titleline"><span>04 / PRODUCT SPOTLIGHT</span><span className="meta-proxy-status"><i /> Preparing for market</span></div><h2>Meet <span>Meta Proxy.</span></h2><p className="meta-proxy-lede">A marketing technology product we’re actively developing to make working with the WhatsApp Business API simpler.</p><p>Meta Proxy is designed to handle the underlying infrastructure and storage, giving businesses a simpler interface for managing WhatsApp-based communication and workflows. We’re preparing it for market as a standalone product—and it can also support a wider NextBiz Studio engagement.</p><div className="meta-proxy-points"><span><Workflow size={16} />Underlying infrastructure</span><span><SlidersHorizontal size={16} />Managed storage and simpler workflows</span><span><MessageCircle size={16} />WhatsApp Business API (WABA)</span></div><Link to="/" hash="contact" className="services-light-action"><span>Discuss Meta Proxy</span><ArrowUpRight size={15} /></Link></div>
        <div className="meta-proxy-visual"><div className="meta-proxy-orbit meta-proxy-orbit-one" /><div className="meta-proxy-orbit meta-proxy-orbit-two" /><div className="meta-proxy-monogram">M<span>P</span></div><span className="meta-proxy-caption">SIMPLER WHATSAPP WORKFLOWS <ArrowUpRight size={13} /></span><span className="meta-proxy-footnote">NEXTBIZ STUDIO <i>·</i> PRODUCT 01</span></div>
      </section>

      <section className="services-models about-pad" id="ways-to-work">
        <div className="services-models-heading"><div className="eyebrow"><span className="eyebrow-orbit">◎</span> Ways to work together</div><h2>One studio.<br />Your way in.</h2><p>Choose the breadth of support that fits your business today.</p></div>
        <div className="services-model-list">
          <article><span className="services-model-number">A</span><div><h3>Your digital team</h3><p>Bring NextBiz Studio in across digital products, marketing and Meta-related solutions—matched to the needs of your business.</p></div><ArrowUpRight size={18} /></article>
          <article><span className="services-model-number">B</span><div><h3>A focused solution</h3><p>Start with a specific service, marketing solution or independent product such as Meta Proxy, without needing a full-service engagement.</p></div><ArrowUpRight size={18} /></article>
        </div>
      </section>

      <section className="services-workflow about-pad" id="our-process">
        <div className="services-workflow-heading"><div className="eyebrow"><span className="eyebrow-orbit">◎</span> A clear way forward</div><h2>From first thought<br />to what’s next.</h2></div>
        <div className="services-workflow-list">{workflow.map(({ number, label, copy, icon: Icon }) => <article key={number}><div className="services-workflow-top"><span>{number}</span><Icon size={20} strokeWidth={1.4} /></div><h3>{label}</h3><p>{copy}</p><i /></article>)}</div>
      </section>

      <section className="services-cta about-pad"><div className="eyebrow"><span className="eyebrow-orbit">◎</span> Bring us what you’re building</div><div className="services-cta-row"><h2>What could your<br />next step look like?</h2><div><p>Tell us where you want to go. We’ll find the right way to work together.</p><Link to="/" hash="contact" className="about-action"><span>Start a conversation</span><ArrowRight size={15} /></Link></div></div><span className="scribble services-cta-note">Ideas into<br />impact.</span></section>

      <footer className="about-footer about-pad"><div><ServicesBrand /><p>A digital team for businesses building what comes next.</p></div><div className="about-footer-links"><b>Explore</b><Link to="/">Home</Link><Link to="/about">About Us</Link><Link to="/services">Services</Link><Link to="/projects">Projects</Link></div><div className="about-footer-mark"><span className="scribble">Built around<br />your business.</span><Link to="/" className="about-back"><ArrowLeft size={14} /> Back to Home</Link></div><div className="about-copyright"><span>© 2026 NextBiz Studio. All rights reserved.</span><span>Made with intent.</span></div></footer>
    </main>
  );
}