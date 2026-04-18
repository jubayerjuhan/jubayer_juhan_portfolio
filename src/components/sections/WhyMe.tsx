"use client";

import { motion } from "framer-motion";
import { Layers, Zap, Brain, Globe, Code2, Target } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { values } from "@/data/portfolio";
import { fadeInUp, staggerContainer, staggerFast, scaleIn, viewportConfig } from "@/lib/motion";

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Zap,
  Brain,
  Globe,
  Code2,
  Target,
};

export default function WhyMe() {
  return (
    <section
      id="why-me"
      className="section-padding border-t border-[var(--border)]"
      aria-label="Why hire me"
    >
      <div className="container-width">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.p variants={fadeInUp} className="section-label mb-4">
            Value
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-2 leading-tight"
          >
            Why me over the next engineer?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[var(--text-secondary)] text-sm mb-10 max-w-md"
          >
            Skills are table stakes. Here&apos;s what actually matters.
          </motion.p>

          <motion.div
            variants={staggerFast}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {values.map((item) => {
              const Icon = iconMap[item.icon] ?? Layers;
              return (
                <motion.div
                  key={item.title}
                  variants={scaleIn}
                  className="group p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(99,102,241,0.1)]"
                >
                  <div className="mb-3 w-9 h-9 rounded-xl bg-[var(--accent-subtle)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon
                      size={18}
                      className="text-[var(--accent)]"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom CTA banner */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[var(--accent-subtle)] to-[var(--bg-surface)] border border-[var(--accent)]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
          >
            <div>
              <p className="text-base font-bold text-[var(--text-primary)] mb-1">
                One engineer. Full product. No excuses.
              </p>
              <p className="text-sm text-[var(--text-secondary)]">
                Open to remote roles — startups, product teams, and founding engineer positions.
              </p>
            </div>
            <a
              href="#contact"
              id="whyme-cta"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] text-white font-semibold text-sm hover:bg-[var(--accent-hover)] transition-all duration-200 hover:shadow-[0_0_25px_var(--accent-glow)] hover:-translate-y-0.5"
            >
              Let&apos;s talk
              <ArrowRight size={14} aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
