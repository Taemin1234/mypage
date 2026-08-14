import type { ReactNode } from "react";
import { Cpu, Database, Layout, Wrench } from "@phosphor-icons/react";

interface Skill {
  name: string;
  level: 1 | 2 | 3 | 4;
}

interface SkillCategory {
  title: string;
  icon: ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Layout className="size-5" aria-hidden="true" />,
    skills: [
      { name: "React", level: 3 },
      { name: "TypeScript", level: 2 },
      { name: "JavaScript", level: 3 },
      { name: "Tailwind CSS", level: 3 },
      { name: "Next.js", level: 3 },
      { name: "HTML/CSS", level: 4 },
      { name: "CSS Module", level: 4 },
    ],
  },
  {
    title: "Backend & DB",
    icon: <Database className="size-5" aria-hidden="true" />,
    skills: [
      { name: "Node.js + Express", level: 2 },
      { name: "MongoDB + Mongoose", level: 2 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: <Wrench className="size-5" aria-hidden="true" />,
    skills: [
      { name: "Git", level: 3 },
      { name: "Vercel", level: 3 },
      { name: "AWS EB", level: 3 },
      { name: "AWS", level: 1 },
      { name: "Cloudinary", level: 3 },
    ],
  },
  {
    title: "Other",
    icon: <Cpu className="size-5" aria-hidden="true" />,
    skills: [
      { name: "Figma", level: 3 },
      { name: "Jira", level: 3 },
      { name: "Zeplin", level: 3 },
    ],
  },
];

export function Skills() {
  return (
    <section className="mb-24 sm:mb-28 lg:mb-32">
      <div className="mb-8 border-b border-token pb-5 sm:mb-10">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-copy mt-3">
          자주 쓰는 기술과 실제 작업에서 다뤄본 도구를 중심으로 정리했습니다.
        </p>
      </div>

      <div className="content-surface grid overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category) => {
          const sortedSkills = [...category.skills].sort((a, b) => b.level - a.level);

          return (
            <article
              key={category.title}
              className="border-b border-token p-6 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0 lg:p-7"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="accent-soft control-shape grid size-10 place-items-center">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold tracking-[-0.02em] text-primary">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-0">
                {sortedSkills.map((skill) => (
                  <li
                    key={skill.name}
                    className="border-b border-token py-2.5 text-sm font-medium text-secondary last:border-b-0"
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
