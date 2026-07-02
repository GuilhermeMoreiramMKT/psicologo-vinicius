import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "5562986286895";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, Vinicius. Gostaria de saber mais sobre o atendimento psicológico."
);

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
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

         <div className="mt-10 flex w-full max-w-[520px] flex-col gap-5 sm:flex-row sm:items-center">
  <a
  href={WHATSAPP_LINK}
  target="_blank"
  rel="noreferrer"
  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#8a5a3b] px-8 py-4 text-sm font-medium !text-white transition hover:-translate-y-0.5 hover:bg-[#6f432b] sm:w-auto"
  aria-label="Agendar atendimento pelo WhatsApp"
>
  <FaWhatsapp className="text-lg" />
  Fale comigo pelo WhatsApp
</a>

 <div className="flex w-full items-center justify-center gap-3 rounded-full border border-[#bfae9e]/50 bg-[#fffdfc]/50 px-5 py-4 text-sm text-[#3e3a35] sm:w-auto sm:justify-start sm:border-0 sm:bg-transparent sm:p-0">
  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#bfae9e] text-[#6f432b]">
    ◎
  </span>
  <span className="text-left leading-6">
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
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-14 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="order-2 overflow-hidden rounded-[2rem] bg-[#171717] shadow-2xl shadow-black/10 lg:order-1">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/6KJ4EiG4yzE"
              title="Vídeo de apresentação de Vinicius Rodrigues"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

        <div className="bg-[#171717]">
 <a
  href={WHATSAPP_LINK}
  target="_blank"
  rel="noreferrer"
  className="flex w-full items-center justify-center gap-2 bg-[#8a5a3b] px-8 py-6 text-base font-medium !text-white transition hover:bg-[#6f432b]"
  aria-label="Agendar primeira sessão pelo WhatsApp"
>
  <FaWhatsapp className="text-lg" />
  Agendar minha primeira sessão
</a>
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
            <p>Prazer, eu sou Vinicius Rodrigues.</p>

            <p>
              Estudo, supervisão e cuidado pessoal são parte do compromisso que
              tenho com quem atendo. Não acredito em cuidar do outro sem
              continuar aprendendo e sem também cuidar de mim. Isso não é
              perfeição; é responsabilidade com o tratamento.
            </p>
          </div>
        </div>
      </div>
    </section>
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