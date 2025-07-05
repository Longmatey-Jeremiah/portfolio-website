import React from "react";
import { HeroSection, ProjectsSection } from "@/components";

export const Home: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* Hero section */}
      <HeroSection />

      {/* Projects section */}
      <ProjectsSection />
    </div>
  );
};
