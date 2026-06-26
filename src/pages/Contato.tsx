import { Helmet } from "react-helmet-async";
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

      <main className="min-h-screen bg-[#f6f1ea] px-6 py-20 text-[#171717]">
      <section className="mx-auto max-w-4xl">
        <a href="/" className="mb-10 inline-flex text-sm text-[#6f432b]">
          ← Voltar para o início
        </a>

        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#6f432b]">
          Contato
        </p>

        <h1 className="font-serif text-5xl font-normal leading-tight tracking-[-0.04em] md:text-6xl">
          Entre em contato para agendar ou tirar dúvidas sobre o atendimento.
        </h1>
      </section>
      </main>
    </>
  );
}