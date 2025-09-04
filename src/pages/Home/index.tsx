import React, { useState } from "react";
import { ProjectsSection, SkillsSection } from "@/features";
import { ContactModal, HeroSection, FeatureCard } from "@/components/common";
import {
  ArrowRight,
  Brain,
  BriefcaseBusiness,
  Lightbulb,
  TrendingUp,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Leadership & Mentorship",
    description:
      "I naturally take initiative, lead teams, and enjoy mentoring others to help them grow and succeed.",
    icon: Users,
    iconColor: "text-blue-500",
  },
  {
    title: "Collaboration",
    description:
      "I thrive in team environments, working closely with engineers, designers, and stakeholders to deliver cohesive, high-quality products.",
    icon: BriefcaseBusiness,
    iconColor: "text-green-500",
  },
  {
    title: "Problem-Solving",
    description:
      "I proactively identify challenges, resolve bugs efficiently, and streamline processes to ensure system stability and user satisfaction.",
    icon: Lightbulb,
    iconColor: "text-yellow-500",
  },
  {
    title: "Adaptability",
    description:
      "I quickly learn new technologies and adapt to changing project requirements, always seeking ways to improve and innovate.",
    icon: Brain,
    iconColor: "text-purple-500",
  },
  {
    title: "Technical Excellence",
    description:
      "I build scalable, maintainable, and user-friendly interfaces using modern tools like React, TypeScript, and Tailwind CSS.",
    icon: TrendingUp,
    iconColor: "text-red-500",
  },
  {
    title: "Productivity & Efficiency",
    description:
      "I leverage AI and automation to accelerate development workflows and boost team productivity.",
    icon: ArrowRight,
    iconColor: "text-orange-500",
  },
];

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
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-pink-50 via-nuetral to-blue-50 opacity-40 -z-10 dark:opacity-100 dark:from-black/5 dark:via-black/1 dark:to-black/25" />
        <div className="text-center relative z-10 max-w-7xl mx-auto p-6">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-md leading-relaxed mb-8 max-w-4xl mx-auto text-muted-foreground">
            My journey in software development has been driven by a passion for
            creating innovative solutions and a commitment to continuous
            learning. I specialize in building robust, scalable, and
            user-centric applications, always striving for excellence in every
            line of code.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          <p className="text-lg leading-relaxed mt-8 mb-4">
            Beyond technical skills, I bring a unique blend of leadership,
            creativity, and strategic thinking to every project.
          </p>
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
