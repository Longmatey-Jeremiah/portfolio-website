import type { ComponentType } from "react";

export interface PostFrontmatter {
  title: string;
  description: string;
  excerpt: string;
  date: string;
  readingTime: number;
  tags: string[];
  category:
    | "Architecture"
    | "Performance"
    | "Systems"
    | "Engineering Practice"
    | "AI";
}

export interface Post extends PostFrontmatter {
  slug: string;
  /** Lazy-loaded MDX component. */
  load: () => Promise<{ default: ComponentType; frontmatter: PostFrontmatter }>;
}
