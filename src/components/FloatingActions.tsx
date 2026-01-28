import { useState, useEffect } from "react";
import { ArrowUp, FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50 pointer-events-none">      
      <a
        href="https://decisive-steam-5f0.notion.site/2b716d0d863f8056b8b2f7d8881f1591"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center gap-2 px-4 py-3 bg-slate-800 text-white rounded-full shadow-lg hover:bg-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
        aria-label="이력서 보기"
      >
        <FileText className="w-5 h-5" />
        <span className="font-medium text-sm pr-1">이력서</span>
      </a>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 1, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1, y: 20 }}
            onClick={scrollToTop}
            className="pointer-events-auto p-3 bg-white text-slate-600 rounded-full shadow-lg border border-slate-200 hover:bg-slate-50 hover:text-slate-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            aria-label="맨 위로 스크롤"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
