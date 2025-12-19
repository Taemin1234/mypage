import { ExternalLink, Github, FileText } from 'lucide-react';

interface PlaygroundCardProps {
  experiment: {
    name: string;
    description: string;
    tags: string[];
    links: {
      detail?: string;
      github?: string;
      live?: string;
    };
    image?: string;
  };
  onClick: () => void;
}

export function PlaygroundCard({ experiment, onClick }: PlaygroundCardProps) {
  return (
    <div 
      className="group bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-slate-200 hover:border-slate-300 cursor-pointer"
      onClick={onClick}
    >
      {/* Experiment Image */}
      {experiment.image && (
        <div className="relative h-32 sm:h-36 overflow-hidden">
          <img 
            src={experiment.image} 
            alt={experiment.name}
            className="absolute inset-0 w-full h-full object-cover block group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-600 to-transparent opacity-20"></div>
        </div>
      )}

      <div className="p-4 sm:p-5">
        {/* Name */}
        <h4 className="mb-1.5 sm:mb-2 text-slate-900 group-hover:text-slate-700 transition-colors duration-200">
          {experiment.name}
        </h4>
        
        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4 leading-relaxed">
          {experiment.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {experiment.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-0.5 sm:py-1 bg-amber-50 text-amber-700 rounded-md text-xs border border-amber-200"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex gap-2 sm:gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="flex items-center gap-1 text-xs text-slate-600 hover:text-slate-800 transition-colors"
          >
            <FileText className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            <span>상세</span>
          </button>
          
          {experiment.links.github && (
            <a
              href={experiment.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Github className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
              <span>GitHub</span>
            </a>
          )}
          
          {experiment.links.live && (
            <a
              href={experiment.links.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-xs text-slate-600 hover:text-indigo-600 transition-colors"
            >
              <ExternalLink className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
      
      {/* Accent border bottom */}
      <div className="h-0.5 sm:h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
}