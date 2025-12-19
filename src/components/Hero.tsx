import { Sparkles, Code2, Rocket } from 'lucide-react';

export function Hero() {
  return (
    <section className="mb-16 sm:mb-20 lg:mb-24">
      <div className="relative">
        <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 shadow-sm">
          <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-slate-600" />
          <span className="text-xs sm:text-sm text-slate-700">포트폴리오</span>
        </div>
        
        <h1 className="mb-4 sm:mb-6 text-slate-900">
          안녕하세요, <span className="text-slate-700">프론트엔드 개발자</span> 송태민입니다
        </h1>
        
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl">
          <span className="flex sm:inline-flex items-center gap-2 mb-2 sm:mb-0 sm:mr-2">
            <Code2 className="w-4 sm:w-5 h-4 sm:h-5 text-slate-500 flex-shrink-0" />
            <strong className="text-slate-700">사용자 경험</strong>을 최우선으로 생각하며
          </span>
          <span className="flex sm:inline-flex items-center gap-2">
            <Rocket className="w-4 sm:w-5 h-4 sm:h-5 text-slate-500 flex-shrink-0" />
            <strong className="text-slate-700">React, TypeScript, Next.js</strong>로 웹 애플리케이션을 만듭니다
          </span>
        </p>
      </div>
    </section>
  );
}