import { X, ExternalLink, Github, Calendar, Users, Target, ScrollText } from 'lucide-react';
import { useEffect } from 'react';

interface ProjectDetailModalProps {
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
    fullDescription?: string;
    period?: string;
    team?: string;
    features?: string[];
    challenges?: string[];
    outcomes?: string[];
  };
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-3 sm:p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-5 sm:p-6 lg:p-8 border-b border-slate-200">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 hover:bg-slate-100 rounded-md transition-colors"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
          </button>
          
          <h2 className="mb-2 sm:mb-3 text-slate-950 pr-8 sm:pr-0">{project.name}</h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg">{project.description}</p>
          
          <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-6">
            {project.period && (
              <div className="flex items-center gap-2 text-slate-500">
                <Calendar className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                <span className="text-xs sm:text-sm">{project.period}</span>
              </div>
            )}
            {project.team && (
              <div className="flex items-center gap-2 text-slate-500">
                <Users className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                <span className="text-xs sm:text-sm">{project.team}</span>
              </div>
            )}
          </div>
        </div>

        {/* Project Image */}
        {project.image && (
          <div className="relative h-48 sm:h-64 lg:h-72 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-5 sm:p-6 lg:p-8">
          {/* Technologies */}
          <div className="mb-6 sm:mb-8">
            <h3 className="mb-3 sm:mb-4 text-slate-900 flex items-center gap-2">
              사용 기술
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-50 text-slate-600 rounded-md border border-slate-200 text-xs sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Full Description */}
          {project.fullDescription && (
            <div className="mb-6 sm:mb-8">
              <h3 className="mb-3 sm:mb-4 text-slate-900 flex items-center gap-2">
                프로젝트 소개
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line">
                {project.fullDescription}
              </p>
            </div>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-6 sm:mb-8">
              <h3 className="mb-3 sm:mb-4 text-slate-900 flex items-center gap-2">
                주요 기능
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="mt-1.5 sm:mt-2 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-slate-300 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="mb-6 sm:mb-8">
              <h3 className="mb-3 sm:mb-4 text-slate-900 flex items-center gap-2">
                기술적 도전
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="mt-1.5 sm:mt-2 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-slate-300 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-slate-600">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Outcomes */}
          {project.outcomes && project.outcomes.length > 0 && (
            <div className="mb-6 sm:mb-8">
              <h3 className="mb-3 sm:mb-4 text-slate-900 flex items-center gap-2">
                성과
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <Target className={`mt-0.5 w-4 sm:w-5 h-4 sm:h-5 text-emerald-500 flex-shrink-0`} />
                    <span className="text-sm sm:text-base text-slate-600">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-2 sm:gap-3 pt-4 sm:pt-6 border-t border-slate-200">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors text-sm sm:text-base"
              >
                <Github className="w-4 sm:w-5 h-4 sm:h-5" />
                <span>GitHub에서 보기</span>
              </a>
            )}

            {project.links.detail && (
              <a
                href={project.links.detail}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-slate-700 rounded-md border border-slate-200 hover:bg-slate-50 transition-colors text-sm sm:text-base"
              >
                <ScrollText className="w-4 sm:w-5 h-4 sm:h-5" />
                <span>Notion 보기</span>
              </a>
            )}
            
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-slate-700 rounded-md border border-slate-200 hover:bg-slate-50 transition-colors text-sm sm:text-base"
              >
                <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5" />
                <span>Live 데모 보기</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
