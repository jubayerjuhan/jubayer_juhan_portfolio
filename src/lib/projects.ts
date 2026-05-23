import { projects } from "@/data/portfolio";
import { caseStudyProjectIds, getCaseStudy } from "@/data/case-studies";

export type Project = (typeof projects)[number];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectsWithCaseStudies(): Project[] {
  return projects.filter((p) => caseStudyProjectIds.includes(p.id));
}

export function projectHasCaseStudy(projectId: string): boolean {
  return Boolean(getCaseStudy(projectId));
}

export function getCaseStudyPath(projectId: string): string {
  return `/projects/${projectId}`;
}
