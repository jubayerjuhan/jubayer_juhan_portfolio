"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Globe2,
  LockKeyhole,
  MonitorSmartphone,
  PanelsTopLeft,
  Star,
} from "lucide-react";
import { projects } from "@/data/portfolio";
import { fadeInUp, staggerContainer, staggerFast, scaleIn, viewportConfig } from "@/lib/motion";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
type Project = (typeof projects)[0];
type ProjectLink = {
  label: string;
  href: string;
};

function getProjectLinks(project: Project): ProjectLink[] {
  const primaryLink = project.links.live
    ? [{ label: "Website", href: project.links.live }]
    : [];
  const extraLinks = "extraLinks" in project ? project.extraLinks ?? [] : [];

  return [...primaryLink, ...extraLinks];
}

function getProjectLinkIcon(label: string) {
  switch (label.toLowerCase()) {
    case "website":
      return Globe2;
    case "crm":
      return PanelsTopLeft;
    case "app store":
      return MonitorSmartphone;
    default:
      return ExternalLink;
  }
}

function isConfidentialProject(project: Project) {
  return "confidential" in project && Boolean(project.confidential);
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featured = projects.filter((p) => p.featured);
  const showingAll = activeCategory === "All";

  return (
    <section
      id="projects"
      className="section-padding border-t border-[var(--border)]"
      aria-label="Projects"
    >
      <div className="container-width">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.p variants={fadeInUp} className="section-label mb-4">
            Projects
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-2 leading-tight"
          >
            Real products. Real users.
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[var(--text-secondary)] text-sm mb-10 max-w-md"
          >
            Web3, AI, proptech, and product software — shipped across multiple industries.
          </motion.p>

          {/* Category filter */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-2 mb-10"
            role="group"
            aria-label="Filter projects by category"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                id={`project-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[var(--accent)] text-white"
                    : "bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]"
                }`}
                type="button"
                aria-pressed={activeCategory === cat ? "true" : "false"}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Featured projects */}
          {showingAll && featured.length > 0 && (
            <motion.div
              variants={staggerContainer}
              className="grid gap-3 mb-6"
            >
              {featured.map((project) => (
                <FeaturedCard key={project.id} project={project} />
              ))}
            </motion.div>
          )}

          {/* Project grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={staggerFast}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
            >
              {(showingAll ? projects.filter((p) => !p.featured) : filtered).map(
                (project) => (
                  <ProjectCard key={project.id} project={project} />
                )
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  const projectLinks = getProjectLinks(project);
  const isConfidential = isConfidentialProject(project);

  return (
    <motion.article
      variants={fadeInUp}
      className="group relative isolate overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(20,20,28,0.98),rgba(10,10,15,0.96))] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(99,102,241,0.45)] hover:shadow-[0_18px_54px_rgba(5,5,10,0.45)]"
      aria-label={`Featured project: ${project.name}`}
    >
      <div
        className="absolute inset-0 opacity-90"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.18),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_20%)]" />
        <div className="absolute inset-[1px] rounded-[23px] border border-white/6" />
      </div>

      <div className="absolute right-7 top-7 z-10">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(99,102,241,0.2),rgba(99,102,241,0.06))] shadow-[0_14px_28px_rgba(99,102,241,0.14)] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
          <Star
            size={16}
            className="text-[var(--text-primary)]"
            fill="currentColor"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="relative z-10">
        <div className="mb-4 flex flex-wrap items-center gap-2 pr-14">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
            {project.category}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(99,102,241,0.28)] bg-[rgba(99,102,241,0.12)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            {isConfidential ? (
              <>
                <LockKeyhole size={12} aria-hidden="true" />
                Confidential
              </>
            ) : (
              <>
                <Star size={12} fill="currentColor" aria-hidden="true" />
                Featured
              </>
            )}
          </span>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.45fr)_minmax(270px,0.8fr)] lg:items-start">
          <div className="pr-10 lg:pr-4">
            <h3 className="mb-2 text-[2rem] font-bold leading-none tracking-[-0.03em] text-[var(--text-primary)] sm:text-[2.15rem]">
              {project.name}
            </h3>
            <p className="mb-3 max-w-2xl text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)] sm:text-[13px]">
              {project.tagline}
            </p>
            <p className="max-w-2xl text-sm font-medium leading-7 text-[rgba(236,234,245,0.82)]">
              {project.summary}
            </p>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {project.highlights.slice(0, 2).map((highlight) => (
                <div
                  key={highlight}
                  className="inline-flex max-w-[26rem] items-start gap-2.5 text-sm font-medium leading-6 text-[var(--text-secondary)]"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[20px] border border-white/8 bg-[rgba(255,255,255,0.03)] p-4 backdrop-blur-sm">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
              Stack
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.stack.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-[var(--text-secondary)]"
                >
                  {tech}
                </span>
              ))}
              {project.stack.length > 6 && (
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-[var(--text-muted)]">
                  +{project.stack.length - 6}
                </span>
              )}
            </div>

            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
              Links
            </p>
            <div className="flex flex-wrap gap-2">
              {projectLinks.length > 0 ? (
                projectLinks.map((link) => {
                  const LinkIcon = getProjectLinkIcon(link.label);

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[rgba(99,102,241,0.28)] bg-[var(--accent-subtle)] px-3.5 py-2 text-sm font-semibold text-[var(--accent)] transition-all duration-200 hover:border-[var(--accent-hover)] hover:bg-[var(--accent)] hover:text-white"
                      aria-label={`View ${project.name} ${link.label}`}
                    >
                      <LinkIcon size={14} aria-hidden="true" />
                      {link.label}
                    </a>
                  );
                })
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(99,102,241,0.26)] bg-[rgba(99,102,241,0.12)] px-3.5 py-2 text-sm font-semibold text-[var(--text-primary)]">
                  <LockKeyhole size={14} aria-hidden="true" />
                  Confidential engagement
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const projectLinks = getProjectLinks(project);
  const isConfidential = isConfidentialProject(project);

  return (
    <motion.article
      variants={scaleIn}
      className="group p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] flex flex-col gap-3"
      aria-label={`Project: ${project.name}`}
    >
      <div>
        <p className="text-xs font-mono font-semibold text-[var(--text-muted)] mb-1 uppercase tracking-wider">
          {project.category}
        </p>
        <h3 className="text-base font-bold text-[var(--text-primary)] mb-1 leading-snug">
          {project.name}
        </h3>
        <p className="text-sm text-[var(--accent)] font-semibold mb-2">{project.tagline}</p>
        <p className="text-sm text-[var(--text-secondary)] font-medium leading-relaxed line-clamp-2">
          {project.summary}
        </p>
      </div>

      {/* Stack — abbreviated */}
      <div className="flex flex-wrap gap-1.5">
        {project.stack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded text-xs font-semibold bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-secondary)]"
          >
            {tech}
          </span>
        ))}
        {project.stack.length > 4 && (
          <span className="px-2 py-0.5 rounded text-xs font-medium text-[var(--text-muted)]">
            +{project.stack.length - 4}
          </span>
        )}
      </div>

      {/* Links */}
      <div className="mt-auto flex items-center gap-3 pt-1">
        {projectLinks.length > 0 ? (
          <div className="flex flex-wrap items-center gap-3">
            {projectLinks.map((link) => {
              const LinkIcon = getProjectLinkIcon(link.label);

              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:underline"
                  aria-label={`View ${project.name} ${link.label}`}
                >
                  <LinkIcon size={12} aria-hidden="true" /> {link.label}
                </a>
              );
            })}
          </div>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] font-medium italic">
            <LockKeyhole size={12} aria-hidden="true" />
            {isConfidential ? "Confidential" : "Private"}
          </span>
        )}
        <span className="ml-auto">
          <ArrowRight
            size={13}
            className="text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 transition-all duration-200"
            aria-hidden="true"
          />
        </span>
      </div>
    </motion.article>
  );
}
