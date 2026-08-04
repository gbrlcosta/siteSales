function HeroMobileMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[300px] perspective-[1200px]">
      <div className="absolute -inset-8 rounded-full bg-teal-500/20 blur-3xl" />

      <div className="relative animate-[phoneFloat_7s_ease-in-out_infinite] rounded-[2.5rem] border border-white/15 bg-white/10 p-3 shadow-[0_35px_100px_rgba(20,184,166,0.25)] backdrop-blur-xl">
        <div className="absolute left-1/2 top-3 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-black/80" />

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010] px-4 pb-5 pt-10">
          <div className="absolute right-4 top-16 h-24 w-24 animate-pulse rounded-full bg-teal-400/20 blur-2xl" />

          <div className="mb-5">
            <div className="h-3 w-20 rounded-full bg-white/20" />
            <div className="mt-3 h-7 w-40 rounded-lg bg-white/10" />
            <div className="mt-2 h-3 w-52 rounded-full bg-white/10" />
          </div>

          <div className="mb-5 rounded-2xl border border-teal-400/20 bg-teal-400/10 p-4 shadow-[0_15px_40px_rgba(20,184,166,0.18)]">
            <div className="mb-3 h-3 w-24 rounded-full bg-teal-300/50" />
            <div className="h-9 w-full rounded-xl bg-teal-500 shadow-[0_10px_30px_rgba(20,184,166,0.35)]" />
          </div>

          <div className="space-y-3">
            <div className="animate-[float_3s_ease-in-out_infinite] rounded-2xl rounded-tl-sm bg-white/10 p-3">
              <div className="h-3 w-36 rounded-full bg-white/25" />
              <div className="mt-2 h-3 w-24 rounded-full bg-white/10" />
            </div>

            <div className="ml-auto w-44 animate-[float_3.4s_ease-in-out_infinite] rounded-2xl rounded-tr-sm bg-teal-500/90 p-3 shadow-[0_12px_35px_rgba(20,184,166,0.3)]">
              <div className="h-3 w-28 rounded-full bg-white/70" />
              <div className="mt-2 h-3 w-20 rounded-full bg-white/40" />
            </div>

            <div className="animate-[float_3.8s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-white/10 p-3">
              <div className="mb-2 flex gap-1 text-sm text-yellow-300">
                ★ ★ ★ ★ ★
              </div>
              <div className="h-3 w-32 rounded-full bg-white/20" />
              <div className="mt-2 h-3 w-24 rounded-full bg-white/10" />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2">
            <div className="h-16 animate-[pulseCard_2.8s_ease-in-out_infinite] rounded-2xl bg-white/10" />
            <div className="h-16 animate-[pulseCard_3.2s_ease-in-out_infinite] rounded-2xl bg-white/10" />
            <div className="h-16 animate-[pulseCard_3.6s_ease-in-out_infinite] rounded-2xl bg-white/10" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default HeroMobileMockup;
