import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/typography";

interface Tool {
  slug: string;
  name: string;
  /** Brand hex (no #). Used on the light theme. */
  color: string;
  /** Optional override for the dark theme — set when the brand color is so
   *  dark it disappears against the warm-charcoal dark surface. Defaults to
   *  `color` so brand-bright icons are unchanged. */
  darkColor?: string;
}

/** Cream foreground used in dark mode for near-black brand marks. */
const DARK_FALLBACK = "F4F1EA";

const tools: Tool[] = [
  { slug: "framer", name: "Framer Motion", color: "0055FF" },
  { slug: "git", name: "Git", color: "F05032" },
  { slug: "github", name: "GitHub", color: "181717", darkColor: DARK_FALLBACK },
  { slug: "figma", name: "Figma", color: "F24E1E" },
  { slug: "vercel", name: "Vercel", color: "000000", darkColor: DARK_FALLBACK },
  { slug: "redux", name: "Redux", color: "764ABC" },
  { slug: "expo", name: "Expo", color: "000020", darkColor: DARK_FALLBACK },
  { slug: "storybook", name: "Storybook", color: "FF4785" },
  { slug: "prisma", name: "Prisma", color: "2D3748", darkColor: DARK_FALLBACK },
  { slug: "tailwindcss", name: "Tailwind", color: "06B6D4" },
  { slug: "vitest", name: "Vitest", color: "6E9F18" },
  { slug: "linear", name: "Linear", color: "5E6AD2" },
];

/**
 * Wider, multi-stop fade for a softer ramp. Percentage stops so the visual
 * feel scales proportionally on mobile, tablet, and desktop.
 */
const fadeMask = [
  "linear-gradient(to right,",
  "transparent 0%,",
  "rgba(0,0,0,0.15) 6%,",
  "rgba(0,0,0,0.6) 14%,",
  "black 22%,",
  "black 78%,",
  "rgba(0,0,0,0.6) 86%,",
  "rgba(0,0,0,0.15) 94%,",
  "transparent 100%)",
].join(" ");

/**
 * Renders the brand icon in its native colors. For brands whose mark is
 * near-black we ship a second `<img>` tinted to the dark-mode foreground and
 * toggle visibility per theme — both share identical box dimensions so the
 * layout never shifts when the theme flips.
 */
const ToolIcon: React.FC<{ tool: Tool }> = ({ tool }) => {
  const lightSrc = `https://cdn.simpleicons.org/${tool.slug}/${tool.color}`;
  const darkSrc = `https://cdn.simpleicons.org/${tool.slug}/${tool.darkColor ?? tool.color}`;
  const sameAcrossThemes = !tool.darkColor || tool.darkColor === tool.color;

  if (sameAcrossThemes) {
    return (
      <img
        src={lightSrc}
        alt=""
        aria-hidden
        width={36}
        height={36}
        loading="lazy"
        decoding="async"
        className="block h-9 w-9 shrink-0"
      />
    );
  }

  return (
    <>
      <img
        src={lightSrc}
        alt=""
        aria-hidden
        width={36}
        height={36}
        loading="lazy"
        decoding="async"
        className="block h-9 w-9 shrink-0 dark:hidden"
      />
      <img
        src={darkSrc}
        alt=""
        aria-hidden
        width={36}
        height={36}
        loading="lazy"
        decoding="async"
        className="hidden h-9 w-9 shrink-0 dark:block"
      />
    </>
  );
};

export const Toolchain: React.FC = () => {
  const doubled = [...tools, ...tools];

  return (
    <section className="section-pad-sm">
      <div className="container-page">
        <Reveal>
          <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
            <div>
              <Eyebrow className="mb-5">Toolchain</Eyebrow>
              <h2 className="font-serif max-w-2xl text-[clamp(2.5rem,5.4vw,4.75rem)] font-normal leading-[0.98] tracking-[-0.02em] text-foreground">
                The toolchain I reach for{" "}
                <em className="italic text-primary">most often.</em>
              </h2>
            </div>
            <p className="max-w-[42ch] text-base leading-relaxed text-muted-foreground md:text-right">
              Not exhaustive — a working set tuned for fast feedback, dense
              interfaces, and serious frontends.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div
          className="marquee-group group mt-14 overflow-hidden py-10"
          style={{ maskImage: fadeMask, WebkitMaskImage: fadeMask }}
        >
          <ul className="marquee-track flex w-max items-center">
            {doubled.map((tool, i) => (
              <li
                key={`${tool.slug}-${i}`}
                aria-label={tool.name}
                className="group/tool relative mx-16 inline-flex shrink-0 items-center transition-[opacity,transform] duration-300 hover:scale-110 hover:!opacity-100 group-hover:opacity-40 sm:mx-20 md:mx-24 lg:mx-28"
              >
                <ToolIcon tool={tool} />
                <span
                  role="tooltip"
                  className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-border bg-foreground px-2.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-background opacity-0 shadow-[0_4px_12px_rgba(14,16,21,0.12)] transition-[opacity,transform] duration-200 group-hover/tool:translate-y-0 group-hover/tool:opacity-100 after:absolute after:left-1/2 after:top-full after:h-0 after:w-0 after:-translate-x-1/2 after:border-x-4 after:border-t-[5px] after:border-x-transparent after:border-t-foreground after:content-['']"
                >
                  {tool.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
};
