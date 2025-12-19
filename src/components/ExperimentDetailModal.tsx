import { X, ExternalLink, Github, Lightbulb } from 'lucide-react';
import { useEffect } from 'react';

interface ExperimentDetailModalProps {
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
    fullDescription?: string;
    learnings?: string[];
    nextSteps?: string[];
  };
  onClose: () => void;
}

export function ExperimentDetailModal({ experiment, onClose }: ExperimentDetailModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient */}
        <div className="relative bg-gradient-to-r from-amber-600 to-amber-700 p-5 sm:p-6 lg:p-8 text-white">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 pr-8 sm:pr-0">
            <Lightbulb className="w-6 sm:w-8 h-6 sm:h-8 flex-shrink-0" />
            <h2 className="text-white">{experiment.name}</h2>
          </div>
          <p className="text-white/90 text-sm sm:text-base lg:text-lg">{experiment.description}</p>
        </div>

        {/* Experiment Image */}
        {experiment.image && (
          <div className="relative h-40 sm:h-48 lg:h-56 overflow-hidden">
            <img 
              src={experiment.image} 
              alt={experiment.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-600 to-transparent opacity-20"></div>
          </div>
        )}

        {/* Content */}
        <div className="p-5 sm:p-6 lg:p-8">
          {/* Technologies */}
          <div className="mb-6 sm:mb-8">
            <h3 className="mb-3 sm:mb-4 text-slate-900 flex items-center gap-2">
              <div className="w-1 h-5 sm:h-6 bg-gradient-to-b from-amber-600 to-amber-700 rounded-full"></div>
              사용 기술
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {experiment.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg shadow-sm text-xs sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Full Description */}
          {experiment.fullDescription && (
            <div className="mb-6 sm:mb-8">
              <h3 className="mb-3 sm:mb-4 text-slate-900 flex items-center gap-2">
                <div className="w-1 h-5 sm:h-6 bg-gradient-to-b from-amber-600 to-amber-700 rounded-full"></div>
                상세 설명
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line">
                {experiment.fullDescription}
              </p>
            </div>
          )}

          {/* Learnings */}
          {experiment.learnings && experiment.learnings.length > 0 && (
            <div className="mb-6 sm:mb-8">
              <h3 className="mb-3 sm:mb-4 text-slate-900 flex items-center gap-2">
                <div className="w-1 h-5 sm:h-6 bg-gradient-to-b from-amber-600 to-amber-700 rounded-full"></div>
                배운 점
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {experiment.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="mt-1.5 sm:mt-2 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-slate-600">{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Next Steps */}
          {experiment.nextSteps && experiment.nextSteps.length > 0 && (
            <div className="mb-6 sm:mb-8">
              <h3 className="mb-3 sm:mb-4 text-slate-900 flex items-center gap-2">
                <div className="w-1 h-5 sm:h-6 bg-gradient-to-b from-amber-600 to-amber-700 rounded-full"></div>
                개선 계획
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {experiment.nextSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="mt-1.5 sm:mt-2 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-slate-600">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-2 sm:gap-3 pt-4 sm:pt-6 border-t border-slate-200">
            {experiment.links.github && (
              <a
                href={experiment.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm sm:text-base"
              >
                <Github className="w-4 sm:w-5 h-4 sm:h-5" />
                <span>GitHub에서 보기</span>
              </a>
            )}
            
            {experiment.links.live && (
              <a
                href={experiment.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:shadow-lg transition-all text-sm sm:text-base"
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