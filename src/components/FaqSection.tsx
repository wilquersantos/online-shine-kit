import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    pergunta: "Preciso entender de tecnologia?",
    resposta: "Absolutamente não. Nós cuidamos de tudo — do design ao código, da configuração ao Google. Você só precisa nos contar sobre seu negócio.",
  },
  {
    pergunta: "Preciso ter logo para criar o site?",
    resposta: "Não! Se você ainda não tem uma logo, podemos ajudar a criar uma identidade visual. Isso não vai atrasar nada.",
  },
  {
    pergunta: "Em quanto tempo fico pronto?",
    resposta: "Entre 5 e 10 dias úteis. Sim, é rápido. Enquanto seus concorrentes pensam em fazer, você já vai estar aparecendo no Google.",
  },
  {
    pergunta: "Preciso pagar mensalidade?",
    resposta: "Não. O investimento é único. A mensalidade é opcional, apenas para quem quiser suporte e manutenção contínuos. Sem surpresas, sem letras miúdas.",
  },
  {
    pergunta: "E se eu não gostar do resultado?",
    resposta: "Trabalhamos junto com você. Mostramos o progresso e fazemos ajustes até você ficar 100% satisfeito antes de publicar.",
  },
  {
    pergunta: "Meu site vai realmente aparecer no Google?",
    resposta: "Sim! Todos os nossos sites são otimizados para o Google. Nos planos com Google, também configuramos seu perfil no Google Maps — e nossos clientes já relatam resultados nas primeiras semanas.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Ainda tem alguma dúvida?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Respondemos as perguntas mais comuns. Se não encontrar a sua,{" "}
            <a href="#contato" className="text-primary font-semibold hover:underline">
              é só chamar no WhatsApp
            </a>.
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
