"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/data/portfolio";
import { fadeInUp, staggerContainer, staggerFast, viewportConfig, scaleIn } from "@/lib/motion";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? skills.filter((s) => s.category === activeCategory)
    : skills;

  return (
    <section
      id="skills"
      className="section-padding border-t border-[var(--border)]"
      aria-label="Skills and Technologies"
    >
      <div className="container-width">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.p variants={fadeInUp} className="section-label mb-4">
            Stack
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-2 leading-tight"
          >
            Full stack. No gaps.
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[var(--text-secondary)] text-sm mb-10 max-w-md"
          >
            Frontend, backend, cloud, blockchain, AI — I cover the whole product.
          </motion.p>

          {/* Category filter pills */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-2 mb-8"
            role="group"
            aria-label="Filter skills by category"
          >
            <button
              id="skills-filter-all"
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === null
                  ? "bg-[var(--accent)] text-white"
                  : "bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]"
              }`}
              type="button"
              aria-pressed={activeCategory === null ? "true" : "false"}
            >
              All
            </button>
            {skills.map((s) => (
              <button
                key={s.category}
                id={`skills-filter-${s.category.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                type="button"
                onClick={() =>
                  setActiveCategory(
                    activeCategory === s.category ? null : s.category
                  )
                }
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeCategory === s.category
                    ? "bg-[var(--accent)] text-white"
                    : "bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]"
                }`}
                aria-pressed={activeCategory === s.category ? "true" : "false"}
              >
                {s.category}
              </button>
            ))}
          </motion.div>

          {/* Skills grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory ?? "all"}
              variants={staggerFast}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
            >
              {filtered.map((group) => (
                <motion.div
                  key={group.category}
                  variants={scaleIn}
                  className="p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(99,102,241,0.1)]"
                >
                  <h3 className="text-[10px] font-mono font-bold text-[var(--accent)] uppercase tracking-widest mb-4">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-colors duration-150 cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
