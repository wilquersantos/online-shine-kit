import { motion } from "framer-motion";
import { Check, Star, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fireConfetti } from "@/hooks/use-confetti";

const planos = [
  {
    nome: "Essencial",
    desc: "Para sair do zero e ter presença online",
    destaque: false,
    icon: Zap,
    features: [
      "Site profissional e moderno",
      "Design responsivo (celular e PC)",
      "Formulário de contato com WhatsApp",
      "Até 5 páginas",
      "Entrega em até 7 dias",
    ],
    cta: "Começar agora",
  },
  {
    nome: "Presença no Google",
    desc: "Escolhido por 8 de cada 10 clientes",
    destaque: true,
    icon: Star,
    features: [
      "Tudo do plano Essencial",
      "Perfil completo no Google Maps",
      "Otimização para aparecer nas buscas",
      "Até 8 páginas",
      "Entrega em até 10 dias",
      "Suporte na primeira semana",
    ],
    cta: "Quero aparecer no Google",
  },
  {
    nome: "Completo",
    desc: "Para quem quer resultado máximo",
    destaque: false,
    icon: Shield,
    features: [
      "Tudo do plano anterior",
      "Suporte por 30 dias",
      "Otimização avançada de SEO",
      "Páginas ilimitadas",
      "Integração com redes sociais",
      "Relatório de desempenho",
    ],
    cta: "Quero o pacote completo",
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
            Invista uma vez, <span className="text-primary">colha resultados todos os dias</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Sem mensalidade obrigatória. Sem surpresas. Você escolhe o que faz sentido para o momento do seu negócio.
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
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  ⭐ MAIS ESCOLHIDO
                </span>
              )}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${p.destaque ? "bg-primary-foreground/20" : "bg-primary/10"}`}>
                  <p.icon size={20} className={p.destaque ? "text-primary-foreground" : "text-primary"} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{p.nome}</h3>
                  <p className={`text-xs ${p.destaque ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {p.desc}
                  </p>
                </div>
              </div>
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
                <a href="#contato">{p.cta}</a>
              </Button>
              {/* Redutor de risco */}
              <p className={`text-center text-xs mt-3 ${p.destaque ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                Pagamento único · Sem surpresas
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanosSection;
