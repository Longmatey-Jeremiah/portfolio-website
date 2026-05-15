import type { ProjectCaseStudy } from "./types";

export const projects: ProjectCaseStudy[] = [
  {
    slug: "papermap-ai",
    title: "Papermap AI",
    tagline: "No-code data platform with realtime, AI-tailored insights.",
    summary:
      "A data platform that lets non-technical operators connect raw sources and ask questions in natural language — with rigorous guardrails so answers stay grounded.",
    year: "2024",
    role: "Frontend Engineer",
    category: "fullstack",
    status: "live",
    featured: true,
    cover: "/screenshots/papermap.png",
    liveUrl: "https://papermap.ai",
    tags: ["AI/Data", "Realtime"],
    problem: [
      "Non-technical operators needed insight from data they couldn't query directly, without going through analysts for every question.",
    ],
    approach: [
      "Built a streaming-first chat interface with token-level rendering and inline citations linking back to the underlying tables.",
      "Designed an extensible block system so generated answers compose tables, charts, and prose without bespoke layouts.",
    ],
    decisions: [
      {
        title: "Citations as first-class UI",
        body: "Every numeric claim renders with a hoverable citation surfacing the source query. Trust scales with traceability.",
      },
      {
        title: "Streaming with a minimum first-paint",
        body: "Buffered the first 80ms of tokens to avoid jank; everything after streams immediately. Felt fast without feeling chaotic.",
      },
    ],
    tradeoffs: [
      "Chose Next.js for streaming SSR over the Vite-based stack used elsewhere — meant maintaining two frontend toolchains.",
    ],
    outcomes: [
      "Time-to-insight for ad-hoc questions dropped from hours to minutes for early users.",
    ],
    metrics: [
      { label: "First token", value: "<300ms" },
      { label: "Source citations", value: "100%" },
    ],
    stack: [
      { group: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS"] },
      { group: "Data", items: ["Postgres", "Streaming SSE"] },
    ],
  },
  {
    slug: "beyondh1b-frontend",
    title: "BeyondH1B",
    tagline: "AI-powered immigration platform simplifying U.S. visa pathways.",
    summary:
      "A modern immigration platform that helps international professionals understand and navigate U.S. visa and green card pathways through AI-assisted guidance, structured workflows, and secure profile management.",
    year: "2025",
    role: "Frontend Engineer",
    category: "frontend-systems",
    status: "live",
    featured: true,
    cover: "/screenshots/beyondh1b.png",
    liveUrl: "https://www.beyondh1b.com/",
    tags: ["AI", "B2C SaaS", "Workflow Systems"],

    problem: [
      "U.S. immigration processes are highly fragmented, documentation-heavy, and difficult for non-experts to navigate without legal assistance.",
      "Users needed a structured way to understand eligibility, organize supporting evidence, and track their immigration readiness in one place.",
    ],

    approach: [
      "Contributed to setting up the frontend architecture for a scalable, multi-flow application using React and TypeScript.",
      "Built reusable UI patterns to support complex multi-step immigration workflows and profile-based assessments.",
      "Structured frontend modules to cleanly separate authentication, user profiles, case workflows, and document handling.",
      "Integrated API-driven and AI-assisted flows into a responsive, user-friendly interface.",
    ],

    decisions: [
      {
        title: "Modular frontend architecture",
        body: "Structured the application into domain-driven modules (profiles, cases, documents, assessments) to keep complexity isolated and scalable.",
      },
      {
        title: "Reusable workflow components",
        body: "Designed shared step-based components to support multiple immigration flows without duplicating UI logic.",
      },
      {
        title: "Separation of concerns",
        body: "Kept AI logic, API integration, and UI rendering strictly separated to ensure maintainability and predictable data flow.",
      },
    ],

    tradeoffs: [
      "Prioritized flexibility in workflow structure over rigid UI flows, which slightly increased initial implementation complexity but improved long-term adaptability.",
      "Focused on shared component systems early, which required upfront effort but significantly reduced duplication across features.",
    ],

    outcomes: [
      "Delivered a scalable frontend foundation capable of supporting multiple immigration workflows and user types.",
      "Improved clarity and usability of complex immigration processes through structured UI and guided flows.",
    ],

    metrics: [
      { label: "Workflow clarity", value: "High (qualitative)" },
      { label: "Reusability", value: "Strong component reuse" },
      { label: "Architecture stability", value: "Scalable" },
    ],

    stack: [
      {
        group: "Frontend",
        items: [
          "React",
          "TypeScript",
          "Component Architecture",
          "API Integration",
        ],
      },
      {
        group: "Frontend",
        items: ["Workflow Design", "AI-assisted UX flows", "Modular UI design"],
      },
    ],
  },
  {
    slug: "papermap-inventory",
    title: "Papermap Inventory",
    tagline: "AI-driven inventory operations for high-volume retail.",
    summary:
      "An inventory platform that turns scattered SKU and supplier data into forecasts retailers can act on — collapsing weekly reorder cycles into a single, decisive view.",
    year: "2024",
    role: "Frontend Lead",
    category: "frontend-systems",
    status: "live",
    featured: true,
    cover: "/screenshots/papermap_inventory.png",
    liveUrl: "https://inventory.papermap.ai/",
    tags: ["B2B SaaS", "AI/Data", "Operations"],
    problem: [
      "Retailers operating across multiple suppliers were maintaining inventory in spreadsheets and disconnected ERPs, with reorder decisions made on a 7-day lag.",
      "The product needed to feel like an instrument — fast, dense, predictable — for operators who would live in it 6+ hours a day.",
    ],
    approach: [
      "Modeled the domain around three primitives: SKU, location, and supplier — every screen composes from these.",
      "Built a typed data layer with React Query for server state, Zustand for ephemeral UI state, and route-level data prefetching to keep navigations sub-200ms.",
      "Designed a tabular component system with virtualized rows, frozen columns, and inline edit affordances tuned for keyboard-first use.",
    ],
    decisions: [
      {
        title: "Server state ≠ UI state",
        body: "Aggressively split server state (cached, refetched, mutated) from UI state (filters, drawer open, selection). Eliminated entire classes of stale-data bugs.",
      },
      {
        title: "Composable cells, not row templates",
        body: "Every cell is a tiny component — currency, badge, date, supplier ref. Tables become declarative; new columns ship in a day, not a sprint.",
      },
      {
        title: "Optimistic-only for safe writes",
        body: "Optimistic updates for editable fields with strong rollback; never optimistic for cost-impacting actions (PO submit, transfer).",
      },
    ],
    tradeoffs: [
      "Chose virtualized tables over server-side pagination — smoother UX, but required careful row height management.",
      "Skipped real-time websockets in v1; tab-focus refetch covers 90% of the freshness need at a fraction of the operational cost.",
    ],
    outcomes: [
      "Cut reorder cycle time from days to under an hour for pilot customers.",
      "Operators report the dashboard as the first tool they open and the last they close — an interface-as-instrument outcome.",
    ],
    metrics: [
      { label: "Cost reduction", value: "85%" },
      { label: "Stockouts", value: "Zero" },
      { label: "p75 nav latency", value: "<200ms" },
    ],
    stack: [
      {
        group: "Frontend",
        items: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "TanStack Query",
          "Zustand",
        ],
      },
      { group: "Tooling", items: ["Vite", "ESLint", "Playwright"] },
    ],
  },

  {
    slug: "acacia-health",
    title: "Acacia Health",
    tagline: "Cross-platform health insurance for emerging markets.",
    summary:
      "A mobile-first insurance experience that meets users on flaky networks and low-spec devices — with policy management, claims, and benefits in one place.",
    year: "2023",
    role: "Mobile Engineer",
    category: "frontend-systems",
    status: "live",
    featured: false,
    cover: "/screenshots/acacia_mobile.webp",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.acacia.acaciahealthinsurance",
    tags: ["Mobile", "Health"],
    problem: [
      "Users live on intermittent connectivity. Every screen had to remain usable offline and resilient when the network returned.",
    ],
    approach: [
      "Designed an offline-first architecture: optimistic mutations queued, replayed on reconnect with deterministic conflict resolution.",
      "Used Expo for managed deployments and OTA updates — meaningful for a market where Play Store updates lag.",
    ],
    decisions: [
      {
        title: "Optimistic queues with audit",
        body: "Every offline action is captured with a timestamp and replayed in order. Failures surface to the user without losing intent.",
      },
    ],
    tradeoffs: [
      "Chose React Native over native to share logic with the web product — accepted a small bundle-size cost for shared domain models.",
    ],
    outcomes: ["Crash-free sessions over 99.6% across a wide device matrix."],
    metrics: [
      { label: "Crash-free sessions", value: "99.6%" },
      { label: "Cold start", value: "<1.8s" },
    ],
    stack: [
      {
        group: "Frontend",
        items: ["React Native", "Expo", "Redux Toolkit", "TypeScript"],
      },
    ],
  },
  {
    slug: "symliq-developers",
    title: "Symliq Developers",
    tagline: "Marketing site for a software studio.",
    summary:
      "A studio site engineered like a product — tight performance budgets, restrained motion, content tuned for senior buyers.",
    year: "2023",
    role: "Frontend Engineer",
    category: "frontend-systems",
    status: "live",
    featured: false,
    cover: "/screenshots/symliq.png",
    liveUrl: "https://symliq.com/",
    tags: ["Marketing", "Performance"],
    problem: [
      "Studio sites typically over-design and underperform. The brief demanded both restraint and speed.",
    ],
    approach: [
      "Aggressive image budgets, pre-rendered routes, and zero JS on content-only pages.",
    ],
    decisions: [
      {
        title: "Motion as polish, not feature",
        body: "Reserved animation for transitions between meaningful states; never used to entertain.",
      },
    ],
    tradeoffs: [
      "Skipped a CMS — content lives in versioned markdown, slower for non-technical edits but faster to ship.",
    ],
    outcomes: ["Site loads under 1s on 4G across the target geography."],
    metrics: [
      { label: "LCP", value: "<1s" },
      { label: "JS shipped", value: "<40kb" },
    ],
    stack: [{ group: "Frontend", items: ["React", "Tailwind CSS"] }],
  },
];

export function getProject(slug: string): ProjectCaseStudy | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getRelatedProjects(
  slug: string,
  limit = 2,
): ProjectCaseStudy[] {
  const current = getProject(slug);
  if (!current) return [];
  return projects
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aShared = a.category === current.category ? 1 : 0;
      const bShared = b.category === current.category ? 1 : 0;
      return bShared - aShared;
    })
    .slice(0, limit);
}

export const projectCategoryLabels: Record<string, string> = {
  all: "All",
  "frontend-systems": "Frontend systems",
  fullstack: "Fullstack",
  dashboards: "Dashboards",
  architecture: "Architecture",
  experimental: "Experimental",
};
