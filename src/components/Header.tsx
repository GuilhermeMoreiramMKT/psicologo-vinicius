import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
const WHATSAPP_NUMBER = "5562986286895";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, Vinicius. Gostaria de saber mais sobre o atendimento psicológico."
);

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const MENU_LINKS = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Atendimento", href: "/atendimento" },
    { label: "Perguntas Frequentes", href: "/faq" },
  { label: "Formação", href: "/formacao-e-experiencia" },
  { label: "Sala de Espera", href: "/sala-de-espera" },
];
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        isScrolled || isMenuOpen
          ? "border-b border-[#bfae9e]/20 bg-[#f6f1ea]/95 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
       <div className="flex items-center gap-4">
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
</div>

        <nav className="hidden items-center gap-8 text-sm text-[#3e3a35] lg:flex">
          {MENU_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-[#8a5a3b]"
            >
              {link.label}
            </a>
          ))}
        </nav>

       <div className="flex items-center gap-3">
 <a
  href={WHATSAPP_LINK}
  target="_blank"
  rel="noreferrer"
  className="hidden items-center gap-2 rounded-full bg-[#8a5a3b] px-6 py-3 text-sm font-medium !text-white transition hover:bg-[#6f432b] md:inline-flex"
  aria-label="Agendar atendimento pelo WhatsApp"
>
  <FaWhatsapp className="text-lg" />
  Agendar pelo WhatsApp
</a>

  <button
    type="button"
    onClick={() => setIsMenuOpen((current) => !current)}
    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8a5a3b]/50 text-[#6f432b] lg:hidden"
    aria-label="Abrir menu"
    aria-expanded={isMenuOpen}
  >
    <span className="relative block h-4 w-5">
      <span
        className={`absolute left-0 top-0 h-px w-5 bg-current transition ${
          isMenuOpen ? "translate-y-2 rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-2 h-px w-5 bg-current transition ${
          isMenuOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-4 h-px w-5 bg-current transition ${
          isMenuOpen ? "-translate-y-2 -rotate-45" : ""
        }`}
      />
    </span>
  </button>
</div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-[#bfae9e]/20 bg-[#f6f1ea]/98 px-6 pb-6 pt-2 shadow-sm backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1">
            {MENU_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl px-4 py-4 text-sm text-[#3e3a35] transition hover:bg-[#efe8df] hover:text-[#8a5a3b]"
              >
                {link.label}
              </a>
            ))}

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-[#8a5a3b] px-6 py-4 text-sm font-medium !text-white transition hover:bg-[#6f432b]"
              aria-label="Agendar atendimento pelo WhatsApp"
            >
              Agendar pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}