import { motion } from "framer-motion";
import { SearchX, Users, TrendingDown, Globe, AlertTriangle } from "lucide-react";

const dores = [
  {
    icon: SearchX,
    text: "Clientes pesquisam no Google e encontram seu concorrente — não você",
    impacto: "Você perde vendas todos os dias",
  },
  {
    icon: Users,
    text: "Depende só de indicação e do boca a boca para conseguir clientes",
    impacto: "Crescimento limitado e imprevisível",
  },
  {
    icon: TrendingDown,
    text: "Seus concorrentes já estão no Google Maps aparecendo primeiro",
    impacto: "Eles ficam com os seus clientes",
  },
  {
    icon: Globe,
    text: "Não tem site, ou tem um site que não gera nenhum resultado",
    impacto: "Passa imagem de amador",
  },
];

const ProblemaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Pergunta que espelha o pensamento do visitante */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-destructive/10 text-destructive text-sm font-medium">
            <AlertTriangle size={16} /> Isso está acontecendo com você?
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Enquanto você lê isso, alguém está pesquisando no Google<br className="hidden md:block" />
            <span className="text-destructive"> o que você vende — e encontrando seu concorrente.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            97% dos consumidores pesquisam online antes de comprar. Se sua empresa não aparece, ela simplesmente <strong className="text-foreground">não existe</strong> para essas pessoas.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dores.map((dor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <dor.icon className="text-destructive" size={24} />
              </div>
              <p className="font-semibold text-foreground mb-2">{dor.text}</p>
              <p className="text-sm text-destructive/80 font-medium">→ {dor.impacto}</p>
            </motion.div>
          ))}
        </div>

        {/* Transição emocional - da dor para a esperança */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-lg font-semibold text-foreground"
        >
          A boa notícia? <span className="text-primary">Isso tem solução — e é mais simples do que você imagina.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemaSection;
