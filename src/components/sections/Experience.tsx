"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { experience } from "@/data/portfolio";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding border-t border-[var(--border)]"
      aria-label="Work Experience"
    >
      <div className="container-width">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.p variants={fadeInUp} className="section-label mb-4">
            Experience
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-2 leading-tight"
          >
            3+ years. All remote. Always shipping.
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[var(--text-secondary)] text-sm mb-12 max-w-lg"
          >
            Every role, every product — owned end-to-end.
          </motion.p>

          {/* Timeline */}
          <div className="relative">
            <div
              className="absolute left-0 md:left-[160px] top-0 bottom-0 w-px bg-[var(--border)]"
              aria-hidden="true"
            />

            <motion.div variants={staggerContainer} className="flex flex-col gap-0">
              {experience.map((job, index) => (
                <motion.article
                  key={job.id}
                  variants={fadeInUp}
                  className="relative flex flex-col md:flex-row gap-6 md:gap-10 pb-12 last:pb-0"
                >
                  {/* Period — left column */}
                  <div className="md:w-[160px] md:flex-shrink-0 flex md:flex-col md:items-end gap-3 md:gap-0 pl-6 md:pl-0 md:pr-8 md:pt-1">
                    <div
                      className="absolute left-[-4px] md:left-[157px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--accent)] border-2 border-[var(--bg-base)]"
                      aria-hidden="true"
                    />
                    <div className="flex flex-col md:items-end gap-0.5">
                      <span className="text-xs font-mono text-[var(--accent)] font-medium">
                        {job.period}
                      </span>
                      <span className="text-xs text-[var(--text-muted)]">
                        {job.duration}
                      </span>
                    </div>
                    {index === 0 && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[var(--accent-subtle)] text-[10px] font-semibold text-[var(--accent)] uppercase tracking-wider whitespace-nowrap">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pl-6 md:pl-0">
                    <div className="mb-2">
                      <p className="text-base font-bold text-[var(--text-primary)]">
                        {job.role}
                      </p>
                      {job.companyUrl ? (
                        <a
                          href={job.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[var(--text-secondary)] font-medium hover:text-[var(--accent)] transition-colors duration-200 inline-flex items-center gap-1 mt-0.5"
                        >
                          {job.company}
                          <ExternalLink size={11} aria-hidden="true" />
                        </a>
                      ) : (
                        <span className="text-sm text-[var(--text-secondary)] font-medium mt-0.5 block">
                          {job.company}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] font-medium leading-relaxed mb-4">
                      {job.description}
                    </p>

                    {/* Highlights — compact */}
                    <ul className="flex flex-col gap-2 mb-4" role="list">
                      {job.highlights.map((hl) => (
                        <li
                          key={hl}
                          className="flex items-center gap-2 text-sm text-[var(--text-secondary)] font-medium"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" aria-hidden="true" />
                          {hl}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          role="listitem"
                          className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-secondary)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
