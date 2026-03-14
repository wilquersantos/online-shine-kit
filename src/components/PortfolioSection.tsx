import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projetos = [
  { nome: "Loja AutoPeças Silva", tipo: "Site + Google", cor: "bg-primary/10" },
  { nome: "Clínica Dental Sorriso", tipo: "Site Profissional", cor: "bg-secondary/10" },
  { nome: "Restaurante Sabor & Arte", tipo: "Site + Google Maps", cor: "bg-primary/10" },
  { nome: "Oficina Mecânica Central", tipo: "Presença Digital", cor: "bg-secondary/10" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Alguns projetos que já desenvolvemos
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Confira exemplos de sites e configurações que criamos para nossos clientes.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {projetos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all"
            >
              <div className={`${p.cor} h-48 flex items-center justify-center`}>
                <div className="w-3/4 bg-card/80 rounded-lg p-4 shadow-sm backdrop-blur-sm">
                  <div className="h-2 w-1/3 bg-primary/30 rounded mb-3" />
                  <div className="h-1.5 w-full bg-border rounded mb-2" />
                  <div className="h-1.5 w-2/3 bg-border rounded mb-3" />
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-8 bg-muted rounded" />
                    <div className="h-8 bg-muted rounded" />
                    <div className="h-8 bg-muted rounded" />
                  </div>
                </div>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div className="text-left">
                  <h3 className="font-bold text-foreground">{p.nome}</h3>
                  <p className="text-sm text-muted-foreground">{p.tipo}</p>
                </div>
                <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
