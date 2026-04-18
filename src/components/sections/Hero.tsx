"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Trophy } from "lucide-react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { hero, personal } from "@/data/portfolio";
import { fadeInUp, staggerContainer, fadeIn } from "@/lib/motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          opacity: 0.35,
        }}
        aria-hidden="true"
      />

      {/* Accent glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(99,102,241,0.1) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-width relative z-10 py-20 w-full">
        {/* Two-column layout: left accent line + main content */}
        <div className="flex gap-0 md:gap-8 lg:gap-12">

          {/* Left gutter — thin accent line only */}
          <div className="hidden md:flex flex-col justify-start pt-1 flex-shrink-0 w-[48px] lg:w-[64px]">
            {/* Vertical accent line */}
            <div className="w-px flex-1 bg-gradient-to-b from-[var(--accent)] via-[var(--border)] to-transparent max-h-48 mt-2" aria-hidden="true" />
          </div>

          {/* Main hero content — aligns with nav links */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex-1 min-w-0"
          >
            {/* Availability badge */}
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border)] text-xs font-medium text-[var(--text-secondary)]">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[var(--success)] animate-pulse"
                  aria-hidden="true"
                />
                {personal.availability}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-5"
            >
              <span className="text-[var(--text-primary)]">
                {personal.name.split(" ")[0]}{" "}
              </span>
              <span className="gradient-text">{personal.name.split(" ")[1]}</span>
            </motion.h1>

            {/* Role */}
            <motion.div variants={fadeInUp} className="mb-3">
              <p className="text-xl sm:text-2xl font-semibold text-[var(--text-secondary)]">
                {hero.headline}
              </p>
            </motion.div>

            {/* Sales pitch */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-[var(--text-secondary)] font-medium leading-relaxed mb-10 max-w-xl"
            >
              {hero.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 mb-14"
            >
              <a
                href={hero.primaryCTA.href}
                id="hero-cta-hire"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[var(--accent)] text-white font-semibold text-sm hover:bg-[var(--accent-hover)] transition-all duration-200 hover:shadow-[0_0_30px_var(--accent-glow)] hover:-translate-y-0.5"
              >
                {hero.primaryCTA.label}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href={hero.secondaryCTA.href}
                id="hero-cta-projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-[var(--border-hover)] text-[var(--text-primary)] font-semibold text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-subtle)] transition-all duration-200"
              >
                {hero.secondaryCTA.label}
              </a>
              {personal.resume && (
                <a
                  href={personal.resume}
                  download
                  id="hero-cta-resume"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-[var(--text-secondary)] font-medium text-sm hover:text-[var(--text-primary)] transition-colors duration-200"
                  aria-label="Download resume"
                >
                  <Download size={15} aria-hidden="true" />
                  Resume
                </a>
              )}
            </motion.div>

            {/* Proof points */}
            <motion.div
              variants={staggerContainer}
              className="flex flex-wrap gap-8 sm:gap-12 mb-14 pb-14 border-b border-[var(--border)]"
            >
              {hero.proofPoints.map((point) => (
                <motion.div key={point.label} variants={fadeInUp} className="flex flex-col gap-0.5">
                  <span className="text-2xl font-bold text-[var(--text-primary)]">
                    {point.value}
                  </span>
                  <span className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider">
                    {point.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Social links + NASA highlight */}
            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
            >
              <div className="flex items-center gap-2" aria-label="Social links">
                {personal.github && (
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <GithubIcon size={18} />
                  </a>
                )}
                {personal.linkedin && (
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                )}
                {personal.email && (
                  <a
                    href={`mailto:${personal.email}`}
                    className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-all duration-200"
                    aria-label="Email"
                  >
                    <Mail size={18} />
                  </a>
                )}
              </div>

              <div className="hidden sm:block w-px h-5 bg-[var(--border)]" aria-hidden="true" />

              {/* NASA award chip */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border)] text-xs text-[var(--text-secondary)]">
                <Trophy size={12} className="text-[var(--warning)]" aria-hidden="true" />
                NASA Space Apps — 1st Runner Up
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
