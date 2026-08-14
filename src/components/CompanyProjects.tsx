import { useRef, useState } from 'react';
import { companyProjects } from '../data/CompanyProjects';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';

export function CompanyProjects() {
  const [selectedProject, setSelectedProject] = useState<typeof companyProjects[0] | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const openProject = (project: typeof companyProjects[0]) => {
    lastTriggerRef.current = document.activeElement as HTMLButtonElement | null;
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
    requestAnimationFrame(() => lastTriggerRef.current?.focus());
  };

  return (
    <section className="mb-24 sm:mb-28 lg:mb-32">
      <div className="mb-3 border-b border-token pb-5 sm:mb-5">
        <h2 className="section-title">Company Projects</h2>
        <p className="section-copy mt-3">
          운영 환경과 협업 기준 안에서 화면 구현, 접근성, 유지보수성을 다뤘던 실무 작업입니다.
        </p>
      </div>

      <div>
        {[...companyProjects].reverse().map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            variant="row"
            onClick={() => openProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={closeProject}
        />
      )}
    </section>
  );
}
