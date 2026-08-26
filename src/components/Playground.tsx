import { PlaygroundCard } from './PlaygroundCard';
import { ExperimentDetailModal } from './ExperimentDetailModal';
import { useRef, useState } from 'react';
import { experiments } from '../data/Playground'

export function Playground() {
  const [selectedExperiment, setSelectedExperiment] = useState<typeof experiments[0] | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const openExperiment = (experiment: typeof experiments[0]) => {
    lastTriggerRef.current = document.activeElement as HTMLButtonElement | null;
    setSelectedExperiment(experiment);
  };

  const closeExperiment = () => {
    setSelectedExperiment(null);
    requestAnimationFrame(() => lastTriggerRef.current?.focus());
  };

  return (
    <section className="mb-16 sm:mb-20 lg:mb-24">
      <div className="mb-8 border-b border-token pb-5 sm:mb-10">
        <h2 className="section-title">Playground</h2>
        <p className="section-copy mt-3">소규모 작업을 통해 기술을 익혔습니다.</p>
      </div>

      <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 sm:gap-6 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
        {[...experiments].reverse().map((experiment) => (
          <PlaygroundCard
            key={experiment.id}
            experiment={experiment}
            onClick={() => openExperiment(experiment)}
          />
        ))}
      </div>

      {selectedExperiment && (
        <ExperimentDetailModal
          experiment={selectedExperiment}
          onClose={closeExperiment}
        />
      )}
    </section>
  );
}
