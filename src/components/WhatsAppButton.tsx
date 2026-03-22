import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5562991715110&text=Ol%C3%A1%2C%20desejo%20colocar%20minha%20empresa%20na%20internet!%0AGostaria%20de%20saber%20mais.";

const WhatsAppButton = () => {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:scale-110 transition-transform"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={28} fill="white" strokeWidth={0} />
    </motion.a>
  );
};

export default WhatsAppButton;
