import { motion } from "framer-motion";
import { MessageSquare, PenTool, Search, Rocket } from "lucide-react";

const passos = [
  {
    icon: MessageSquare,
    titulo: "Você nos conta seu negócio",
    desc: "Uma conversa rápida pelo WhatsApp. Sem burocracia, sem enrolação.",
    tempo: "5 minutos",
    num: "01",
  },
  {
    icon: PenTool,
    titulo: "Criamos tudo pra você",
    desc: "Site profissional, textos, imagens — você não precisa se preocupar com nada.",
    tempo: "5-7 dias",
    num: "02",
  },
  {
    icon: Search,
    titulo: "Colocamos no Google",
    desc: "Seu negócio configurado para aparecer nas buscas e no Google Maps da sua região.",
    tempo: "2-3 dias",
    num: "03",
  },
  {
    icon: Rocket,
    titulo: "Clientes começam a chegar",
    desc: "Seu telefone toca, mensagens chegam. Pessoas que nunca ouviram falar de você — te encontram.",
    tempo: "Imediato",
    num: "04",
  },
];

const ComoFuncionaSection = () => {
  return (
    <section id="como-funciona" className="relative z-20 py-24 bg-white/50 dark:bg-[#020204]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight font-serif text-slate-900 dark:text-white">
            Tão simples que você vai pensar: <span className="text-blue-600 dark:text-blue-400">"por que não fiz antes?"</span>
          </h2>
          <p className="mt-4 text-base font-light text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Você não precisa entender de tecnologia. Nós cuidamos de tudo — do começo ao fim.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {passos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="p-8 rounded-xl border border-slate-200 dark:border-white/5 bg-white/70 dark:bg-white/[0.02] hover:border-slate-300 dark:hover:bg-white/[0.04] transition-all relative group backdrop-blur-sm shadow-sm dark:shadow-none text-left"
            >
              <div className="text-5xl font-bold text-slate-100 dark:text-white/5 absolute right-4 top-4 group-hover:text-blue-500/10 transition-colors">
                {p.num}
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20">
                <p.icon size={22} />
              </div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-500/30 mb-3">
                <span className="text-[9px] uppercase tracking-wider text-blue-600 dark:text-blue-300 font-bold">
                  {p.tempo}
                </span>
              </div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">{p.titulo}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-500 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoFuncionaSection;
