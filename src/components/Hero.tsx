export function Hero() {
  return (
    <section className="mb-16 sm:mb-20 lg:mb-24 border-b border-slate-200 pb-10 sm:pb-14">
      <div className="relative max-w-4xl">
        <p className="mb-3 text-sm sm:text-base text-slate-500">
          Frontend Developer Portfolio
        </p>

        <h1 className="mb-5 sm:mb-6 text-slate-950">
          화면의 흐름과 구현의 기준을 함께 보는 프론트엔드 개발자, 송태민입니다.
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
          퍼블리싱과 서비스 운영 경험을 바탕으로, 사용자가 실제로 마주하는 화면을 단단하게 만드는 데 관심이 있습니다.
          구조를 먼저 정리하고, 필요한 인터랙션을 과하지 않게 붙이며, 오래 유지할 수 있는 UI를 고민합니다.
        </p>
      </div>
    </section>
  );
}
