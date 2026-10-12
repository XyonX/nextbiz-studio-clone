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
      { name: "description", content: "Explore NextBiz Studio's digital products, marketing and growth support, WhatsApp and Meta solutions, and upcoming Meta Proxy product." },
      { property: "og:title", content: "Services & Capabilities | NextBiz Studio" },
      { property: "og:description", content: "Flexible digital, marketing and technology support shaped around how your business works." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const capabilities = [
  { id: "web-digital-products", number: "01", category: "DIGITAL FOUNDATIONS", title: "Web & Digital Products", icon: Blocks, description: "Digital experiences shaped around the way your business works—from a clear first website to a more capable product or platform.", offerings: ["Websites", "Web applications", "Digital platforms", "Workflow-led interfaces"], image: aboutImage, alt: "A strategist reviewing digital work" },
  { id: "marketing-growth", number: "02", category: "MARKETING & GROWTH", title: "Marketing & Growth", icon: Brush, description: "A considered mix of social media, advertising and creative work that helps your business show up with a clearer, more consistent voice.", offerings: ["Social media", "Ad creation", "Campaigns", "Marketing creatives", "Simplified advertising workflows"], image: stillLifeImage, alt: "Creative planning materials in the studio" },
  { id: "whatsapp-meta-solutions", number: "03", category: "CUSTOMER CONVERSATIONS", title: "WhatsApp & Meta Solutions", icon: MessageCircle, description: "Practical WhatsApp and Meta-related solutions for businesses looking to make customer communication and day-to-day workflows simpler.", offerings: ["WhatsApp-related solutions", "Meta platform support", "Communication workflows"], image: teamImage, alt: "The studio team collaborating on a project" },
] as const;

const steps = [
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
  const [activeService, setActiveService] = useState(0);
  const service = capabilities[activeService];
  const ServiceIcon = service.icon;

  return (
    <main className="services-page services-catalog-page">
      <header className="about-topbar">
        <ServicesBrand />
        <nav aria-label="Main navigation">{pageLinks.map(({ label, to }) => <Link key={label} to={to} activeProps={{ className: "services-nav-active" }}>{label}</Link>)}</nav>
        <Link to="/" className="about-back"><ArrowLeft size={14} /> Back to Home</Link>
        <button className="about-menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X /> : <Menu />}</button>
        {menuOpen && <div className="about-mobile-menu">{pageLinks.map(({ label, to }) => <Link key={label} to={to} onClick={() => setMenuOpen(false)}>{label}</Link>)}<Link to="/" onClick={() => setMenuOpen(false)}><ArrowLeft size={14} /> Back to Home</Link></div>}
      </header>

      <section className="services-catalog-hero about-pad">
        <div className="services-catalog-heading"><div className="eyebrow"><span className="eyebrow-orbit">◎</span> Capabilities / 2026</div><h1>One studio.<br /><span>Many ways forward.</span></h1><p>Bring us in as your digital team, or choose a focused service or product for what you need right now.</p></div>
        <div className="services-catalog-aside"><span className="services-aside-rule" /><span>TECHNOLOGY<br />BUILT AROUND<br />YOUR BUSINESS.</span><ArrowDownRight size={25} /></div>
        <div className="services-catalog-index"><span>01 — 03</span><span>SELECT A DISCIPLINE</span><span>BUILT TO FLEX</span></div>
      </section>

      <section className="services-switcher about-pad" aria-label="Studio capabilities">
        <div className="services-index-rail">{capabilities.map(({ id, number, category, title }, index) => <button type="button" className={`services-index-item${activeService === index ? " is-active" : ""}`} key={id} onClick={() => setActiveService(index)} aria-pressed={activeService === index}><span>{number}</span><span>{category}</span><strong>{title}</strong><ArrowUpRight size={16} /></button>)}<a className="services-index-meta" href="#meta-proxy"><span>04</span><span>PRODUCT / IN DEVELOPMENT</span><strong>Meta Proxy</strong><ArrowUpRight size={16} /></a></div>
        <article className="services-detail" id={service.id} key={service.id}>
          <div className="services-detail-top"><span>{service.number} / 03</span><span>{service.category}</span></div>
          <div className="services-detail-image"><img src={service.image} alt={service.alt} /><span className="services-detail-icon"><ServiceIcon size={22} strokeWidth={1.4} /></span></div>
          <div className="services-detail-copy"><h2>{service.title}</h2><p>{service.description}</p><div className="services-detail-offerings" aria-label={`${service.title} includes`}>{service.offerings.map((offering) => <span key={offering}>{offering}</span>)}</div></div>
          <a className="services-detail-next" href={`#${capabilities[(activeService + 1) % capabilities.length].id}`} onClick={(event) => { event.preventDefault(); setActiveService((current) => (current + 1) % capabilities.length); }}><span>Next discipline</span><ArrowRight size={17} /></a>
        </article>
      </section>

      <section className="services-proxy about-pad" id="meta-proxy">
        <div className="services-proxy-copy"><div className="eyebrow"><span className="eyebrow-orbit">◎</span> Product in development / 04</div><span className="services-proxy-status"><i /> Actively building / Preparing for market</span><h2>Meet<br /><em>Meta Proxy.</em></h2><p className="services-proxy-lede">Our marketing technology product for simpler WhatsApp Business API workflows.</p><p>We’re building Meta Proxy to simplify the WhatsApp Business API (WABA), with managed infrastructure and storage. It’s being prepared for market as a standalone product—and can also support a broader NextBiz Studio engagement.</p><div className="services-proxy-points"><span><Workflow size={16} />Managed infrastructure</span><span><SlidersHorizontal size={16} />Simpler workflow and storage</span><span><MessageCircle size={16} />WhatsApp Business API (WABA)</span></div><Link to="/" hash="contact" className="services-proxy-link"><span>Discuss Meta Proxy</span><ArrowUpRight size={16} /></Link></div>
        <div className="services-proxy-diagram"><span className="proxy-diagram-label">A SIMPLER ROUTE THROUGH THE STACK</span><div className="proxy-node proxy-node-source"><MessageCircle size={19} /><span>WABA</span></div><span className="proxy-route proxy-route-one" /><div className="proxy-node proxy-node-core"><span className="proxy-node-monogram">MP</span><span>META<br />PROXY</span></div><span className="proxy-route proxy-route-two" /><div className="proxy-node proxy-node-output"><Workflow size={19} /><span>YOUR<br />WORKFLOW</span></div><span className="proxy-diagram-foot">INFRASTRUCTURE / STORAGE / SIMPLICITY</span></div>
      </section>

      <section className="services-engagement about-pad" id="ways-to-work">
        <div className="services-engagement-heading"><div className="eyebrow"><span className="eyebrow-orbit">◎</span> Ways to work together</div><h2>Work with the whole.<br /><span>Or choose one part.</span></h2></div>
        <div className="services-engagement-options"><article><span>A / 01</span><div><h3>Your digital team</h3><p>Bring NextBiz Studio in across digital products, marketing and Meta-related solutions—matched to what your business needs.</p></div><ArrowUpRight size={18} /></article><article><span>B / 02</span><div><h3>A focused solution</h3><p>Start with a specific service, marketing solution or independent product such as Meta Proxy, without a full-service engagement.</p></div><ArrowUpRight size={18} /></article></div>
      </section>

      <section className="services-cycle about-pad" id="our-process">
        <div className="services-cycle-head"><div><div className="eyebrow"><span className="eyebrow-orbit">◎</span> A clear way forward</div><h2>Plan. Build.<br />Make it better.</h2></div><span className="services-cycle-note">A CONTINUOUS<br />WORKING RHYTHM</span></div>
        <div className="services-cycle-list">{steps.map(({ number, label, copy, icon: Icon }) => <article key={number}><span className="services-cycle-number">{number}</span><Icon size={19} strokeWidth={1.4} /><h3>{label}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="services-endmark about-pad"><div><span>HAVE SOMETHING IN MIND?</span><h2>Let’s find the<br />right way in.</h2></div><Link to="/" hash="contact" className="services-endmark-link"><span>Start a conversation</span><ArrowRight size={16} /></Link><span className="services-endmark-scribble scribble">Ideas into<br />impact.</span></section>

      <footer className="about-footer about-pad"><div><ServicesBrand /><p>A digital team for businesses building what comes next.</p></div><div className="about-footer-links"><b>Explore</b><Link to="/">Home</Link><Link to="/about">About Us</Link><Link to="/services">Services</Link><Link to="/projects">Projects</Link></div><div className="about-footer-mark"><span className="scribble">Built around<br />your business.</span><Link to="/" className="about-back"><ArrowLeft size={14} /> Back to Home</Link></div><div className="about-copyright"><span>© 2026 NextBiz Studio. All rights reserved.</span><span>Made with intent.</span></div></footer>
    </main>
  );
}