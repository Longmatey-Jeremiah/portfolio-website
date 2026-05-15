import React from "react";
import {
  Layers,
  Activity,
  Workflow,
  Cpu,
  Palette,
  Database,
  GitBranch,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/typography";
import { Reveal } from "@/components/motion/Reveal";

interface Discipline {
  icon: LucideIcon;
  title: string;
  body: string;
  surface: string[];
}

const disciplines: Discipline[] = [
  {
    icon: Layers,
    title: "Frontend systems",
    body:
      "Component architecture, design tokens, and shared primitives that make a product feel like a single instrument.",
    surface: ["React", "TypeScript", "Tailwind", "shadcn/ui"],
  },
  {
    icon: Workflow,
    title: "Architecture",
    body:
      "State boundaries, data flow, and module decomposition for codebases that need to outlive their first quarter.",
    surface: ["State design", "Domain modeling", "Module boundaries"],
  },
  {
    icon: Activity,
    title: "Performance engineering",
    body:
      "Latency budgets, hydration strategy, profiling, and measurable improvements — not vibes.",
    surface: ["Web Vitals", "Profiling", "Bundle analysis"],
  },
  {
    icon: Cpu,
    title: "Fullstack foundations",
    body:
      "Comfortable with the layers under the UI — APIs, auth, edge runtimes, and the contracts between them.",
    surface: ["Node.js", "REST/RPC", "Edge functions"],
  },
  {
    icon: Palette,
    title: "Design systems",
    body:
      "Tokens, primitives, and motion language that scale across surfaces while staying disciplined.",
    surface: ["Tokens", "Primitives", "Motion language"],
  },
  {
    icon: GitBranch,
    title: "Developer experience",
    body:
      "Tooling, conventions, and review patterns that make the team faster six months in, not just on day one.",
    surface: ["Tooling", "Type ergonomics", "Review patterns"],
  },
  {
    icon: Database,
    title: "Data visualization",
    body:
      "Tables, charts, and dense interfaces tuned for operators who live in the product.",
    surface: ["Tables", "Charts", "Dense UIs"],
  },
  {
    icon: Sparkles,
    title: "AI-assisted engineering",
    body:
      "Practical application of LLM tooling for shipping — codegen, search, content, with grounded constraints.",
    surface: ["LLM workflows", "Streaming UIs", "Citations"],
  },
];

export const Expertise: React.FC = () => {
  return (
    <section className="section-pad" id="expertise">
      <div className="container-page">
        <SectionHeader
          eyebrow="Technical expertise"
          title={
            <>
              Eight surfaces
              <br className="hidden md:block" /> I work{" "}
              <em className="italic">across.</em>
            </>
          }
          description="Not a skill list — the disciplines I bring into product engineering, each with surface area worth a conversation."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {disciplines.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.03}>
              <article className="flex h-full min-h-[320px] flex-col gap-3 rounded-[14px] border border-border bg-card p-6 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-foreground">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-[var(--bg-elev)] text-foreground">
                  <d.icon className="h-[18px] w-[18px]" aria-hidden />
                </span>
                <h3 className="font-serif mt-1 text-[22px] font-normal tracking-[-0.01em] text-foreground">
                  {d.title}
                </h3>
                <p className="flex-1 text-[13.5px] leading-relaxed text-muted-foreground">
                  {d.body}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {d.surface.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
