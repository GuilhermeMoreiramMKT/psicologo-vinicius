import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "5562986286895";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, Vinicius. Gostaria de saber mais sobre o atendimento psicológico."
);

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function Footer() {
  return (
    <footer className="border-t border-[#bfae9e]/30 bg-[#efe8df] px-6 py-14 text-[#171717]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-0">
        <div className="lg:pr-14">
          <a href="/" className="flex items-start gap-4" aria-label="Início">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#8a5a3b] font-serif text-2xl text-[#6f432b]">
              V
            </div>

            <div>
              <strong className="block font-serif text-xl font-medium tracking-wide text-[#171717]">
                Vinicius Rodrigues
              </strong>

              <span className="mt-1 block text-[10px] uppercase tracking-[0.35em] text-[#6f432b]">
                Psicólogo Psicoterapeuta
              </span>

              <p className="mt-6 text-sm text-[#3e3a35]">CRP 09/12077</p>
            </div>
          </a>
        </div>

        <div className="border-[#bfae9e]/40 lg:border-l lg:px-14">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#6f432b]">
            Contato
          </p>

          <div className="space-y-4 text-sm text-[#3e3a35]">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition hover:text-[#8a5a3b]"
              aria-label="Falar pelo WhatsApp"
            >
              <FaWhatsapp className="text-lg text-[#6f432b]" />
              <span>WhatsApp: 62 98628-6895</span>
            </a>

            <a
              href="https://instagram.com/psicviniciusrodrigues"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition hover:text-[#8a5a3b]"
              aria-label="Instagram de Vinicius Rodrigues"
            >
              <FaInstagram className="text-lg text-[#6f432b]" />
              <span>Instagram: @psicviniciusrodrigues</span>
            </a>
          </div>
        </div>

        <div className="border-[#bfae9e]/40 lg:border-l lg:pl-14">
  <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#6f432b]">
    Atendimento
  </p>

  <p className="max-w-sm text-sm leading-7 text-[#3e3a35]">
    Atendimento psicológico online para pacientes em todo o Brasil.{" "}
    <a
      href="/atendimento"
      className="font-medium text-[#6f432b] underline underline-offset-4 transition hover:text-[#8a5a3b]"
      aria-label="Ir para a página de atendimento"
    >
      Clique aqui
    </a>
  </p>
</div>
      </div>
    </footer>
  );
}