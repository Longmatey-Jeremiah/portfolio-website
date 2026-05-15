import React from "react";
import { Link } from "react-router-dom";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type SiteBrandProps = {
  variant?: "header" | "footer";
  className?: string;
};

export const SiteBrand: React.FC<SiteBrandProps> = ({
  variant = "header",
  className,
}) => {
  const isHeader = variant === "header";

  return (
    <Link
      to="/"
      className={cn(
        "group inline-flex items-center gap-2 font-mono tracking-tight",
        isHeader ? "text-[13px]" : "text-sm",
        className,
      )}
    >
      <span
        className={cn(
          "relative flex shrink-0 items-center justify-center overflow-hidden rounded-md shadow-none ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105 dark:ring-white/10",
          isHeader ? "h-8 w-8" : "h-9 w-9",
        )}
      >
        <img
          src={site.logoLightSrc}
          alt=""
          width={209}
          height={218}
          decoding="async"
          loading={isHeader ? "eager" : "lazy"}
          className="block h-full w-full object-contain dark:hidden"
        />
        <img
          src={site.logoDarkSrc}
          alt=""
          width={209}
          height={218}
          decoding="async"
          loading={isHeader ? "eager" : "lazy"}
          className="hidden h-full w-full object-contain dark:block"
        />
      </span>
    </Link>
  );
};
