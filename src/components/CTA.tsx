import { QUOTE_REQUEST_URL, trackQuoteRequestConversion } from "../utils/gtag";

function CTA() {
  return (
    <section className="px-6 py-24">
      <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[2rem] border border-teal-300/30 bg-gradient-to-br from-teal-400 via-teal-500 to-emerald-500 p-10 text-center text-black shadow-[0_30px_100px_rgba(20,184,166,0.25)] md:p-16">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-black/10 blur-3xl" />

        <div className="relative">
          <span className="mb-5 inline-block rounded-full bg-black/10 px-4 py-2 text-sm font-semibold">
            Vamos tirar sua ideia do papel
          </span>

          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
            Pronto para levar sua presença digital para outro nível?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-black/75">
            Vamos transformar sua presença online em uma experiência digital
            profissional, moderna e preparada para gerar oportunidades.
          </p>

          <a
            href={QUOTE_REQUEST_URL}
            onClick={(event) => {
              event.preventDefault();
              trackQuoteRequestConversion(QUOTE_REQUEST_URL);
            }}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-black px-8 py-4 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-zinc-900"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
