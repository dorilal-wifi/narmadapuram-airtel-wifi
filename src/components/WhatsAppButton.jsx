import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917354232967"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        w-14
        h-14
        rounded-full
        bg-[#25D366]
        flex
        items-center
        justify-center
        text-white
        text-3xl
        shadow-2xl
        hover:scale-110
        transition-all
        duration-300
        animate-bounce
      "
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}