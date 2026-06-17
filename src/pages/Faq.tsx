const WHATSAPP_NUMBER = "5562986286895";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, Vinicius. Gostaria de tirar uma dúvida sobre o atendimento psicológico."
);

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const faqs = [
  {
    question: "Como funciona o atendimento online?",
    answer:
      "O atendimento online acontece por videochamada, em um horário previamente combinado. Você precisa apenas de um local reservado, boa conexão com a internet e um dispositivo com câmera e áudio.",
  },
  {
    question: "O atendimento online tem a mesma validade do presencial?",
    answer:
      "Sim. O atendimento psicológico online é uma modalidade reconhecida, desde que realizado por profissional habilitado e seguindo as normas éticas da profissão.",
  },
  {
    question: "Quanto tempo dura uma sessão?",
    answer:
      "A duração da sessão pode variar conforme a organização do atendimento, mas geralmente segue um tempo previamente combinado entre profissional e paciente.",
  },
  {
    question: "Para quem a psicoterapia é indicada?",
    answer:
      "A psicoterapia pode ajudar pessoas que desejam compreender melhor suas emoções, seus relacionamentos, seus comportamentos e os momentos de sofrimento ou conflito que atravessam.",
  },
  {
    question: "Como faço para agendar?",
    answer:
      "O agendamento pode ser feito pelo WhatsApp. Após o contato inicial, são alinhadas as informações sobre disponibilidade, formato do atendimento e início do processo terapêutico.",
  },
];

export default function Faq() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] px-6 py-20 text-[#171717]">
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
  );
}