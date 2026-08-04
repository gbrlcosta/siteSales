const benefits = [
    {
      title: "Mais credibilidade",
      text: "Um site profissional passa confiança e mostra que sua marca está preparada para atender bem.",
    },
    {
      title: "Mais clientes",
      text: "Sua página pode ser planejada para gerar contatos, pedidos de orçamento e vendas.",
    },
    {
      title: "Design estratégico",
      text: "Não é só beleza. Cada seção é pensada para guiar o visitante até a ação certa.",
    },
    {
      title: "Presença online",
      text: "Seu negócio fica disponível 24 horas por dia, mesmo quando você não está atendendo.",
    },
  ];
  
  function Benefits() {
    return (
      <section id="beneficios" className="px-6 py-28 md:py-32">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-400">
              Benefícios
            </span>
  
            <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
              Por que investir em um site profissional?
            </h2>
  
            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              Um site bem construído fortalece sua marca, transmite confiança e
              transforma visitantes em oportunidades reais.
            </p>
          </div>
  
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:border-teal-400/30 hover:bg-white/[0.07]"
              >
                <h3 className="text-xl font-semibold text-teal-300">
                  {item.title}
                </h3>
  
                <p className="mt-4 leading-relaxed text-zinc-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Benefits;