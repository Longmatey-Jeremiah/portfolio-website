import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";

const pad = (n: number) => String(n).padStart(2, "0");

/** Live clock pinned to GMT — Accra sits at UTC+0. */
const HeroClock: React.FC = () => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1_000);
    return () => window.clearInterval(id);
  }, []);

  const gmt = new Date(now.getTime() + now.getTimezoneOffset() * 60_000);
  const hh = gmt.getHours();
  const mm = gmt.getMinutes();
  const ss = gmt.getSeconds();
  const hourRotation = ((hh % 12) + mm / 60) * 30;
  const minuteRotation = (mm + ss / 60) * 6;
  const secondRotation = ss * 6;

  return (
    <div className="flex items-center gap-[18px] rounded-[14px] border border-border bg-card p-[22px] transition-colors hover:border-[var(--line-strong)]">
      <div className="relative h-14 w-14 shrink-0 rounded-full border border-[var(--line-strong)]">
        <span
          className="absolute left-1/2 top-1/2 w-[2px] rounded-sm bg-foreground"
          style={{
            height: 16,
            transformOrigin: "50% 100%",
            transform: `translate(-50%, -100%) rotate(${hourRotation}deg)`,
          }}
        />
        <span
          className="absolute left-1/2 top-1/2 w-[1.5px] rounded-sm bg-[var(--muted-2)]"
          style={{
            height: 22,
            transformOrigin: "50% 100%",
            transform: `translate(-50%, -100%) rotate(${minuteRotation}deg)`,
          }}
        />
        <span
          className="absolute left-1/2 top-1/2 w-[1px] rounded-sm bg-primary"
          style={{
            height: 24,
            transformOrigin: "50% 100%",
            transform: `translate(-50%, -100%) rotate(${secondRotation}deg)`,
          }}
        />
        <span className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground" />
      </div>
      <div>
        <div className="font-mono text-xl tabular-nums tracking-tight text-foreground">
          {pad(hh)}:{pad(mm)}:{pad(ss)}{" "}
          <span className="text-[13px] text-[var(--muted-2)]">GMT</span>
        </div>
        <div className="mt-0.5 text-[13px] text-muted-foreground">
          Accra, Ghana &middot; UTC+0
        </div>
      </div>
    </div>
  );
};

const workingSet: [string, number][] = [
  ["React + TypeScript", 96],
  ["Next.js / Vite", 88],
  ["Postgres + tRPC", 74],
  ["Framer Motion", 70],
];

export const Hero: React.FC = () => {
  return (
    <header
      id="top"
      className="relative isolate overflow-hidden pt-[clamp(3.75rem,9vw,7.5rem)] pb-[clamp(5rem,10vw,8.75rem)]"
    >
      <div className="dotbg pointer-events-none absolute inset-0 -z-10 opacity-60" />

      <div className="container-page grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_360px] lg:gap-[72px]">
        {/* —— Left: headline column —— */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-3 rounded-full border border-[var(--line-strong)] bg-[color-mix(in_srgb,var(--bg-elev)_60%,transparent)] py-[9px] pl-[14px] pr-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ink-2)]">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--ok)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--ok)]" />
              </span>
              {site.availability.label}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-serif mt-7 text-[clamp(3.5rem,9vw,9rem)] font-normal leading-[0.86] tracking-[-0.035em] text-foreground lg:text-[clamp(3rem,5.5vw,6rem)]">
              {site.shortName}
              <br />
              Longmatey
              <span className="mt-1 block text-[0.78em] italic leading-[0.9] tracking-[-0.04em] text-[var(--muted-2)]">
                {site.role}.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-10 max-w-[50ch] text-lg leading-relaxed text-muted-foreground">
              I design scalable frontend systems, architect data-intensive
              applications, and build modern digital products with a bias for
              clarity, performance, and long-term maintainability.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link to="/projects" className="btn-primary-solid">
                Selected work
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/writing" className="btn-pill-outline">
                Read writing
              </Link>
              <Link to="/about" className="btn-pill-outline">
                About
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-16 grid grid-cols-2 gap-7 border-t border-dashed border-[var(--line-strong)] pt-7 font-mono text-xs text-muted-foreground ">
              <div className="flex flex-col gap-1.5">
                <span className="text-[10.5px] uppercase tracking-[0.16em] text-[var(--muted-2)]">
                  Based
                </span>
                <span className="inline-flex items-center gap-1.5 text-[13px] text-[var(--ink-2)]">
                  <MapPin className="h-3.5 w-3.5" />
                  {site.location}
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[10.5px] uppercase tracking-[0.16em] text-[var(--muted-2)]">
                  Currently
                </span>
                <span className="text-[13px] text-[var(--ink-2)]">
                  Frontend Engineer &middot; Papermap AI
                </span>
              </div>
              {/* <div className="flex flex-col gap-1.5">
                <span className="text-[10.5px] uppercase tracking-[0.16em] text-[var(--muted-2)]">
                  Available
                </span>
                <span className="text-[13px] text-[var(--accent-deep)]">
                  Jun 2026
                </span>
              </div> */}
            </div>
          </Reveal>
        </div>

        {/* —— Right: status panel —— */}
        <Reveal delay={0.1} as="aside" className="flex flex-col gap-4">
          <div className="rounded-[14px] border border-border bg-card p-[22px] transition-colors hover:border-[var(--line-strong)]">
            <div className="mb-3.5 flex items-center justify-between">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--muted-2)]">
                Now building
              </span>
              <span className="font-mono text-[11px] text-[var(--muted-2)]">
                v1.1.0
              </span>
            </div>
            <div className="font-serif text-[22px] leading-[1.15] tracking-[-0.01em] text-foreground">
              Papermap Plugins
            </div>
            <div className="mt-1 text-[13px] text-muted-foreground">
              AI-driven inventory ops for high-volume retail
            </div>
            {/* <div className="mt-3.5 h-1 overflow-hidden rounded bg-[var(--bg-elev)]">
              <span className="block h-full w-[68%] rounded bg-primary" />
            </div>
            <div className="mt-2 flex justify-between font-mono text-[11px] text-[var(--muted-2)]">
              <span>Q2 rollout</span>
              <span>68%</span>
            </div> */}
          </div>

          <HeroClock />

          <div className="rounded-[14px] border border-border bg-card p-[22px] transition-colors hover:border-[var(--line-strong)]">
            <div className="mb-3.5 flex items-center justify-between">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--muted-2)]">
                Working set
              </span>
              <span className="font-mono text-[11px] text-[var(--muted-2)]">
                2026
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {workingSet.map(([name, pct]) => (
                <div
                  key={name}
                  className="flex items-center justify-between text-[13px]"
                >
                  <span className="text-[var(--ink-2)]">{name}</span>
                  <span className="h-[3px] w-[100px] overflow-hidden rounded-sm bg-[var(--bg-elev)]">
                    <span
                      className="block h-full bg-foreground"
                      style={{ width: `${pct}%` }}
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />
    </header>
  );
};
