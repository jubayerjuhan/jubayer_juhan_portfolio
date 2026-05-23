import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import { blogPosts } from "@/data/blog";
import { personal, seo } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Blog | ${personal.name}`,
  description:
    "Technical articles on full-stack engineering, Web3 UX, remote startup shipping, and product development.",
  openGraph: {
    title: `Blog | ${personal.name}`,
    description: seo.description,
    url: `${personal.website}/blog`,
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <PageShell>
      <div className="section-padding border-b border-[var(--border)]">
        <div className="container-width max-w-3xl">
          <p className="section-label mb-3">Blog</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3 leading-tight">
            Writing & learnings
          </h1>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-xl">
            Deep dives on products I&apos;ve shipped — Web3, mobile, and full-stack ownership in lean teams.
          </p>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-width max-w-3xl flex flex-col gap-4">
          {sorted.map((post) => (
            <article
              key={post.slug}
              className="group p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-all duration-200"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)] mb-3">
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock size={12} aria-hidden="true" />
                  {post.readTimeMinutes} min read
                </span>
              </div>
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:underline"
              >
                Read article
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
