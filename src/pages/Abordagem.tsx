import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";

const WHATSAPP_NUMBER = "5562986286895";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, Vinicius. Gostaria de saber mais sobre a abordagem terapêutica."
);

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function Abordagem() {
  const principles = [
    {
      title: "Escuta sem julgamento",
      text: "A psicoterapia oferece um espaço para falar sobre aquilo que muitas vezes é difícil dizer em outros lugares. A escuta clínica não tem como objetivo julgar, corrigir rapidamente ou comparar sua história com a de outras pessoas.",
    },
    {
      title: "Compreensão da história emocional",
      text: "O sofrimento atual muitas vezes tem relação com experiências, vínculos, repetições e formas de lidar com afetos construídas ao longo da vida. O trabalho terapêutico busca compreender esses movimentos com cuidado.",
    },
    {
      title: "Atenção aos relacionamentos",
      text: "Muitas dores emocionais aparecem nas relações: no medo de rejeição, nas dificuldades de se posicionar, na dependência afetiva, nos conflitos familiares, nos términos e nas escolhas amorosas.",
    },
    {
      title: "Processo construído no tempo",
      text: "A psicoterapia não funciona como uma resposta pronta. É um processo de elaboração, onde cada encontro ajuda a dar forma ao que antes parecia confuso, repetitivo ou difícil de nomear.",
    },
  ];

  const focusAreas = [
    "Ansiedade e angústia.",
    "Depressão e desânimo persistente.",
    "Dificuldades nos relacionamentos.",
    "Conflitos familiares e afetivos.",
    "Medo de julgamento, rejeição ou abandono.",
    "Processos de autoconhecimento.",
    "Momentos de crise, luto ou sofrimento emocional intenso.",
  ];

  return (
    <>
      <Helmet>
        <title>Abordagem Terapêutica | Vinicius Rodrigues Psicólogo</title>
        <meta
          name="description"
          content="Conheça a abordagem terapêutica de Vinicius Rodrigues, psicólogo psicoterapeuta CRP 09/12077, com atendimento psicológico online."
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-[#f6f1ea] px-6 pb-24 pt-32 text-[#171717]">
        <section className="mx-auto max-w-7xl">
          <div className="max-w-6xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#6f432b]">
              Abordagem
            </p>

            <h1 className="font-serif text-5xl font-normal leading-tight tracking-[-0.04em] md:text-6xl lg:text-7xl">
              Uma escuta clínica conduzida com ética, seriedade e profundidade.
            </h1>

            <div className="my-8 h-px w-24 bg-[#8a5a3b]" />

            <p className="max-w-4xl text-lg leading-8 text-[#3e3a35]">
              O trabalho terapêutico parte da escuta cuidadosa da história de
              cada pessoa. A proposta é construir um espaço onde seja possível
              falar sobre o que dói, compreender repetições e elaborar formas
              mais conscientes de lidar com a própria vida emocional.
            </p>
          </div>

          <div className="mt-16 space-y-7">
            {principles.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-[#bfae9e]/40 bg-[#fffdfc] p-8 shadow-sm md:p-10"
              >
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#6f432b]">
                  Princípio clínico
                </p>

                <h2 className="font-serif text-3xl font-normal text-[#171717] md:text-4xl">
                  {item.title}
                </h2>

                <p className="mt-6 max-w-4xl text-base leading-8 text-[#3e3a35]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-[#bfae9e]/40 bg-[#efe8df] p-8 shadow-sm md:p-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#6f432b]">
              Temas trabalhados
            </p>

            <h2 className="font-serif text-3xl font-normal text-[#171717] md:text-4xl">
              Algumas questões que podem aparecer no processo terapêutico.
            </h2>

            <ul className="mt-8 space-y-4">
              {focusAreas.map((item) => (
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
              Início do processo
            </p>

            <h2 className="font-serif text-3xl font-normal text-[#171717] md:text-4xl">
              A psicoterapia começa com uma conversa.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#3e3a35]">
              Se você deseja entender melhor como o atendimento funciona, entre
              em contato pelo WhatsApp para tirar dúvidas e verificar os horários
              disponíveis.
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