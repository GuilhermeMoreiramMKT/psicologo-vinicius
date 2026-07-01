import { Helmet } from "react-helmet-async";
import { FaCalendarCheck, FaComments, FaGlobeAmericas, FaWhatsapp } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const WHATSAPP_NUMBER = "5562986286895";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, Vinicius. Gostaria de enviar uma mensagem sobre o atendimento psicológico online."
);

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function Abordagem() {
  const continents = ["Europa", "América do Norte/Sul", "Oceania"];

  const steps = [
    {
      title: "Você envia uma mensagem.",
      text: "O primeiro contato acontece pelo WhatsApp, de forma simples e direta.",
      icon: <FaWhatsapp />,
    },
    {
      title: "Eu mesmo respondo.",
      text: "Você falará diretamente comigo. Nada de robô conduzindo a conversa.",
      icon: <FaComments />,
    },
    {
      title: "Encontramos um horário.",
      text: "Verificamos a disponibilidade e combinamos o melhor horário possível.",
      icon: <FaCalendarCheck />,
    },
    {
      title: "Avaliamos como seguir.",
      text: "Na primeira sessão, entendemos sua demanda e conversamos sobre a continuidade.",
      icon: <FaGlobeAmericas />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Atendimento Online | Vinicius Rodrigues Psicólogo</title>
        <meta
          name="description"
          content="Atendimento psicológico online para brasileiros no exterior e pacientes em todo o Brasil com Vinicius Rodrigues, psicólogo psicoterapeuta CRP 09/12077."
        />
      </Helmet>

      <Header />

      <main className="overflow-hidden bg-[#f6f1ea] text-[#171717]">
        <section className="relative min-h-screen overflow-hidden bg-[#f6f1ea]">
          <div className="absolute inset-y-0 left-0 z-0 hidden w-[68vw] overflow-hidden lg:block">
            <img
              src="/images/notebook-fones-atendimento.jpg"
              alt="Notebook e fones de ouvido para atendimento psicológico online"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/20" />
          </div>

       <div
  className="absolute inset-y-0 left-0 z-10 hidden w-full lg:block"
  style={{
    background:
      "linear-gradient(90deg, rgba(246,241,234,0) 0%, rgba(246,241,234,0.04) 28%, rgba(246,241,234,0.18) 38%, rgba(246,241,234,0.48) 46%, rgba(246,241,234,0.78) 54%, rgba(246,241,234,0.94) 61%, #f6f1ea 68%, #f6f1ea 100%)",
  }}
/>
          <section className="relative z-20 flex min-h-screen items-center px-6 pb-20 pt-32 lg:px-[8vw] lg:pb-0 lg:pt-24">
            <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="overflow-hidden rounded-[2rem] bg-[#171717] shadow-2xl shadow-black/10 lg:hidden">
                <img
                  src="/images/notebook-fones-atendimento.jpg"
                  alt="Notebook e fones de ouvido para atendimento psicológico online"
                  className="h-[360px] w-full object-cover object-center opacity-90"
                />
              </div>

              <div className="hidden lg:block" />

              <div className="max-w-3xl lg:ml-auto">
              
<h1 className="font-serif text-5xl font-normal leading-[1.05] tracking-[-0.04em] text-[#171717] md:text-6xl lg:text-[64px]">
  Eu acredito que todo mundo merece ter um psicólogo em quem possa confiar de verdade.
</h1>

                <div className="my-8 h-px w-24 bg-[#8a5a3b]" />

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-[#8a5a3b] px-8 py-4 text-sm font-medium !text-white transition hover:-translate-y-0.5 hover:bg-[#6f432b]"
                  aria-label="Enviar mensagem pelo WhatsApp"
                >
                  <FaWhatsapp className="text-lg" />
                  Enviar uma mensagem
                </a>

            
              </div>
            </div>
          </section>
        </section>

        <section className="bg-[#fffdfc] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
             

              <h2 className="font-serif text-4xl font-normal leading-tight tracking-[-0.03em] text-[#171717] md:text-5xl">
                 Atendimento para brasileiros no exterior e todo o Brasil via
  online.
              </h2>

              <div className="my-7 h-px w-20 bg-[#8a5a3b]" />

              <div className="space-y-6 text-base leading-8 text-[#3e3a35]">
                <p>
                  Assim como acontece com um bom médico ou um bom dentista,
                  acredito que encontrar um psicólogo em quem você confia faz
                  toda a diferença. Mas encontrar esse profissional nem sempre é
                  fácil. Muitas pessoas passam anos procurando alguém com quem se
                  sintam seguras para falar sobre a própria vida.
                </p>

                <p>
                  Quando essa confiança acontece, vale a pena preservá-la. Na
                  psicoterapia, o vínculo e a continuidade do acompanhamento são
                  muito importantes. Com o tempo, o profissional conhece melhor
                  sua história, compreende seu contexto e consegue te ajudar de
                  forma mais consistente.
                </p>

                <p>
                  A boa notícia é que essa escolha não precisa mais depender da
                  cidade onde você mora. Com o atendimento online, você pode
                  iniciar sua psicoterapia de onde estiver e escolher um
                  profissional pela confiança que ele transmite, e não apenas
                  pela proximidade.
                </p>

                <p>
                  Hoje, atendo pacientes de diferentes cidades, estados e países,
                  oferecendo o mesmo cuidado, seriedade e compromisso presentes
                  no atendimento presencial.
                </p>
              </div>
            </div>
<div className="mx-auto mt-14 max-w-6xl">
  <div className="rounded-[2rem] border border-[#bfae9e]/40 bg-[#efe8df] px-6 py-6 shadow-sm md:px-8 md:py-7">
    <p className="text-center text-sm font-semibold uppercase tracking-[0.28em] text-[#171717]">
      Continentes atendidos
    </p>

    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
      {continents.map((continent) => (
        <div
          key={continent}
          className="rounded-2xl border border-[#bfae9e]/40 bg-[#fffdfc]/80 px-5 py-4 text-center backdrop-blur-sm"
        >
          <p className="font-serif text-xl font-normal text-[#171717] md:text-2xl">
            {continent}
          </p>
        </div>
      ))}
    </div>
  </div>

  <div className="mt-8">
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      className="flex w-full items-center justify-center gap-2 rounded-full bg-[#8a5a3b] px-10 py-4 text-sm font-medium !text-white transition hover:-translate-y-0.5 hover:bg-[#6f432b]"
      aria-label="Enviar mensagem pelo WhatsApp"
    >
      <FaWhatsapp className="text-lg" />
      Enviar uma mensagem
    </a>
  </div>
</div>
               </div>
        </section>

        <section className="bg-[#f6f1ea] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#6f432b]">
                Depois da mensagem
              </p>

              <h2 className="font-serif text-4xl font-normal leading-tight tracking-[-0.03em] text-[#171717] md:text-5xl">
                O que acontece depois que você envia uma mensagem?
              </h2>

              <div className="my-7 h-px w-20 bg-[#8a5a3b]" />
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <article
                  key={step.title}
                  className="rounded-[2rem] border border-[#bfae9e]/40 bg-[#fffdfc] p-7 shadow-sm"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#8a5a3b] text-xl text-white">
                    {step.icon}
                  </div>

                  <h3 className="font-serif text-2xl font-normal leading-tight text-[#171717]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-[#3e3a35]">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}