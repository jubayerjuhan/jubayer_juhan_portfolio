import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import BlogPostContent from "@/components/blog/BlogPostContent";
import PageShell from "@/components/layout/PageShell";
import { blogPosts, getBlogPost } from "@/data/blog";
import { personal } from "@/data/portfolio";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Article not found" };
  }

  return {
    title: `${post.title} | ${personal.name}`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${personal.website}/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <PageShell>
      <article className="section-padding">
        <div className="container-width max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-8"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            All articles
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)] mb-4">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={12} aria-hidden="true" />
              {post.readTimeMinutes} min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-10 pb-10 border-b border-[var(--border)]">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <BlogPostContent blocks={post.content} />
        </div>
      </article>
    </PageShell>
  );
}
