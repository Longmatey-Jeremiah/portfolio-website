export const site = {
  name: "Jeremiah Longmatey",
  /** Monogram used in header, footer, and favicon — per-theme pair. */
  logoLightSrc: "/logos/jl-logo-light-256.png",
  logoDarkSrc: "/logos/jl-logo-dark-256.png",
  shortName: "Jeremiah",
  role: "Frontend Engineer",
  tagline:
    "Designing scalable frontend systems, architecting data-intensive applications, and building modern digital products with clarity, performance, and long-term maintainability in mind.",
  location: "Accra, Ghana",
  timezone: "GMT+0",
  email: "longmateyjeremiah1@gmail.com",
  phone: "+233 54 342 7199",
  resumePath: "/JeremiahLongmatey.pdf",
  social: {
    github: "https://github.com/Longmatey-Jeremiah",
    linkedin: "https://www.linkedin.com/in/jeremiah-longmatey/",
    twitter: "https://twitter.com/",
    whatsapp: "https://wa.me/233543427199",
  },
  availability: {
    status: "available",
    label: "Open to Frontend Engineer & Architecture roles",
  },
} as const;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Work", href: "/projects" },
  { label: "Writing", href: "/writing" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Site",
    items: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "Writing", href: "/writing" },
      { label: "About", href: "/about" },
      { label: "Resume", href: "/resume" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    items: [
      { label: "Email", href: `mailto:longmateyjeremiah1@gmail.com` },
      { label: "GitHub", href: "https://github.com/Longmatey-Jeremiah" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jeremiah-longmatey/",
      },
    ],
  },
];
