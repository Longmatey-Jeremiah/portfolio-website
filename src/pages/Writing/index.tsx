import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Search } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/typography";
import { posts, writingCategories } from "@/content/writing/data";
import { cn } from "@/lib/utils";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const Writing: React.FC = () => {
  const [category, setCategory] =
    useState<(typeof writingCategories)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const matchesCat = category === "All" || p.category === category;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <section className="container-page pt-16 pb-12 md:pt-24 md:pb-16">
        <Reveal>
          <Eyebrow className="mb-6">Writing</Eyebrow>
          <h1 className="font-serif max-w-4xl text-[2.75rem] leading-[1.02] tracking-[-0.025em] text-foreground md:text-[5.25rem]">
            Notes on the <em className="italic text-emphasis">systems</em> I
            build.
          </h1>
          <p className="lead mt-8 max-w-2xl">
            Essays on frontend architecture, performance, and engineering
            practice. Written for engineers, not for SEO.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-1 gap-3 sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {writingCategories.map((cat) => {
                const isActive = category === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={cn(
                      "rounded-lg border px-3 py-1.5 text-[12px] font-medium transition-colors",
                      isActive
                        ? "border-accent bg-accent text-accent-foreground"
                        : "border-border text-muted-foreground hover:border-foreground/20 hover:text-foreground",
                    )}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
            <label className="relative inline-flex items-center">
              <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search writing"
                className="w-full rounded-full border border-border bg-secondary/40 py-2 pr-4 pl-9 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/40 focus:bg-background focus:outline-none sm:w-64"
              />
            </label>
          </div>
        </Reveal>
      </section>

      <section className="section-pad-sm">
        <div className="container-page">
          {filtered.length === 0 ? (
            <p className="py-16 text-center text-sm text-muted-foreground">
              No essays match. Try a different category or query.
            </p>
          ) : (
            <ul className="space-y-px">
              {filtered.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.04}>
                  <li>
                    <Link
                      to={`/writing/${post.slug}`}
                      className="group grid grid-cols-1 gap-6 border-t border-border py-9 transition-colors hover:bg-accent/40 md:grid-cols-12 md:py-10 px-4"
                    >
                      <div className="md:col-span-2">
                        <p className="font-mono text-xs text-muted-foreground">
                          {formatDate(post.date)}
                        </p>
                      </div>
                      <div className="md:col-span-7">
                        <p className="text-mono-eyebrow mb-2 text-muted-foreground">
                          {post.category}
                        </p>
                        <h2 className="font-serif text-[1.75rem] leading-tight tracking-[-0.02em] text-foreground transition-colors group-hover:text-foreground/80 md:text-[2.25rem]">
                          {post.title}
                        </h2>
                        <p className="mt-2 line-clamp-2 max-w-xl text-base leading-relaxed text-muted-foreground">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="flex items-end justify-between md:col-span-3 md:items-start md:justify-end">
                        <span className="font-mono text-xs text-muted-foreground">
                          {post.readingTime} min read
                        </span>
                        <ArrowUpRight className="ml-3 h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                      </div>
                    </Link>
                  </li>
                </Reveal>
              ))}
              <li className="border-t border-border" />
            </ul>
          )}
        </div>
      </section>
    </>
  );
};
