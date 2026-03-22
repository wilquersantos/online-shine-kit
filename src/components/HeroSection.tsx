import { motion } from "framer-motion";
import { MessageCircle, Star, ArrowRight } from "lucide-react";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5562991715110&text=Ol%C3%A1%2C%20desejo%20colocar%20minha%20empresa%20na%20internet!%0AGostaria%20de%20saber%20mais.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-6 z-10">
      <div className="z-20 text-center max-w-5xl mx-auto relative">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 dark:bg-blue-500/5 text-[11px] font-medium mb-6 shadow-[0_0_20px_rgba(59,130,246,0.15)] text-blue-700 dark:text-blue-300 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          <span>Vagas limitadas este mês</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center z-20 mt-2 mb-6"
        >
          <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-slate-900 dark:text-white leading-[0.95] bg-clip-text text-transparent bg-gradient-to-b from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-white dark:to-white/80 drop-shadow-sm pb-2 md:pb-3">
            Clientes procurando
          </span>
          <span className="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif italic font-light text-slate-500 dark:text-slate-400/90 tracking-tight mt-1 md:-mt-2">
            o que você vende — e te encontrando
          </span>
          <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-400 pb-2">
            no Google.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="leading-relaxed text-base md:text-lg max-w-2xl mx-auto mb-10 font-light text-slate-600 dark:text-slate-400"
        >
          Em até <span className="text-slate-900 dark:text-white font-medium">10 dias</span>, sua empresa aparece para quem está buscando agora. Sem burocracia, sem enrolação.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-5 relative z-20"
        >
          {/* Primary CTA - WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-all font-semibold text-base shadow-lg shadow-emerald-500/20 active:scale-95 w-full md:w-auto justify-center"
          >
            <MessageCircle size={20} /> Falar no WhatsApp
          </a>

          {/* Secondary CTA */}
          <a
            href="#solucao"
            className="group flex transition-all md:w-auto text-sm font-medium bg-white/80 dark:bg-[#0a0a0b] w-full border border-slate-200 dark:border-transparent rounded-md py-3 px-6 gap-2 items-center justify-center hover:text-slate-900 dark:hover:text-white text-slate-500 dark:text-slate-400 active:scale-95 shadow-sm dark:shadow-none backdrop-blur-sm"
          >
            <ArrowRight size={16} className="text-slate-400 dark:text-slate-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
            <span className="border-b border-transparent group-hover:border-slate-500 transition-all">
              Conhecer os serviços
            </span>
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-xs text-slate-400 dark:text-slate-500"
        >
          ✓ Orçamento grátis &nbsp; ✓ Resposta em minutos &nbsp; ✓ Sem compromisso
        </motion.p>

        {/* Social Proof Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 max-w-md mx-auto"
        >
          <div className="relative p-px rounded-xl bg-gradient-to-b from-slate-200 to-slate-100 dark:from-white/10 dark:to-white/5 shadow-lg">
            <div className="bg-white dark:bg-[#0e0e10] rounded-[11px] p-5 text-left">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                "Recebi <strong>12 ligações em 15 dias</strong> só pelo Google. Antes ninguém me encontrava."
              </p>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                — João Silva, Loja de Autopeças
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
