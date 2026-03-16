import { motion } from "framer-motion";
import { Check, Star, Rocket, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const planos = [
  {
    nome: "Presença",
    desc: "Para empresas que ainda não existem na internet",
    destaque: false,
    icon: Zap,
    cor: "🟢",
    features: [
      "Site profissional até 5 páginas",
      "Design responsivo (celular e computador)",
      "Botão de WhatsApp",
      "Formulário de contato",
      "Configuração de domínio e hospedagem",
      "Integração com Google",
      "Entrega em até 7 dias",
    ],
    resultados: [
      "Empresa passa a ter presença online",
      "Mais credibilidade",
      "Primeiros contatos digitais",
    ],
    pagamento: "Pagamento único",
    cta: "Quero meu site",
  },
  {
    nome: "Destaque no Google",
    desc: "Para empresas que querem ser encontradas",
    destaque: true,
    icon: Star,
    cor: "🔵",
    features: [
      "Tudo do plano Presença",
      "Criação ou otimização do Google Maps",
      "Configuração completa do perfil",
      "Inserção de fotos profissionais",
      "Descrição estratégica do negócio",
      "SEO local básico",
      "Até 8 páginas no site",
      "Integração com redes sociais",
    ],
    resultados: [
      "Aparecer nas buscas do Google",
      "Aparecer no Google Maps",
      "Mais ligações e mensagens",
    ],
    pagamento: "Pagamento único",
    cta: "Quero aparecer no Google",
  },
  {
    nome: "Impulso de Clientes",
    desc: "Para empresas que querem atrair clientes rapidamente",
    destaque: false,
    icon: Rocket,
    cor: "🟣",
    features: [
      "Tudo do plano anterior",
      "Criação de campanhas no Google Ads",
      "Campanhas no Facebook / Instagram Ads",
      "Configuração de pixel e rastreamento",
      "Estratégia de público-alvo",
      "Landing page de conversão",
      "Relatório inicial de desempenho",
    ],
    resultados: [
      "Mais visitas",
      "Mais mensagens no WhatsApp",
      "Mais clientes novos",
    ],
    pagamento: "Setup + investimento em anúncios",
    cta: "Quero mais clientes",
  },
  {
    nome: "Dominância Digital",
    desc: "Para empresas que querem crescer constantemente",
    destaque: false,
    icon: Crown,
    cor: "🟠",
    features: [
      "Tudo do plano anterior",
      "Gestão mensal de anúncios",
      "SEO avançado",
      "Otimização contínua do Google Maps",
      "Criação de novas páginas de conversão",
      "Automação de WhatsApp",
      "Relatórios mensais de resultados",
      "Estratégia digital contínua",
    ],
    resultados: [
      "Geração constante de clientes",
      "Crescimento previsível",
      "Marca forte na cidade",
    ],
    pagamento: "Plano mensal",
    cta: "Quero dominar minha região",
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
            Escolha o plano ideal{" "}
            <span className="text-primary">para o momento do seu negócio</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Do primeiro site à dominância digital na sua cidade. Comece pequeno
            e cresça no seu ritmo.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {planos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`rounded-2xl p-6 border text-left relative flex flex-col ${
                p.destaque
                  ? "bg-primary text-primary-foreground border-primary shadow-2xl lg:scale-105"
                  : "bg-card text-foreground border-border shadow-sm"
              }`}
            >
              {p.destaque && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  ⭐ MAIS ESCOLHIDO
                </span>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    p.destaque ? "bg-primary-foreground/20" : "bg-primary/10"
                  }`}
                >
                  <p.icon
                    size={20}
                    className={
                      p.destaque ? "text-primary-foreground" : "text-primary"
                    }
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{p.nome}</h3>
                </div>
              </div>

              <p
                className={`text-sm mb-4 ${
                  p.destaque
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {p.desc}
              </p>

              <ul className="space-y-2 mb-4 flex-1">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${
                        p.destaque ? "text-secondary" : "text-secondary"
                      }`}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Resultados */}
              <div
                className={`rounded-lg p-3 mb-4 ${
                  p.destaque ? "bg-primary-foreground/10" : "bg-muted/50"
                }`}
              >
                <p
                  className={`text-xs font-semibold mb-2 ${
                    p.destaque
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  Resultado
                </p>
                <ul className="space-y-1">
                  {p.resultados.map((r, k) => (
                    <li
                      key={k}
                      className={`text-xs ${
                        p.destaque
                          ? "text-primary-foreground/90"
                          : "text-foreground/80"
                      }`}
                    >
                      📍 {r}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                asChild
                variant={p.destaque ? "secondary" : "default"}
                className="w-full"
                size="lg"
              >
                <a href="#contato">{p.cta}</a>
              </Button>

              <p
                className={`text-center text-xs mt-3 ${
                  p.destaque
                    ? "text-primary-foreground/60"
                    : "text-muted-foreground"
                }`}
              >
                💰 {p.pagamento}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanosSection;
