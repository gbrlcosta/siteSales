function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-2xl perspective-[1200px]">
      <div className="absolute -inset-1 rounded-full bg-teal-500/20 blur-3xl" />

      <div className="relative rotate-x-[8deg] rotate-y-[-10deg] rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_90px_rgba(20,184,166,0.18)] backdrop-blur-xl transition-transform duration-500 hover:rotate-x-[4deg] hover:rotate-y-[-4deg] hover:scale-[1.02]">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-teal-500/10" />

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111] p-5 shadow-inner">
          <div className="absolute right-8 top-8 h-24 w-24 rounded-full bg-teal-400/20 blur-2xl" />
          <div className="absolute bottom-0 left-1/2 h-20 w-72 -translate-x-1/2 bg-teal-500/10 blur-2xl" />

          <div className="mb-6 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400 shadow-[0_0_14px_rgba(248,113,113,0.8)]" />
            <span className="h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_14px_rgba(250,204,21,0.8)]" />
            <span className="h-3 w-3 rounded-full bg-green-400 shadow-[0_0_14px_rgba(74,222,128,0.8)]" />
          </div>

          <div className="space-y-4">
            <div className="h-8 w-3/4 rounded bg-gradient-to-r from-white/20 to-white/5" />
            <div className="h-4 w-full rounded bg-white/10" />
            <div className="h-4 w-5/6 rounded bg-white/10" />

            <div className=" group relative h-12 w-40 overflow-hidden rounded-full bg-teal-500 shadow-[0_12px_35px_rgba(20,184,166,0.45)] transition-all duration-300 hover:scale-[1.02]">
              <div className=" absolute inset-0 animate-[shine_2.5s_ease-in-out_infinite_alternate] bg-gradient-to-r from-transparent via-white/35 to-transparent transition-all duration-300 group-hover:via-white/50" />
            </div>

            <div className="grid grid-cols-3 gap-3 pt-5">
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="h-24 transform-gpu rounded-xl border border-white/10 bg-gradient-to-br from-white/15 to-white/5 shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-3 hover:bg-white/15"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-5 top-16 h-16 w-16 animate-bounce rounded-2xl border border-teal-400/30 bg-teal-400/10 shadow-[0_20px_60px_rgba(20,184,166,0.25)] backdrop-blur" />
      <div className="absolute -left-6 bottom-16 h-12 w-12 animate-pulse rounded-full border border-white/10 bg-white/10 backdrop-blur" />
    </div>
  );
}

export default HeroMockup;
