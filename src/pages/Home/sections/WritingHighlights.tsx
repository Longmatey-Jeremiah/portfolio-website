import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/typography";
import { Reveal } from "@/components/motion/Reveal";
import { posts } from "@/content/writing/data";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export const WritingHighlights: React.FC = () => {
  const recent = posts.slice(0, 3);

  return (
    <section
      className="section-pad bg-[color-mix(in_srgb,var(--bg-elev)_50%,var(--background))]"
      id="writing"
    >
      <div className="container-page">
        <SectionHeader
          eyebrow="Writing"
          title={
            <>
              Notes on the systems
              <br className="hidden md:block" />{" "}
              <em className="italic">I build.</em>
            </>
          }
          description="Essays on architecture, performance, and engineering practice — for engineers, by an engineer."
        />

        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
          {recent.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link
                to={`/writing/${post.slug}`}
                className="group flex h-full min-h-[280px] flex-col rounded-[14px] border border-border bg-card p-7 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-foreground"
              >
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  <span>{post.category}</span>
                  <span>{post.readingTime} min</span>
                </div>
                <h3 className="font-serif mt-[18px] mb-3 text-[26px] font-normal leading-[1.1] tracking-[-0.012em] text-foreground">
                  {post.title}
                </h3>
                <p className="line-clamp-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4 font-mono text-xs text-muted-foreground">
                  <span>{formatDate(post.date)}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Link to="/writing" className="btn-pill-outline">
            All writing
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
