import React, { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/typography";
import { ReadingProgress } from "@/components/mdx/ReadingProgress";
import { getProject, getRelatedProjects } from "@/content/projects/data";
import { cn } from "@/lib/utils";

export const ProjectDetail: React.FC = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const project = getProject(slug);
  const articleRef = useRef<HTMLElement>(null);

  if (!project) {
    return (
      <section className="container-page py-32 text-center">
        <Eyebrow className="justify-center mb-4">404</Eyebrow>
        <h1 className="font-serif text-[2.5rem] leading-tight tracking-[-0.02em]">
          Project not found.
        </h1>
        <Link to="/projects" className="btn-pill-outline mt-8">
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to projects
        </Link>
      </section>
    );
  }

  const related = getRelatedProjects(slug);

  return (
    <>
      <ReadingProgress targetRef={articleRef} />
      <article ref={articleRef}>
        <header className="container-page pt-16 pb-12 md:pt-24 md:pb-16">
          <Reveal>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3 w-3" />
              All projects
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground">
                {project.year}
              </span>
              <span className="text-muted-foreground">&middot;</span>
              <span className="font-mono text-xs text-muted-foreground">
                {project.role}
              </span>
              {project.status === "live" && (
                <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] text-foreground">
                  Live
                </span>
              )}
            </div>
            <h1 className="font-serif mt-6 max-w-4xl text-[3rem] leading-[1.02] tracking-[-0.025em] text-foreground md:text-[5.5rem]">
              {project.title}
            </h1>
            <p className="lead mt-6 max-w-2xl">{project.tagline}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-solid"
                >
                  Visit live
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-outline"
                >
                  <Github className="h-3.5 w-3.5" />
                  Source
                </a>
              )}
            </div>
          </Reveal>
        </header>

        <section className="relative isolate overflow-hidden bg-secondary py-16 md:py-24">
          {/* Backdrop — Faded Grid Blue blueprint + Soft Horizon glow */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-grid-fine opacity-60" />
            <div className="absolute -top-32 left-1/2 h-[420px] w-[1200px] -translate-x-1/2 rounded-[50%] opacity-[0.18] blur-[100px] bg-gradient-soft-horizon dark:opacity-[0.28]" />
          </div>

          <Reveal>
            <figure className="container-wide">
              {/* Caption header — corner-bracket markers */}
              <figcaption className="mb-5 flex items-center justify-between text-mono-eyebrow text-muted-foreground">
                <span className="inline-flex items-center gap-3">
                  <span aria-hidden>┌</span>
                  <span>{project.title}</span>
                </span>
                <span className="inline-flex items-center gap-3">
                  <span>
                    {project.year} &middot; {project.role}
                  </span>
                  <span aria-hidden>┐</span>
                </span>
              </figcaption>

              {/* Framed cover */}
              <div className="surface-panel relative aspect-[16/10] overflow-hidden rounded-2xl shadow-[var(--shadow-xl)]">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                  loading="eager"
                />
                {/* Soft top sheen + bottom shadow for depth */}
                <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/40 via-transparent to-transparent dark:from-white/5" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/8 via-transparent to-transparent" />
              </div>

              {/* Caption footer — bottom corner brackets */}
              <div className="mt-3 flex items-center justify-between text-mono-eyebrow text-muted-foreground">
                <span aria-hidden>└</span>
                <span aria-hidden>┘</span>
              </div>
            </figure>
          </Reveal>
        </section>

        <section className="section-pad-sm">
          <div className="container-page">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
              <div className="md:col-span-4">
                <Eyebrow className="mb-6">Summary</Eyebrow>
              </div>
              <div className="md:col-span-8">
                <p className="text-lg leading-[1.7] text-foreground md:text-xl">
                  {project.summary}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad-sm bg-secondary">
          <div className="container-page">
            <div
              className={cn(
                "grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border",
                `sm:grid-cols-${project.metrics.length}`,
              )}
            >
              {project.metrics.map((m) => (
                <div key={m.label} className="bg-background p-8 md:p-9">
                  <p className="text-mono-eyebrow text-muted-foreground">
                    {m.label}
                  </p>
                  <p className="font-serif mt-3 text-[2.5rem] leading-none tracking-[-0.02em] text-foreground md:text-[3.5rem]">
                    {m.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CaseSection eyebrow="Problem" body={project.problem} />
        <CaseSection eyebrow="Approach" body={project.approach} />

        <section className="section-pad-sm bg-secondary">
          <div className="container-page">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
              <div className="md:col-span-4">
                <Eyebrow className="mb-6">Architecture decisions</Eyebrow>
              </div>
              <div className="md:col-span-8">
                <ol className="space-y-px overflow-hidden rounded-2xl border border-border">
                  {project.decisions.map((d, i) => (
                    <Reveal key={d.title} delay={i * 0.04}>
                      <li className="bg-background p-8 md:p-9">
                        <p className="text-mono-eyebrow text-muted-foreground">
                          &mdash; 0{i + 1}
                        </p>
                        <h3 className="font-serif mt-3 text-[1.5rem] leading-tight tracking-[-0.015em] text-foreground md:text-[1.75rem]">
                          {d.title}
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                          {d.body}
                        </p>
                      </li>
                    </Reveal>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <CaseSection eyebrow="Tradeoffs" body={project.tradeoffs} />
        <CaseSection eyebrow="Outcomes" body={project.outcomes} />

        <section className="section-pad-sm">
          <div className="container-page">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
              <div className="md:col-span-4">
                <Eyebrow className="mb-6">Stack</Eyebrow>
              </div>
              <div className="md:col-span-8">
                <dl className="space-y-6">
                  {project.stack.map((group) => (
                    <div
                      key={group.group}
                      className="grid grid-cols-1 gap-3 border-b border-border pb-6 last:border-b-0 sm:grid-cols-4"
                    >
                      <dt className="text-mono-eyebrow text-muted-foreground sm:col-span-1">
                        {group.group}
                      </dt>
                      <dd className="flex flex-wrap gap-1.5 sm:col-span-3">
                        {group.items.map((item) => (
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

        {related.length > 0 && (
          <section className="section-pad-sm bg-secondary">
            <div className="container-page">
              <Eyebrow className="mb-8">Related work</Eyebrow>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/projects/${p.slug}`}
                    className="group surface-panel p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/20 hover:[box-shadow:var(--shadow-xl)]"
                  >
                    <p className="font-mono text-xs text-muted-foreground">
                      {p.year}
                    </p>
                    <h3 className="font-serif mt-3 text-[1.5rem] leading-tight tracking-[-0.015em] text-foreground group-hover:text-foreground/80 md:text-[1.75rem]">
                      {p.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
                      {p.tagline}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm text-foreground">
                      Read case study
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
};

const CaseSection: React.FC<{ eyebrow: string; body: string[] }> = ({
  eyebrow,
  body,
}) => (
  <section className="section-pad-sm">
    <div className="container-page">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
        </div>
        <div className="md:col-span-8 space-y-5">
          {body.map((p, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <p className="text-lg leading-[1.7] text-foreground md:text-xl">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
