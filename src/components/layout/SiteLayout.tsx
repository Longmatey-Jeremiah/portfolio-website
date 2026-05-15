import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const SiteLayout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) return;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname, location.hash]);

  return (
    <div className="relative min-h-svh w-full bg-background text-foreground">
      <Header />
      <main className="pt-[68px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
