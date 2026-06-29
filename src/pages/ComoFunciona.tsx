import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";

const WHATSAPP_NUMBER = "5562986286895";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, Vinicius. Gostaria de entender como funciona o atendimento psicológico online."
);

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function ComoFunciona() {
  const steps = [
    {
      title: "Primeiro contato",
      text: "O primeiro contato acontece pelo WhatsApp. Nesse momento, você pode tirar dúvidas iniciais sobre o atendimento, horários disponíveis e funcionamento das sessões.",
    },
    {
      title: "Alinhamento inicial",
      text: "Antes de iniciar o processo, são combinadas as informações principais: formato do atendimento, frequência, duração, valor e demais orientações necessárias.",
    },
    {
      title: "Sessões online",
      text: "Os atendimentos acontecem por videochamada, em um ambiente reservado e seguro. É importante que você esteja em um local com privacidade, boa conexão e disponibilidade para falar com tranquilidade.",
    },
    {
      title: "Processo terapêutico",
      text: "A psicoterapia é construída ao longo dos encontros. O objetivo é compreender sua história, seus vínculos, seus conflitos e aquilo que se repete em sua vida emocional.",
    },
  ];

  const importantPoints = [
    "O atendimento é realizado de forma online através de vídeochamada.",
    "As sessões acontecem em horário previamente combinado.",
    "O processo terapêutico respeita o tempo, a história e os limites de cada pessoa.",
    "A escuta clínica é conduzida com sigilo, ética e responsabilidade profissional.",
  ];

  return (
    <>
      <Helmet>
        <title>Como Funciona o Atendimento Online | Vinicius Rodrigues</title>
        <meta
          name="description"
          content="Entenda como funciona o atendimento psicológico online com Vinicius Rodrigues, psicólogo psicoterapeuta CRP 09/12077."
        />
      </Helmet>

      <Header />

<main className="relative min-h-screen overflow-hidden bg-[#f6f1ea] px-6 pb-24 pt-32 text-[#171717]">
        <div className="pointer-events-none absolute inset-0 z-0">
  <div className="absolute left-0 top-0 h-[62%] w-full">
    <img
      src="/images/atendimento-online-vinicius.jpg"
      alt=""
      aria-hidden="true"
      className="h-full w-full object-cover object-center opacity-100"
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 68%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, black 0%, black 68%, transparent 100%)",
      }}
    />
    <div className="absolute inset-0 bg-black/45" />
  </div>

  <div className="absolute bottom-0 left-0 h-[62%] w-full">
    <img
      src="/images/notebook-fones-atendimento.jpg"
      alt=""
      aria-hidden="true"
      className="h-full w-full object-cover object-center opacity-100"
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 32%, black 100%)",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 32%, black 100%)",
      }}
    />
<div className="absolute inset-0 bg-black/35" />
  </div>

<div className="absolute left-0 top-[43%] h-[18%] w-full bg-gradient-to-b from-transparent via-black/40 to-transparent" />
</div>
<section className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-6xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-white">
              Como funciona
            </p>

            <h1 className="font-serif text-5xl font-normal leading-tight tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
              O atendimento online é simples, reservado e conduzido com seriedade.
            </h1>

            <div className="my-8 h-px w-24 bg-[#8a5a3b]" />

            <p className="max-w-4xl text-lg leading-8 text-[#fffdfc]">
              A psicoterapia online permite que você tenha um espaço de escuta
              profissional sem precisar se deslocar. O processo acontece por
              videochamada, com horário combinado e cuidado para preservar a
              privacidade do atendimento.
            </p>
          </div>

          <div className="mt-16 space-y-7">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[2rem] border border-[#bfae9e]/40 bg-[#fffdfc]/70 p-8 shadow-sm md:p-10"
              >
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#6f432b]">
                  Etapa {index + 1}
                </p>

                <h2 className="font-serif text-3xl font-normal text-[#171717] md:text-4xl">
                  {step.title}
                </h2>

                <p className="mt-6 max-w-4xl text-base leading-8 text-[#3e3a35]">
                  {step.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-[#bfae9e]/40 bg-[#fffdfc]/70 p-8 shadow-sm md:p-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#6f432b]">
              Informações importantes
            </p>

            <h2 className="font-serif text-3xl font-normal text-[#171717] md:text-4xl">
              O que você precisa saber antes de iniciar.
            </h2>

            <ul className="mt-8 space-y-4">
              {importantPoints.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-[#bfae9e]/40 bg-[#fffdfc]/70 p-5 text-base leading-8 text-[#3e3a35]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 rounded-[2rem] border border-[#bfae9e]/40 bg-[#fffdfc] p-8 shadow-sm md:p-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#6f432b]">
              Agendamento
            </p>

            <h2 className="font-serif text-3xl font-normal text-[#171717] md:text-4xl">
              Quer entender se o atendimento faz sentido para você?
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#3e3a35]">
              Você pode entrar em contato pelo WhatsApp para tirar dúvidas sobre
              horários, funcionamento das sessões e início do acompanhamento.
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}