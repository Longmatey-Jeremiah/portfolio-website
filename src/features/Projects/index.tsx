import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Eye,
  Code,
  Globe,
  Zap,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: "web" | "mobile" | "fullstack" | "ui/ux";
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and payment processing.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "TypeScript", "Stripe", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true,
    category: "fullstack",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    technologies: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true,
    category: "web",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with interactive maps, detailed forecasts, and location-based weather alerts.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
    technologies: ["React", "D3.js", "OpenWeather API", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: false,
    category: "web",
  },
  {
    id: 4,
    title: "Fitness Tracking Mobile App",
    description:
      "A comprehensive fitness tracking app with workout plans, progress tracking, and social features for motivation.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true,
    category: "mobile",
  },
  {
    id: 5,
    title: "Design System Library",
    description:
      "A comprehensive design system with reusable components, documentation, and design tokens for consistent UI development.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    technologies: ["Storybook", "TypeScript", "Tailwind CSS", "Figma"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: false,
    category: "ui/ux",
  },
  {
    id: 6,
    title: "AI Chat Application",
    description:
      "An intelligent chat application powered by AI with natural language processing and contextual responses.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    technologies: ["Next.js", "OpenAI API", "Socket.io", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: false,
    category: "fullstack",
  },
];

const categories = [
  { id: "all", name: "All Projects", icon: Code },
  { id: "web", name: "Web Apps", icon: Globe },
  { id: "mobile", name: "Mobile Apps", icon: Zap },
  { id: "fullstack", name: "Full Stack", icon: Star },
  { id: "ui/ux", name: "UI/UX Design", icon: Eye },
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
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-cyan-200/30 to-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-teal-300/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 border border-cyan-200 mb-8">
            <Code className="w-4 h-4 text-cyan-600 mr-2" />
            <span className="text-sm font-medium text-cyan-700">
              Featured Work
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
                    : "bg-white/50 backdrop-blur-sm border border-gray-200/50 text-gray-700 hover:bg-white/80 hover:border-cyan-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/50 hover:border-cyan-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-medium rounded-full">
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="bg-white/90 text-gray-900 hover:bg-white"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/90 text-white hover:bg-white/10"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 text-xs font-medium rounded-full border border-cyan-200/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-cyan-200 text-cyan-600 hover:bg-cyan-50"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-gray-200 text-gray-600 hover:bg-gray-50"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Have a project in mind?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's collaborate and bring your ideas to life with cutting-edge
              technology and exceptional design.
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
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-200 text-cyan-600 hover:bg-cyan-50"
              >
                View More Work
                <Eye className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
