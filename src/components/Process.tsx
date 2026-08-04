const steps = [
    "Entendemos seu negócio",
    "Planejamos a solução",
    "Criamos e desenvolvemos",
    "Publicamos e acompanhamos",
  ];
  
  function Process() {
    return (
      <section id="processo" className="bg-white/[0.03] px-6 py-24">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="text-3xl font-bold md:text-5xl">
            Como funciona o processo?
          </h2>
  
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-white/10 bg-black/40 p-6 transition hover:border-teal-400/30"
              >
                <span className="text-4xl font-bold text-teal-400">
                  {index + 1}
                </span>
                <p className="mt-5 text-zinc-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Process;