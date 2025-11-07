import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Project {
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

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
      key={project.id}
      className="group relative bg-white/50 dark:bg-secondary dark:bg-gradient-to-br dark:from-gray-700/5 dark:via-gray-700/15 dark:to-gray-700/30 backdrop-blur-sm dark:bg-transparent rounded-2xl overflow-hidden border border-gray-200/50 hover:border-blue-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 dark:border-zinc-700/50 dark:hover:border-blue-700/50 dark:hover:shadow-blue-700/10"
    >
      {/* Project Image */}
      <div className="relative h-60 sm:h-80 overflow-hidden">
        {/* Modern Screenshot Container */}

        <div className="relative group m-2">
          {/* Main Screenshot Container */}
          <div className="relative w-full max-w-2xl mx-auto">
            {/* Desktop Browser Frame */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-zinc-700/20">
              {/* Browser Header */}
              <div className="bg-gray-100 dark:bg-zinc-800/80 px-6 py-3 flex items-center justify-between border-b border-gray-200 dark:border-zinc-700/20">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="flex-1 max-w-md mx-4">
                  <div className="bg-white dark:bg-zinc-700/80 rounded-lg px-4 py-2 text-sm text-gray-600 dark:text-primary border border-gray-300 dark:border-zinc-700/30 flex items-center">
                    {project.liveUrl}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="size-4 bg-gray-300 rounded" />
                  <div className="size-4 bg-gray-300 rounded" />
                </div>
              </div>

              {/* Screenshot Container */}
              <div className="relative flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-fill"
                />
              </div>
            </div>
          </div>

          {/* Subtle Background Decorative Elements */}
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-100 rounded-full opacity-20 blur-xl"></div>
          <div
            className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br from-blue-100/20 to-blue-100/30 rounded-full opacity-20 blur-xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Featured Badge */}
        {/* {project.featured && (
          <div className="absolute -top-4 -left-4">
            <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-medium rounded-full">
              <Star className="w-3 h-3" />
              Featured
            </div>
          </div>
        )} */}

        {/* Action Buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.liveUrl && (
            <Button
              size="sm"
              className="bg-white/90 text-gray-900 hover:bg-white dark:bg-zinc-800/90 dark:text-gray-100 dark:hover:bg-zinc-700 text-base"
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
              className="border-white/90 text-white hover:bg-white/10 dark:border-zinc-700/90 dark:text-gray-200 dark:hover:bg-zinc-800/20 text-base"
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
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 dark:text-white dark:group-hover:text-blue-400">
          {project.title}
        </h3>

        <p className="text-gray-600 mb-4 leading-relaxed dark:text-gray-400 text-base">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-100 text-blue-700 text-sm font-medium rounded-full border border-blue-200/50 dark:from-blue-900/50 dark:to-blue-900/50 dark:text-blue-300 dark:border-blue-700/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
