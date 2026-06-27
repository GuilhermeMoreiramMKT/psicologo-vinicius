import { Helmet } from "react-helmet-async";

function FormacaoExperiencia() {
  const experiences = [
    "Atuação na rede pública de saúde mental, em trabalho multiprofissional junto a CAPS, CREAS, hospitais, clínicas psiquiátricas e articulação com a Justiça e o Juizado de Menores.",
    "Experiência em supervisão de estágio, acompanhando estudantes de psicologia no desenvolvimento clínico, técnico e ético dos atendimentos.",
    "Atuação em atendimentos de urgência, especialmente em situações de luto, sofrimento intenso e graves crises emocionais.",
    "Psicoterapia individual com adultos, com atenção às dificuldades nos relacionamentos, ansiedade, depressão e outras questões emocionais.",
    "Trabalho multiprofissional em avaliação psicológica, em parceria com neuropsicólogos e psiquiatras.",
    "Atendimento home care a famílias em contexto domiciliar, oferecendo suporte psicológico em momentos de vulnerabilidade.",
    "Atuação em psicologia organizacional, com atendimentos voltados a empresas, microempreendedores e bem-estar emocional no ambiente de trabalho.",
    "Experiência clínica sensível às questões vividas pela comunidade LGBTQIA+.",
  ];

  const academicActivities = [
    "Palestra no CIEE sobre depressão, com foco em acolhimento e compreensão do sofrimento depressivo.",
    "Palestra na Universidade Estadual de Goiás sobre Psicologia Social e o impacto das relações no desenvolvimento emocional.",
    "Reconhecimento acadêmico durante os estágios da graduação, com abordagem utilizada por supervisores como referência para a turma.",
  ];

  return (
    <>
      <Helmet>
        <title>Formação e Experiência | Vinicius Rodrigues Psicólogo</title>
        <meta
          name="description"
          content="Conheça a formação e experiência profissional de Vinicius Rodrigues, psicólogo psicoterapeuta CRP 09/12077, com mais de 10 anos de atuação clínica."
        />
      </Helmet>

      <main className="min-h-screen bg-[#f6f1ea] px-6 py-20 text-[#171717]">
        <section className="mx-auto max-w-7xl">
          <a
            href="/"
            className="mb-12 inline-flex text-sm text-[#6f432b] transition hover:text-[#8a5a3b]"
          >
            ← Voltar para o início
          </a>

          <div className="max-w-6xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#6f432b]">
              Formação e experiência profissional
            </p>

            <h1 className="font-serif text-4xl font-normal leading-tight tracking-[-0.03em] text-[#171717] md:text-5xl lg:text-6xl">
              Uma trajetória construída na clínica, na saúde mental e no cuidado com pessoas.
            </h1>

            <div className="my-8 h-px w-24 bg-[#8a5a3b]" />

            <p className="max-w-4xl text-lg leading-8 text-[#3e3a35]">
              A prática clínica de Vinicius Rodrigues reúne mais de 10 anos de experiência
              no atendimento psicológico, com foco em adultos que enfrentam dificuldades
              emocionais, conflitos nos relacionamentos, ansiedade, depressão e processos
              de autoconhecimento.
            </p>
          </div>

          <div className="mt-16 space-y-7">
            <article className="rounded-[2rem] border border-[#bfae9e]/40 bg-[#fffdfc] p-8 shadow-sm md:p-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#6f432b]">
                Formação
              </p>

              <h2 className="font-serif text-3xl font-normal text-[#171717] md:text-4xl">
                Psicólogo Clínico
              </h2>

              <ul className="mt-8 space-y-4">
                <li className="rounded-2xl border border-[#bfae9e]/40 bg-[#efe8df]/70 p-5 text-base leading-8 text-[#3e3a35]">
                  CRP 09/12077
                </li>

                <li className="rounded-2xl border border-[#bfae9e]/40 bg-[#efe8df]/70 p-5 text-base leading-8 text-[#3e3a35]">
                  Formação complementar em Psicanálise pela Casa Freud.
                </li>

                <li className="rounded-2xl border border-[#bfae9e]/40 bg-[#efe8df]/70 p-5 text-base leading-8 text-[#3e3a35]">
                  Formação em Psicopatologia.
                </li>

                <li className="rounded-2xl border border-[#bfae9e]/40 bg-[#efe8df]/70 p-5 text-base leading-8 text-[#3e3a35]">
                  Mais de 10 anos de atuação na psicologia clínica.
                </li>
              </ul>
            </article>

            <article className="rounded-[2rem] border border-[#bfae9e]/40 bg-[#efe8df] p-8 shadow-sm md:p-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#6f432b]">
                Experiência clínica e profissional
              </p>

              <h2 className="font-serif text-3xl font-normal text-[#171717] md:text-4xl">
                Atuação em diferentes contextos de cuidado, escuta e saúde mental.
              </h2>

              <ul className="mt-8 space-y-4">
                {experiences.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-[#bfae9e]/40 bg-[#fffdfc]/70 p-5 text-base leading-8 text-[#3e3a35]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[2rem] border border-[#bfae9e]/40 bg-[#efe8df] p-8 shadow-sm md:p-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#6f432b]">
                Palestras e atividades acadêmicas
              </p>

              <h2 className="font-serif text-3xl font-normal text-[#171717] md:text-4xl">
                Participação em espaços de formação, ensino e troca profissional.
              </h2>

              <ul className="mt-8 space-y-4">
                {academicActivities.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-[#bfae9e]/40 bg-[#fffdfc]/70 p-5 text-base leading-8 text-[#3e3a35]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

export default FormacaoExperiencia;