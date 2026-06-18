import { PlaygroundCard } from './PlaygroundCard';
import { ExperimentDetailModal } from './ExperimentDetailModal';
import { useState } from 'react';
import { experiments } from '../data/Playground'

export function Playground() {
  const [selectedExperiment, setSelectedExperiment] = useState<typeof experiments[0] | null>(null);

  return (
    <section className="mb-8 sm:mb-12 lg:mb-16">
      <div className="mb-6 sm:mb-8 lg:mb-10 border-b border-slate-200 pb-4">
        <h2 className="text-slate-950">Playground</h2>
        <p className="text-slate-500 text-sm sm:text-base mt-2">작게 만들고 확인하며 쌓아온 실험과 학습 기록입니다.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {[...experiments].reverse().map((experiment) => (
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
