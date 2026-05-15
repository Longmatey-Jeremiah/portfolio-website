import React from "react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "between";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = "between",
  className = "",
}) => {
  return (
    <Reveal as="header" className={`mb-14 md:mb-20 ${className}`}>
      {eyebrow && <Eyebrow className="mb-6">{eyebrow}</Eyebrow>}
      <div
        className={
          align === "between"
            ? "flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12"
            : "flex flex-col gap-5"
        }
      >
        <h2 className="font-serif max-w-3xl text-[2.25rem] leading-[1.02] font-normal text-foreground tracking-[-0.02em] sm:text-[2.75rem] md:text-[3.5rem]">
          {title}
        </h2>
        {description && (
          <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-right">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
};
