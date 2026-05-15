import React from "react";
import { SectionHeader } from "@/components/typography";
import { Reveal } from "@/components/motion/Reveal";

const tenets = [
  {
    title: "Clarity over cleverness",
    body: "The code that survives across teams and years is almost always the boring code. I write for the next reader — not for the demo.",
  },
  {
    title: "Performance is a feature",
    body: "Latency budgets at design time prevent performance from becoming a six-month rescue project later. Measure first, optimize what matters.",
  },
  {
    title: "Systems, not features",
    body: "I model the domain first. Features compose from a small set of well-shaped primitives, not page-shaped components glued together.",
  },
  {
    title: "Tradeoffs, written down",
    body: "Every architectural decision has a counterfactual. Capturing it changes how the team thinks about the next one — and the one after.",
  },
];

export const Philosophy: React.FC = () => {
  return (
    <section className="section-pad" id="about">
      <div className="container-page">
        <SectionHeader
          eyebrow="Engineering philosophy"
          title={
            <>
              A small set of decisions,
              <br className="hidden md:block" />{" "}
              <em className="italic">compounded carefully.</em>
            </>
          }
          description="Working principles I keep returning to — across product surfaces, team sizes, and stages."
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[14px] border border-border bg-border md:grid-cols-2">
          {tenets.map((tenet, i) => (
            <Reveal key={tenet.title} delay={i * 0.04}>
              <article className="flex h-full flex-col gap-3 bg-background p-9 transition-colors hover:bg-card md:p-11">
                <span className="inline-flex items-center gap-2 font-mono text-[11.5px] tracking-[0.16em] text-[var(--muted-2)]">
                  <span className="h-px w-3.5 bg-[var(--muted-2)]" />
                  {`0${i + 1}`}
                </span>
                <h3 className="font-serif mt-2 text-[clamp(1.5rem,2.4vw,1.875rem)] font-normal tracking-[-0.01em] text-foreground">
                  {tenet.title}
                </h3>
                <p className="max-w-[38ch] text-[15px] leading-relaxed text-muted-foreground">
                  {tenet.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
