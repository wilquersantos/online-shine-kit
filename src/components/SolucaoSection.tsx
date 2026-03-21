import { motion } from "framer-motion";
import { Globe, MapPin, TrendingUp, ArrowRight } from "lucide-react";

const servicos = [
  {
    icon: Globe,
    titulo: "Site que Vende por Você",
    desc: "Não é só um site bonito. É uma máquina de gerar contatos. Rápido, profissional e feito para transformar visitantes em clientes.",
    resultado: "Clientes te encontram 24h por dia",
  },
  {
    icon: MapPin,
    titulo: "Seu Negócio no Google Maps",
    desc: "Quando alguém pesquisar o que você faz na sua cidade, sua empresa vai aparecer ali — com foto, endereço e avaliações.",
    resultado: "Ligações diretas do Google",
  },
  {
    icon: TrendingUp,
    titulo: "Presença Digital Completa",
    desc: "Seu negócio organizado na internet. Site, Google, redes sociais conectados — tudo passando profissionalismo e confiança.",
    resultado: "Imagem profissional que gera confiança",
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
            Seu negócio aparecendo no Google{" "}
            <span className="text-accent">e atraindo clientes todos os dias</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Enquanto você foca no que sabe fazer, nós colocamos sua empresa na frente de quem está procurando exatamente o que você oferece.
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
              className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group text-left"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <s.icon className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{s.titulo}</h3>
              <p className="text-muted-foreground mb-4">{s.desc}</p>
              <div className="flex items-center gap-2 text-sm font-semibold text-accent">
                <ArrowRight size={16} />
                {s.resultado}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolucaoSection;
