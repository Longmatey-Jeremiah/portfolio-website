import React from "react";
import { Download } from "lucide-react";
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

const summary = [
  "Frontend Engineer with 4+ years designing and scaling complex, data-intensive web applications using React, TypeScript, and modern web technologies. Proven track record of leading frontend architecture, building extensible systems, and optimizing performance in enterprise and regulated environments.",
  "Strong in maintainable design systems, frontend performance, and cross-functional collaboration with backend and product teams. Expanding into fullstack development with hands-on experience in API design, system architecture, and scalable application development.",
];

const experience: Role[] = [
  {
    company: "Papermap.AI",
    position: "Frontend Engineer",
    period: "Jul 2024 — Present",
    location: "Remote · New York, USA",
    summary:
      "Lead frontend on an enterprise inventory and risk management platform — scalable, modular systems for governance and audit workflows.",
    highlights: [
      "Led frontend architecture for an enterprise inventory and risk management platform, building modular systems that support complex governance and audit workflows.",
      "Redesigned data-intensive interfaces, reducing user navigation time by ~25% and improving audit traceability across compliance flows.",
      "Translated risk and compliance metrics into intuitive, data-driven UI components and optimized form flows — measurable usability gains and lower user friction.",
      "Designed and implemented a scalable plugin-based architecture enabling extensibility across multiple client applications, cutting feature duplication and accelerating feature delivery by ~40%.",
      "Established frontend standards through code reviews, documentation, and mentorship — measurable lift in code quality and team consistency.",
      "Accelerated development cycles by ~30% by integrating AI-assisted tooling for repetitive implementation work.",
    ],
  },
  // {
  //   company: "Jackson Educational Complex",
  //   position: "Frontend Engineer (Contract)",
  //   period: "Aug 2023 — Present",
  //   location: "Remote · Ghana",
  //   summary:
  //     "Lead a small team building a scalable student portal — design system, CI/CD, and backend integration.",
  //   highlights: [
  //     "Led a team of 3 engineers to design and deliver a scalable student portal, improving access to academic and administrative data.",
  //     "Designed and maintained a reusable design system on React + Chakra UI for consistency and accessibility across the platform.",
  //     "Implemented CI/CD pipelines with GitHub Actions and Docker — reduced deployment friction and improved release reliability.",
  //     "Collaborated on backend data structures and performance optimizations to support scalable data retrieval.",
  //     "Improved development efficiency by ~20% through structured code reviews and cross-functional collaboration.",
  //   ],
  // },
  {
    company: "Symliq Developers",
    position: "Frontend Engineer (Part-Time)",
    period: "Apr 2023 — Present",
    location: "Remote · Accra, Ghana",
    summary:
      "Build and optimize secure, data-driven products — insurance, financial, and Shopify storefronts.",
    highlights: [
      "Built and optimized a secure, data-driven insurance platform on React + TypeScript, handling sensitive risk and audit data.",
      "Partnered with cross-functional teams to deliver a financial application with complex auditing and reporting features.",
      "Developed modular component libraries with Storybook — improved UI consistency and shipping speed.",
      "Optimized Shopify storefront performance, reducing load times by ~20%.",
      "Integrated third-party services and plugins while preserving performance budgets.",
    ],
  },
  {
    company: "Carefusion Ltd",
    position: "Frontend Engineer Intern",
    period: "Jul 2024 — Jan 2025",
    location: "Remote · Accra, Ghana",
    summary:
      "Built internal dashboards for audit logs and governance metrics in a regulated environment.",
    highlights: [
      "Developed internal dashboards visualizing audit logs and governance metrics — measurable lift in operational visibility.",
      "Built reusable UI components aligned with accessibility and design standards.",
      "Contributed to agile delivery cycles, shipping production-ready features in a collaborative engineering environment.",
    ],
  },
  {
    company: "Freelance / Contract",
    position: "Software Developer",
    period: "Mar 2020 — Jan 2022",
    location: "Remote · Accra, Ghana",
    summary:
      "Vendor, healthcare, and cross-platform mobile work — translating complex workflows into intuitive experiences.",
    highlights: [
      "Designed and built vendor and healthcare platforms, translating complex workflows into intuitive user experiences.",
      "Delivered a cross-platform mobile application using React Native and Django, supporting secure transaction flows.",
      "Improved client conversion rates by optimizing user flows and application performance.",
    ],
  },
];

const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend Core",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "API Integration",
      "Component-driven architecture",
      "Context API",
      "Redux Toolkit",
      "Zustand",
      "React Testing Library",
      "Performance optimization",
    ],
  },
  {
    group: "Architecture & UI",
    items: [
      "Design Systems",
      "Storybook",
      "Accessibility",
      "Tailwind CSS",
      "Chakra UI",
      "shadcn/ui",
      "SASS / SCSS",
    ],
  },
  {
    group: "DevOps & Tooling",
    items: ["Docker", "CI/CD", "GitHub Actions", "Git", "Webpack", "Bash"],
  },
  {
    group: "Backend & Mobile",
    items: ["Node.js", "React Native", "Flutter", "MySQL", "PHP", "Laravel"],
  },
];

const strengths = [
  "Frontend architecture for data-intensive products",
  "Plugin-based extensibility & modular system design",
  "Performance budgets & measurement",
  "Design systems & accessible component libraries",
  "Operator-grade interfaces (tables, dense UIs)",
  "AI-assisted product engineering",
];

const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "Kwame Nkrumah University of Science and Technology (KNUST)",
  location: "Kumasi, Ghana",
};

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
              <Eyebrow className="mb-6">Summary</Eyebrow>
            </div>
            <div className="md:col-span-8 space-y-5">
              {summary.map((p) => (
                <p
                  key={p}
                  className="text-base leading-relaxed text-foreground md:text-lg"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
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

      <section className="section-pad-sm bg-secondary">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow className="mb-6">Education</Eyebrow>
            </div>
            <div className="md:col-span-8">
              <div className="rounded-2xl border border-border bg-background p-7 md:p-9">
                <h3 className="font-serif text-[1.5rem] leading-tight tracking-[-0.015em] text-foreground md:text-[1.875rem]">
                  {education.degree}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {education.school} &middot; {education.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
