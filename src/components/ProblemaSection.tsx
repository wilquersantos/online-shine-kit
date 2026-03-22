import { motion } from "framer-motion";
import { SearchX, Users, TrendingDown, Globe, AlertTriangle } from "lucide-react";

const dores = [
  {
    icon: SearchX,
    text: "Clientes pesquisam no Google e encontram seu concorrente — não você",
    impacto: "Você perde vendas todos os dias",
  },
  {
    icon: Users,
    text: "Depende só de indicação e do boca a boca para conseguir clientes",
    impacto: "Crescimento limitado e imprevisível",
  },
  {
    icon: TrendingDown,
    text: "Seus concorrentes já estão no Google Maps aparecendo primeiro",
    impacto: "Eles ficam com os seus clientes",
  },
  {
    icon: Globe,
    text: "Não tem site, ou tem um site que não gera nenhum resultado",
    impacto: "Passa imagem de amador",
  },
];

const ProblemaSection = () => {
  return (
    <section className="relative z-20 py-24 bg-white/50 dark:bg-[#020204]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/10 dark:bg-red-500/5 text-[11px] font-medium mb-6 text-red-600 dark:text-red-400 backdrop-blur-sm">
            <AlertTriangle size={14} />
            <span>Isso está acontecendo com você?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight font-serif text-slate-900 dark:text-white">
            Enquanto você lê isso, alguém está pesquisando no Google
            <br className="hidden md:block" />
            <span className="text-blue-600 dark:text-blue-400"> o que você vende — e encontrando seu concorrente.</span>
          </h2>
          <p className="mt-4 text-base font-light text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            97% dos consumidores pesquisam online antes de comprar. Se sua empresa não aparece, ela simplesmente{" "}
            <span className="text-slate-900 dark:text-white font-medium">não existe</span> para essas pessoas.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dores.map((dor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-slate-200 dark:border-white/5 bg-white/70 dark:bg-white/[0.02] hover:border-slate-300 dark:hover:bg-white/[0.04] transition-all relative group backdrop-blur-sm shadow-sm dark:shadow-none text-left"
            >
              <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-red-500/10 flex items-center justify-center mb-4 text-red-500 dark:text-red-400 border border-red-100 dark:border-red-500/20">
                <dor.icon size={22} />
              </div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white mb-2">{dor.text}</p>
              <p className="text-xs text-red-600 dark:text-red-400 font-medium">→ {dor.impacto}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-lg font-medium text-slate-900 dark:text-white"
        >
          A boa notícia? <span className="text-emerald-600 dark:text-emerald-400">Isso tem solução — e é mais simples do que você imagina.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemaSection;
