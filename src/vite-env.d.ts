/// <reference types="vite/client" />

declare const __BUILD_SHA__: string;

declare module "*.mdx" {
  import type { ComponentType } from "react";
  export const frontmatter: {
    title: string;
    description?: string;
    excerpt?: string;
    date: string;
    readingTime?: number;
    tags?: string[];
    category?: string;
  };
  const MDXComponent: ComponentType;
  export default MDXComponent;
}
