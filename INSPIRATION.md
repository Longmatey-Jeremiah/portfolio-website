# Inspiration — Borrowed Concepts for the Portfolio

A focused readout of what's worth borrowing from two reference sites, translated into the Column design system already in place.

**Sources analyzed**

- [jeromeghartey1.vercel.app](https://jeromeghartey1.vercel.app/) — minimal, outcome-first, journalistic
- [doybeans.com](https://www.doybeans.com/) — playful, personality-forward, restrained

The two sites sit at opposite ends of the personality spectrum. Jerome's is closer to where the Column-styled portfolio should live; doybeans contributes warmth and texture to soften it. Borrow selectively — never wholesale.

---

## 1. UI & Layout

### Borrow from Jerome (high-priority)

- **Outcome-first project cards.** Every project leads with what it accomplished, not what stack it used. Metadata reads as `Year • Category • Subcategory` — journalistic, not resume-like. Already partially implemented in `content/projects/data.ts`; commit to this pattern everywhere and demote the stack list to the bottom of each case study.
- **No portfolio grid on the home page.** Jerome's home is a vertical narrative, not a gallery. Selected work renders as a stack of full-width editorial blocks (cover + title + 1-line outcome + metadata), not a 3-up grid. The grid lives on `/projects` only. The current `SelectedWork.tsx` should be reviewed against this — favor narrative stack on home, grid on the index page.
- **Footer-anchored secondary nav.** Jerome anchors quaternary links (Home / About / Work) in the footer rather than duplicating them in a header. The current header is correct; consider trimming footer link density to match Jerome's single-column verticality.
- **Location badge as a credibility signal.** Jerome embeds Accra with a Carto map. For Column's restrained tone, skip the live map and instead render a static `Faded Grid Blue` SVG dot-map of Africa with a single highlighted marker on Accra. Same signal, on-brand.
- **FAQ-shaped About.** Replace the traditional paragraph-bio with a short FAQ accordion ("How do you work?", "What are you optimizing for?", "How do you collaborate with design?"). Reads as confident, not self-promoting. Use it as a section on `/about`, not a replacement.

### Borrow from doybeans (low-priority, surgical)

- **Version number in the footer.** "2025.0.01" or a git short-SHA in the footer signals active maintenance and an engineer's eye for provenance. One line, mono, muted.
- **Tech-stack attribution in the footer.** "Built with React, Vite, MDX, and Tailwind" — small, mono, muted. Already partially present in `Footer.tsx`; keep it but trim verbosity.

### Skip

- doybeans' emoji-heavy voice and pirate references. They work for that brand; they would actively undermine the "senior systems thinker" positioning the Column system is built for.

---

## 2. Typography

### Keep what's already correct

The Column system's `Instrument Serif` (display) + `Geist` (body) + `Geist Mono` (eyebrows/code) pairing is more sophisticated than either reference site. Don't downgrade to a single-family stack.

### Borrow from Jerome

- **Stacked display hierarchy.** Jerome opens with a small "Hey!" greeting, then the name, then the role — three lines, decreasing emphasis. The current `Hero.tsx` does name + italic role; consider adding a smaller mono eyebrow above ("Senior Frontend Engineer · Accra, Ghana · Available") for the three-beat rhythm. Already partially present as the availability pill; the pattern is right.
- **Italic for human voice.** Jerome reserves italic for quoted philosophy ("Design is how it works"). Column uses `Instrument Serif Italic` for the role line — extend this discipline: any time the site speaks in a personal voice (philosophy section, About hooks), set it in serif italic. Reserve sans for facts and metadata.
- **Generous tracking on metadata.** Jerome's metadata tags use noticeable letter-spacing. The Column `.text-mono-eyebrow` utility already does this at `0.18em` — keep it; resist the urge to tighten.

### Borrow from doybeans

- **One human touch in the headline.** A single, small humanizing detail near the hero ("currently in Accra", "open to collaborate") softens the architecture-heavy positioning. The availability pill is already this — keep it.

### Hard rule

Do **not** introduce a third sans-serif family. The Instrument Serif + Geist pairing is the entire typographic identity.

---

## 3. Color

### Keep

The Column palette (Ink Blue text on Ghost White, Fog Gray sections, Steel Gray hairlines, Action Orange CTAs, Deep Plum brand accent) is already more disciplined than both reference sites.

### Borrow from Jerome

- **Hyperlink color discipline.** Jerome uses one accent for links and never mixes accents. Audit the current site for places where Action Orange, Deep Plum, and Info Blue all appear on the same screen — there should usually be one accent per surface.
- **Map / illustrative imagery in muted earth tones.** Jerome's Carto map (Voyager tileset) uses warm muted browns/greens against the otherwise monochrome page. The Column equivalent: any illustrative SVG (dot maps, blueprint motifs, architecture diagrams) should pull from `Faded Grid Blue` and never compete with `Action Orange`.

### Borrow from doybeans

- **A single warm accent dot.** doybeans' blue-heart accent functions as a tiny personality marker. The Column equivalent is the `Success Moss` ping in the availability pill — already in place. Don't add a second one.

### Hard rule

`Action Orange` stays reserved for primary CTAs and the single emphasis utility. Never use it for icons, dividers, or decoration.

---

## 4. Imagery & Visual Elements

### Borrow from Jerome

- **Full-bleed, frameless cover images on case studies.** No rounded corners, no inner padding, no decorative borders. Image is the content. Already partially in place; verify `Projects/Detail/index.tsx` hero treatment matches.
- **Landscape 16:9 covers throughout.** A single aspect ratio across all project cards creates calm. Mixing portrait + landscape breaks rhythm. Check `public/screenshots/` — normalize to a consistent ratio.
- **Tiny recurring avatar as section anchors.** Jerome uses small 64×64 circular avatars between sections as breathing-room markers. For Column, replace with a `4×4px Steel Gray` editorial ornament (the `.editorial-ornament` utility already exists). Use it sparingly — twice on the home page max.
- **Screenshots over abstract illustration.** Real product screenshots outperform abstract gradients for engineering credibility. The Column system supports this with the `surface-panel` shadow stack — wrap screenshots in `surface-panel` only on light surfaces, never on `Fog Gray`.

### Borrow from doybeans

- **Image optimization is non-negotiable.** doybeans uses Next.js `_next/image` with `w=` and `q=75`. The current Vite stack should at minimum serve `.webp` and use `loading="lazy"` + `decoding="async"` on every below-fold image. Audit `public/screenshots/` — `.webp` for all photos, `.svg` for logos, `.png` only when transparency on a non-white background is required.

### Distinctive addition

- **A `Faded Grid Blue` blueprint motif behind one hero.** The Column system already documents this. The current `Hero.tsx` uses `bg-grid-fine` — good. Extend the same pattern (at lower opacity) to one secondary page hero (likely `/about`) to create cross-page identity. Don't put it on every page; the recurrence is the signal.

---

## 5. Motion & Animation

### Philosophy

Column says "invisible polish." Both reference sites follow this — neither has show-off animations. Hold the line.

### Borrow from Jerome

- **Hover lift on project cards, nothing else on the home page.** A 200ms `translateY(-2px)` + shadow upgrade on `surface-panel` hover. Already partially in place via `transition-colors`; add a `transform` + `box-shadow` step.
- **Staggered fade-in entrance on hero stack.** The current `Reveal` component with `delay={0.05 / 0.12 / 0.18 / 0.24}` is exactly this pattern. Keep it. Resist the urge to add scroll-triggered parallax.
- **Accordion for FAQ.** Smooth `height` transition with `framer-motion`'s `AnimatePresence`. Single accordion open at a time. Use this on `/about` if the FAQ pattern is adopted.

### Borrow from doybeans

- Nothing motion-specific. The site is largely static.

### Hard rule (from Column's own do-not list)

- No parallax. No spring-y bouncing. No scroll-jacking. No "magic cursor" effects. No marquees of logos (the current `marquee-track` in `index.css` is the one exception — leave it where it is, on the Toolchain section only).

### One novel addition worth experimenting with

- **A single scroll-progress hairline at the very top of long-form pages** (case studies, blog posts). 2px `Action Orange` filling left-to-right as the reader scrolls. The `ReadingProgress` component already exists for blog posts — extend the same component to project case studies. This is the one place Action Orange justifies a non-CTA appearance because it functions as a UI control.

---

## 6. Content Patterns

### Borrow from Jerome

- **Quantified outcomes per project.** "2,000+ users", "56-component design system", "85% cost reduction" — concrete, falsifiable, memorable. The current `content/projects/data.ts` `metrics` field is built for this. Audit every project and ensure each has 2–3 numeric metrics, not aspirational language.
- **Outcome-before-stack ordering.** Project narrative reads: problem → approach → outcome → stack (tools last, not first). The current case-study schema (`problem` / `approach` / `decisions` / `tradeoffs` / `outcomes` / `metrics` / `stack`) is correct — verify the render order in `Projects/Detail/index.tsx` matches.
- **Sub-140-character project descriptions on cards.** Forces ruthless clarity. Audit current `tagline` fields — most are around the right length; trim where they aren't.
- **First-person, plain-spoken voice.** "I make complex products feel simple" beats "Specializing in scalable enterprise solutions." The Column tone guide already calls for this; verify hero/about copy doesn't slip into corporate register.

### Borrow from doybeans

- **One small piece of personality.** A single line of warmth (a location callout, a current focus, an unusual hobby reference) prevents the architecture-heavy positioning from reading as cold. The "Currently — Frontend Engineer" line in the hero metadata is exactly this. Keep one; don't add three.

### Skip

- doybeans' opening greeting in another language and pirate metaphor. Charming for that brand; wrong tonal register here.

---

## 7. Scaling & Responsive

### Borrow from Jerome

- **Single-column mobile, narrative-preserving.** No compressed desktop grids. Project cards stack full-width with the same internal hierarchy. The current `grid-cols-1 md:grid-cols-...` patterns do this; verify image-text two-column blocks collapse to image-then-text (not text-then-image) on mobile.
- **Type scales down generously.** Hero display goes from ~7rem desktop to ~2.75rem mobile in the current `Hero.tsx` — that's a healthy ~2.5× ratio. Apply the same ratio everywhere; smaller displays mid-page should also scale.

### Borrow from doybeans

- **Responsive image transforms with explicit widths.** Next.js's `?w=256&q=75` pattern. The Vite-equivalent is a build-time image transform (e.g. `vite-imagetools`) or pre-generated `.webp` variants in `public/screenshots/`. At minimum, serve `srcSet` with 1x/2x for every cover image.

### Targets to commit to

- LCP under 1.2s on 4G (already stated in `DESIGN.md` — verify with Lighthouse on a deployed build).
- No layout shift on font load (`font-display: swap` on the Geist/Instrument Serif Google Fonts link is correct; verify CLS is near zero).

---

## 8. Distinctive / Premium Notes

### Worth borrowing from Jerome

- **Journalistic metadata tagging.** `2025 • B2B SaaS • Data/AI` reads like an essay byline, not a portfolio listing. Apply consistently across projects and writing.
- **Restraint as the design.** Both reference sites understand that absence is a choice. The Column system's `--section-gap: 48px` and generous container padding are already aligned with this. Resist the urge to fill empty space.

### Worth borrowing from doybeans

- **Visible "this is maintained" signals.** Version stamp, build date, or git SHA in the footer. Adds an engineer's signature without saying anything.

### What the portfolio already does better than both

- The serif/sans pairing (`Instrument Serif` + `Geist`) is a tier above the system-sans-only choices on both sites.
- The Column color discipline (Action Orange reserved, Deep Plum for brand, Info Blue replacing Deep Plum in dark mode) is more architectural than either reference's accent strategy.
- The MDX + Shiki blog pipeline already in place exceeds what either site offers for writing.

---

## Top 10 Concrete Next Moves

In priority order. Each is small enough to ship in a single session.

1. **Audit `content/projects/data.ts` metrics** — every project needs 2–3 falsifiable numbers. Outcome > tool list.
2. **Tighten every project `tagline`** to under 140 characters.
3. **Verify case-study render order** in `Projects/Detail/index.tsx` puts stack last.
4. **Add a static blueprint dot-map of Africa** with an Accra marker to either the hero or the About page, in `Faded Grid Blue`. SVG, not embedded.
5. **Extend `ReadingProgress` to project case studies**, not just blog posts.
6. **Normalize all `public/screenshots/` images** to 16:9 `.webp`, with explicit `srcSet`.
7. **Add a hover lift (`translateY(-2px)` + shadow upgrade) to `surface-panel`** when used as a card link.
8. **Convert About's narrative into a short FAQ accordion** with 4–5 questions, leaving a one-paragraph intro above.
9. **Add a footer version stamp** (`v2026.05.0` or a git short-SHA) in mono muted text.
10. **Add `font-display: swap` audit** on the Google Fonts link in `index.html` and run a Lighthouse pass; fix any CLS regressions.

---

## What NOT to borrow

- Emoji-heavy voice (doybeans). Wrong register for the positioning.
- Live embedded maps (Jerome). Off-brand for the Column system; use a static SVG.
- A single-family sans-only typographic system (both). The serif/sans pairing is the brand.
- Scroll-triggered parallax or "magic cursor" effects (neither has these, but worth restating).
- Logo marquees beyond the existing single Toolchain section.
- Decorative gradients on the hero. The `bg-grid-fine` blueprint is the hero treatment; soft-horizon stays reserved for banners only.
