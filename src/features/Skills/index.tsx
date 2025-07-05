import React, { useState } from "react";
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Palette,
  Zap,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Skill {
  id: string;
  name: string;
  category: "frontend" | "backend" | "database" | "mobile" | "design" | "tools";
  proficiency: number; // 0-100
  icon: string;
  description: string;
  experience: string;
  featured: boolean;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  description: string;
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend Development",
    icon: Globe,
    description: "Modern web interfaces and user experiences",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "backend",
    name: "Backend Development",
    icon: Code,
    description: "Server-side logic and APIs",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "database",
    name: "Database & Storage",
    icon: Database,
    description: "Data management and optimization",
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: "mobile",
    name: "Mobile Development",
    icon: Smartphone,
    description: "Cross-platform mobile applications",
    color: "from-orange-500 to-red-600",
  },
  {
    id: "design",
    name: "UI/UX Design",
    icon: Palette,
    description: "User interface and experience design",
    color: "from-pink-500 to-rose-600",
  },
  {
    id: "tools",
    name: "Tools & DevOps",
    icon: Zap,
    description: "Development tools and deployment",
    color: "from-yellow-500 to-amber-600",
  },
];

const skills: Skill[] = [
  // Frontend Skills
  {
    id: "react",
    name: "React",
    category: "frontend",
    proficiency: 95,
    icon: "⚛️",
    description:
      "Modern React with hooks, context, and performance optimization",
    experience: "4+ years",
    featured: true,
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    proficiency: 90,
    icon: "📘",
    description: "Type-safe JavaScript development with advanced patterns",
    experience: "3+ years",
    featured: true,
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    proficiency: 88,
    icon: "▲",
    description: "Full-stack React framework with SSR and SSG",
    experience: "2+ years",
    featured: true,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    proficiency: 92,
    icon: "🎨",
    description: "Utility-first CSS framework for rapid UI development",
    experience: "3+ years",
    featured: false,
  },
  {
    id: "vue",
    name: "Vue.js",
    category: "frontend",
    proficiency: 75,
    icon: "💚",
    description: "Progressive JavaScript framework",
    experience: "2+ years",
    featured: false,
  },

  // Backend Skills
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    proficiency: 88,
    icon: "🟢",
    description:
      "Server-side JavaScript with Express and performance optimization",
    experience: "4+ years",
    featured: true,
  },
  {
    id: "python",
    name: "Python",
    category: "backend",
    proficiency: 82,
    icon: "🐍",
    description: "Backend development with Django and FastAPI",
    experience: "3+ years",
    featured: true,
  },
  {
    id: "express",
    name: "Express.js",
    category: "backend",
    proficiency: 85,
    icon: "🚀",
    description: "Fast, unopinionated web framework for Node.js",
    experience: "3+ years",
    featured: false,
  },
  {
    id: "graphql",
    name: "GraphQL",
    category: "backend",
    proficiency: 78,
    icon: "🔷",
    description: "Query language and runtime for APIs",
    experience: "2+ years",
    featured: false,
  },

  // Database Skills
  {
    id: "mongodb",
    name: "MongoDB",
    category: "database",
    proficiency: 85,
    icon: "🍃",
    description: "NoSQL database with aggregation and optimization",
    experience: "3+ years",
    featured: true,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "database",
    proficiency: 80,
    icon: "🐘",
    description: "Advanced open-source relational database",
    experience: "3+ years",
    featured: true,
  },
  {
    id: "redis",
    name: "Redis",
    category: "database",
    proficiency: 75,
    icon: "🔴",
    description: "In-memory data structure store",
    experience: "2+ years",
    featured: false,
  },

  // Mobile Skills
  {
    id: "react-native",
    name: "React Native",
    category: "mobile",
    proficiency: 82,
    icon: "📱",
    description: "Cross-platform mobile app development",
    experience: "2+ years",
    featured: true,
  },
  {
    id: "expo",
    name: "Expo",
    category: "mobile",
    proficiency: 78,
    icon: "⚡",
    description: "React Native development platform",
    experience: "2+ years",
    featured: false,
  },

  // Design Skills
  {
    id: "figma",
    name: "Figma",
    category: "design",
    proficiency: 85,
    icon: "🎯",
    description: "Collaborative interface design and prototyping",
    experience: "3+ years",
    featured: true,
  },
  {
    id: "storybook",
    name: "Storybook",
    category: "design",
    proficiency: 80,
    icon: "📚",
    description: "Component development and documentation",
    experience: "2+ years",
    featured: false,
  },

  // Tools Skills
  {
    id: "git",
    name: "Git",
    category: "tools",
    proficiency: 90,
    icon: "📝",
    description: "Version control and collaborative development",
    experience: "4+ years",
    featured: true,
  },
  {
    id: "docker",
    name: "Docker",
    category: "tools",
    proficiency: 75,
    icon: "🐳",
    description: "Containerization and deployment",
    experience: "2+ years",
    featured: false,
  },
  {
    id: "aws",
    name: "AWS",
    category: "tools",
    proficiency: 70,
    icon: "☁️",
    description: "Cloud infrastructure and services",
    experience: "2+ years",
    featured: false,
  },
];

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  const getCategoryColor = (categoryId: string) => {
    const category = skillCategories.find((cat) => cat.id === categoryId);
    return category?.color || "from-gray-500 to-gray-600";
  };

  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 90) return "from-emerald-500 to-green-600";
    if (proficiency >= 80) return "from-blue-500 to-cyan-600";
    if (proficiency >= 70) return "from-yellow-500 to-orange-600";
    return "from-gray-500 to-gray-600";
  };

  const getProficiencyText = (proficiency: number) => {
    if (proficiency >= 90) return "Expert";
    if (proficiency >= 80) return "Advanced";
    if (proficiency >= 70) return "Intermediate";
    return "Beginner";
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-200/30 to-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-teal-300/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 border border-cyan-200 mb-8">
            <Code className="w-4 h-4 text-cyan-600 mr-2" />
            <span className="text-sm font-medium text-cyan-700">
              Technical Expertise
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills &{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks I use
            to build exceptional digital experiences.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-200 font-medium ${
              selectedCategory === "all"
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                : "bg-white/50 backdrop-blur-sm border border-gray-200/50 text-gray-700 hover:bg-white/80 hover:border-cyan-200"
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            All Skills
          </button>
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-200 font-medium ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-white/50 backdrop-blur-sm border border-gray-200/50 text-gray-700 hover:bg-white/80 hover:border-cyan-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="group relative bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:border-cyan-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1"
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Featured Badge */}
              {skill.featured && (
                <div className="absolute -top-2 -right-2">
                  <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-medium rounded-full">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                </div>
              )}

              {/* Skill Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">{skill.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-cyan-600 transition-colors duration-200">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-500">{skill.experience}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {skill.description}
              </p>

              {/* Proficiency Bar */}
              <div className="mb-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-gray-600">
                    Proficiency
                  </span>
                  <span className="text-xs font-bold text-gray-900">
                    {skill.proficiency}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${getProficiencyColor(
                      skill.proficiency
                    )} transition-all duration-500 ease-out`}
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-gray-500">
                    {getProficiencyText(skill.proficiency)}
                  </span>
                  <CheckCircle className="w-3 h-3 text-emerald-500" />
                </div>
              </div>

              {/* Category Badge */}
              <div className="flex justify-between items-center">
                <span
                  className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(
                    skill.category
                  )} text-white text-xs font-medium rounded-full`}
                >
                  {
                    skillCategories.find((cat) => cat.id === skill.category)
                      ?.name
                  }
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-600 transition-colors duration-200" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to collaborate?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how my technical expertise can help bring your
              project to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/25"
              >
                View Resume
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-200 text-cyan-600 hover:bg-cyan-50"
              >
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
