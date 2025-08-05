import React, { useState } from "react";
import { HeroSection, ProjectsSection, SkillsSection } from "@/components";
import ContactModal from "@/components/common/ContactModal";

export const Home: React.FC = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="relative w-full">
      {/* Hero section */}
      <section id="home">
        <HeroSection onContactClick={() => setShowContactModal(true)} />
      </section>

      {/* About section - placeholder */}
      <section
        id="about"
        className="relative min-h-screen flex items-center justify-center overflow-hidden p-6"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-pink-50 via-nuetral to-blue-50 opacity-40 -z-10 dark:opacity-100 dark:from-black/25 dark:via-black/1 dark:to-black/1" />
        <div className="text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl max-w-2xl mx-auto">
            I'm a passionate developer focused on creating beautiful and
            functional web experiences.
          </p>
          {/* Qualities summary */}
          <div className="mt-8 text-left max-w-2xl mx-auto ">
            <h3 className="text-2xl font-semibold mb-4">What Sets Me Apart</h3>
            <ul className="space-y-6 list-disc list-inside">
              <li>
                <span className="font-bold">Leadership & Mentorship:</span> I
                naturally take initiative, lead teams, and enjoy mentoring
                others to help them grow and succeed.
              </li>
              <li>
                <span className="font-bold">Collaboration:</span> I thrive in
                team environments, working closely with engineers, designers,
                and stakeholders to deliver cohesive, high-quality products.
              </li>
              <li>
                <span className="font-bold">Problem-Solving:</span> I
                proactively identify challenges, resolve bugs efficiently, and
                streamline processes to ensure system stability and user
                satisfaction.
              </li>
              <li>
                <span className="font-bold">Adaptability:</span> I quickly learn
                new technologies and adapt to changing project requirements,
                always seeking ways to improve and innovate.
              </li>
              <li>
                <span className="font-bold">Technical Excellence:</span> I build
                scalable, maintainable, and user-friendly interfaces using
                modern tools like React, TypeScript, and Tailwind CSS.
              </li>
              <li>
                <span className="font-bold">Productivity & Efficiency:</span> I
                leverage AI and automation to accelerate development workflows
                and boost team productivity.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects section */}
      <section id="projects">
        <ProjectsSection onContactClick={() => setShowContactModal(true)} />
      </section>

      {/* Skills section */}
      <section id="skills">
        <SkillsSection onContactClick={() => setShowContactModal(true)} />
      </section>

      {/* Contact section - placeholder */}
      {/* <section
        id="contact"
        className="min-h-screen bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center"
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            I'm always interested in new opportunities and collaborations.
          </p>
          <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-all duration-200">
            Contact Me
          </button>
        </div>
      </section> */}
      <ContactModal
        open={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
    </div>
  );
};
