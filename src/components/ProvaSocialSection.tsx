import { motion } from "framer-motion";
import { Star } from "lucide-react";

const depoimentos = [
  {
    texto: "Depois do site, começamos a receber contatos pelo Google todos os dias. Valeu muito o investimento!",
    nome: "João Silva",
    empresa: "Loja de Autopeças",
  },
  {
    texto: "Profissionais excelentes! Meu consultório agora aparece no Google Maps e a agenda está sempre cheia.",
    nome: "Dra. Maria Costa",
    empresa: "Clínica Dental",
  },
  {
    texto: "Nosso restaurante triplicou as reservas depois que fizemos o site e configuramos o Google. Recomendo demais!",
    nome: "Carlos Mendes",
    empresa: "Restaurante Sabor & Arte",
  },
];

const ProvaSocialSection = () => {
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
            Empresas que já confiaram no nosso trabalho
          </h2>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {depoimentos.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm text-left"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground mb-6 italic leading-relaxed">"{d.texto}"</p>
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
