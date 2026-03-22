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
    <section id="faq" className="relative z-20 py-24 bg-white/50 dark:bg-[#020204]/90 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight font-serif text-slate-900 dark:text-white">
            Ainda tem alguma dúvida?
          </h2>
          <p className="mt-4 text-base font-light text-slate-600 dark:text-slate-400">
            Respondemos as perguntas mais comuns. Se não encontrar a sua,{" "}
            <a href="#contato" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
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
                className="rounded-xl border border-slate-200 dark:border-white/5 bg-white/70 dark:bg-white/[0.02] backdrop-blur-sm px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 dark:text-white hover:no-underline text-sm">
                  {faq.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
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
