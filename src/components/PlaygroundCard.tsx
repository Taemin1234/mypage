import {
  ArrowSquareOut as ExternalLink,
  FileText,
  GithubLogo as Github,
} from "@phosphor-icons/react";

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
    <article className="group min-w-[82vw] snap-start sm:min-w-80 lg:min-w-0">
      {experiment.image && (
        <div className="image-frame content-surface mb-5 overflow-hidden p-1.5">
          <img
            src={experiment.image}
            alt={experiment.name}
            className="aspect-[4/3] w-full rounded-[0.7rem] object-cover object-top"
            loading="lazy"
          />
        </div>
      )}

      <h4 className="mb-2 text-lg font-bold tracking-[-0.02em] text-primary sm:text-xl">
        {experiment.name}
      </h4>
      <p className="mb-4 text-sm leading-6 text-secondary">{experiment.description}</p>

      <div className="mb-5 flex flex-wrap gap-x-3 gap-y-1 text-xs font-semibold text-secondary">
        {experiment.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 text-sm font-semibold">
        <button
          type="button"
          onClick={onClick}
          className="inline-flex items-center gap-1.5 text-primary transition-colors hover:accent-text"
        >
          <FileText className="size-4" aria-hidden="true" />
          <span>상세</span>
        </button>

        {experiment.links.github && (
          <a
            href={experiment.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-secondary transition-colors hover:text-primary"
          >
            <Github className="size-4" aria-hidden="true" />
            <span>GitHub</span>
          </a>
        )}

        {experiment.links.live && (
          <a
            href={experiment.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-secondary transition-colors hover:text-primary"
          >
            <ExternalLink className="size-4" aria-hidden="true" />
            <span>Live</span>
          </a>
        )}
      </div>
    </article>
  );
}
