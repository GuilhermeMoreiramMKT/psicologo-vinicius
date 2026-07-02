import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "5562986286895";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, Vinicius. Gostaria de saber mais sobre o atendimento psicológico."
);

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-2xl shadow-black/25 transition hover:-translate-y-1 hover:bg-[#1ebe5d] md:h-16 md:w-16"
      aria-label="Falar pelo WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}