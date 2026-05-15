import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sun, Moon, Monitor } from "lucide-react";

type Theme = "light" | "dark" | "system";

const THEME_CYCLE: Record<Theme, Theme> = {
  light: "dark",
  dark: "system",
  system: "light",
};

const themeMeta: Record<Theme, { icon: typeof Sun; label: string }> = {
  light: { icon: Sun, label: "Light" },
  dark: { icon: Moon, label: "Dark" },
  system: { icon: Monitor, label: "System" },
};
import { SiteBrand } from "@/components/layout/SiteBrand";
import { primaryNav } from "@/lib/site";
import { useTheme } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const current = (theme as Theme) ?? "system";
  const next = THEME_CYCLE[current];
  const CurrentIcon = themeMeta[current].icon;
  const cycleTheme = () => setTheme(next);
  const cycleLabel = `Theme: ${themeMeta[current].label}. Switch to ${themeMeta[next].label}.`;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isScrolled
            ? "border-b border-border bg-background/80 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="container-wide flex h-[68px] items-center justify-between">
          <SiteBrand />

          <nav className="hidden items-center gap-8 md:flex">
            {primaryNav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                className={({ isActive }) =>
                  cn(
                    "relative py-1 text-sm transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-foreground after:transition-transform after:duration-300 hover:after:scale-x-100",
                    isActive
                      ? "text-foreground after:scale-x-100"
                      : "text-[var(--ink-2)] hover:text-foreground after:scale-x-0",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={cycleTheme}
              className="hidden h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground hover:bg-[var(--bg-elev)] md:inline-flex"
              aria-label={cycleLabel}
              title={themeMeta[current].label}
            >
              <CurrentIcon className="h-4 w-4" />
            </button>
            <Link
              to="/contact"
              className="group/cta hidden font-mono text-[13px] md:btn-pill-outline md:inline-flex"
            >
              Get in touch
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border text-foreground md:hidden"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <button
              type="button"
              className="absolute inset-0 bg-foreground/10 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-3 top-20 rounded-2xl border border-border bg-popover p-3 shadow-lg"
            >
              <div className="flex flex-col gap-1">
                {primaryNav.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    end={item.href === "/"}
                    className={({ isActive }) =>
                      cn(
                        "rounded-xl px-4 py-3 text-[15px] font-medium transition-colors",
                        isActive
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <div className="mt-2 flex items-center justify-between gap-2 border-t border-border px-2 pt-3">
                  <button
                    type="button"
                    onClick={cycleTheme}
                    aria-label={cycleLabel}
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground"
                  >
                    <CurrentIcon className="h-3.5 w-3.5" />
                    {themeMeta[current].label}
                  </button>
                  <Link to="/contact" className="btn-primary-solid">
                    Get in touch
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
