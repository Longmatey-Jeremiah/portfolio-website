export type ProjectCategory =
  | "frontend-systems"
  | "fullstack"
  | "dashboards"
  | "architecture"
  | "experimental";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectStackItem {
  group: "Frontend" | "Backend" | "Infra" | "Data" | "Tooling";
  items: string[];
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  year: string;
  role: string;
  category: ProjectCategory;
  status: "live" | "in-development" | "archived";
  featured: boolean;
  cover: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
  /** Long-form sections — used by detail page. */
  problem: string[];
  approach: string[];
  decisions: { title: string; body: string }[];
  tradeoffs: string[];
  outcomes: string[];
  metrics: ProjectMetric[];
  stack: ProjectStackItem[];
}
