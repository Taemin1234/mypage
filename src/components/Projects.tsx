import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import { Briefcase } from 'lucide-react';
import { useState } from 'react';
import { projects } from '../data/Projects'


export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section className="mb-16 sm:mb-20 lg:mb-24">
      <div className="flex items-center gap-3 mb-6 sm:mb-8 lg:mb-10">
        <div className="p-1.5 sm:p-2 bg-slate-700 rounded-lg shadow-md">
          <Briefcase className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
        </div>
        <h2 className="text-slate-900">Projects</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
        {projects.map((project) => (
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