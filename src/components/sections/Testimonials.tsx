"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/motion";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding border-t border-[var(--border)]"
      aria-label="Testimonials"
    >
      <div className="container-width">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.p variants={fadeInUp} className="section-label mb-4">
            Testimonials
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-2 leading-tight"
          >
            Trusted by teams I&apos;ve shipped with
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[var(--text-secondary)] text-sm mb-10 max-w-md"
          >
            What collaborators say about working together.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-3"
          >
            {testimonials.map((item) => (
              <motion.blockquote
                key={item.id}
                variants={fadeInUp}
                className="relative flex flex-col p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)]"
                cite={item.company}
              >
                <Quote
                  size={20}
                  className="text-[var(--accent)] opacity-60 mb-4"
                  aria-hidden="true"
                />
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1 mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="border-t border-[var(--border)] pt-4">
                  <cite className="not-italic">
                    <p className="text-sm font-bold text-[var(--text-primary)]">{item.name}</p>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">
                      {item.role} · {item.company}
                    </p>
                  </cite>
                </footer>
              </motion.blockquote>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
