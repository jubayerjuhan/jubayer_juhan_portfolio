import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Globe2, LockKeyhole } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import { getCaseStudy } from "@/data/case-studies";
import { personal } from "@/data/portfolio";
import { getProjectById, projectHasCaseStudy } from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return ["goodhive-platform", "rentalease-platform", "my-instructor-app"].map(
    (slug) => ({ slug })
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectById(slug);
  const caseStudy = getCaseStudy(slug);

  if (!project || !caseStudy) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.name} — Case Study | ${personal.name}`,
    description: caseStudy.metaDescription,
    openGraph: {
      title: `${project.name} Case Study`,
      description: caseStudy.metaDescription,
      url: `${personal.website}/projects/${slug}`,
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectById(slug);
  const caseStudy = getCaseStudy(slug);

  if (!project || !caseStudy || !projectHasCaseStudy(slug)) {
    notFound();
  }

  const isConfidential = "confidential" in project && project.confidential;
  const liveUrl = project.links.live;

  return (
    <PageShell>
      <article className="section-padding border-b border-[var(--border)]">
        <div className="container-width max-w-3xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-8"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Back to projects
          </Link>

          <p className="section-label mb-3">Case study</p>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--bg-surface)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
              {project.category}
            </span>
            {isConfidential && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(99,102,241,0.28)] bg-[var(--accent-subtle)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                <LockKeyhole size={12} aria-hidden="true" />
                Confidential
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-2 leading-tight">
            {project.name}
          </h1>
          <p className="text-[var(--accent)] font-semibold text-sm mb-4">{project.tagline}</p>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-6">{caseStudy.overview}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[var(--border)] bg-[var(--bg-surface)] px-3 py-1.5 text-xs font-semibold text-[var(--text-secondary)]"
              >
                {tech}
              </span>
            ))}
          </div>

          <dl className="grid sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)] mb-10 text-sm">
            <div>
              <dt className="text-[var(--text-muted)] text-xs font-semibold uppercase tracking-wider mb-1">
                Role
              </dt>
              <dd className="font-medium text-[var(--text-primary)]">{project.role}</dd>
            </div>
            <div>
              <dt className="text-[var(--text-muted)] text-xs font-semibold uppercase tracking-wider mb-1">
                Problem focus
              </dt>
              <dd className="font-medium text-[var(--text-primary)]">{project.problem}</dd>
            </div>
          </dl>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mb-12 px-4 py-2.5 rounded-xl border border-[var(--border-hover)] text-sm font-semibold text-[var(--accent)] hover:bg-[var(--accent-subtle)] transition-colors"
            >
              <Globe2 size={14} aria-hidden="true" />
              View live product
              <ExternalLink size={12} aria-hidden="true" />
            </a>
          )}
        </div>
      </article>

      <div className="section-padding">
        <div className="container-width max-w-3xl flex flex-col gap-12">
          {caseStudy.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">{section.title}</h2>
              <div className="flex flex-col gap-4 text-[var(--text-secondary)] leading-relaxed">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-4 flex flex-col gap-2" role="list">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)] flex-shrink-0"
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)]">
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">Outcomes</h2>
            <ul className="flex flex-col gap-2" role="list">
              {caseStudy.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--success)] flex-shrink-0"
                    aria-hidden="true"
                  />
                  {outcome}
                </li>
              ))}
            </ul>
          </section>

          <div className="pt-4 border-t border-[var(--border)]">
            <p className="text-sm text-[var(--text-secondary)] mb-4">
              Interested in similar work? I&apos;d love to hear what you&apos;re building.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent)] text-white text-sm font-bold hover:bg-[var(--accent-hover)] transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
