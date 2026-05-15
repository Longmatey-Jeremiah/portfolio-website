import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/typography";
import { Reveal } from "@/components/motion/Reveal";

interface Role {
  company: string;
  position: string;
  period: string;
  summary: string;
}

const roles: Role[] = [
  {
    company: "Papermap",
    position: "Frontend Engineer",
    period: "2024 — Present",
    summary:
      "Lead frontend on operator-grade inventory and AI data tooling. Architecture, performance, design system.",
  },
  {
    company: "Acacia Health",
    position: "Mobile Engineer",
    period: "2023 — 2024",
    summary:
      "Built an offline-first cross-platform insurance app for emerging markets. Replay queues, OTA updates.",
  },
  {
    company: "Symliq Developers",
    position: "Frontend Engineer",
    period: "2022 — 2023",
    summary:
      "Studio engineering — performance-first marketing surfaces, restrained motion, tight budgets.",
  },
];

export const ExperienceSnapshot: React.FC = () => {
  return (
    <section className="section-pad" id="resume">
      <div className="container-page">
        <SectionHeader
          eyebrow="Experience"
          title={
            <>
              A short <em className="italic">trajectory.</em>
            </>
          }
          description="Four years across SaaS, healthtech, and studio work — with a throughline in product-minded engineering."
        />

        <ol className="overflow-hidden rounded-[14px] border border-border bg-card">
          {roles.map((role, i) => (
            <Reveal key={role.company} delay={i * 0.04}>
              <li
                className={`grid grid-cols-1 gap-4 p-7 transition-colors hover:bg-[var(--surface-card)] md:grid-cols-[200px_1fr_1.2fr_28px] md:items-start md:gap-8 md:p-10 ${
                  i > 0 ? "border-t border-border" : ""
                }`}
              >
                <div className="pt-1.5 font-mono text-[12.5px] tracking-wide text-muted-foreground">
                  {i === 0 && (
                    <span className="text-[var(--ok)]">&#9679;&nbsp;</span>
                  )}
                  {role.period}
                </div>
                <div>
                  <h3 className="font-serif text-[26px] font-normal tracking-[-0.01em] text-foreground">
                    {role.company}
                  </h3>
                  <p className="mt-1.5 font-mono text-[13.5px] text-muted-foreground">
                    {role.position}
                  </p>
                </div>
                <p className="max-w-[48ch] text-[14.5px] leading-relaxed text-muted-foreground">
                  {role.summary}
                </p>
                <ArrowUpRight className="hidden h-4 w-4 pt-1.5 text-[var(--muted-2)] md:block" />
              </li>
            </Reveal>
          ))}
        </ol>

        <div className="mt-8 flex justify-end">
          <Link to="/resume" className="btn-pill-outline">
            Full resume
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
