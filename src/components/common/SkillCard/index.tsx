import React from "react";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

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

interface SkillCardProps {
  skill: Skill;
  getCategoryColor: (categoryId: string) => string;
  getProficiencyColor: (proficiency: number) => string;
  getProficiencyText: (proficiency: number) => string;
  skillCategories: SkillCategory[];
  //   setHoveredSkill: (skillId: string | null) => void;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  // getCategoryColor,
  getProficiencyColor,
  getProficiencyText,
  // skillCategories,
  //   setHoveredSkill,
}) => {
  return (
    <div
      key={skill.id}
      className="group relative bg-gradient-to-br from-black/1 via-black/2 to-black/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:border-blue-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 dark:from-gray-700/10 dark:via-gray-700/15 dark:to-gray-700/30 dark:border-zinc-700/50 dark:hover:border-blue-600/50 dark:hover:shadow-blue-900/20"
      //   onMouseEnter={() => setHoveredSkill(skill.id)}
      //   onMouseLeave={() => setHoveredSkill(null)}
    >
      {/* Featured Badge */}
      {skill.featured && (
        <div className="absolute -top-2 -right-2">
          <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-blue-400 to-blue-500 text-white text-xs font-medium rounded-full">
            <Star className="w-3 h-3" />
            Featured
          </div>
        </div>
      )}

      {/* Skill Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="text-2xl">{skill.icon}</div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 dark:text-white dark:group-hover:text-blue-500">
            {skill.name}
          </h3>
          <p className="text-base text-gray-500 dark:text-gray-400">
            {skill.experience}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4 text-base leading-relaxed dark:text-gray-300">
        {skill.description}
      </p>

      {/* Proficiency Bar */}
      <div className="mb-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Proficiency
          </span>
          <span className="text-base font-bold text-gray-900 dark:text-white">
            {skill.proficiency}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
          <div
            className={`h-2 rounded-full bg-gradient-to-r ${getProficiencyColor(
              skill.proficiency
            )} transition-all duration-500 ease-out`}
            style={{ width: `${skill.proficiency}%` }}
          />
        </div>
        <div className="flex justify-between items-center mt-1">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {getProficiencyText(skill.proficiency)}
          </span>
          <CheckCircle className="w-3 h-3 text-blue-500" />
        </div>
      </div>

      {/* Category Badge */}
      {/* <div className="flex justify-between items-center">
        <span
          className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(
            skill.category
          )} text-white text-xs font-medium rounded-full`}
        >
          {skillCategories.find((cat) => cat.id === skill.category)?.name}
        </span>
        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-600 transition-colors duration-200 dark:text-gray-500 dark:group-hover:text-cyan-500" />
      </div> */}
    </div>
  );
};
