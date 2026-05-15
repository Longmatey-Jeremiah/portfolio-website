import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentType,
} from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Link as LinkIcon } from "lucide-react";
import { MDXProvider } from "@mdx-js/react";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/typography";
import { mdxComponents } from "@/components/mdx/MdxComponents";
import { ReadingProgress } from "@/components/mdx/ReadingProgress";
import { TableOfContents } from "@/components/mdx/TableOfContents";
import { extractToc, type TocItem } from "@/components/mdx/toc";
import { getPost, getRelatedPosts } from "@/content/writing/data";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const WritingDetail: React.FC = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const post = getPost(slug);
  const articleRef = useRef<HTMLElement>(null);

  const [Mdx, setMdx] = useState<ComponentType | null>(null);
  const [toc, setToc] = useState<TocItem[]>([]);
  const [shareCopied, setShareCopied] = useState(false);

  useEffect(() => {
    let cancelled = false;
    if (!post) return;
    post.load().then((mod) => {
      if (cancelled) return;
      setMdx(() => mod.default);
    });
    return () => {
      cancelled = true;
    };
  }, [post]);

  useEffect(() => {
    if (!Mdx) return;
    const id = window.requestAnimationFrame(() => {
      setToc(extractToc(articleRef.current));
    });
    return () => window.cancelAnimationFrame(id);
  }, [Mdx]);

  const related = useMemo(() => getRelatedPosts(slug), [slug]);

  if (!post) {
    return (
      <section className="container-page py-32 text-center">
        <Eyebrow className="justify-center mb-4">404</Eyebrow>
        <h1 className="font-serif text-[2.5rem] leading-tight tracking-[-0.02em]">
          Post not found.
        </h1>
        <Link to="/writing" className="btn-pill-outline mt-8">
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to writing
        </Link>
      </section>
    );
  }

  const onShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareCopied(true);
      window.setTimeout(() => setShareCopied(false), 1600);
    } catch {
      /* no-op */
    }
  };

  return (
    <>
      <ReadingProgress targetRef={articleRef} />

      <article ref={articleRef}>
        <header className="container-page pt-12 pb-10 md:pt-20 md:pb-14">
          <Reveal>
            <Link
              to="/writing"
              className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3 w-3" />
              All writing
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-mono-eyebrow mt-8 text-muted-foreground">
              {post.category}
            </p>
            <h1 className="font-serif mt-5 max-w-4xl text-[2.75rem] leading-[1.04] tracking-[-0.025em] text-foreground md:text-[5rem]">
              {post.title}
            </h1>
            <p className="lead mt-6 max-w-2xl">{post.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-muted-foreground">
              <span>{formatDate(post.date)}</span>
              <span>{post.readingTime} min read</span>
              <button
                type="button"
                onClick={onShare}
                className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
              >
                <LinkIcon className="h-3 w-3" />
                {shareCopied ? "Link copied" : "Copy link"}
              </button>
            </div>
          </Reveal>
        </header>

        <div className="container-wide grid grid-cols-1 gap-12 pb-16 lg:grid-cols-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-24">
              <TableOfContents items={toc} />
            </div>
          </aside>
          <div className="lg:col-span-8 lg:col-start-4">
            <div className="prose-editorial max-w-2xl">
              {Mdx ? (
                <MDXProvider components={mdxComponents}>
                  <Mdx />
                </MDXProvider>
              ) : (
                <div className="space-y-4">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-4 w-full animate-pulse rounded bg-secondary"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section-pad-sm bg-secondary">
          <div className="container-page">
            <Eyebrow className="mb-8">Related reading</Eyebrow>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/writing/${p.slug}`}
                  className="group surface-panel p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/20 hover:[box-shadow:var(--shadow-xl)]"
                >
                  <p className="text-mono-eyebrow text-muted-foreground">
                    {p.category}
                  </p>
                  <h3 className="font-serif mt-3 text-[1.5rem] leading-tight tracking-[-0.015em] text-foreground group-hover:text-foreground/80 md:text-[1.75rem]">
                    {p.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
                    {p.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm text-foreground">
                    Read essay
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
