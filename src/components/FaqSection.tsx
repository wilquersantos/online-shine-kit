import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    pergunta: "Preciso ter logo para criar o site?",
    resposta: "Não! Se você ainda não tem uma logo, podemos ajudar a criar uma identidade visual para seu negócio.",
  },
  {
    pergunta: "Quanto tempo leva para o site ficar pronto?",
    resposta: "Em média, entre 5 e 10 dias úteis, dependendo da complexidade do projeto.",
  },
  {
    pergunta: "Preciso pagar mensalidade?",
    resposta: "Não necessariamente. O pagamento pode ser único. A mensalidade é opcional, apenas se quiser suporte e manutenção contínuos.",
  },
  {
    pergunta: "Meu site vai aparecer no Google?",
    resposta: "Sim! Todos os nossos sites são otimizados para aparecer no Google. No plano com Google, também configuramos seu perfil no Google Maps.",
  },
  {
    pergunta: "Vocês atendem em qual região?",
    resposta: "Atendemos todo o Brasil de forma online. Trabalhamos remotamente para entregar o melhor resultado para você.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Tire suas dúvidas antes de entrar em contato.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
