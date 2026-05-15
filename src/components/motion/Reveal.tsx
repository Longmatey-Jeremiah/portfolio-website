import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  /** Vertical translate distance in px when revealing. Defaults to 16. */
  distance?: number;
  /** When true, only animates opacity (no translate). Use for typography. */
  opacityOnly?: boolean;
  as?: "div" | "section" | "article" | "header" | "footer" | "aside";
}

/**
 * Editorial reveal — restrained, opacity-led, short distance.
 * Honors prefers-reduced-motion.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  distance = 16,
  opacityOnly = false,
  as = "div",
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const Tag = motion[as];

  const initial = prefersReducedMotion
    ? { opacity: 1 }
    : opacityOnly
      ? { opacity: 0 }
      : { opacity: 0, y: distance };
  const animate =
    isInView || prefersReducedMotion ? { opacity: 1, y: 0 } : initial;

  return (
    <Tag
      ref={ref}
      className={className}
      initial={initial}
      animate={animate}
      transition={{
        duration: prefersReducedMotion ? 0 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </Tag>
  );
};
