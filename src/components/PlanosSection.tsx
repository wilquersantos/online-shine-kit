import { motion } from "framer-motion";
import { Check, Star, Rocket, Zap, Crown, MessageCircle } from "lucide-react";

const planos = [
  {
    nome: "Presença",
    desc: "Para empresas que ainda não existem na internet",
    destaque: false,
    icon: Zap,
    tier: "bronze",
    features: [
      "Site profissional até 5 páginas",
      "Design responsivo (celular e computador)",
      "Botão de WhatsApp",
      "Formulário de contato",
      "Configuração de domínio e hospedagem",
      "Integração com Google",
      "Entrega em até 7 dias",
    ],
    resultados: ["Empresa passa a ter presença online", "Mais credibilidade", "Primeiros contatos digitais"],
    pagamento: "Pagamento único",
    cta: "Quero meu site",
  },
  {
    nome: "Destaque no Google",
    desc: "Para empresas que querem ser encontradas",
    destaque: true,
    icon: Star,
    tier: "silver",
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
    resultados: ["Aparecer nas buscas do Google", "Aparecer no Google Maps", "Mais ligações e mensagens"],
    pagamento: "Pagamento único",
    cta: "Quero aparecer no Google",
  },
  {
    nome: "Impulso de Clientes",
    desc: "Para empresas que querem atrair clientes rapidamente",
    destaque: false,
    icon: Rocket,
    tier: "gold",
    features: [
      "Tudo do plano anterior",
      "Criação de campanhas no Google Ads",
      "Campanhas no Facebook / Instagram Ads",
      "Configuração de pixel e rastreamento",
      "Estratégia de público-alvo",
      "Landing page de conversão",
      "Relatório inicial de desempenho",
    ],
    resultados: ["Mais visitas", "Mais mensagens no WhatsApp", "Mais clientes novos"],
    pagamento: "Setup + investimento em anúncios",
    cta: "Quero mais clientes",
  },
  {
    nome: "Dominância Digital",
    desc: "Para empresas que querem crescer constantemente",
    destaque: false,
    icon: Crown,
    tier: "platinum",
    features: [
      "Tudo do plano anterior",
      "Gestão mensal de anúncios",
      "SEO avançado",
      "Otimização contínua do Google Maps",
      "Criação de novas páginas de conversão",
      "Relatórios mensais de resultados",
      "Estratégia digital contínua",
    ],
    resultados: ["Geração constante de clientes", "Crescimento previsível", "Marca forte na cidade"],
    pagamento: "Plano mensal",
    cta: "Quero dominar minha região",
  },
];

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5562991715110&text=Ol%C3%A1%2C%20desejo%20colocar%20minha%20empresa%20na%20internet!%0AGostaria%20de%20saber%20mais.";

const PlanosSection = () => {
  return (
    <section id="planos" className="relative z-20 py-24 bg-white/50 dark:bg-[#020204]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight font-serif text-slate-900 dark:text-white">
            Criação de site + Google + suporte
          </h2>
          <p className="mt-4 text-base font-light text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
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
              className="relative"
            >
              {p.destaque && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 text-[9px] font-bold uppercase tracking-wider text-white bg-blue-600 border border-blue-500 px-3 py-0.5 rounded-full shadow-lg shadow-blue-500/20">
                  ⭐ Mais escolhido
                </span>
              )}
              <div className={`relative p-px rounded-2xl ${
                p.destaque
                  ? "bg-gradient-to-br from-blue-300 via-blue-500 to-indigo-600 shadow-[0_0_50px_-10px_rgba(59,130,246,0.25)]"
                  : "bg-gradient-to-b from-slate-200 to-slate-100 dark:from-white/10 dark:to-white/5 shadow-lg"
              }`}>
                <div className={`rounded-[15px] p-6 h-full flex flex-col text-left ${
                  p.destaque ? "bg-white dark:bg-[#0a0a0c]" : "bg-white dark:bg-[#0e0e10]"
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-500/20">
                      <p.icon size={18} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{p.nome}</h3>
                  </div>

                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{p.desc}</p>

                  <ul className="space-y-2 mb-4 flex-1">
                    {p.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <Check size={14} className="mt-0.5 shrink-0 text-emerald-500" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="rounded-lg p-3 mb-4 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Resultado</p>
                    <ul className="space-y-1">
                      {p.resultados.map((r, k) => (
                        <li key={k} className="text-xs text-slate-600 dark:text-slate-300">📍 {r}</li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium text-sm transition-all duration-300 active:scale-95 ${
                      p.destaque
                        ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                        : "bg-slate-900 dark:bg-white/10 hover:bg-slate-800 dark:hover:bg-white/15 text-white"
                    }`}
                  >
                    <MessageCircle size={16} /> {p.cta}
                  </a>

                  <p className="text-center text-[10px] mt-3 text-slate-400 dark:text-slate-500 font-mono">
                    💰 {p.pagamento}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Diagnóstico gratuito */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 relative p-px rounded-2xl bg-gradient-to-br from-blue-300 via-blue-500 to-indigo-600 shadow-[0_0_50px_-10px_rgba(59,130,246,0.15)] max-w-2xl mx-auto"
        >
          <div className="bg-white dark:bg-[#0a0a0c] rounded-[15px] p-8 text-center">
            <p className="text-lg font-bold text-slate-900 dark:text-white mb-2">Não sabe qual escolher?</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">Solicite um diagnóstico gratuito e descubra o melhor caminho para o seu negócio.</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-all font-medium text-sm shadow-lg shadow-emerald-500/20 active:scale-95"
            >
              <MessageCircle size={18} /> Solicitar diagnóstico gratuito
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlanosSection;
