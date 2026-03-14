import { motion } from "framer-motion";
import { MessageSquare, PenTool, Search, Rocket } from "lucide-react";

const passos = [
  { icon: MessageSquare, titulo: "Contato Inicial", desc: "Conversamos sobre seu negócio e suas necessidades." },
  { icon: PenTool, titulo: "Criação do Site", desc: "Desenvolvemos seu site profissional e responsivo." },
  { icon: Search, titulo: "Configuração do Google", desc: "Colocamos seu negócio no Google e no Maps." },
  { icon: Rocket, titulo: "Resultados!", desc: "Sua empresa começa a receber clientes pela internet." },
];

const ComoFuncionaSection = () => {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Como colocamos sua empresa na internet
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Um processo simples e rápido para você começar a ter resultados.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-border" />

          {passos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="relative flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4 z-10 shadow-lg">
                <p.icon size={24} />
              </div>
              <span className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">
                Passo {i + 1}
              </span>
              <h3 className="text-lg font-bold text-foreground mb-2">{p.titulo}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoFuncionaSection;
