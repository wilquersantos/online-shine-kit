import { motion } from "framer-motion";
import { MessageCircle, Mail, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section id="contato" className="py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Urgência sutil */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium">
            <Clock size={16} /> Vagas limitadas este mês
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
            Daqui a 10 dias, seu negócio pode estar aparecendo no Google.
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            A cada dia que passa sem presença online, você perde clientes para quem já está lá. 
            <strong className="text-primary-foreground"> A conversa é rápida — e o orçamento é grátis.</strong>
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="text-base gap-2"
            >
              <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} /> Quero meu site agora
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base gap-2 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href="mailto:contato@digitalpro.com.br">
                <Mail size={20} /> Solicitar orçamento grátis
              </a>
            </Button>
          </div>

          {/* Garantias */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/70">
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
