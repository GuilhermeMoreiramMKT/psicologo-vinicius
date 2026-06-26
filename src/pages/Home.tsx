const WHATSAPP_NUMBER = "5562986286895";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, Vinicius. Gostaria de saber mais sobre o atendimento psicológico."
);
import { Helmet } from "react-helmet-async";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#bfae9e]/20 bg-[#f6f1ea]/90 backdrop-blur-md">
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
    <main id="inicio" className="min-h-screen bg-[#f6f1ea] pt-24">
      <section className="mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-12 lg:grid-cols-[1fr_0.85fr] lg:py-0">
        <div className="max-w-2xl animate-[fadeUp_0.8s_ease-out]">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.35em] text-[#6f432b]">
            Psicoterapia com seriedade e profundidade
          </p>

          <h1 className="font-serif text-5xl font-normal leading-[1.05] tracking-[-0.04em] text-[#171717] md:text-6xl lg:text-7xl">
            Aqui, sua história não será medida, comparada ou julgada
          </h1>

          <div className="my-8 h-px w-24 bg-[#8a5a3b]" />

          <p className="max-w-xl text-lg leading-8 text-[#3e3a35]">
            Se você sente que ninguém te entende ou tem medo do que as pessoas vão pensar se souberem o que você realmente sente, este é o seu espaço. Um processo terapêutico focado em compreender você.

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
        </div>

        <div className="relative min-h-[520px] overflow-hidden rounded-t-[180px] bg-[#e8ded2] lg:min-h-[680px] lg:rounded-t-[240px]">
          <div className="absolute inset-0 bg-[linear-gradient(145deg,#efe8df,#d8c8b8)]" />
          <div className="absolute inset-x-10 bottom-0 top-20 rounded-t-[180px] bg-[#cbb7a4]" />
          <div className="absolute bottom-0 left-1/2 h-[78%] w-[54%] -translate-x-1/2 rounded-t-full bg-[#9f7a62]" />
          <div className="absolute left-1/2 top-24 h-32 w-32 -translate-x-1/2 rounded-full bg-[#b8937b]" />
          <div className="absolute bottom-0 left-1/2 h-[48%] w-[70%] -translate-x-1/2 rounded-t-[140px] bg-[#6f432b]" />
          <div className="absolute bottom-10 left-10 right-10 rounded-3xl border border-white/30 bg-white/20 p-5 text-center text-sm text-white backdrop-blur-md">
            Imagem temporária do profissional
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
        <div className="group overflow-hidden rounded-[2rem] bg-[#171717] shadow-2xl shadow-black/10">
          <div className="relative aspect-video bg-[linear-gradient(135deg,#6f432b,#bfae9e)]">
            <div className="absolute inset-0 bg-black/20" />

            <button
              className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-[#6f432b] transition group-hover:scale-105"
              aria-label="Reproduzir vídeo de apresentação"
            >
              ▶
            </button>

            <div className="absolute bottom-0 left-0 right-0 flex items-center gap-4 bg-black/45 px-6 py-4">
              <div className="h-2 flex-1 rounded-full bg-white/25">
                <div className="h-2 w-1/3 rounded-full bg-white" />
              </div>
              <span className="text-xs text-white/80">00:00</span>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#6f432b]">
            Quem sou
          </p>

          <h2 className="font-serif text-4xl font-normal leading-tight tracking-[-0.03em] text-[#171717] md:text-5xl">
            Motivos para você ser atendido por mim
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

          <a
            href="#contato"
            className="mt-9 inline-flex rounded-full border border-[#8a5a3b] px-7 py-3 text-sm font-medium text-[#6f432b] transition hover:bg-[#efe8df]"
          >
            Mais sobre mim →
          </a>
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
      <Footer />
    </>
  );
}