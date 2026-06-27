const WHATSAPP_NUMBER = "5562986286895";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, Vinicius. Gostaria de saber mais sobre o atendimento psicológico."
);

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#efe8df] px-6 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-3 md:divide-x md:divide-[#bfae9e]">
        <div className="md:pr-10">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#8a5a3b] font-serif text-2xl text-[#6f432b]">
              V
            </div>

            <div>
              <strong className="block font-serif text-xl font-medium text-[#171717]">
                Vinicius Rodrigues
              </strong>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.3em] text-[#6f432b]">
                Psicólogo Psicoterapeuta
              </span>
            </div>
          </div>

          <p className="mt-5 text-sm text-[#3e3a35]">CRP 09/12077</p>
        </div>

        <div className="border-t border-[#bfae9e] pt-8 md:border-t-0 md:px-10 md:pt-0">
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#6f432b]">
            Contato
          </h3>

          <div className="space-y-3 text-sm text-[#3e3a35]">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="block transition hover:text-[#8a5a3b]"
            >
              WhatsApp: 62 98628-6895
            </a>

            <a
              href="https://instagram.com/psicviniciusrodrigues"
              target="_blank"
              rel="noreferrer"
              className="block transition hover:text-[#8a5a3b]"
            >
              Instagram: @psicviniciusrodrigues
            </a>
          </div>
        </div>

        <div className="border-t border-[#bfae9e] pt-8 md:border-t-0 md:pl-10 md:pt-0">
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#6f432b]">
            Atendimento
          </h3>

          <p className="max-w-sm text-sm leading-7 text-[#3e3a35]">
            Atendimento psicológico online para pacientes em todo o Brasil.
          </p>
        </div>
      </div>
    </footer>
  );
}