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
      <div className="container-width relative z-10 py-20 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-5 text-[var(--text-primary)]"
            >
              {personal.name}
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
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[var(--accent)] text-white font-semibold text-sm hover:bg-[var(--accent-hover)] transition-all duration-200 hover:-translate-y-0.5"
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
                  download={
                    "resumeDownloadName" in personal && personal.resumeDownloadName
                      ? personal.resumeDownloadName
                      : "Jubayer_Juhan_Resume.pdf"
                  }
                  id="hero-cta-resume"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-[var(--text-secondary)] font-medium text-sm hover:text-[var(--text-primary)] transition-colors duration-200"
                  aria-label="Download resume PDF"
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
                  <span className="inline-flex items-center gap-2 text-2xl font-bold text-[var(--text-primary)]">
                    {point.icon === "Trophy" && (
                      <Trophy size={20} className="text-[var(--warning)]" aria-hidden="true" />
                    )}
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
                NASA Space Apps 2021 — Runner-up, Chattogram regional
              </div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
