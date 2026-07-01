import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FormacaoExperiencia() {
  const formacoes = [
    "Graduação em Psicologia",
    "Formação em Psicanálise",
    "Aperfeiçoamento em Psicopatologia",
    "Pós-graduando em Psicoterapia Breve",
  ];

  return (
    <>
      <Helmet>
        <title>Formação | Vinicius Rodrigues Psicólogo</title>
        <meta
          name="description"
          content="Conheça a formação de Vinicius Rodrigues, psicólogo psicoterapeuta, com formação contínua em psicologia, psicanálise, psicopatologia e psicoterapia breve."
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-[#f6f1ea] px-6 pb-24 pt-32 text-[#171717]">
        <section className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#6f432b]">
              Formação
            </p>

            <h1 className="font-serif text-5xl font-normal leading-tight tracking-[-0.04em] md:text-6xl lg:text-7xl">
              Formação contínua para um trabalho sério e fundamentado.
            </h1>

            <div className="my-8 h-px w-24 bg-[#8a5a3b]" />

                    </div>

          <div className="mt-16 rounded-[2rem] border border-[#bfae9e]/40 bg-[#fffdfc] p-8 shadow-sm md:p-10">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#6f432b]">
              Percurso de formação
            </p>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {formacoes.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#bfae9e]/40 bg-[#efe8df]/70 p-6"
                >
                  <p className="font-serif text-2xl font-normal leading-tight text-[#171717]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}