import {
  ArrowSquareOut as ExternalLink,
  FileText,
  GithubLogo as Github,
  Scroll as ScrollText,
} from "@phosphor-icons/react";

export interface ProjectSummary {
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
}

interface ProjectCardProps {
  project: ProjectSummary;
  onClick: () => void;
  variant?: "featured" | "standard" | "row";
}

function ProjectActions({ project, onClick }: Omit<ProjectCardProps, "variant">) {
  const baseButton =
    "control-shape inline-flex min-h-10 items-center gap-1.5 px-3 py-2 text-xs font-semibold transition-colors sm:text-sm";

  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={onClick}
        className={`${baseButton} accent-button`}
      >
        <FileText className="size-4" aria-hidden="true" />
        <span>상세보기</span>
      </button>

      {project.links.github && (
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseButton} secondary-button`}
        >
          <Github className="size-4" aria-hidden="true" />
          <span>GitHub</span>
        </a>
      )}

      {project.links.detail && (
        <a
          href={project.links.detail}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseButton} secondary-button`}
        >
          <ScrollText className="size-4" aria-hidden="true" />
          <span>노션페이지</span>
        </a>
      )}

      {project.links.live && (
        <a
          href={project.links.live}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseButton} secondary-button`}
        >
          <ExternalLink className="size-4" aria-hidden="true" />
          <span>Live</span>
        </a>
      )}
    </div>
  );
}

export function ProjectCard({ project, onClick, variant = "standard" }: ProjectCardProps) {
  if (variant === "row") {
    return (
      <article className="grid gap-5 border-t border-token py-7 first:border-t-0 md:grid-cols-[15rem_1fr] md:items-center md:gap-8 lg:grid-cols-[18rem_1fr] lg:py-9">
        {project.image && (
          <div className="image-frame content-surface overflow-hidden p-1.5">
            <img
              src={project.image}
              alt={project.name}
              className="aspect-[16/9] w-full rounded-[0.7rem] object-cover object-top"
              loading="lazy"
            />
          </div>
        )}

        <div>
          <h3 className="mb-3 text-xl font-bold leading-tight tracking-[-0.025em] text-primary sm:text-2xl">
            {project.name}
          </h3>
          <p className="mb-4 max-w-[66ch] text-sm leading-6 text-secondary sm:text-base sm:leading-7">
            {project.description}
          </p>
          <div className="mb-5 flex flex-wrap gap-x-3 gap-y-1.5 text-xs font-medium text-secondary sm:text-sm">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <ProjectActions project={project} onClick={onClick} />
        </div>
      </article>
    );
  }

  const featured = variant === "featured";

  return (
    <article
      className={`group content-surface overflow-hidden ${
        featured ? "grid md:grid-cols-[1.15fr_0.85fr]" : "flex h-full flex-col"
      }`}
    >
      {project.image && (
        <div className={`image-frame overflow-hidden ${featured ? "min-h-64" : "h-48 sm:h-56"}`}>
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover object-top"
            loading={featured ? "eager" : "lazy"}
          />
        </div>
      )}

      <div className={`flex flex-1 flex-col ${featured ? "p-6 sm:p-8 lg:p-10" : "p-5 sm:p-6"}`}>
        <h3
          className={`mb-3 font-bold leading-tight tracking-[-0.03em] text-primary ${
            featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
          }`}
        >
          {project.name}
        </h3>

        <p className="mb-5 text-sm leading-6 text-secondary sm:text-base sm:leading-7">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="control-shape bg-surface-muted px-2.5 py-1 text-xs font-medium text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto border-t border-token pt-5">
          <ProjectActions project={project} onClick={onClick} />
        </div>
      </div>
    </article>
  );
}
