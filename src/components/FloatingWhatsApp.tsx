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
      className="fixed bottom-6 right-6 z-[90] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/25 transition hover:-translate-y-1 hover:bg-[#1ebe5d] md:h-20 md:w-20"
      aria-label="Falar pelo WhatsApp"
    >
      <FaWhatsapp className="h-9 w-9 md:h-11 md:w-11" />
    </a>
  );
}