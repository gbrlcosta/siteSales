function WhyProfessional() {
    return (
      <section className="px-6 py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-5xl">
              Por que contratar um profissional?
            </h2>
  
            <p className="mt-6 text-zinc-300">
              Criadores automáticos podem até gerar páginas simples, mas um site
              profissional precisa de estratégia, performance, identidade visual,
              organização de conteúdo e foco em conversão.
            </p>
          </div>
  
          <div className="space-y-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-teal-400/30">
              <h3 className="text-xl font-semibold text-teal-300">
                Você economiza tempo
              </h3>
              <p className="mt-3 text-zinc-300">
                Em vez de tentar montar tudo sozinho, você recebe uma solução pronta,
                bem construída e alinhada ao seu objetivo.
              </p>
            </div>
  
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-teal-400/30">
              <h3 className="text-xl font-semibold text-teal-300">
                Evita aparência amadora
              </h3>
              <p className="mt-3 text-zinc-300">
                Um site mal feito pode afastar clientes. Um bom design transmite
                profissionalismo antes mesmo do primeiro contato.
              </p>
            </div>
  
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-teal-400/30">
              <h3 className="text-xl font-semibold text-teal-300">
                Seu site nasce com propósito
              </h3>
              <p className="mt-3 text-zinc-300">
                Cada botão, texto e seção são pensados para gerar resultado, não apenas
                preencher espaço na tela.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default WhyProfessional;