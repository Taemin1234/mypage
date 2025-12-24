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
      className="group relative bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-200 cursor-pointer"
      onClick={onClick}
    >
      {/* Project Image */}
      {project.image && (
        <div className="relative h-40 sm:h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover block group-hover:scale-105 transition-transform duration-300"
          />
          <div className={`absolute inset-0 opacity-20`}></div>
        </div>
      )}
      
      {/* Color accent bar */}
      <div className={`h-1.5 sm:h-2 bg-gradient-to-r ${project.color}`}></div>
      
      <div className="p-4 sm:p-5 lg:p-6">
        {/* Project name with gradient on hover */}
        <h3 className="mb-2 sm:mb-3 text-slate-900 group-hover:text-slate-700 transition-all duration-300">
          {project.name}
        </h3>
        
        {/* Description */}
        <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 sm:px-3 py-0.5 sm:py-1 bg-slate-50 text-slate-600 rounded-full text-xs sm:text-sm border border-slate-200 hover:border-slate-300 hover:bg-slate-100 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex flex-wrap gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-slate-100">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 hover:shadow-md transition-all duration-200 text-xs sm:text-sm"
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
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 hover:scale-105 transition-all duration-200 text-xs sm:text-sm"
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
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 hover:scale-105 transition-all duration-200 text-xs sm:text-sm"
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
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 hover:scale-105 transition-all duration-200 text-xs sm:text-sm"
            >
              <ExternalLink className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
      
      {/* Decorative gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
    </div>
  );
}