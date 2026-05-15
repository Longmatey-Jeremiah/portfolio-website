import React from "react";
import { Hero } from "./sections/Hero";
import { SelectedWork } from "./sections/SelectedWork";
import { Philosophy } from "./sections/Philosophy";
import { Expertise } from "./sections/Expertise";
import { Toolchain } from "./sections/Toolchain";
import { WritingHighlights } from "./sections/WritingHighlights";
import { ExperienceSnapshot } from "./sections/ExperienceSnapshot";
import { ClosingCta } from "./sections/ClosingCta";

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Philosophy />
      <Expertise />
      <Toolchain />
      <WritingHighlights />
      <ExperienceSnapshot />
      <ClosingCta />
    </>
  );
};
