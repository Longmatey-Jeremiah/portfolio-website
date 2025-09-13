import { ArrowRight, Code, Zap, Shield, DownloadCloud } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/providers";

const Firefly: React.FC<{
  delay: number;
  duration: number;
  x: number;
  y: number;
  color: string;
  floatDuration: number;
  radius: number; // Add radius prop
}> = ({ delay, duration, x, y, color, floatDuration, radius }) => {
  const floatKeyframes = `
    @keyframes float-${Math.random().toString(36).substr(2, 9)} {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(${Math.random() * 20 - 10}px, ${
    Math.random() * 20 - 10
  }px); }
      50% { transform: translate(${Math.random() * 30 - 15}px, ${
    Math.random() * 30 - 15
  }px); }
      75% { transform: translate(${Math.random() * 20 - 10}px, ${
    Math.random() * 20 - 10
  }px); }
    }
  `;
  const { theme } = useTheme();

  const fireflyColor =
    theme === "dark" ? `${color.replace(/#/, "#CC")}` : color;
  const boxShadowColor =
    theme === "dark" ? `${color.replace(/#/, "#CC")}` : color;

  return (
    <>
      <style>{floatKeyframes}</style>
      <motion.div
        className="absolute w-1 h-1 rounded-full animate-pulse"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          backgroundColor: fireflyColor,
          boxShadow: `0 0 6px 2px ${boxShadowColor}80`,
        }}
        animate={{
          x: [
            Math.cos(0) * radius,
            Math.cos(Math.PI / 2) * radius,
            Math.cos(Math.PI) * radius,
            Math.cos((3 * Math.PI) / 2) * radius,
            Math.cos(2 * Math.PI) * radius,
          ],
          y: [
            Math.sin(0) * radius,
            Math.sin(Math.PI / 2) * radius,
            Math.sin(Math.PI) * radius,
            Math.sin((3 * Math.PI) / 2) * radius,
            Math.sin(2 * Math.PI) * radius,
          ],
        }}
        transition={{
          duration: floatDuration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    </>
  );
};

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  const fireflyColors = [
    "#06b6d4",
    "#3b82f6",
    "#10b981",
    "#0891b2",
    "#0ea5e9",
    "#14b8a6",
    "#007BFF", // Brighter blue
    "#00C9FF", // Sky blue
    "#00BFFF", // Deep sky blue
    "#4169E1", // Royal blue
    "#6A5ACD", // Slate blue
    "#4682B4", // Steel blue
    "#5F9EA0", // Cadet blue
    "#40E0D0", // Turquoise
    "#20B2AA", // Light sea green
    "#00CED1", // Dark turquoise
    "#00FFFF", // Aqua / Cyan
  ];

  const fireflies = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    color: fireflyColors[Math.floor(Math.random() * fireflyColors.length)],
    floatDuration: 8 + Math.random() * 12, // 8-20 seconds for floating movement
    radius: 10 + Math.random() * 15, // Add a random radius for each firefly
  }));

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // setIsOpen(false);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-200 via-white to-blue-50  overflow-hidden w-full dark:from-gray-800/1 dark:via-black/10 dark:to-background/10">
      {/* Firefly Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {fireflies.map((firefly) => (
          <Firefly
            key={firefly.id}
            delay={firefly.delay}
            duration={firefly.duration}
            x={firefly.x}
            y={firefly.y}
            color={firefly.color}
            floatDuration={firefly.floatDuration}
            radius={firefly.radius}
          />
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-200/40 to-blue-300/40 rounded-full blur-3xl animate-pulse-slow dark:from-cyan-800/10 dark:to-blue-900/10"></div>
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-emerald-200/40 to-teal-300/40 rounded-full blur-3xl animate-pulse-slow dark:from-emerald-800/5 dark:to-teal-900/10"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/30 to-indigo-200/30 rounded-full blur-3xl animate-pulse-slower dark:from-gray-500/15 dark:to-indigo-700/10"
          style={{ animationDelay: "4s" }}
        ></div>
        {/* Additional vibrant elements */}
        <div
          className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-orange-200/30 to-red-300/30 rounded-full blur-2xl animate-pulse dark:from-orange-800/10 dark:to-red-900/20"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-cyan-200/30 to-blue-300/30 rounded-full blur-2xl animate-pulse dark:from-cyan-800/10 dark:to-red-900/20"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 pt-28 pb-24">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 border border-cyan-200 mb-8 dark:from-gray-700 dark:to-gray-800 dark:border-gray-600">
            <Zap className="w-4 h-4 text-cyan-600 mr-2 dark:text-cyan-400" />
            <span className="text-sm text-cyan-900 dark:text-gray-200">
              Full-Stack Developer & UI/UX Enthusiast
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-gray-900 mb-6 leading-tight dark:text-white">
            <span className="block">Building the Future</span>
            <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent animate-pulse dark:animate-pulse-slow dark:from-cyan-400/40 dark:via-blue-400 dark:to-emerald-400">
              One Pixel at a Time
            </span>
          </h1>

          {/* Enhanced Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto font-medium dark:text-gray-300">
            Crafting exceptional digital experiences with cutting-edge
            technologies.
            <span className="block text-cyan-600 text-lg mt-2 dark:text-cyan-400">
              React • TypeScript • Vue • Next.js
            </span>
          </p>

          {/* Value Proposition */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200/50 dark:bg-gray-800/50 dark:border-gray-700/50">
              <Code className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              <span className="text-gray-700 font-medium dark:text-gray-200">
                Clean Code
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200/50 dark:bg-gray-800/50 dark:border-gray-700/50">
              <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 font-medium dark:text-gray-200">
                Lightning Fast
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200/50 dark:bg-gray-800/50 dark:border-gray-700/50">
              <Shield className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              <span className="text-gray-700 font-medium dark:text-gray-200">
                Secure & Reliable
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center items-center">
            <Link to="/">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-l from-emerald-500 via-neutral/10 to-blue-500 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 text-white border-0 font-medium"
                onClick={() => {
                  scrollToSection("#projects");
                }}
              >
                View My Work
                <ArrowRight className="ml-3 size-4 " />
              </Button>
            </Link>
            {/* <Link to="/"> */}
            <a href="/JeremiahLongmatey.pdf">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 transform hover:scale-105 transition-all duration-200 backdrop-blur-sm font-semibold dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-900/20"
              >
                Download Resume
                <DownloadCloud className="ml-3 size-4" />
              </Button>
            </a>
            {/* </Link> */}
          </div>

          {/* Enhanced Trust Indicators */}
          {/* <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-500 mb-16 dark:text-gray-400">
            <div className="flex items-center">
              <div className="flex -space-x-1 mr-3">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg shadow-cyan-500/25 dark:from-cyan-700 dark:to-blue-800 dark:border-gray-900 dark:shadow-cyan-700/25"
                  >
                    <Users className="h-4 w-4 text-white" />
                  </div>
                ))}
              </div>
              <span className="text-gray-700 font-medium dark:text-gray-200">
                50+ Projects Delivered
              </span>
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2 drop-shadow-lg dark:text-yellow-300" />
              <span className="text-gray-700 font-medium dark:text-gray-200">
                5+ Years Experience
              </span>
            </div>
            <div className="flex items-center">
              <Globe className="w-5 h-5 text-emerald-400 mr-2 dark:text-emerald-300" />
              <span className="text-gray-700 font-medium dark:text-gray-200">
                Global Reach
              </span>
            </div>
          </div> */}

          {/* Featured Technologies */}
          {/* <div className="mb-16">
            <h3 className="text-lg font-semibold text-gray-700 mb-6 dark:text-gray-300">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "React",
                "TypeScript",
                "Node.js",
                "Next.js",
                "Tailwind CSS",
                "PostgreSQL",
                "AWS",
                "Docker",
              ].map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-gray-200/50 text-gray-700 font-medium hover:bg-white/90 transition-all duration-200 cursor-pointer dark:bg-gray-800/70 dark:border-gray-700/50 dark:text-gray-200 dark:hover:bg-gray-900/70"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div> */}

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-200/50 dark:from-cyan-900/20 dark:to-blue-900/20 dark:border-cyan-700/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto dark:text-gray-300">
              Let's link up and make some epic digital stuff happen.
            </p>
            <Link to="/">
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold dark:from-emerald-600 dark:to-teal-700 dark:hover:from-emerald-700 dark:hover:to-teal-800"
                onClick={onContactClick}
              >
                Let's Talk
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
