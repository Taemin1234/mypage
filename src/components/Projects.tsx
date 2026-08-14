import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import { useRef, useState } from 'react';
import { projects } from '../data/Projects'


export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const orderedProjects = [...projects].reverse();
  const [featuredProject, ...otherProjects] = orderedProjects;

  const openProject = (project: typeof projects[0]) => {
    lastTriggerRef.current = document.activeElement as HTMLButtonElement | null;
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
    requestAnimationFrame(() => lastTriggerRef.current?.focus());
  };

  return (
    <section className="mb-24 sm:mb-28 lg:mb-32">
      <div className="mb-8 border-b border-token pb-5 sm:mb-10">
        <h2 className="section-title">Frontend Projects</h2>
        <p className="section-copy mt-3">
          직접 기획하고 구현하며 UI 흐름과 상태 관리 방식을 실험한 개인 프로젝트입니다.
        </p>
      </div>

      {featuredProject && (
        <ProjectCard
          project={featuredProject}
          variant="featured"
          onClick={() => openProject(featuredProject)}
        />
      )}

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
        {otherProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            variant="standard"
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
