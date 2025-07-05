import React from "react";
import { HeroSection, ProjectsSection, SkillsSection } from "@/components";

export const Home: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* Hero section */}
      <HeroSection />

      {/* Projects section */}
      <ProjectsSection />

      {/* Skills section */}
      <SkillsSection />
    </div>
  );
};
