import React, { useState } from "react";
import { Code, Globe, Zap, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/common/ProjectCard";
import type { Project } from "@/components/common/ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "Papermap Inventory",
    description:
      " AI-powered inventory management that cuts costs by 85% and eliminates stockouts forever. Join multiple businesses already saving millions.",
    image: "/screenshots/papermap_inventory.png",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://inventory.papermap.ai/",
    // githubUrl: "https://github.com/example",
    featured: true,
    category: "web",
  },
  {
    id: 2,
    title: "Papermap AI",
    description:
      "No-Code Data Platform, For Your Lean Team. Connect raw data in seconds. Get realtime insights, discover opportunities and automate operations with AI tailored to your business. ",
    image: "/screenshots/papermap.png",

    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://papermap.ai",
    // githubUrl: "https://github.com/example",
    featured: true,
    category: "web",
  },
  {
    id: 3,
    title: "Symliq Developers",
    description:
      "Website for Symliq Developers, a company that builds software solutions that drives growth. Transform your vision into reality with tailored software solutions that empower your business to thrive and exceed expectations.",
    image: "/screenshots/symliq.png",
    technologies: ["React", "Tailwind CSS"],
    liveUrl: "https://symliq.com/",
    // githubUrl: "https://github.com/example",
    featured: true,
    category: "web",
  },
  {
    id: 4,
    title: "Acacia Mobile App",
    description:
      "Acacia Health Insurance (Acacia) is a Private Commercial Health Insurance Company registered under the laws of Ghana which operates for the benefit of its members and this app presents Acacia with a platform tailor measured for this sole purpose.",
    image: "/screenshots/acacia_mobile.webp",
    technologies: ["React Native", "Redux", "Expo", "TypeScript"],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.acacia.acaciahealthinsurance",
    // githubUrl: "https://github.com/example",
    featured: true,
    category: "mobile",
  },
];

const categories = [
  { id: "all", name: "All Projects", icon: Code },
  { id: "web", name: "Web Apps", icon: Globe },
  { id: "mobile", name: "Mobile Apps", icon: Zap },
  // { id: "fullstack", name: "Full Stack", icon: Star },
  // { id: "ui/ux", name: "UI/UX Design", icon: Eye },
];

interface ProjectsSectionProps {
  onContactClick: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onContactClick,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-gray-100 to-blue-50 overflow-hidden dark:from-black/1 dark:via-black/25 dark:to-black/10">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 right-10 w-172 h-172 bg-gradient-to-br from-cyan-200/10 to-blue-300/10 dark:from-gray-600/20 dark:to-blue-600/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-30 left-10 w-196 h-196 bg-gradient-to-br from-emerald-200/10 to-teal-300/10 dark:from-emerald-600/10 dark:to-teal-600/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s", animationDuration: "8s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 border border-cyan-200 mb-8 dark:from-cyan-900/50 dark:to-blue-900/50 dark:border-cyan-700">
            <Code className="w-4 h-4 text-cyan-600 mr-2 dark:text-cyan-400" />
            <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
              Featured Work
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 dark:text-white">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed dark:text-gray-400">
            Explore a collection of my latest work, showcasing innovative
            solutions and cutting-edge technologies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-200 font-medium ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                    : "bg-white/50 backdrop-blur-sm border border-gray-200/50 text-gray-700 hover:bg-white/80 hover:border-cyan-200 dark:bg-zinc-800/50 dark:border-zinc-700/50 dark:text-gray-300 dark:hover:bg-zinc-700/50 dark:hover:border-cyan-600"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 max-w-2xl mx-auto dark:bg-zinc-700/20 dark:border-zinc-700/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">
              Have a project in mind?
            </h3>
            <p className="text-gray-600 mb-6 dark:text-gray-400">
              Let's link up and bring your wild ideas to life with some
              next-level tech and 🔥 design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/25"
                onClick={onContactClick}
              >
                Start a Project
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="border-cyan-200 text-cyan-600 hover:bg-cyan-50 dark:border-cyan-700 dark:text-cyan-400 dark:hover:bg-cyan-900/20"
              >
                View More Work
                <Eye className="ml-2 h-4 w-4" />
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
