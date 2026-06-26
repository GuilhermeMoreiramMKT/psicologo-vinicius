import { Helmet } from "react-helmet-async";
export default function ComoFunciona() {
  return (
    <>
      <Helmet>
        <title>Como Funciona o Atendimento Online | Vinicius Rodrigues</title>
        <meta
          name="description"
          content="Entenda como funciona o atendimento psicológico online com Vinicius Rodrigues, psicólogo psicoterapeuta CRP 09/12077."
        />
      </Helmet>

      <main className="min-h-screen bg-[#f6f1ea] px-6 py-20 text-[#171717]">
      <section className="mx-auto max-w-4xl">
        <a href="/" className="mb-10 inline-flex text-sm text-[#6f432b]">
          ← Voltar para o início
        </a>

        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#6f432b]">
          Como funciona
        </p>

        <h1 className="font-serif text-5xl font-normal leading-tight tracking-[-0.04em] md:text-6xl">
          Como funciona o atendimento psicológico online.
        </h1>
      </section>
          </main>
    </>
  );
}