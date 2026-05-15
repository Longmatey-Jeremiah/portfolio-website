import React from "react";
import { ArrowUpRight, Download } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/typography";
import { site } from "@/lib/site";

interface Role {
  company: string;
  position: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
}

const experience: Role[] = [
  {
    company: "Papermap",
    position: "Frontend Engineer",
    period: "2024 — Present",
    location: "Remote",
    summary:
      "Lead frontend on operator-grade inventory and AI data tooling — architecture, performance, and design system.",
    highlights: [
      "Architected the inventory frontend around three primitives — SKU, location, supplier — collapsing the codebase footprint by ~40% versus the prototype.",
      "Defined and met a sub-200ms p75 navigation budget across the dense table-heavy product.",
      "Built the streaming AI chat surface with token-level rendering and inline citations grounded to source queries.",
    ],
  },
  {
    company: "Acacia Health",
    position: "Mobile Engineer",
    period: "2023 — 2024",
    location: "Remote",
    summary:
      "Built an offline-first cross-platform health insurance app for emerging-market users on intermittent connectivity.",
    highlights: [
      "Designed a replay-queue mutation system that survived flaky networks without losing user intent.",
      "Held crash-free sessions over 99.6% across a wide device matrix.",
      "Shipped OTA updates via Expo to reach users faster than store-update cycles.",
    ],
  },
  {
    company: "Symliq Developers",
    position: "Frontend Engineer",
    period: "2022 — 2023",
    location: "Accra, Ghana",
    summary:
      "Studio engineering — performance-first marketing surfaces, restrained motion, tight content pipelines.",
    highlights: [
      "Hit sub-1s LCP across studio builds on 4G.",
      "Pushed sub-40kb JS budgets on content-only routes.",
      "Built reusable section primitives that cut new-page time from days to hours.",
    ],
  },
];

const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
    ],
  },
  {
    group: "State & Data",
    items: ["TanStack Query", "Zustand", "Redux Toolkit", "React Hook Form"],
  },
  {
    group: "Backend / Infra",
    items: ["Node.js", "REST/RPC APIs", "Postgres", "Edge Functions"],
  },
  {
    group: "Tooling",
    items: ["Vite", "ESLint", "TypeScript ergonomics", "Playwright", "Git"],
  },
];

const strengths = [
  "Frontend systems & component architecture",
  "State boundaries in data-intensive products",
  "Performance budgets & measurement",
  "Design systems & motion language",
  "Operator-grade interfaces (tables, dense UIs)",
  "AI-assisted product engineering",
];

const certifications = [
  "Meta Front-End Developer (Coursera)",
  "Advanced React Performance (egghead)",
];

export const Resume: React.FC = () => {
  return (
    <>
      <section className="container-page pt-16 pb-12 md:pt-24 md:pb-16">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow className="mb-6">Resume</Eyebrow>
              <h1 className="font-serif max-w-3xl text-[2.75rem] leading-[1.02] tracking-[-0.025em] text-foreground md:text-[5.25rem]">
                {site.name}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {site.role} &middot; {site.location} &middot; {site.timezone}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={site.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-solid"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
              <a
                href={`mailto:${site.email}`}
                className="btn-pill-outline font-mono"
              >
                {site.email}
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-pad-sm">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow className="mb-6">Experience</Eyebrow>
            </div>
            <div className="md:col-span-8">
              <ol className="space-y-px overflow-hidden rounded-2xl border border-border">
                {experience.map((role, i) => (
                  <Reveal key={role.company} delay={i * 0.04}>
                    <li className="bg-background p-7 md:p-9">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="font-serif text-[1.625rem] leading-tight tracking-[-0.015em] text-foreground md:text-[2rem]">
                          {role.company}
                        </h3>
                        <span className="font-mono text-xs text-muted-foreground">
                          {role.period}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {role.position}
                        {role.location ? ` · ${role.location}` : ""}
                      </p>
                      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        {role.summary}
                      </p>
                      <ul className="mt-4 space-y-2.5">
                        {role.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2.5 text-sm text-foreground"
                          >
                            <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-foreground" />
                            <span className="leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad-sm bg-secondary">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow className="mb-6">Architecture strengths</Eyebrow>
            </div>
            <div className="md:col-span-8">
              <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border sm:grid-cols-2">
                {strengths.map((s) => (
                  <li
                    key={s}
                    className="bg-background p-5 text-sm text-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad-sm">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow className="mb-6">Skills</Eyebrow>
            </div>
            <div className="md:col-span-8">
              <dl className="space-y-6">
                {skills.map((g) => (
                  <div
                    key={g.group}
                    className="grid grid-cols-1 gap-3 border-b border-border pb-6 last:border-b-0 sm:grid-cols-4"
                  >
                    <dt className="text-mono-eyebrow text-muted-foreground sm:col-span-1">
                      {g.group}
                    </dt>
                    <dd className="flex flex-wrap gap-1.5 sm:col-span-3">
                      {g.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section-pad-sm bg-secondary">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow className="mb-6">Certifications</Eyebrow>
            </div>
            <div className="md:col-span-8">
              <ul className="divide-y divide-border border-y border-border">
                {certifications.map((c) => (
                  <li
                    key={c}
                    className="flex items-center justify-between py-4 text-sm text-foreground"
                  >
                    <span>{c}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};
