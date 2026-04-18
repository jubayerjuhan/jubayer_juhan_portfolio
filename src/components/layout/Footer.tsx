"use client";

import { Mail, ArrowUp, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { personal } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer
      className="border-t border-(--border) bg-background"
      role="contentinfo"
    >
      <div className="container-width py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand + availability */}
        <div className="flex flex-col items-center md:items-start gap-1.5">
          <span className="font-mono text-sm font-bold text-foreground">
            <span className="text-(--accent)">{"<"}</span>
            jubayer
            <span className="text-(--accent)">{"/>"}</span>
          </span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] animate-pulse" aria-hidden="true" />
            <p className="text-xs text-(--text-muted)">
              Available for remote roles — let&apos;s build something.
            </p>
          </div>
        </div>

        {/* CTA + socials group */}
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${personal.email}`}
            id="footer-hire-cta"
            className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--accent)] text-white text-xs font-bold hover:bg-[var(--accent-hover)] transition-all duration-200 hover:shadow-[0_0_20px_var(--accent-glow)]"
          >
            Hire me
            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true" />
          </a>

          <div className="flex items-center gap-1" aria-label="Social links">
            {personal.github && (
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-(--text-muted) hover:text-foreground hover:bg-(--bg-surface) transition-all duration-200"
                aria-label="GitHub profile"
              >
                <GithubIcon size={16} />
              </a>
            )}
            {personal.linkedin && (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-(--text-muted) hover:text-foreground hover:bg-(--bg-surface) transition-all duration-200"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon size={16} />
              </a>
            )}
            {personal.email && (
              <a
                href={`mailto:${personal.email}`}
                className="p-2 rounded-lg text-(--text-muted) hover:text-foreground hover:bg-(--bg-surface) transition-all duration-200"
                aria-label="Send email"
              >
                <Mail size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Back to top */}
        <button
          type="button"
          id="footer-back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-1.5 text-xs text-(--text-muted) hover:text-(--accent) transition-colors duration-200"
          aria-label="Back to top"
        >
          <ArrowUp size={13} />
          Top
        </button>
      </div>

      <div className="border-t border-(--border)">
        <div className="container-width py-3 text-center">
          <p className="text-[11px] text-(--text-muted)">
            © {new Date().getFullYear()} {personal.name} · Full-Stack Product Engineer
          </p>
        </div>
      </div>
    </footer>
  );
}
