import React, { useState } from "react";
import {
  Code,
  // Database,
  Globe,
  Smartphone,
  Palette,
  Zap,
  TrendingUp,
  // Star,
  // CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SkillCard } from "@/components/common/SkillCard";

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
    color: "from-blue-500 to-blue-600",
  },
  // {
  //   id: "backend",
  //   name: "Backend Development",
  //   icon: Code,
  //   description: "Server-side logic and APIs",
  //   color: "from-blue-500 to-blue-600",
  // },
  // {
  //   id: "database",
  //   name: "Database & Storage",
  //   icon: Database,
  //   description: "Data management and optimization",
  //   color: "from-blue-500 to-blue-600",
  // },
  {
    id: "mobile",
    name: "Mobile Development",
    icon: Smartphone,
    description: "Cross-platform mobile applications",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "design",
    name: "UI/UX Design",
    icon: Palette,
    description: "User interface and experience design",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "tools",
    name: "Tools & DevOps",
    icon: Zap,
    description: "Development tools and deployment",
    color: "from-blue-500 to-blue-600",
  },
];

const skills: Skill[] = [
  // Frontend Skills
  {
    id: "react",
    name: "React",
    category: "frontend",
    proficiency: 75,
    icon: "⚛️",
    description:
      "Modern React with hooks, context, and performance optimization",
    experience: "2+ years",
    featured: false,
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    proficiency: 75,
    icon: "📘",
    description: "Type-safe JavaScript development with advanced patterns",
    experience: "2+ years",
    featured: false,
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    proficiency: 70,
    icon: "▲",
    description: "Full-stack React framework with SSR and SSG",
    experience: "2+ years",
    featured: false,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    proficiency: 86,
    icon: "🎨",
    description: "Utility-first CSS framework for rapid UI development",
    experience: "2+ years",
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
  // {
  //   id: "nodejs",
  //   name: "Node.js",
  //   category: "backend",
  //   proficiency: 50,
  //   icon: "🟢",
  //   description:
  //     "Server-side JavaScript with Express and performance optimization",
  //   experience: "1+ years",
  //   featured: false,
  // },
  // {
  //   id: "python",
  //   name: "Python",
  //   category: "backend",
  //   proficiency: 25,
  //   icon: "🐍",
  //   description: "Backend development with Django and FastAPI",
  //   experience: "6 months",
  //   featured: false,
  // },

  // Database Skills
  // {
  //   id: "mongodb",
  //   name: "MongoDB",
  //   category: "database",
  //   proficiency: 85,
  //   icon: "🍃",
  //   description: "NoSQL database with aggregation and optimization",
  //   experience: "3+ years",
  //   featured: false,
  // },
  // {
  //   id: "postgresql",
  //   name: "PostgreSQL",
  //   category: "database",
  //   proficiency: 80,
  //   icon: "🐘",
  //   description: "Advanced open-source relational database",
  //   experience: "3+ years",
  //   featured: false,
  // },

  // Mobile Skills
  {
    id: "react-native",
    name: "React Native",
    category: "mobile",
    proficiency: 70,
    icon: "📱",
    description: "Cross-platform mobile app development",
    experience: "2+ years",
    featured: false,
  },
  {
    id: "expo",
    name: "Expo",
    category: "mobile",
    proficiency: 65,
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
    proficiency: 50,
    icon: "🎯",
    description: "Collaborative interface design and prototyping",
    experience: "2+ years",
    featured: false,
  },

  // Tools Skills
  {
    id: "git",
    name: "Git",
    category: "tools",
    proficiency: 70,
    icon: "📝",
    description: "Version control and collaborative development",
    experience: "3+ years",
    featured: false,
  },
  {
    id: "docker",
    name: "Docker",
    category: "tools",
    proficiency: 45,
    icon: "🐳",
    description: "Containerization and deployment",
    experience: "2+ years",
    featured: false,
  },
];

interface SkillsSectionProps {
  onContactClick: () => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  onContactClick,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  // const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  const getCategoryColor = (categoryId: string) => {
    const category = skillCategories.find((cat) => cat.id === categoryId);
    return category?.color || "from-gray-500 to-gray-600";
  };

  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 90) return "from-blue-500 to-blue-600";
    if (proficiency >= 80) return "from-blue-400 to-blue-500";
    if (proficiency >= 70) return "from-blue-300 to-blue-400";
    return "from-gray-500 to-gray-600";
  };

  const getProficiencyText = (proficiency: number) => {
    if (proficiency >= 90) return "Expert";
    if (proficiency >= 80) return "Advanced";
    if (proficiency >= 60) return "Intermediate";
    return "Beginner";
  };

  return (
    <section className="relative py-24 bg-gradient-to-tr from-slate-100 via-white to-blue-50 overflow-hidden dark:from-black/15 dark:via-black/25 dark:to-black/5">
      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 border border-cyan-200 mb-8 dark:from-cyan-900/50 dark:to-blue-900/50 dark:border-cyan-700">
            <Code className="w-4 h-4 text-cyan-600 mr-2" />
            <span className="text-sm font-medium text-cyan-700">
              Technical Expertise
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 dark:text-white">
            Skills &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed dark:text-gray-400">
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
                : "bg-white/50 backdrop-blur-sm border border-gray-200/50 text-gray-700 hover:bg-white/80 hover:border-cyan-200 dark:bg-gray-800/50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700/50 dark:hover:border-cyan-600"
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
                    : "bg-white/50 backdrop-blur-sm border border-gray-200/50 text-gray-700 hover:bg-white/80 hover:border-cyan-200 dark:bg-gray-800/50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700/50 dark:hover:border-cyan-600"
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
            <SkillCard
              key={skill.id}
              skill={skill}
              getCategoryColor={getCategoryColor}
              getProficiencyColor={getProficiencyColor}
              getProficiencyText={getProficiencyText}
              skillCategories={skillCategories}
              // setHoveredSkill={setHoveredSkill}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 max-w-2xl mx-auto dark:bg-zinc-700/20 dark:border-zinc-700/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">
              Ready to collaborate?
            </h3>
            <p className="text-gray-600 mb-6 dark:text-gray-300">
              Let's discuss how my technical expertise can help bring your
              project to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/JeremiahLongmatey.pdf">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/25"
                >
                  View Resume
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-200 text-cyan-600 hover:bg-cyan-50"
                onClick={onContactClick}
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
