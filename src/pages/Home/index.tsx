import React from "react";
import { HeroSection, ProjectsSection, SkillsSection } from "@/components";

export const Home: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* Hero section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* About section - placeholder */}
      <section id="about" className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl max-w-2xl mx-auto">
            I'm a passionate developer focused on creating beautiful and functional web experiences.
          </p>
        </div>
      </section>

      {/* Projects section */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* Skills section */}
      <section id="skills">
        <SkillsSection />
      </section>

      {/* Contact section - placeholder */}
      <section id="contact" className="min-h-screen bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            I'm always interested in new opportunities and collaborations.
          </p>
          <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-all duration-200">
            Contact Me
          </button>
        </div>
      </section>
    </div>
  );
};
