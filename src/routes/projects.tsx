import { createFileRoute } from "@tanstack/react-router";
import { PageAction, PageLabel, SitePage } from "@/components/site-page";
import heroImage from "@/assets/nextbiz-hero.jpg";
import aboutImage from "@/assets/nextbiz-about.jpg";
import stillLifeImage from "@/assets/nextbiz-studio-stilllife.jpg";
export const Route = createFileRoute("/projects")({ component: ProjectsPage });
const projects = [{ name: "NextGen", type: "Web Design · Branding", image: heroImage }, { name: "Harmony", type: "Digital Marketing", image: aboutImage }, { name: "Velora", type: "Brand Identity", image: stillLifeImage }];
function ProjectsPage() { return <SitePage label="Selected work" title={<>Work that<br />speaks.</>} intro="A selection of recent partnerships, shaped by curiosity, care and a clear point of view."><section className="project-grid page-project-grid section-pad">{projects.map((project) => <article className="project" key={project.name}><div><img src={project.image} alt={`${project.name} project`} /></div><h3>{project.name}</h3><p>{project.type}</p></article>)}</section><section className="contact section-pad"><PageLabel>Have a project in mind?</PageLabel><h2>Let&apos;s make<br />your next move.</h2><PageAction href="/contact">Start a conversation</PageAction></section></SitePage>; }
