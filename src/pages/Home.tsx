import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "5562986286895";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, Vinicius. Gostaria de saber mais sobre o atendimento psicológico."
);
import { Helmet } from "react-helmet-async";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-[#bfae9e]/20 bg-[#f6f1ea]/95 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#inicio" className="flex items-center gap-4" aria-label="Início">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#8a5a3b] font-serif text-2xl text-[#6f432b]">
            V
          </div>

          <div className="leading-none">
            <strong className="block font-serif text-xl font-medium tracking-wide text-[#171717]">
              Vinicius Rodrigues
            </strong>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.35em] text-[#6f432b]">
              Psicólogo Psicoterapeuta
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-9 text-sm text-[#3e3a35] lg:flex">
          <a href="#sobre" className="transition hover:text-[#8a5a3b]">
            Sobre
          </a>
          <a href="/como-funciona" className="transition hover:text-[#8a5a3b]">
            Como funciona
          </a>
          <a href="/abordagem" className="transition hover:text-[#8a5a3b]">
            Abordagem
          </a>
          <a href="/faq" className="transition hover:text-[#8a5a3b]">
            Perguntas frequentes
          </a>
          <a href="/contato" className="transition hover:text-[#8a5a3b]">
            Contato
          </a>
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-[#8a5a3b] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#6f432b] md:inline-flex"
          aria-label="Agendar atendimento pelo WhatsApp"
        >
          Agendar pelo WhatsApp
        </a>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full bg-[#8a5a3b] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#6f432b] md:hidden"
          aria-label="Agendar atendimento pelo WhatsApp"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
function Hero() {
  return (
    <main
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-[#f6f1ea]"
    >
      <div className="absolute inset-y-0 right-0 z-0 hidden w-[70vw] overflow-hidden lg:block">
        <img
          src="/images/foto-vinicius.jpg"
          alt="Vinicius Rodrigues, psicólogo psicoterapeuta"
          className="absolute inset-0 h-full w-full object-cover object-[68%_45%]"
        />

        <div className="absolute inset-x-0 bottom-0 h-[18%] bg-gradient-to-t from-[#f6f1ea]/45 to-transparent" />
      </div>
<div
  className="absolute inset-y-0 left-0 z-10 hidden w-full lg:block"
  style={{
    background:
      "linear-gradient(90deg, #f6f1ea 0%, #f6f1ea 34%, rgba(246,241,234,0.88) 36%, rgba(246,241,234,0.28) 43%, rgba(246,241,234,0) 46%)",
  }}
/>

      <section className="relative z-20 flex min-h-screen items-center px-6 pt-28 lg:px-[8vw] lg:pt-0">
        <div className="relative z-30 max-w-[560px] animate-[fadeUp_0.8s_ease-out]">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.35em] text-[#6f432b]">
            Psicoterapia com seriedade e profundidade
          </p>

          <h1 className="font-serif text-5xl font-normal leading-[1.05] tracking-[-0.04em] text-[#171717] md:text-6xl lg:text-[64px]">
            Aqui, sua história não será medida, comparada ou julgada
          </h1>

          <div className="my-8 h-px w-24 bg-[#8a5a3b]" />

          <p className="max-w-[520px] text-lg leading-8 text-[#3e3a35]">
            Se você sente que ninguém te entende ou tem medo do que as pessoas
            vão pensar se souberem o que você realmente sente, este é o seu
            espaço. Um processo terapêutico focado em compreender você.
          </p>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#8a5a3b] px-8 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#6f432b]"
              aria-label="Agendar atendimento pelo WhatsApp"
            >
              Fale comigo pelo WhatsApp
            </a>

            <div className="flex items-center gap-3 text-sm text-[#3e3a35]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bfae9e] text-[#6f432b]">
                ◎
              </span>
              <span>
                Atendimento online
                <br />
                para todo o Brasil
              </span>
            </div>
          </div>
                    <div className="mt-12 overflow-hidden rounded-t-[140px] bg-[#e8ded2] lg:hidden">
            <img
              src="/images/foto-vinicius.jpg"
              alt="Vinicius Rodrigues, psicólogo psicoterapeuta"
              className="h-[460px] w-full object-cover object-[60%_45%]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function VideoSection() {
  return (
    <section id="sobre" className="bg-[#fffdfc] px-6 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
<div className="order-2 overflow-hidden rounded-[2rem] bg-[#171717] shadow-2xl shadow-black/10 lg:order-1">
  <div className="aspect-video w-full">
  <iframe
  className="h-full w-full"
  src="https://www.youtube.com/embed/G-qWD7WXTa4"
  title="Vídeo de apresentação de Vinicius Rodrigues"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
/>
  </div>
</div>

        <div className="order-1 lg:order-2">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#6f432b]">
            Quem sou
          </p>

          <h2 className="font-serif text-4xl font-normal leading-tight tracking-[-0.03em] text-[#171717] md:text-5xl">
            Psicoterapeuta Vinicius Rodrigues
          </h2>

          <div className="my-7 h-px w-20 bg-[#8a5a3b]" />

          <div className="space-y-5 text-base leading-8 text-[#3e3a35]">
            <p>
              Prazer, eu sou Vinicius Rodrigues.
            </p>

            <p>
              Estudo, supervisão e cuidado pessoal são parte do compromisso que tenho com quem atendo. Não acredito em cuidar do outro sem continuar aprendendo e sem também cuidar de mim. Isso não é perfeição; é responsabilidade com o tratamento.

Botão Agendar minha Primeira Sessão

            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
function FormationSection() {
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
    <section className="bg-[#f6f1ea] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-6xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#6f432b]">
            Formação e experiência profissional
          </p>

          <h2 className="font-serif text-4xl font-normal leading-tight tracking-[-0.03em] text-[#171717] md:text-5xl lg:text-6xl">
            Uma trajetória construída na clínica, na saúde mental e no cuidado com pessoas.
          </h2>

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

            <h3 className="font-serif text-3xl font-normal text-[#171717] md:text-4xl">
              Psicólogo Clínico - CRP 09/12077
            </h3>

           <ul className="mt-8 space-y-4">


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

            <h3 className="font-serif text-3xl font-normal text-[#171717] md:text-4xl">
              Atuação em diferentes contextos de cuidado, escuta e saúde mental.
            </h3>

            <ul className="mt-8 space-y-5">
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

  <h3 className="font-serif text-3xl font-normal text-[#171717] md:text-4xl">
    Participação em espaços de formação, ensino e troca profissional.
  </h3>

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
      </div>
    </section>
  );
}
function Footer() {
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

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Vinicius Rodrigues | Psicólogo Psicoterapeuta Online</title>
        <meta
          name="description"
          content="Atendimento psicológico online com Vinicius Rodrigues, psicólogo psicoterapeuta CRP 09/12077. Um espaço de escuta cuidadosa, ética e profissional."
        />
      </Helmet>

      <Header />
      <Hero />
      <VideoSection />
      <FormationSection />
      <Footer />
    </>
  );
}