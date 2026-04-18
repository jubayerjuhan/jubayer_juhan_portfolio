"use client";

import { motion } from "framer-motion";
import { Briefcase, Globe, Cpu, Rocket } from "lucide-react";
import { about } from "@/data/portfolio";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/motion";

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  Globe,
  Cpu,
  Rocket,
};

export default function About() {
  return (
    <section
      id="about"
      className="section-padding border-t border-[var(--border)]"
      aria-label="About"
    >
      <div className="container-width">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left — text */}
          <div>
            <motion.p variants={fadeInUp} className="section-label mb-4">
              About
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-6 leading-tight"
            >
              A builder who
              <br />
              <span className="gradient-text">gives a damn.</span>
            </motion.h2>
            <motion.div variants={staggerContainer} className="flex flex-col gap-4">
              {about.paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  variants={fadeInUp}
                  className="text-[var(--text-secondary)] leading-relaxed text-[0.95rem]"
                >
                  {para}
                </motion.p>
              ))}
            </motion.div>
          </div>

          {/* Right — highlight cards */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {about.highlights.map((item) => {
              const Icon = iconMap[item.icon] ?? Briefcase;
              return (
                <motion.div
                  key={item.label}
                  variants={fadeInUp}
                  className="group p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(99,102,241,0.1)]"
                >
                  <div className="mb-3 w-9 h-9 rounded-lg bg-[var(--accent-subtle)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon
                      size={18}
                      className="text-[var(--accent)]"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-sm font-semibold text-[var(--text-primary)] leading-snug mb-1">
                    {item.label}
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">{item.sublabel}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
