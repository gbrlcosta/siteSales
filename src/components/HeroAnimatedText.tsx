import { useEffect, useState } from "react";

function HeroAnimatedText() {
  const phrases = [
    "Sites profissionais pensados para transformar visitantes em clientes.",
    "Do marketing à operação: soluções web para o seu negócio.",
    "Você só tem uma chance de causar uma boa primeira impressão."
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsVisible(true);
      }, 500);
    }, 8000);


    return () => clearInterval(interval);
  }, [phrases.length]);


  return (
    <h2 className="min-h-[230px] max-w-3xl text-4xl font-bold leading-tight md:min-h-[380px] md:text-6xl">
      <span
        className={`block transition-all duration-500 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-2 opacity-0"
        }`}
      >
        {phrases[phraseIndex]}
      </span>
    </h2>
  );
}

export default HeroAnimatedText;