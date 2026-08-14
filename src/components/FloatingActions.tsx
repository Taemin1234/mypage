import { useState } from "react";
import { ArrowUp } from "@phosphor-icons/react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";

export function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const nextVisible = latest > 560;
    setIsVisible((current) => (current === nextVisible ? current : nextVisible));
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 12 }}
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
            className="flex flex-col items-end gap-2"
          >
            <button
              type="button"
              onClick={scrollToTop}
              className="secondary-button control-shape pointer-events-auto grid size-11 place-items-center shadow-lg transition-colors"
              aria-label="맨 위로 스크롤"
            >
              <ArrowUp className="size-5" aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
