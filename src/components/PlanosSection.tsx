import { motion } from "framer-motion";
import { Check, Star, Rocket, Zap, Crown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const planos = [
  {
    nome: "Presença",
    desc: "Para empresas que ainda não existem na internet",
    destaque: false,
    icon: Zap,
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
    features: [
      "Tudo do plano anterior",
      "Gestão mensal de anúncios",
      "SEO avançado",
      "Otimização contínua do Google Maps",
      "Criação de novas páginas de conversão",
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

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5562991715110&text=Ol%C3%A1%2C%20desejo%20colocar%20minha%20empresa%20na%20internet!%0AGostaria%20de%20saber%20mais.";

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
            Criação de site + Google + suporte
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha o plano ideal para o momento do seu negócio. Do primeiro site à dominância digital na sua cidade.
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
                  ? "bg-foreground text-background border-foreground shadow-2xl lg:scale-105"
                  : "bg-card text-foreground border-border shadow-sm"
              }`}
            >
              {p.destaque && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  ⭐ MAIS ESCOLHIDO
                </span>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    p.destaque ? "bg-background/20" : "bg-accent/10"
                  }`}
                >
                  <p.icon
                    size={20}
                    className={
                      p.destaque ? "text-background" : "text-accent"
                    }
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{p.nome}</h3>
                </div>
              </div>

              <p
                className={`text-sm mb-4 ${
                  p.destaque ? "text-background/70" : "text-muted-foreground"
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

              <div
                className={`rounded-lg p-3 mb-4 ${
                  p.destaque ? "bg-background/10" : "bg-muted/50"
                }`}
              >
                <p
                  className={`text-xs font-semibold mb-2 ${
                    p.destaque ? "text-background/60" : "text-muted-foreground"
                  }`}
                >
                  Resultado
                </p>
                <ul className="space-y-1">
                  {p.resultados.map((r, k) => (
                    <li
                      key={k}
                      className={`text-xs ${
                        p.destaque ? "text-background/80" : "text-foreground/80"
                      }`}
                    >
                      📍 {r}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                asChild
                className={`w-full gap-2 ${
                  p.destaque
                    ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    : "bg-foreground hover:bg-foreground/90 text-background"
                }`}
                size="lg"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={16} /> {p.cta}
                </a>
              </Button>

              <p
                className={`text-center text-xs mt-3 ${
                  p.destaque ? "text-background/50" : "text-muted-foreground"
                }`}
              >
                💰 {p.pagamento}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Diagnóstico gratuito */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-muted rounded-2xl p-8 max-w-2xl mx-auto"
        >
          <p className="text-lg font-bold text-foreground mb-2">Não sabe qual escolher?</p>
          <p className="text-muted-foreground mb-4">Solicite um diagnóstico gratuito e descubra o melhor caminho para o seu negócio.</p>
          <Button asChild size="lg" className="gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} /> Solicitar diagnóstico gratuito
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PlanosSection;
