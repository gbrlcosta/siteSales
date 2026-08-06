const services = [
    "Landing pages para vendas",
    "Sistemas e soluções Web",
    "Portfólios profissionais",
    "Sites institucionais",
    "Experiências responsivas para celular",
    "Projetos desenvolvidos sob medida",
  ];
  
  function Services() {
    return (
      <section id="servicos" className="bg-white/[0.03] px-6 py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold md:text-5xl">
              Sites feitos para destacar seu negócio
            </h2>
            <p className="mt-5 text-zinc-300">
              Desenvolvemos páginas modernas, rápidas e adaptadas para o objetivo da sua marca.
            </p>
          </div>
  
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-zinc-200 transition hover:border-teal-400/30 hover:bg-white/[0.07]"
              >
                ✔ {service}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Services;