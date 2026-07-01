import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";

const WHATSAPP_NUMBER = "5562986286895";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, Vinicius. Gostaria de tirar uma dúvida sobre o atendimento psicológico."
);

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
const faqs = [
  {
    question: "Como funciona o valor das sessões?",
    answer:
      "O valor da primeira consulta é de R$ 250,00. Caso decidamos dar continuidade ao processo terapêutico, o valor posterior das sessões será definido em conjunto, considerando a frequência do acompanhamento e a realidade financeira de cada pessoa. Acredito que essa conversa também deve acontecer com clareza, respeito e transparência.",
  },
  {
    question: "Preciso saber exatamente o que dizer na primeira sessão?",
    answer:
      "Não. Você não precisa chegar nessa primeira sessão sabendo exatamente o que falar. Meu trabalho é fazer perguntas que você consiga responder, nada complexo. O medo de não saber o que dizer faz parte do processo. Meu papel é conduzir essa conversa com cuidado, respeitando o seu tempo e ajudando você a compreender aquilo que hoje ainda pode ser difícil colocar em palavras.",
  },
  {
    question: "E se a terapia não funcionar para mim?",
    answer:
      "Cada pessoa tem seu próprio tempo e sua própria forma de vivenciar a terapia. Meu compromisso nunca será manter um paciente em acompanhamento a qualquer custo. Se eu entender que o processo não está trazendo os resultados esperados ou que outro tipo de cuidado pode ser mais adequado, conversarei com você de forma clara, ética e responsável para buscarmos o melhor caminho.",
  },
  {
    question: "Como faço para agendar?",
    answer:
      "Basta enviar uma mensagem pelo WhatsApp. Sua mensagem é respondida diretamente por mim, sem intermediários ou respostas automáticas. Responderei assim que possível para conversarmos sobre horários e esclarecer qualquer dúvida.",
  },
  {
    question: "Como funciona o atendimento psicológico online?",
    answer:
      "O atendimento acontece por videochamada, em horário previamente combinado. Para a sessão, é importante estar em um local reservado, com privacidade, boa conexão com a internet e disponibilidade para falar com tranquilidade.",
  },
  {
    question: "O atendimento online é seguro?",
    answer:
      "Sim. O atendimento psicológico online deve seguir os mesmos princípios éticos da prática presencial, incluindo sigilo profissional, cuidado com a privacidade e responsabilidade na condução do processo terapêutico.",
  },
  {
    question: "Quem pode fazer psicoterapia online?",
    answer:
      "A psicoterapia online pode ser indicada para adultos que desejam compreender melhor suas emoções, seus relacionamentos, seus conflitos e momentos de sofrimento psíquico. Em algumas situações específicas, pode ser necessário avaliar se o formato online é o mais adequado.",
  },
  {
    question: "Com que frequência acontecem as sessões?",
    answer:
      "A frequência costuma ser combinada entre psicólogo e paciente, considerando a necessidade do processo terapêutico, a disponibilidade de horários e o momento vivido pela pessoa.",
  },
  {
    question: "Quanto tempo dura uma sessão?",
    answer:
      "A duração da sessão é alinhada antes do início do acompanhamento. As informações sobre tempo, valor, frequência e funcionamento são combinadas no contato inicial.",
  },
  {
    question: "A psicoterapia é indicada apenas para quem está em crise?",
    answer:
      "Não. Muitas pessoas procuram psicoterapia em momentos de crise, mas o processo também pode ajudar no autoconhecimento, na compreensão de padrões emocionais e na forma como a pessoa se relaciona consigo mesma e com os outros.",
  },
];
export default function Faq() {
  return (
    <>
      <Helmet>
        <title>Perguntas Frequentes | Vinicius Rodrigues Psicólogo Online</title>
        <meta
          name="description"
          content="Veja dúvidas comuns sobre o atendimento psicológico online com Vinicius Rodrigues, psicólogo psicoterapeuta CRP 09/12077."
        />
      </Helmet>

<Header />

<main className="min-h-screen bg-[#f6f1ea] px-6 pb-20 pt-32 text-[#171717]">
      <section className="mx-auto max-w-4xl">
        <a
          href="/"
          className="mb-10 inline-flex text-sm text-[#6f432b] transition hover:text-[#8a5a3b]"
        >
          ← Voltar para o início
        </a>

        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#6f432b]">
          Perguntas frequentes
        </p>

        <h1 className="font-serif text-5xl font-normal leading-tight tracking-[-0.04em] md:text-6xl">
          Dúvidas comuns sobre o atendimento psicológico online.
        </h1>

        <div className="my-8 h-px w-24 bg-[#8a5a3b]" />

        <p className="max-w-2xl text-lg leading-8 text-[#3e3a35]">
          Reuni aqui algumas respostas importantes para quem está considerando
          iniciar o processo terapêutico.
        </p>

        <div className="mt-14 space-y-5">
          {faqs.map((item) => (
            <article
              key={item.question}
              className="rounded-3xl border border-[#bfae9e]/50 bg-[#fffdfc] p-7 shadow-sm"
            >
              <h2 className="font-serif text-2xl font-normal text-[#171717]">
                {item.question}
              </h2>

              <p className="mt-4 leading-7 text-[#3e3a35]">{item.answer}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] bg-[#efe8df] p-8">
          <h2 className="font-serif text-3xl font-normal">
            Ainda tem alguma dúvida?
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-[#3e3a35]">
            Você pode entrar em contato pelo WhatsApp para entender melhor como
            funciona o atendimento.
          </p>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex rounded-full bg-[#8a5a3b] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#6f432b]"
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