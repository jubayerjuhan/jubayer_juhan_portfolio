"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Download, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { personal } from "@/data/portfolio";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const openMailtoFallback = () => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Jubayer,\n\n${form.message}\n\nFrom: ${form.name} <${form.email}>`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await res.json()) as { error?: string; success?: boolean };

      if (!res.ok) {
        if (res.status === 503) {
          openMailtoFallback();
          setStatus("sent");
          return;
        }
        throw new Error(data.error ?? "Failed to send message");
      }

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  const links = [
    {
      icon: Mail,
      label: "Email",
      href: `mailto:${personal.email}`,
      display: personal.email,
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      href: personal.linkedin,
      display: "linkedin.com/in/jubayerjuhan",
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      href: personal.github,
      display: "github.com/jubayerjuhan",
    },
  ];

  const resumeFileName =
    "resumeDownloadName" in personal && personal.resumeDownloadName
      ? personal.resumeDownloadName
      : "Jubayer_Juhan_Resume.pdf";

  return (
    <section
      id="contact"
      className="section-padding border-t border-[var(--border)]"
      aria-label="Contact"
    >
      <div className="container-width">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-14"
        >
          <div>
            <motion.p variants={fadeInUp} className="section-label mb-4">
              Contact
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3 leading-tight"
            >
              Your next engineer
              <br />
              <span className="gradient-text">is one message away.</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8 max-w-sm"
            >
              Founder, hiring manager, or engineering lead — if you need someone who ships, let&apos;s talk. I respond fast.
            </motion.p>

            <motion.ul
              variants={staggerContainer}
              className="flex flex-col gap-3 mb-8"
              role="list"
            >
              {links.map(({ icon: Icon, label, href, display }) => (
                <motion.li key={label} variants={fadeInUp}>
                  <a
                    href={href}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel={label !== "Email" ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                    aria-label={`${label}: ${display}`}
                  >
                    <span className="w-8 h-8 rounded-lg bg-[var(--bg-surface)] border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--accent)] group-hover:bg-[var(--accent-subtle)] transition-all duration-200 flex-shrink-0">
                      <Icon size={14} className="group-hover:text-[var(--accent)]" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-medium">{display}</span>
                    <ArrowRight
                      size={12}
                      className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 text-[var(--accent)]"
                      aria-hidden="true"
                    />
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            {personal.resume && (
              <motion.div variants={fadeInUp}>
                <a
                  href={personal.resume}
                  download={resumeFileName}
                  id="contact-resume-download"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--border-hover)] text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] hover:bg-[var(--accent-subtle)] transition-all duration-200"
                >
                  <Download size={13} aria-hidden="true" />
                  Download Resume (PDF)
                </a>
              </motion.div>
            )}
          </div>

          <motion.div variants={fadeInUp}>
            <form
              onSubmit={handleSubmit}
              id="contact-form"
              className="flex flex-col gap-4 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)]"
              aria-label="Contact form"
            >
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-name"
                  className="text-xs font-semibold text-[var(--text-secondary)]"
                >
                  Your name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Alex Chen"
                  className="px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-email"
                  className="text-xs font-semibold text-[var(--text-secondary)]"
                >
                  Work email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="alex@company.com"
                  className="px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-semibold text-[var(--text-secondary)]"
                >
                  What do you need built?
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the role or what you're building..."
                  className="px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200 resize-none"
                />
              </div>

              {status === "error" && errorMessage && (
                <p className="text-xs text-red-400" role="alert">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                id="contact-submit"
                disabled={status === "sending" || status === "sent"}
                className="mt-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[var(--accent)] text-white text-sm font-bold hover:bg-[var(--accent-hover)] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-[0_0_25px_var(--accent-glow)] hover:-translate-y-0.5"
              >
                {status === "sent" ? (
                  "✓ Message sent"
                ) : status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={14} aria-hidden="true" />
                    Send Message
                  </>
                )}
              </button>
              <p className="text-[11px] text-[var(--text-muted)] text-center">
                Or reach me at{" "}
                <a
                  href={`mailto:${personal.email}`}
                  className="text-[var(--accent)] hover:underline"
                >
                  {personal.email}
                </a>
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
