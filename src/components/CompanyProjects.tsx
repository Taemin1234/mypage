import { useState } from 'react';
import { companyProjects } from '../data/CompanyProjects';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';

export function CompanyProjects() {
  const [selectedProject, setSelectedProject] = useState<typeof companyProjects[0] | null>(null);

  return (
    <section className="mb-16 sm:mb-20 lg:mb-24">
      <div className="mb-6 sm:mb-8 lg:mb-10 border-b border-slate-200 pb-4">
        <h2 className="text-slate-950">Company Projects</h2>
        <p className="text-slate-500 text-sm sm:text-base mt-2">
          운영 환경과 협업 기준 안에서 화면 구현, 접근성, 유지보수성을 다뤘던 실무 작업입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
        {[...companyProjects].reverse().map((project) => (
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
