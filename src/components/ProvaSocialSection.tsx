import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const depoimentos = [
  {
    texto: "Eu mal recebia 5 ligações por semana. Depois do site, foram 12 ligações nos primeiros 15 dias — só pelo Google!",
    nome: "João Silva",
    empresa: "Loja de Autopeças",
    resultado: "12 ligações em 15 dias",
  },
  {
    texto: "Minha agenda vivia vazia. Depois que apareci no Google Maps, passei a receber pacientes que nem conheciam o consultório. Foi a melhor decisão.",
    nome: "Dra. Maria Costa",
    empresa: "Clínica Dental",
    resultado: "Agenda 80% mais cheia",
  },
  {
    texto: "Nosso restaurante triplicou as reservas. As pessoas pesquisam 'restaurante perto de mim' e nos encontram. Isso mudou tudo!",
    nome: "Carlos Mendes",
    empresa: "Restaurante Sabor & Arte",
    resultado: "3x mais reservas",
  },
];

const ProvaSocialSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Não acredite só na gente.{" "}
            <span className="text-accent">Veja o que nossos clientes dizem.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Empresários reais, com resultados reais.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {depoimentos.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm text-left relative"
            >
              <Quote size={32} className="text-accent/10 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">"{d.texto}"</p>
              <div className="bg-secondary/10 rounded-lg px-3 py-2 mb-4 inline-block">
                <span className="text-sm font-bold text-secondary">📈 {d.resultado}</span>
              </div>
              <div>
                <p className="font-bold text-foreground">{d.nome}</p>
                <p className="text-sm text-muted-foreground">{d.empresa}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvaSocialSection;
