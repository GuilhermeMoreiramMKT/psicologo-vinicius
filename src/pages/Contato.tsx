import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";

const WHATSAPP_NUMBER = "5562986286895";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, Vinicius. Gostaria de saber mais sobre o atendimento psicológico."
);

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function Contato() {
  return (
    <>
      <Helmet>
        <title>Contato | Vinicius Rodrigues Psicólogo Online</title>
        <meta
          name="description"
          content="Entre em contato com Vinicius Rodrigues, psicólogo psicoterapeuta CRP 09/12077, para tirar dúvidas ou agendar atendimento psicológico online."
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-[#f6f1ea] px-6 pb-24 pt-32 text-[#171717]">
        <section className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#6f432b]">
              Contato
            </p>

            <h1 className="font-serif text-5xl font-normal leading-tight tracking-[-0.04em] md:text-6xl lg:text-7xl">
              Entre em contato para agendar ou tirar suas dúvidas.
            </h1>

            <div className="my-8 h-px w-24 bg-[#8a5a3b]" />

            <p className="max-w-3xl text-lg leading-8 text-[#3e3a35]">
              O primeiro contato pode ser feito pelo WhatsApp. Nesse momento,
              você pode tirar dúvidas sobre o atendimento online, disponibilidade
              de horários e funcionamento do processo terapêutico.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-7 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-[2rem] border border-[#bfae9e]/40 bg-[#fffdfc] p-8 shadow-sm md:p-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#6f432b]">
                Agendamento
              </p>

              <h2 className="font-serif text-3xl font-normal leading-tight text-[#171717] md:text-4xl">
                Fale diretamente pelo WhatsApp.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#3e3a35]">
O seu processo terapeutico começa aqui.
              </p>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-[#8a5a3b] px-8 py-4 text-sm font-medium !text-white transition hover:-translate-y-0.5 hover:bg-[#6f432b]"
                aria-label="Falar com Vinicius Rodrigues pelo WhatsApp"
              >
                Falar pelo WhatsApp
              </a>
            </article>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-[#bfae9e]/40 bg-[#efe8df] p-8 shadow-sm">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#6f432b]">
                  WhatsApp
                </p>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="block font-serif text-3xl font-normal text-[#171717] transition hover:text-[#8a5a3b]"
                >
                  62 98628-6895
                </a>
              </div>

              <div className="rounded-[2rem] border border-[#bfae9e]/40 bg-[#fffdfc] p-8 shadow-sm">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#6f432b]">
                  Instagram
                </p>

                <a
                  href="https://instagram.com/psicviniciusrodrigues"
                  target="_blank"
                  rel="noreferrer"
                  className="block font-serif text-3xl font-normal text-[#171717] transition hover:text-[#8a5a3b]"
                >
                  @psicviniciusrodrigues
                </a>
              </div>

              <div className="rounded-[2rem] border border-[#bfae9e]/40 bg-[#efe8df] p-8 shadow-sm">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#6f432b]">
                  Atendimento
                </p>

                <p className="text-base leading-8 text-[#3e3a35]">
                  Atendimento psicológico online para pacientes em todo o
                  Brasil.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}