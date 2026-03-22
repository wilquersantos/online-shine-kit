import { motion } from "framer-motion";
import { MessageCircle, Clock, Shield } from "lucide-react";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5562991715110&text=Ol%C3%A1%2C%20desejo%20colocar%20minha%20empresa%20na%20internet!%0AGostaria%20de%20saber%20mais.";

const CtaSection = () => {
  return (
    <section id="contato" className="relative z-20 py-24 bg-white/50 dark:bg-[#020204]/90 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/10 dark:bg-red-500/5 text-[11px] font-medium mb-6 text-red-600 dark:text-red-400 backdrop-blur-sm shadow-[0_0_20px_rgba(239,68,68,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-red-400" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <Clock size={12} />
            <span>🔥 Vagas limitadas este mês</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900 dark:text-white leading-tight">
            Um clique para colocar sua empresa{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-400">
              na frente de quem procura.
            </span>
          </h2>
          <p className="mt-4 text-base font-light text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A cada dia que passa sem presença online, você perde clientes para quem já está lá.
            <span className="text-slate-900 dark:text-white font-medium"> A conversa é rápida — e o orçamento é grátis.</span>
          </p>

          <div className="mt-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-all font-semibold text-lg shadow-lg shadow-emerald-500/20 active:scale-95"
            >
              <MessageCircle size={22} /> Falar no WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Shield size={14} className="text-blue-500" /> Orçamento gratuito
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-blue-500" /> Resposta em até 2h
            </span>
            <span className="flex items-center gap-1.5">
              <MessageCircle size={14} className="text-blue-500" /> Atendimento humanizado
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
