import type { ComponentType } from "react";
import type { Post, PostFrontmatter } from "./types";

type MDXModule = {
  default: ComponentType;
  frontmatter: PostFrontmatter;
};

const eagerModules = import.meta.glob<MDXModule>("./posts/*.mdx", {
  eager: true,
});

function slugFromPath(filePath: string): string {
  return filePath.replace(/^\.\/posts\//, "").replace(/\.mdx$/, "");
}

export const posts: Post[] = Object.entries(eagerModules)
  .map(([filePath, mod]) => {
    const slug = slugFromPath(filePath);
    return {
      ...mod.frontmatter,
      slug,
      load: () => Promise.resolve(mod),
    } satisfies Post;
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 2): Post[] {
  const current = getPost(slug);
  if (!current) return [];
  return posts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aShared = a.category === current.category ? 1 : 0;
      const bShared = b.category === current.category ? 1 : 0;
      return bShared - aShared;
    })
    .slice(0, limit);
}

export const writingCategories = [
  "All",
  "Architecture",
  "Performance",
  "Systems",
  "Engineering Practice",
  "AI",
] as const;
