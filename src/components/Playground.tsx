import { PlaygroundCard } from './PlaygroundCard';
import { ExperimentDetailModal } from './ExperimentDetailModal';
import { Lightbulb } from 'lucide-react';
import { useState } from 'react';
import { experiments } from '../data/Playground'

export function Playground() {
  const [selectedExperiment, setSelectedExperiment] = useState<typeof experiments[0] | null>(null);

  return (
    <section className="mb-8 sm:mb-12 lg:mb-16">
      <div className="flex items-center gap-3 mb-6 sm:mb-8 lg:mb-10">
        <div className="p-1.5 sm:p-2 bg-amber-600 rounded-lg shadow-md">
          <Lightbulb className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
        </div>
        <div>
          <h2 className="text-slate-900">Playground</h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5 sm:mt-1">실험적인 프로젝트와 학습 내용</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {experiments.map((experiment) => (
          <PlaygroundCard 
            key={experiment.id} 
            experiment={experiment}
            onClick={() => setSelectedExperiment(experiment)}
          />
        ))}
      </div>

      {selectedExperiment && (
        <ExperimentDetailModal
          experiment={selectedExperiment}
          onClose={() => setSelectedExperiment(null)}
        />
      )}
    </section>
  );
}