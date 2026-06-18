import { ExternalLink, Github, FileText, ScrollText } from 'lucide-react';

interface ProjectCardProps {
  project: {
    name: string;
    description: string;
    tags: string[];
    links: {
      detail?: string;
      github?: string;
      live?: string;
    };
    color: string;
    image?: string;
  };
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div 
      className="group relative bg-white rounded-lg overflow-hidden border border-slate-200 cursor-pointer transition-colors duration-200 hover:border-slate-300"
      onClick={onClick}
    >
      {project.image && (
        <div className="relative h-40 sm:h-48 overflow-hidden bg-slate-100">
          <img 
            src={project.image} 
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover block"
          />
        </div>
      )}

      <div className="p-4 sm:p-5 lg:p-6">
        <h3 className="mb-2 sm:mb-3 text-slate-950 transition-colors duration-200 group-hover:text-slate-700">
          {project.name}
        </h3>

        <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 sm:px-3 py-0.5 sm:py-1 bg-slate-50 text-slate-600 rounded-md text-xs sm:text-sm border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-slate-100">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors duration-200 text-xs sm:text-sm"
          >
            <FileText className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            <span>상세보기</span>
          </button>
          
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-slate-700 rounded-md border border-slate-200 hover:bg-slate-50 transition-colors duration-200 text-xs sm:text-sm"
            >
              <Github className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              <span>GitHub</span>
            </a>
          )}

          
          {project.links.detail && (
            <a
              href={project.links.detail}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-slate-700 rounded-md border border-slate-200 hover:bg-slate-50 transition-colors duration-200 text-xs sm:text-sm"
            >
              <ScrollText className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              <span>노션페이지</span>
            </a>
          )}
          
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-slate-700 rounded-md border border-slate-200 hover:bg-slate-50 transition-colors duration-200 text-xs sm:text-sm"
            >
              <ExternalLink className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
