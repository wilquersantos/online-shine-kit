import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const planos = [
  {
    nome: "Essencial",
    desc: "Ideal para quem está começando",
    destaque: false,
    features: [
      "Site profissional",
      "Design responsivo",
      "Formulário de contato",
      "Até 5 páginas",
    ],
  },
  {
    nome: "Presença no Google",
    desc: "O mais escolhido",
    destaque: true,
    features: [
      "Site profissional",
      "Design responsivo",
      "Formulário de contato",
      "Criação do perfil no Google",
      "Otimização inicial",
      "Até 8 páginas",
    ],
  },
  {
    nome: "Completo",
    desc: "Para resultados máximos",
    destaque: false,
    features: [
      "Tudo do plano anterior",
      "Suporte por 30 dias",
      "Otimização avançada",
      "Páginas ilimitadas",
      "Integração com redes sociais",
    ],
  },
];

const PlanosSection = () => {
  return (
    <section id="planos" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Escolha o plano ideal para o seu negócio
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Planos flexíveis para cada momento do seu negócio.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 items-start">
          {planos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className={`rounded-2xl p-8 border text-left relative ${
                p.destaque
                  ? "bg-primary text-primary-foreground border-primary shadow-2xl scale-105"
                  : "bg-card text-foreground border-border shadow-sm"
              }`}
            >
              {p.destaque && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  MAIS POPULAR
                </span>
              )}
              <h3 className="text-2xl font-bold mb-1">{p.nome}</h3>
              <p className={`text-sm mb-6 ${p.destaque ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {p.desc}
              </p>
              <ul className="space-y-3 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <Check size={18} className={`mt-0.5 shrink-0 ${p.destaque ? "text-secondary" : "text-secondary"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={p.destaque ? "secondary" : "default"}
                className="w-full"
                size="lg"
              >
                <a href="#contato">Solicitar Orçamento</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanosSection;
