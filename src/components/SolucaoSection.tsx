import { motion } from "framer-motion";
import { Globe, MapPin, TrendingUp, ArrowRight } from "lucide-react";

const servicos = [
  {
    icon: Globe,
    titulo: "Site que Vende por Você",
    desc: "Não é só um site bonito. É uma máquina de gerar contatos. Rápido, profissional e feito para transformar visitantes em clientes.",
    resultado: "Clientes te encontram 24h por dia",
    color: "blue",
  },
  {
    icon: MapPin,
    titulo: "Seu Negócio no Google Maps",
    desc: "Quando alguém pesquisar o que você faz na sua cidade, sua empresa vai aparecer ali — com foto, endereço e avaliações.",
    resultado: "Ligações diretas do Google",
    color: "emerald",
  },
  {
    icon: TrendingUp,
    titulo: "Presença Digital Completa",
    desc: "Seu negócio organizado na internet. Site, Google, redes sociais conectados — tudo passando profissionalismo e confiança.",
    resultado: "Imagem profissional que gera confiança",
    color: "cyan",
  },
];

const colorMap: Record<string, { iconBg: string; iconText: string; border: string }> = {
  blue: {
    iconBg: "bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-500/20",
    iconText: "text-blue-600 dark:text-blue-400",
    border: "hover:border-blue-500/30",
  },
  emerald: {
    iconBg: "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-500/20",
    iconText: "text-emerald-600 dark:text-emerald-400",
    border: "hover:border-emerald-500/30",
  },
  cyan: {
    iconBg: "bg-cyan-50 dark:bg-cyan-900/20 border-cyan-100 dark:border-cyan-500/20",
    iconText: "text-cyan-600 dark:text-cyan-400",
    border: "hover:border-cyan-500/30",
  },
};

const SolucaoSection = () => {
  return (
    <section id="solucao" className="relative z-20 py-24 bg-white/50 dark:bg-[#020204]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight font-serif text-slate-900 dark:text-white">
            Seu negócio aparecendo no Google{" "}
            <span className="text-blue-600 dark:text-blue-400">e atraindo clientes todos os dias</span>
          </h2>
          <p className="mt-4 text-base font-light text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Enquanto você foca no que sabe fazer, nós colocamos sua empresa na frente de quem está procurando exatamente o que você oferece.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {servicos.map((s, i) => {
            const colors = colorMap[s.color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-[#050505]/80 p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl ${colors.border} backdrop-blur-sm text-left`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${colors.iconBg} shadow-sm`}>
                    <s.icon size={24} className={colors.iconText} />
                  </div>
                  <h3 className="text-xl font-medium tracking-tight text-slate-900 dark:text-white">{s.titulo}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-4">{s.desc}</p>
                <div className={`flex items-center gap-2 text-sm font-medium ${colors.iconText} mt-auto`}>
                  <ArrowRight size={16} />
                  {s.resultado}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolucaoSection;
