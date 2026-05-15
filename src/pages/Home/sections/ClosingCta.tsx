import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";

export const ClosingCta: React.FC = () => {
  return (
    <section className="section-pad" id="contact">
      <div className="container-page">
        <Reveal>
          <div
            className="relative isolate overflow-hidden rounded-[22px] border border-border p-[clamp(2.5rem,6vw,4.5rem)]"
            style={{
              background:
                "radial-gradient(120% 80% at 100% 0%, color-mix(in srgb, var(--accent-soft) 60%, transparent), transparent 60%), var(--card)",
            }}
          >
            <p className="mb-6 inline-flex items-center gap-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--ink-2)]">
              <span className="h-px w-7 bg-[var(--ink-2)]" />
              Currently — open to new work
            </p>
            <h2 className="font-serif max-w-[18ch] text-[clamp(2.5rem,5.6vw,4.75rem)] font-normal leading-[1.04] tracking-[-0.025em] text-foreground">
              Considering <em className="italic text-primary"> Frontend</em>,{" "}
              <em className="italic text-primary">Architecture</em>, and{" "}
              <em className="italic text-primary">Fullstack</em> roles at teams
              that take engineering seriously.
            </h2>
            <p className="mt-7 max-w-[56ch] text-[17px] leading-relaxed text-muted-foreground">
              If you're building something ambitious — high-leverage operator
              tools, data-intensive products, or platforms that need a serious
              frontend foundation — I'd like to talk.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="btn-primary-solid">
                Start a conversation
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="btn-pill-outline font-mono"
              >
                {site.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
