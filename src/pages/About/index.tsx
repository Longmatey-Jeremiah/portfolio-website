import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/typography";

const principles = [
  {
    title: "Boring code is a senior skill",
    body: "I optimize for the next reader. Clever has a half-life — clarity compounds.",
  },
  {
    title: "Model the domain first",
    body: "I spend time on the nouns and verbs of a system before any pixels. Strong domain models make every later decision easier.",
  },
  {
    title: "Performance is a design constraint",
    body: "Latency budgets at design time prevent six-month rescue projects. I treat them like accessibility — a constraint, not an afterthought.",
  },
  {
    title: "Tradeoffs, written down",
    body: "Every architectural decision has a counterfactual. Capturing it changes how teams reason about the next decision.",
  },
];

const focus = [
  "Operator-grade interfaces — dense, fast, predictable",
  "Frontend systems for data-intensive products",
  "Architecture that scales across teams and quarters",
  "AI-assisted product engineering with grounded constraints",
];

export const About: React.FC = () => {
  return (
    <>
      <section className="container-page pt-16 pb-12 md:pt-24 md:pb-16">
        <Reveal>
          <Eyebrow className="mb-6">About</Eyebrow>
          <h1 className="font-serif max-w-4xl text-[2.75rem] leading-[1.02] tracking-[-0.025em] text-foreground md:text-[5.25rem]">
            I build the{" "}
            <em className="italic text-emphasis">frontend systems</em> that
            products live in.
          </h1>
          <p className="lead mt-8 max-w-2xl">
            Four years of shipping interfaces — from operator-grade dashboards
            to mobile apps for emerging markets — has shaped a specific way of
            working. This page is that, written down.
          </p>
        </Reveal>
      </section>

      <section className="section-pad-sm bg-secondary">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow className="mb-6">Journey</Eyebrow>
            </div>
            <div className="md:col-span-8">
              <Reveal>
                <div className="space-y-6 text-lg leading-[1.65] text-foreground">
                  <p>
                    I started building interfaces seriously in 2021 — small
                    projects at first, then production work for studios, then a
                    senior role on an operator-facing product where the data
                    model dwarfed the UI.
                  </p>
                  <p>
                    The transition that mattered most was from feature
                    engineering to <em>systems</em> engineering — from "ship
                    this view" to "model this domain so every future view is
                    cheaper."
                  </p>
                  <p>
                    Today I'm focused on building scalable frontend
                    architectures: state boundaries that hold, primitives that
                    compose, performance budgets that the team can hit on a
                    Tuesday afternoon.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad-sm">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow className="mb-6">Principles</Eyebrow>
              <h2 className="font-serif text-[1.875rem] leading-[1.05] text-foreground tracking-[-0.02em] md:text-[2.5rem]">
                How I work.
              </h2>
            </div>
            <div className="md:col-span-8">
              <ul className="space-y-px overflow-hidden rounded-2xl border border-border">
                {principles.map((p, i) => (
                  <Reveal key={p.title} delay={i * 0.04}>
                    <li className="bg-background p-7">
                      <p className="text-mono-eyebrow text-muted-foreground">
                        &mdash; 0{i + 1}
                      </p>
                      <h3 className="font-serif mt-3 text-[1.5rem] leading-tight tracking-[-0.015em] text-foreground md:text-[1.75rem]">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                        {p.body}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad-sm bg-secondary">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow className="mb-6">Current focus</Eyebrow>
              <h2 className="font-serif text-[1.875rem] leading-[1.05] text-foreground tracking-[-0.02em] md:text-[2.5rem]">
                Where my attention is.
              </h2>
            </div>
            <div className="md:col-span-8">
              <ul className="divide-y divide-border border-y border-border">
                {focus.map((f, i) => (
                  <Reveal key={f} delay={i * 0.03}>
                    <li className="flex items-start gap-4 py-5">
                      <span className="text-mono-eyebrow text-muted-foreground pt-1">
                        0{i + 1}
                      </span>
                      <span className="text-lg leading-relaxed text-foreground">
                        {f}
                      </span>
                    </li>
                  </Reveal>
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
              <Eyebrow className="mb-6">Long-term vision</Eyebrow>
            </div>
            <div className="md:col-span-8">
              <Reveal>
                <p className="font-serif text-[1.75rem] leading-[1.2] text-foreground tracking-[-0.015em] md:text-[2.5rem]">
                  Build product engineering teams where{" "}
                  <em className="italic text-emphasis">
                    architecture is shared vocabulary
                  </em>
                  , performance is a design constraint, and the interface is the
                  most considered part of the product — because the interface is
                  where the product happens.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <Link to="/projects" className="btn-primary-solid">
                    Selected work
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link to="/contact" className="btn-pill-outline">
                    Start a conversation
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
