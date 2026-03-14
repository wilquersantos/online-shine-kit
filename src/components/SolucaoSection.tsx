import { motion } from "framer-motion";
import { Globe, MapPin, TrendingUp } from "lucide-react";

const servicos = [
  {
    icon: Globe,
    titulo: "Criação de Sites Profissionais",
    desc: "Sites rápidos, modernos e feitos para gerar clientes. Design responsivo e otimizado.",
  },
  {
    icon: MapPin,
    titulo: "Perfil Profissional no Google",
    desc: "Configuramos seu negócio no Google para aparecer nas pesquisas e no Google Maps.",
  },
  {
    icon: TrendingUp,
    titulo: "Posicionamento Digital",
    desc: "Seu negócio pronto para ser encontrado online por quem está procurando o que você oferece.",
  },
];

const SolucaoSection = () => {
  return (
    <section id="solucao" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Nós colocamos sua empresa no <span className="text-primary">mapa digital</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos tudo que seu negócio precisa para começar a atrair clientes pela internet.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {servicos.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{s.titulo}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolucaoSection;
