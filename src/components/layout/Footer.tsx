import React from "react";
import { Link } from "react-router-dom";
import { SiteBrand } from "@/components/layout/SiteBrand";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { footerNav, site } from "@/lib/site";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <SiteBrand variant="footer" />
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Frontend Engineer building scalable, data-intensive applications
              and modern digital products with clarity and long-term
              maintainability in mind.
            </p>

            <div className="mt-8 flex items-center gap-2">
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {footerNav.map((group) => (
            <div key={group.title} className="md:col-span-3">
              <h4 className="text-mono-eyebrow mb-5 text-muted-foreground">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item.href}>
                    {item.href.startsWith("http") ||
                    item.href.startsWith("mailto") ? (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="group inline-flex items-center gap-1 text-sm text-foreground transition-colors hover:text-foreground/70"
                      >
                        {item.label}
                        {item.href.startsWith("http") && (
                          <ArrowUpRight className="h-3 w-3 opacity-50 transition-opacity group-hover:opacity-100" />
                        )}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className="text-sm text-foreground transition-colors hover:text-foreground/70"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. Built with React,
            Vite, and intent.
          </p>
          <p className="font-mono">
            {site.location} &middot; {site.timezone} &middot; v{__BUILD_SHA__}
          </p>
        </div>
      </div>
    </footer>
  );
};
