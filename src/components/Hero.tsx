import HeroAnimatedText from "./HeroAnimatedText";
import HeroMobileMockup from "./HeroMobileMockup";
import HeroMockup from "./HeroMockup";

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-36 pb-24">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,#10b98133,transparent_35%),radial-gradient(circle_at_bottom_left,#22c55e22,transparent_30%)]" />

      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-30 blur-[1px] md:hidden">
        <div className="scale-90">
          <HeroMobileMockup />
        </div>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 md:grid-cols-2">
        <div>
          <span className="mb-5 inline-block rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-sm text-teal-300">
            Muito além de um site bonito
          </span>

          <HeroAnimatedText />

          <p className="mt-6 max-w-xl text-lg text-zinc-300">
            Criamos soluções digitais profissionais que fortalecem sua marca,
            melhoram a experiência do cliente e ajudam seu negócio a gerar mais
            oportunidades.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/5562999999999"
              target="_blank"
              className="rounded-full bg-teal-500 px-8 py-4 text-center font-semibold text-black transition hover:bg-teal-400"
            >
              Quero meu site profissional
            </a>

            <a
              href="#beneficios"
              className="rounded-full border border-white/20 px-8 py-4 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Ver benefícios
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}

export default Hero;
