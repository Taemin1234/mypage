import { Building2 } from 'lucide-react';
import { useState } from 'react';
import { companyProjects } from '../data/CompanyProjects';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';

export function CompanyProjects() {
  const [selectedProject, setSelectedProject] = useState<typeof companyProjects[0] | null>(null);

  return (
    <section className="mb-16 sm:mb-20 lg:mb-24">
      <div className="flex items-center gap-3 mb-6 sm:mb-8 lg:mb-10">
        <div className="p-1.5 sm:p-2 bg-slate-700 rounded-lg shadow-md">
          <Building2 className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
        </div>
        <div>
          <h2 className="text-slate-900">Company Projects</h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5 sm:mt-1">
            실무에서 참여한 회사 프로젝트
          </p>
        </div>
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
