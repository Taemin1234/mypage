import { ArrowDownRight, FileText } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const scrollToProjects = () => {
    const projectsHeading = Array.from(document.querySelectorAll("h2")).find(
      (heading) => heading.textContent === "Frontend Projects",
    );

    projectsHeading?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section className="mb-24 border-b border-token pb-16 sm:mb-28 sm:pb-20 lg:mb-32 lg:pb-24">
      <div className="min-h-[calc(100dvh-6rem)] pt-8 sm:pt-10 lg:pt-12">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-4 text-sm font-semibold text-secondary sm:text-base">
            Frontend Developer Portfolio
          </p>

          <h1 className="text-[clamp(2.35rem,5vw,4rem)] font-[780] leading-[1.3] tracking-[-0.06em] text-primary">
            화면의 흐름과 구현의 기준을 함께 보는<br/> 프론트엔드 개발자, 송태민입니다.
          </h1>
        </motion.div>

        <div className="mt-8 grid items-end gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="pb-1"
          >
            <p className="text-base leading-7 text-secondary sm:text-lg sm:leading-8">
              퍼블리싱과 서비스 운영 경험을 바탕으로, 구조가 분명하고 오래 유지할 수 있는 화면을 만듭니다.
              필요한 인터랙션만 정확하게 더합니다.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://decisive-steam-5f0.notion.site/2b716d0d863f8056b8b2f7d8881f1591"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-button control-shape inline-flex min-h-12 items-center gap-2 px-5 py-3 text-sm font-semibold transition-colors"
              >
                <FileText className="size-4" aria-hidden="true" />
                이력서 보기
              </a>
              <button
                type="button"
                onClick={scrollToProjects}
                className="secondary-button control-shape inline-flex min-h-12 items-center gap-2 px-5 py-3 text-sm font-semibold transition-colors"
              >
                대표 작업 보기
                <ArrowDownRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          </motion.div>

          <motion.figure
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="m-0"
          >
            <div className="image-frame content-surface overflow-hidden p-2 sm:p-3">
              <img
                src="/images/dustpeakclub.png"
                alt="dustpeakclub 음악 큐레이션 프로젝트 화면"
                className="aspect-[16/8.5] w-full rounded-[0.7rem] object-cover object-top"
                loading="eager"
              />
            </div>
            <figcaption className="mt-3 text-sm text-secondary">
              최근 작업: dustpeakclub 음악 큐레이션 커뮤니티
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
