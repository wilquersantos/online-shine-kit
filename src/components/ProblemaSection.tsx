import { motion } from "framer-motion";
import { SearchX, Users, TrendingDown, Globe } from "lucide-react";

const dores = [
  { icon: SearchX, text: "Sua empresa não aparece no Google" },
  { icon: Users, text: "Você depende apenas de indicação" },
  { icon: TrendingDown, text: "Seus concorrentes aparecem primeiro" },
  { icon: Globe, text: "Você não tem um site profissional" },
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
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Seu negócio existe… mas ninguém encontra na internet?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            A maioria dos clientes pesquisa no Google antes de comprar. Se sua empresa não está lá, você está perdendo vendas.
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
              className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                <dor.icon className="text-destructive" size={24} />
              </div>
              <p className="font-semibold text-foreground">{dor.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemaSection;
