import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/typography";
import { Reveal } from "@/components/motion/Reveal";
import { projects } from "@/content/projects/data";

export const SelectedWork: React.FC = () => {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="section-pad" id="work">
      <div className="container-page">
        <SectionHeader
          eyebrow="Selected work"
          title={
            <>
              Engineering systems
              <br className="hidden md:block" /> that hold up{" "}
              <em className="italic text-[var(--muted-2)]">at scale.</em>
            </>
          }
          description="A short list of recent projects — case studies on the architectural decisions, tradeoffs, and outcomes that shaped them."
        />

        <div className="flex flex-col gap-6">
          {featured.map((project, i) => {
            // const kind = mockKindBySlug[project.slug] ?? "papermap";
            return (
              <Reveal key={project.slug} delay={i * 0.05}>
                <Link
                  to={`/projects/${project.slug}`}
                  className="group grid grid-cols-1 items-stretch gap-8 rounded-[14px] border border-border bg-card p-8 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-[var(--line-strong)] hover:bg-[var(--surface-card)] md:grid-cols-[60px_1.4fr_1fr]"
                >
                  <div className="pt-2 font-mono text-xs tracking-wide text-[var(--muted-2)]">
                    0{i + 1}
                  </div>

                  <div>
                    <h3 className="font-serif text-[clamp(1.75rem,3.2vw,2.625rem)] font-normal leading-[1.02] tracking-[-0.015em] text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-[48ch] text-[15px] leading-relaxed text-muted-foreground">
                      {project.summary}
                    </p>
                    <div className="mt-[18px] flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-4 md:items-end">
                    <div className="aspect-[16/10] w-full max-w-[340px] overflow-hidden rounded-[10px] border border-border bg-[var(--bg-elev)]">
                      {/* <ProjectMock kind={kind} /> */}
                      <img
                        src={project.cover}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="font-mono text-[11.5px] tracking-wide text-muted-foreground md:text-right">
                      {project.year} &middot;{" "}
                      <span className="text-[var(--ink-2)]">
                        {project.role}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-foreground">
                      Case study
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 flex justify-end">
          <Link to="/projects" className="btn-pill-outline">
            All projects
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
