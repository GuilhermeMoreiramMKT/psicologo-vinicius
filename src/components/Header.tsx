import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "5562986286895";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, Vinicius. Gostaria de saber mais sobre o atendimento psicológico."
);

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-[#bfae9e]/20 bg-[#f6f1ea]/95 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" className="flex items-center gap-4" aria-label="Início">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#8a5a3b] font-serif text-2xl text-[#6f432b]">
            V
          </div>

          <div className="leading-none">
            <strong className="block font-serif text-xl font-medium tracking-wide text-[#171717]">
              Vinicius Rodrigues
            </strong>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.35em] text-[#6f432b]">
              Psicólogo Psicoterapeuta
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-[#3e3a35] lg:flex">
          <a href="/#sobre" className="transition hover:text-[#8a5a3b]">
            Sobre
          </a>

          <a
            href="/formacao-e-experiencia"
            className="transition hover:text-[#8a5a3b]"
          >
            Formação
          </a>

          <a href="/como-funciona" className="transition hover:text-[#8a5a3b]">
            Como funciona
          </a>

          <a href="/abordagem" className="transition hover:text-[#8a5a3b]">
            Abordagem
          </a>

          <a href="/faq" className="transition hover:text-[#8a5a3b]">
            Perguntas frequentes
          </a>

          <a href="/contato" className="transition hover:text-[#8a5a3b]">
            Contato
          </a>
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-[#8a5a3b] px-6 py-3 text-sm font-medium !text-white transition hover:bg-[#6f432b] md:inline-flex"
          aria-label="Agendar atendimento pelo WhatsApp"
        >
          Agendar pelo WhatsApp
        </a>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full bg-[#8a5a3b] px-4 py-2 text-xs font-medium !text-white transition hover:bg-[#6f432b] md:hidden"
          aria-label="Agendar atendimento pelo WhatsApp"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}