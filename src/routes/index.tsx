import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Compass,
  Construction,
  Building2,
  CirclePlay,
  Code2,
  GraduationCap,
  HeartPulse,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Palette,
  Phone,
  ShoppingBag,
  SlidersHorizontal,
  RefreshCw,
  X,
  Youtube,
} from "lucide-react";

import logoAsset from "@/assets/nextbiz-studio-logo-dark.png.asset.json";
import heroImage from "@/assets/nextbiz-hero.jpg";
import aboutImage from "@/assets/nextbiz-about.jpg";
import stillLifeImage from "@/assets/nextbiz-studio-stilllife.jpg";
import teamImage from "@/assets/nextbiz-team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NextBiz Studio | Your Digital Team, When You Need It" },
      { name: "description", content: "NextBiz Studio is your digital team when you need it, building websites, products, marketing systems and growth tools around your business." },
      { property: "og:title", content: "NextBiz Studio | Your Digital Team, When You Need It" },
      { property: "og:description", content: "Digital solutions, marketing support and technology built around the way your business works." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
] as const;

const services = [
  { n: "01", slug: "web-digital-products", title: "Web & Digital Products", copy: "Modern websites, web applications, digital platforms and interfaces built around your workflow." },
  { n: "02", slug: "marketing-growth", title: "Marketing & Growth", copy: "Social media, ad creation, campaigns, marketing creatives and simpler advertising workflows." },
  { n: "03", slug: "whatsapp-meta-solutions", title: "WhatsApp & Meta Solutions", copy: "Practical communication and conversational workflows built around Meta platforms." },
  { n: "04", slug: "meta-proxy", title: "Marketing Tech & Meta Proxy", copy: "A product we are bringing to market to simplify WABA infrastructure, storage and WhatsApp workflows." },
];

const projects = [
  { name: "NextGen", type: "Web Design · Branding", image: heroImage, cls: "object-[70%_45%]" },
  { name: "Harmony", type: "Digital Marketing", image: aboutImage, cls: "object-[50%_24%]" },
  { name: "Velora", type: "Brand Identity", image: stillLifeImage, cls: "object-center" },
];

const testimonials = [
  { quote: "NextBiz Studio transformed our brand completely. Their creativity and strategic thinking are unmatched.", name: "Sarah Johnson", role: "CEO, NextGen" },
  { quote: "The team made a complex challenge feel effortless. The result is clear, confident and completely us.", name: "Marcus Lee", role: "Founder, Velora" },
] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Brand({ compact = false }: { compact?: boolean }) {
  return <a href="#home" className="brand" aria-label="NextBiz Studio home"><img src={logoAsset.url} alt="" /><span>{compact ? "NextBiz" : "NextBiz Studio"}</span></a>;
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow"><span className="eyebrow-orbit">◎</span>{children}</div>;
}

function Action({ children, to, dark = false }: { children: React.ReactNode; to: string; dark?: boolean }) {
  return <a href={`#${to}`} onClick={(e) => { e.preventDefault(); scrollTo(to); }} className={`action ${dark ? "action-dark" : ""}`}><span>{children}</span><ArrowRight size={14} /></a>;
}

function Stat({ icon: Icon, amount, copy }: { icon: typeof Compass; amount: string; copy: string }) {
  return <article className="stat"><Icon size={26} strokeWidth={1.4} /><div><strong>{amount}</strong><p>{copy}</p></div></article>;
}

