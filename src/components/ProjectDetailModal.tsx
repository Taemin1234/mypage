import * as Dialog from "@radix-ui/react-dialog";
import {
  Calendar,
  ArrowSquareOut as ExternalLink,
  GithubLogo as Github,
  Scroll as ScrollText,
  Users,
  X,
} from "@phosphor-icons/react";

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

function DetailDisclosure({
  title,
  items,
  open = false,
}: {
  title: string;
  items?: string[];
  open?: boolean;
}) {
  if (!items?.length) return null;

  return (
    <details open={open} className="border-t border-token py-5 first:border-t-0">
      <summary className="control-shape cursor-pointer list-none px-1 py-2 text-primary marker:hidden">
        <h3 className="inline text-lg font-bold tracking-[-0.02em]">{title}</h3>
        <span className="float-right text-sm font-semibold text-secondary">{items.length}개</span>
      </summary>
      <ul className="mt-4 grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="control-shape bg-surface-muted p-4 text-sm leading-6 text-secondary">
            {item}
          </li>
        ))}
      </ul>
    </details>
  );
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  return (
    <Dialog.Root open onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-950/65 backdrop-blur-sm" />
        <Dialog.Content className="bg-surface content-surface fixed left-1/2 top-1/2 z-50 max-h-[90dvh] w-[calc(100%-1.5rem)] max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto focus:outline-none">
          <header className="relative border-b border-token p-5 pr-14 sm:p-7 sm:pr-16 lg:p-9">
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="닫기"
                className="secondary-button control-shape absolute right-4 top-4 grid size-10 place-items-center transition-colors sm:right-6 sm:top-6"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </Dialog.Close>

            <Dialog.Title asChild>
              <h2 className="mb-3 text-2xl font-bold leading-tight tracking-[-0.035em] text-primary sm:text-3xl">
                {project.name}
              </h2>
            </Dialog.Title>
            <Dialog.Description asChild>
              <p className="max-w-[65ch] text-sm leading-6 text-secondary sm:text-base sm:leading-7">
                {project.description}
              </p>
            </Dialog.Description>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-secondary">
              {project.period && (
                <span className="inline-flex items-center gap-2">
                  <Calendar className="size-4" aria-hidden="true" />
                  {project.period}
                </span>
              )}
              {project.team && (
                <span className="inline-flex items-center gap-2">
                  <Users className="size-4" aria-hidden="true" />
                  {project.team}
                </span>
              )}
            </div>
          </header>

          {project.image && (
            <div className="image-frame border-b border-token p-3 sm:p-5">
              <img
                src={project.image}
                alt={project.name}
                className="max-h-[28rem] w-full rounded-[0.75rem] object-cover object-top"
              />
            </div>
          )}

          <div className="p-5 sm:p-7 lg:p-9">
            <section className="mb-7">
              <h3 className="mb-4 text-lg font-bold tracking-[-0.02em] text-primary">사용 기술</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="control-shape bg-surface-muted px-3 py-1.5 text-sm font-medium text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {project.fullDescription && (
              <section className="mb-7">
                <h3 className="mb-4 text-lg font-bold tracking-[-0.02em] text-primary">프로젝트 소개</h3>
                <p className="detail-copy whitespace-pre-line text-sm sm:text-base">
                  {project.fullDescription}
                </p>
              </section>
            )}

            <div className="border-y border-token">
              <DetailDisclosure title="주요 기능" items={project.features} open />
              <DetailDisclosure title="기술적 도전" items={project.challenges} />
              <DetailDisclosure title="성과" items={project.outcomes} />
            </div>

            <footer className="mt-7 flex flex-wrap gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accent-button control-shape inline-flex min-h-11 items-center gap-2 px-4 py-2.5 text-sm font-semibold transition-colors"
                >
                  <Github className="size-4" aria-hidden="true" />
                  <span>GitHub에서 보기</span>
                </a>
              )}
              {project.links.detail && (
                <a
                  href={project.links.detail}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button control-shape inline-flex min-h-11 items-center gap-2 px-4 py-2.5 text-sm font-semibold transition-colors"
                >
                  <ScrollText className="size-4" aria-hidden="true" />
                  <span>Notion 보기</span>
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button control-shape inline-flex min-h-11 items-center gap-2 px-4 py-2.5 text-sm font-semibold transition-colors"
                >
                  <ExternalLink className="size-4" aria-hidden="true" />
                  <span>Live 데모 보기</span>
                </a>
              )}
            </footer>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
