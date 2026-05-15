export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

/**
 * Extract H2/H3 headings from a rendered article element.
 * Run after MDX content mounts.
 */
export function extractToc(root: HTMLElement | null): TocItem[] {
  if (!root) return [];
  const nodes = root.querySelectorAll<HTMLElement>("h2[id], h3[id]");
  return Array.from(nodes).map((el) => ({
    id: el.id,
    text: stripAnchor(el.textContent ?? ""),
    level: el.tagName === "H2" ? 2 : 3,
  }));
}

function stripAnchor(text: string): string {
  return text.replace(/#$/g, "").trim();
}