function useScrollReveals() {
  useEffect(() => {
    const root = document.documentElement;
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    root.classList.add("motion-ready");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -6% 0px" });
    items.forEach((item) => observer.observe(item));
    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, []);
}

function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches || window.innerWidth <= 760) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add("has-custom-cursor");
    let targetX = -100;
    let targetY = -100;
    let ringX = -100;
    let ringY = -100;
    let frame = 0;
    const render = () => {
      ringX += (targetX - ringX) * 0.16;
      ringY += (targetY - ringY) * 0.16;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = requestAnimationFrame(render);
    };
    const onMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      document.documentElement.classList.add("cursor-visible");
    };
    const onOver = (event: PointerEvent) => {
      const target = event.target;
      const interactive = target instanceof Element && target.closest("a, button, input, .project, .stat");
      document.documentElement.classList.toggle("cursor-active", Boolean(interactive));
    };
    const onLeave = () => document.documentElement.classList.remove("cursor-visible");
    const onClick = (event: PointerEvent) => {
      const pulse = document.createElement("span");
      pulse.className = "cursor-click-pulse";
      pulse.style.left = `${event.clientX}px`;
      pulse.style.top = `${event.clientY}px`;
      document.body.appendChild(pulse);
      pulse.addEventListener("animationend", () => pulse.remove(), { once: true });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    window.addEventListener("pointerdown", onClick, { passive: true });
    frame = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("pointerdown", onClick);
      document.documentElement.classList.remove("has-custom-cursor", "cursor-visible", "cursor-active");
    };
  }, []);

  return <><div ref={ringRef} className="cursor-ring" aria-hidden="true" /><div ref={dotRef} className="cursor-dot" aria-hidden="true" /></>;
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [story, setStory] = useState(0);
  const currentStory = testimonials[story] ?? testimonials[0];
  useScrollReveals();

  return (
    <main id="home" className="site-shell">
      <CustomCursor />
      <header className="topbar">
        <Brand />
        <nav aria-label="Main navigation">
          {navItems.map(({ label, to }) => <Link key={label} to={to}>{label}</Link>)}
        </nav>
        <a href="tel:22003567890" className="call"><Phone size={17} /><span><small>Call Any Time</small><b>22 (00) 356 7890</b></span></a>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        {menuOpen && <div className="mobile-menu">{navItems.map(({ label, to }) => <Link key={label} to={to} onClick={() => setMenuOpen(false)}>{label}</Link>)}</div>}
      </header>

      <section className="hero section-pad">
        <div className="hero-copy is-revealed" data-reveal>
          <Label>Creative Ideas That Inspire Growth</Label>
           <h1>Your Digital Team,<br />When You Need It</h1>
           <p>We help businesses build, improve and grow through thoughtful digital solutions, marketing support and technology shaped around the way they work.</p>
          <div className="hero-actions"><Action to="contact" dark>Get Started</Action><a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo("projects"); }} className="watch"><CirclePlay size={32} strokeWidth={1.2} /> Watch Demo</a></div>
        </div>
        <div className="hero-visual is-revealed" data-reveal><div className="hero-accent-block" /><img src={heroImage} width={1200} height={1008} alt="Creative director working in a sunlit studio" /><span className="scribble hero-note ambient-float">Ideas<br />become<br />impact.</span></div>
      </section>

       <section className="partners reveal-stagger" aria-label="One Studio, Different Needs" data-reveal><Label>One Studio, Different Needs</Label><div className="partner-row"><span>STARTUPS</span><i>•</i><span>SMALL BUSINESSES</span><i>•</i><span>TEAMS</span><i>•</i><span>PRODUCTS</span><i>•</i><span>BRANDS</span><i>•</i><span>DIGITAL</span><i>•</i><span>IDEAS</span></div></section>

      <section id="about" className="about section-pad">
        <div className="section-heading centered" data-reveal><Label>About Us</Label><h2>Who We Are. Learn About us</h2><p>We are a dynamic team of innovators, storytellers, and visionaries dedicated<br className="desktop-only" /> to transforming ideas into extraordinary experiences.</p></div>
        <div className="about-grid reveal-stagger" data-reveal>
          <div className="about-photo"><img src={aboutImage} loading="lazy" width={1008} height={1104} alt="NextBiz Studio creative strategist" /></div>
          <div className="stats-grid">
             <Stat icon={Compass} amount="01" copy="PLAN — Understand the idea, goals, audience, and requirements." />
             <Stat icon={Construction} amount="02" copy="BUILD — Turn the direction into a real digital experience." />
             <Stat icon={SlidersHorizontal} amount="03" copy="IMPROVE — Review, test, refine, and make the details better." />
             <Stat icon={RefreshCw} amount="04" copy="ITERATE — Launch, learn, and keep improving as needed." />
            <div className="about-actions"><Link to="/about" className="action action-dark"><span>More About Us</span><ArrowRight size={14} /></Link><a className="inline-call" href="tel:22003567890"><Phone size={17} /><span><small>Call Free Quote</small><b>22 (00) 356 7890</b></span></a></div>
          </div>
        </div>
      </section>

      <section id="services" className="services section-pad split-section">
         <div className="services-intro" data-reveal><Label>Our Services</Label><h2>Ideas<br />Into Impact.</h2><p>We bring digital solutions, marketing and growth support together so businesses can get the right help without building a full in-house team.</p><Link to="/services" className="action action-dark"><span>Explore Our Services</span><ArrowRight size={14} /></Link><span className="scribble services-note ambient-float">Strategy<br />Design<br />Technology<br />Growth<br />Together <ArrowUpRight size={34} /></span></div>
         <div className="service-list reveal-stagger" data-reveal>{services.map((service) => <Link to="/services" hash={service.slug} key={service.n}><span>{service.n}</span><div><h3>{service.title}</h3><p>{service.copy}</p></div><ArrowUpRight size={18} /></Link>)}</div>
        <div className="service-photo" data-reveal><img src={stillLifeImage} loading="lazy" width={1408} height={912} alt="Brand strategy workspace" /><div className="photo-card">Good<br />Brands<br />Better<br />People<sup>™</sup></div><div className="sticky-note scribble ambient-float">Ideas<br />that<br />work!</div></div>
      </section>

      <section id="projects" className="work section-pad">
        <div className="work-heading" data-reveal><Label>Selected Work</Label><h2>Work That<br />Speaks.</h2><p>A selection of our recent work, crafted with passion and purpose.</p><Link to="/projects" className="text-link">View All Projects <ArrowRight size={14} /></Link></div>
        <div className="project-grid reveal-stagger" data-reveal>{projects.map((project) => <article className="project" key={project.name}><div><img src={project.image} className={project.cls} loading="lazy" alt={`${project.name} project`} /></div><h3>{project.name}<ArrowUpRight size={15} /></h3><p>{project.type}</p></article>)}</div>
      </section>

      <section className="industries">
        <div className="industry-image" data-reveal><img src={stillLifeImage} loading="lazy" alt="Modern office architecture" /><div>Different<br />Industries.<br />Same Mission.<span /></div></div>
        <div className="industry-copy section-pad" data-reveal><Label>Industries We Work With</Label><h2>Ambitious Brands.<br />Bold Ideas.</h2><p>From startups to global companies, we partner with businesses that believe in the power of creativity to drive real change.</p><div className="industry-icons reveal-stagger"><span><Code2 />Technology</span><span><HeartPulse />Health & Wellness</span><span><Building2 />Real Estate</span><span><ShoppingBag />Consumer Brands</span><span><GraduationCap />Education</span><span><Palette />and More</span></div></div>
      </section>

      <section className="testimonial section-pad">
        <div className="quote-side" data-reveal><Label>Client Stories</Label><blockquote key={story}>“{currentStory.quote}”</blockquote><div className="quote-meta"><img src={aboutImage} alt="Client portrait" /><span><b>{currentStory.name}</b><small>{currentStory.role}</small><em>★★★★★</em></span></div><div className="quote-controls"><button aria-label="Previous testimonial" onClick={() => setStory((story + testimonials.length - 1) % testimonials.length)}><ArrowLeft /></button><button aria-label="Next testimonial" onClick={() => setStory((story + 1) % testimonials.length)}><ArrowRight /></button></div></div>
        <div className="quote-image" data-reveal><img src={heroImage} loading="lazy" alt="Happy NextBiz Studio client" /><span className="scribble ambient-float">Real<br />People.<br />Real<br />Impact.</span></div>
      </section>

      <section id="team" className="team section-pad">
        <div className="team-copy" data-reveal><Label>Our Team</Label><h2>A Team That<br />Makes It Happen.</h2><p>A diverse team of creatives, strategists, and builders united by a simple belief — great work happens when great people work together.</p><a className="text-link" href="#contact">Meet Our Team <ArrowRight size={14} /></a></div>
        <div className="team-photo" data-reveal><img src={teamImage} loading="lazy" width={1408} height={800} alt="The NextBiz Studio team" /><div className="team-names reveal-stagger"><span><b>Alex Morgan</b><small>Creative Director</small></span><span><b>Priya Shah</b><small>Project Manager</small></span><span><b>Daniel Kim</b><small>Lead Developer</small></span><span><b>Sophia Lee</b><small>Marketing Specialist</small></span></div></div><span className="scribble team-note ambient-float">Great<br />People<br />Better<br />Brands</span>
      </section>

      <section id="contact" className="contact section-pad reveal-stagger" data-reveal><h2>Have a project<br />in mind?</h2><ArrowDownRight className="contact-arrow" /><p>Whether you’re starting fresh or looking to scale,<br />we’d love to hear about your ideas.</p><Action to="home" dark>Start a Conversation</Action><a className="inline-call" href="tel:22003567890"><Phone size={17} /><span><small>Call Any Time</small><b>22 (00) 356 7890</b></span></a><div className="contact-image"><img src={stillLifeImage} loading="lazy" alt="Creative planning desk" /><span className="scribble ambient-float">Good<br />Ideas<br />Start<br />Here</span></div></section>

      <footer className="footer section-pad reveal-stagger" data-reveal>
        <div className="footer-brand"><Brand /><p>A creative agency focused on building brands, products and experiences that make a difference.</p><div><a href="#" aria-label="Instagram"><Instagram /></a><a href="#" aria-label="LinkedIn"><Linkedin /></a><a href="#" aria-label="YouTube"><Youtube /></a></div></div>
         <div className="footer-links"><b>Quick Links</b>{navItems.map(({ label, to }) => <Link key={label} to={to}>{label}</Link>)}</div>
        <div className="footer-links"><b>Our Services</b>{services.map((s) => <Link key={s.n} to="/services" hash={s.slug}>{s.title}</Link>)}</div>
        <div className="footer-links"><b>Resources</b><a href="#projects">Blog</a><a href="#projects">Case Studies</a><a href="#contact">Help Center</a><a href="#">Privacy Policy</a></div>
        <div className="newsletter"><b>Subscribe to our newsletter</b><p>Get the latest updates and insights.</p><div><label className="sr-only" htmlFor="email">Your email address</label><input id="email" type="email" placeholder="Your email address" /><button aria-label="Subscribe"><ArrowRight /></button></div></div>
        <div className="copyright"><span>© 2026 NextBiz Studio. All rights reserved.</span><span><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></span></div>
      </footer>
    </main>
  );
}