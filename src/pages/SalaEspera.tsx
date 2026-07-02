import { Helmet } from "react-helmet-async";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const WHATSAPP_NUMBER = "5562986286895";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, Vinicius. Gostaria de pedir acesso a um dos materiais da Sala de Espera Virtual."
);

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function SalaEspera() {
  const indicacoes = [
    {
      tipo: "Livro",
      titulo: "Hamnet / Hamlet",
      imagem: "/images/sala-espera/hamnet.jpg",
      texto:
        "Confesso que o que mais me chamou atenção não foi a história em si, mas a forma como ela continua atual. O filme fala de luto, culpa e desejo de vingança sem perder a força do texto original. É uma daquelas histórias que parecem sempre encontrar um jeito de conversar com o presente.",
    },
    {
      tipo: "Filme",
      titulo: "Valor Sentimental",
      imagem: "/images/sala-espera/valor-sentimental.jpg",
      texto:
        "Esse é um filme que pede calma. Não acontece muita coisa por fora, mas muita coisa muda por dentro. Me fez pensar em como algumas feridas familiares continuam falando, mesmo depois de anos, e em como às vezes um reencontro pode abrir espaço para algo que parecia impossível.",
    },
    {
      tipo: "Filme",
      titulo: "Elementos",
      imagem: "/images/sala-espera/elementos.jpg",
      texto:
        "Eu gosto quando uma animação consegue conversar também com os adultos. Elementos fala sobre pertencimento, expectativas da família e identidade de um jeito muito leve. No fim, a impressão que fica é que crescer também é descobrir quem você é, sem precisar abandonar de onde veio.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Sala de Espera Virtual | Vinicius Rodrigues</title>
        <meta
          name="description"
          content="Sala de espera virtual com indicações de filmes, leituras e reflexões preparadas por Vinicius Rodrigues."
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-[#f6f1ea] px-6 pb-24 pt-32 text-[#171717]">
        <section className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#6f432b]">
              Sala de Espera Virtual
            </p>

            <h1 className="font-serif text-5xl font-normal leading-tight tracking-[-0.04em] md:text-6xl lg:text-7xl">
              Um espaço para esperar com calma, curiosidade e presença.
            </h1>

            <div className="my-8 h-px w-24 bg-[#8a5a3b]" />

            <div className="max-w-4xl space-y-5 text-lg leading-8 text-[#3e3a35]">
              <p>
                Tive essa ideia de criar uma sala de espera para o atendimento
                online. Algo que trouxesse um pouco da experiência da sala de
                espera presencial, mas de um jeito mais íntimo e possível.
              </p>

              <p>
                Ao invés de revistas, aqui você encontrará indicações de filmes
                e leituras, com breves comentários que talvez possam te
                interessar enquanto aguarda o seu horário.
              </p>

              <p>
                Se você já agendou sua sessão e quer aproveitar o tempo de
                espera para conhecer uma nova leitura, poesia ou indicação de
                filme, este espaço foi preparado para você. Fique à vontade.
              </p>
            </div>
          </div>

          <div className="mt-16 space-y-8">
            {indicacoes.map((item) => (
              <article
                key={item.titulo}
                className="grid grid-cols-1 items-center gap-8 rounded-[2rem] border border-[#bfae9e]/40 bg-[#fffdfc] p-6 shadow-sm md:grid-cols-[180px_1fr] md:p-8"
              >
                <div className="mx-auto w-full max-w-[180px] overflow-hidden rounded-2xl bg-[#efe8df] shadow-md md:mx-0">
                  <img
                    src={item.imagem}
                    alt={item.titulo}
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>

                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#6f432b]">
                    {item.tipo}
                  </p>

                  <h2 className="font-serif text-3xl font-normal leading-tight text-[#171717] md:text-4xl">
                    {item.titulo}
                  </h2>

                  <p className="mt-5 max-w-4xl text-base leading-8 text-[#3e3a35]">
                    {item.texto}
                  </p>
                </div>
              </article>
            ))}
          </div>

        <div className="mt-14 flex w-full items-center justify-center bg-[#a8732a] px-6 py-8 text-center">
  <div className="max-w-3xl">
    <p className="text-base font-semibold leading-7 text-white md:text-lg">
      Se interessou e quer acesso a um desses materiais para ler ou assistir
      integralmente?{" "}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="inline underline decoration-white/90 decoration-2 underline-offset-4 transition hover:text-white/80"
        aria-label="Pedir material pelo WhatsApp"
      >
        Me envie uma mensagem pelo WhatsApp
        <FaWhatsapp className="ml-1 inline-block align-[-2px] text-xl text-[#25D366]" />
      </a>
      .
    </p>

    <p className="mt-2 text-base leading-7 text-white/90">
      Envio com prazer.
    </p>
  </div>
</div>
        </section>
      </main>

      <Footer />
    </>
  );
}