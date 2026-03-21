import { motion } from "framer-motion";
import { MessageCircle, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section id="contato" className="py-16 md:py-24 bg-foreground relative overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-background/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-accent text-accent-foreground text-sm font-bold shadow-lg animate-pulse">
            <Clock size={16} /> 🔥 Vagas limitadas este mês
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-background">
            Um clique para colocar sua empresa na frente de quem procura.
          </h2>
          <p className="mt-4 text-background/70 text-lg max-w-2xl mx-auto">
            A cada dia que passa sem presença online, você perde clientes para quem já está lá.
            <strong className="text-background"> A conversa é rápida — e o orçamento é grátis.</strong>
          </p>

          <div className="mt-8">
            <Button
              size="lg"
              asChild
              className="text-base gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-10 py-6 text-lg"
            >
              <a
                href="https://api.whatsapp.com/send?phone=5562991715110&text=Ol%C3%A1%2C%20desejo%20colocar%20minha%20empresa%20na%20internet!%0AGostaria%20de%20saber%20mais."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={22} /> Falar no WhatsApp
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-background/60">
            <span className="flex items-center gap-1.5">
              <Shield size={14} /> Orçamento gratuito
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> Resposta em até 2h
            </span>
            <span className="flex items-center gap-1.5">
              <MessageCircle size={14} /> Atendimento humanizado
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
