import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { TocItem } from "./toc";

interface TableOfContentsProps {
  items: TocItem[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              a.target.getBoundingClientRect().top -
              b.target.getBoundingClientRect().top,
          );
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: [0, 1] },
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="text-sm">
      <p className="text-mono-eyebrow mb-4 text-muted-foreground">
        On this page
      </p>
      <ul className="space-y-2 border-l border-border">
        {items.map((item) => (
          <li
            key={item.id}
            className={cn(item.level === 3 ? "pl-6" : "pl-4")}
          >
            <a
              href={`#${item.id}`}
              className={cn(
                "-ml-px block border-l py-1 transition-colors",
                activeId === item.id
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
