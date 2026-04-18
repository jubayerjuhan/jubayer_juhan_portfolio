"use client";

import { motion } from "framer-motion";
import { Trophy, MapPin, Calendar } from "lucide-react";
import { awards } from "@/data/portfolio";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/motion";

export default function Awards() {
  return (
    <section
      id="awards"
      className="section-padding border-t border-[var(--border)]"
      aria-label="Awards and Recognition"
    >
      <div className="container-width">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.p variants={fadeInUp} className="section-label mb-4">
            Recognition
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-2 leading-tight"
          >
            Competed on a global stage.{" "}
            <span className="gradient-text">Won.</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[var(--text-secondary)] text-sm mb-10 max-w-md"
          >
            Not just building — but winning. Under pressure. Against the clock.
          </motion.p>

          {awards.map((award) => (
            <motion.article
              key={award.id}
              variants={fadeInUp}
              className="relative overflow-hidden rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)] p-7 md:p-10"
              aria-label={`${award.title} — ${award.event}`}
            >
              {/* Background accent */}
              <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(245,158,11,0.07) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-col md:flex-row gap-7 md:gap-12 items-start">
                {/* Trophy icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--warning)]/20 to-[var(--warning)]/5 border border-[var(--warning)]/20 flex items-center justify-center">
                    <Trophy size={24} className="text-[var(--warning)]" aria-hidden="true" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--warning)]/10 border border-[var(--warning)]/20 mb-4">
                    <Trophy size={11} className="text-[var(--warning)]" aria-hidden="true" />
                    <span className="text-xs font-bold text-[var(--warning)] uppercase tracking-wider">
                      {award.title}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-2">
                    {award.event}
                  </h3>

                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5 max-w-xl">
                    {award.description}
                  </p>

                  {/* Meta details — compact row */}
                  <div className="flex flex-wrap gap-4 sm:gap-6">
                    <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                      <MapPin size={12} className="text-[var(--accent)]" aria-hidden="true" />
                      <span>{award.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                      <Calendar size={12} className="text-[var(--accent)]" aria-hidden="true" />
                      <span>{award.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-secondary)]">{award.team}</span>
                    </div>
                  </div>
                </div>

                {/* NASA decorative label */}
                <div
                  className="hidden lg:flex flex-col items-end gap-1 text-right flex-shrink-0"
                  aria-hidden="true"
                >
                  <span className="font-mono text-5xl font-black text-[var(--border-hover)] select-none leading-none">
                    NASA
                  </span>
                  <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest">
                    Space Apps 2021
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
