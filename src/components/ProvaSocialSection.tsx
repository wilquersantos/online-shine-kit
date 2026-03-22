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
    <section className="relative z-20 py-24 bg-white/50 dark:bg-[#020204]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight font-serif text-slate-900 dark:text-white">
            Não acredite só na gente.{" "}
            <span className="text-blue-600 dark:text-blue-400">Veja o que nossos clientes dizem.</span>
          </h2>
          <p className="mt-4 text-base font-light text-slate-600 dark:text-slate-400">
            Empresários reais, com resultados reais.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {depoimentos.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="relative p-px rounded-xl bg-gradient-to-b from-slate-200 to-slate-100 dark:from-white/10 dark:to-white/5 shadow-lg"
            >
              <div className="bg-white dark:bg-[#0e0e10] rounded-[11px] p-6 text-left h-full flex flex-col">
                <Quote size={28} className="text-blue-500/10 dark:text-blue-400/10 mb-3" />
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-200 mb-4 leading-relaxed flex-1">"{d.texto}"</p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-500/30 mb-4 self-start">
                  <span className="text-[10px] uppercase tracking-wider text-emerald-600 dark:text-emerald-300 font-bold">
                    📈 {d.resultado}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{d.nome}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{d.empresa}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvaSocialSection;
