"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { fadeInUp, staggerContainer, staggerFast, scaleIn, viewportConfig } from "@/lib/motion";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

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
            Web3, AI, ecommerce, SaaS — shipped across multiple industries.
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
              className="grid md:grid-cols-2 gap-4 mb-4"
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

function FeaturedCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <motion.article
      variants={fadeInUp}
      className="group relative p-6 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(99,102,241,0.12)] flex flex-col gap-4"
      aria-label={`Featured project: ${project.name}`}
    >
      {/* Featured badge */}
      <div className="absolute top-4 right-4">
        <span className="px-2 py-0.5 rounded-full bg-[var(--accent-subtle)] text-[10px] font-semibold text-[var(--accent)] uppercase tracking-wider">
          Featured
        </span>
      </div>

      <div>
        <p className="text-[10px] font-mono text-[var(--text-muted)] mb-2 uppercase tracking-wider">
          {project.category}
        </p>
        <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1.5 leading-snug pr-16">
          {project.name}
        </h3>
        <p className="text-sm text-[var(--accent)] font-semibold mb-2">{project.tagline}</p>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          {project.summary}
        </p>
      </div>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded text-[10px] font-medium bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-muted)]"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-1">
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] hover:underline transition-colors"
            aria-label={`View ${project.name} live`}
          >
            <ExternalLink size={12} aria-hidden="true" /> Live site
          </a>
        )}
        {!project.links.live && !project.links.github && (
          <span className="text-xs text-[var(--text-muted)] italic">Confidential / Private</span>
        )}
      </div>
    </motion.article>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <motion.article
      variants={scaleIn}
      className="group p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] flex flex-col gap-3"
      aria-label={`Project: ${project.name}`}
    >
      <div>
        <p className="text-[10px] font-mono text-[var(--text-muted)] mb-1 uppercase tracking-wider">
          {project.category}
        </p>
        <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1 leading-snug">
          {project.name}
        </h3>
        <p className="text-xs text-[var(--accent)] font-semibold mb-2">{project.tagline}</p>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2">
          {project.summary}
        </p>
      </div>

      {/* Stack — abbreviated */}
      <div className="flex flex-wrap gap-1">
        {project.stack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-muted)]"
          >
            {tech}
          </span>
        ))}
        {project.stack.length > 4 && (
          <span className="px-1.5 py-0.5 rounded text-[10px] font-medium text-[var(--text-muted)]">
            +{project.stack.length - 4}
          </span>
        )}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 mt-auto pt-1">
        {project.links.live ? (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-[var(--accent)] hover:underline"
            aria-label={`View ${project.name} live`}
          >
            <ExternalLink size={11} aria-hidden="true" /> View
          </a>
        ) : (
          <span className="text-[11px] text-[var(--text-muted)] italic">Private</span>
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
