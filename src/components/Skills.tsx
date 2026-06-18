import React from 'react'
import { Database, Layout, Wrench, Cpu } from "lucide-react";

interface Skill {
  name: string;
  level: 1 | 2 | 3 | 4; // 1: Beginner, 2: Intermediate, 3: Advanced, 4: Expert
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    skills: [
      { name: "React", level: 3 },
      { name: "TypeScript", level: 2 },
      { name: "JavaScript", level: 3 },
      { name: "Tailwind CSS", level: 3 },
      { name: "Next.js", level: 3 },
      { name: "HTML/CSS", level: 4 },
      { name: "CSS Module", level: 4 },
    ],
    color: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    title: "Backend & DB",
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: "Node.js + Express", level: 2 },
      { name: "MongoDB + Mongoose", level: 2 },
    ],
    color: "bg-emerald-50 text-emerald-600 border-emerald-200",
  },
  {
    title: "Tools & DevOps",
    icon: <Wrench className="w-5 h-5" />,
    skills: [
      { name: "Git", level: 3 },
      { name: "Vercel", level: 3 },
      { name: "AWS EB", level: 3 },
      { name: "AWS", level: 1 },
      { name: "Cloudianry", level: 3 },
    ],
    color: "bg-violet-50 text-violet-600 border-violet-200",
  },
  {
    title: "Other",
    icon: <Cpu className="w-5 h-5" />,
    skills: [
      { name: "Figma", level: 3 },
      { name: "Jira", level: 3 },
      { name: "Zeplin", level: 3 },
    ],
    color: "bg-amber-50 text-amber-600 border-amber-200",
  },
];

export function Skills() {
  return (
    <section className="mb-16 sm:mb-24">
      <div className="mb-6 sm:mb-8 border-b border-slate-200 pb-4">
        <h2 className="text-slate-950">Technical Skills</h2>
        <p className="text-slate-500 text-sm sm:text-base mt-2">
          자주 쓰는 기술과 실제 작업에서 다뤄본 도구를 중심으로 정리했습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {skillCategories.map((category, index) => {
          // Sort skills by level descending
          const sortedSkills = [...category.skills].sort((a, b) => b.level - a.level);

          return (
            <div
              key={index}
              className="bg-white rounded-lg p-5 sm:p-6 border border-slate-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-md ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-slate-800">{category.title}</h3>
              </div>

              <div className="flex flex-col gap-2">
                {sortedSkills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between px-3 py-2 bg-slate-50 text-slate-700 rounded-md border border-slate-100 group"
                  >
                    <span className="text-sm font-medium">{skill.name}</span>
                    <div className="flex gap-0.5" aria-label={`Level ${skill.level} of 4`}>
                      {[1, 2, 3, 4].map((level) => (
                        <div
                          key={level}
                          className={`w-1.5 h-1.5 rounded-full ${level <= skill.level
                            ? "bg-slate-400 group-hover:bg-slate-600"
                            : "bg-slate-200"
                            } transition-colors`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
