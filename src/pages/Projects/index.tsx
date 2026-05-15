import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/typography";
import { projects, projectCategoryLabels } from "@/content/projects/data";
import { cn } from "@/lib/utils";

const categoryOrder = [
  "all",
  "frontend-systems",
  "fullstack",
  "dashboards",
  "architecture",
  "experimental",
] as const;

export const Projects: React.FC = () => {
  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <>
      <section className="container-page pt-16 pb-12 md:pt-24 md:pb-16">
        <Reveal>
          <Eyebrow className="mb-6">Projects</Eyebrow>
          <h1 className="font-serif max-w-4xl text-[2.75rem] leading-[1.02] tracking-[-0.025em] text-foreground md:text-[5.25rem]">
            Case studies in shipping{" "}
            <em className="italic text-emphasis">software that holds up</em>.
          </h1>
          <p className="lead mt-8 max-w-2xl">
            A working set of projects with the architectural decisions,
            tradeoffs, and outcomes documented. Each one is a system, not a
            screenshot.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center gap-2">
            {categoryOrder.map((cat) => {
              const isActive = active === cat;
              const count =
                cat === "all"
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length;
              if (cat !== "all" && count === 0) return null;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-lg border px-3.5 py-1.5 text-[13px] font-medium transition-colors",
                    isActive
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border text-muted-foreground hover:border-foreground/20 hover:text-foreground",
                  )}
                >
                  {projectCategoryLabels[cat]}
                  <span
                    className={cn(
                      "font-mono text-[10px]",
                      isActive
                        ? "text-accent-foreground/70"
                        : "text-muted-foreground",
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>
      </section>

      <section className="section-pad-sm">
        <div className="container-page">
          {filtered.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No projects in this category yet.
            </p>
          ) : (
            <div className="space-y-px">
              {filtered.map((project, i) => (
                <Reveal key={project.slug} delay={i * 0.05}>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="group grid grid-cols-1 gap-6 border-t border-border py-10 transition-colors hover:bg-accent/40 md:grid-cols-12 md:py-12 px-4"
                  >
                    <div className="md:col-span-1">
                      <span className="text-mono-eyebrow text-muted-foreground">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="md:col-span-7">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[11px] text-muted-foreground">
                          {project.year}
                        </span>
                        <span className="text-muted-foreground">&middot;</span>
                        <span className="font-mono text-[11px] text-muted-foreground">
                          {projectCategoryLabels[project.category]}
                        </span>
                        {project.status === "live" && (
                          <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-foreground">
                            Live
                          </span>
                        )}
                      </div>
                      <h2 className="font-serif text-[2.25rem] leading-tight tracking-[-0.02em] text-foreground transition-colors group-hover:text-foreground/80 md:text-[3rem]">
                        {project.title}
                      </h2>
                      <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                        {project.tagline}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {project.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <dl className="space-y-3">
                        {project.metrics.slice(0, 2).map((m) => (
                          <div key={m.label}>
                            <dt className="text-mono-eyebrow text-muted-foreground">
                              {m.label}
                            </dt>
                            <dd className="font-serif text-[1.75rem] leading-none tracking-[-0.02em] text-foreground md:text-[2rem]">
                              {m.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                    <div className="flex items-start justify-end md:col-span-1">
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                    </div>
                  </Link>
                </Reveal>
              ))}
              <div className="border-t border-border" />
            </div>
          )}
        </div>
      </section>

      {/* <section className="section-pad-sm bg-secondary">
        <div className="container-page">
          <Reveal>
            <div className="surface-panel flex flex-col items-start justify-between gap-4 p-8 md:flex-row md:items-center md:p-10">
              <div>
                <p className="text-mono-eyebrow mb-2 text-muted-foreground">
                  Want the full picture?
                </p>
                <h3 className="font-serif text-[1.5rem] leading-tight text-foreground tracking-[-0.015em] md:text-[1.875rem]">
                  Some projects are under NDA. Reach out for the unredacted
                  version.
                </h3>
              </div>
              <Link to="/contact" className="btn-primary-solid">
                Get in touch
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section> */}
    </>
  );
};
