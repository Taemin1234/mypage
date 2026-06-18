import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import { useState } from 'react';
import { projects } from '../data/Projects'


export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section className="mb-16 sm:mb-20 lg:mb-24">
      <div className="mb-6 sm:mb-8 lg:mb-10 border-b border-slate-200 pb-4">
        <h2 className="text-slate-950">Frontend Projects</h2>
        <p className="text-slate-500 text-sm sm:text-base mt-2">
          직접 기획하고 구현하며 UI 흐름과 상태 관리 방식을 실험한 개인 프로젝트입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
        {[...projects].reverse().map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
