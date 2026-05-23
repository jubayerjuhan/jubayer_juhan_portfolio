"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { getLatestPosts } from "@/data/blog";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/motion";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPreview() {
  const posts = getLatestPosts(3);

  return (
    <section
      id="blog"
      className="section-padding border-t border-[var(--border)]"
      aria-label="Blog"
    >
      <div className="container-width">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.p variants={fadeInUp} className="section-label mb-4">
            Blog
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-2 leading-tight"
          >
            Thoughts from the trenches
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[var(--text-secondary)] text-sm mb-10 max-w-md"
          >
            Technical writing on shipping products — Web3, mobile, and startup engineering.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-3 mb-8"
          >
            {posts.map((post) => (
              <motion.article
                key={post.slug}
                variants={fadeInUp}
                className="group flex flex-col p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-all duration-200"
              >
                <div className="flex items-center gap-2 text-[11px] text-[var(--text-muted)] mb-3">
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={11} aria-hidden="true" />
                    {post.readTimeMinutes}m
                  </span>
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-2 leading-snug group-hover:text-[var(--accent)] transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3 mb-4 flex-1">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent)] mt-auto"
                >
                  Read
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </Link>
              </motion.article>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--border-hover)] text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] hover:bg-[var(--accent-subtle)] transition-all duration-200"
            >
              View all articles
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
