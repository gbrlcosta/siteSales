import logo from "../assets/logo.png";
import { QUOTE_REQUEST_URL, trackQuoteRequestConversion } from "../utils/gtag";

function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <img src={logo} alt="Logo da empresa" className="h-15 w-auto" />

        <nav className="hidden gap-8 text-sm text-zinc-300 md:flex">
          <a href="#beneficios" className="hover:text-white">
            Benefícios
          </a>
          <a href="#servicos" className="hover:text-white">
            Serviços
          </a>
          <a href="#processo" className="hover:text-white">
            Processo
          </a>
        </nav>

        <a
          href={QUOTE_REQUEST_URL}
          onClick={(event) => {
            event.preventDefault();
            trackQuoteRequestConversion(QUOTE_REQUEST_URL);
          }}
          className="rounded-full bg-teal-500 px-5 py-2 text-sm font-semibold text-black transition hover:bg-teal-400"
        >
          Solicitar orçamento
        </a>
      </div>
    </header>
  );
}

export default Header;
