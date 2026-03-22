import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projetos = [
  { nome: "Delícias Leves", tipo: "Site Profissional", url: "https://deliciasleves.shop/", img: "/portfolio/deliciasleves.png" },
  { nome: "Arte Devocional", tipo: "Site + Loja Online", url: "https://artedevocional.store/", img: "/portfolio/artedevocional.png" },
  { nome: "Bordados Lucrativos", tipo: "Site Profissional", url: "https://bordadoslucrativos.com/", img: "/portfolio/bordadoslucrativos.png" },
  { nome: "Inovar Drywall", tipo: "Site + Google", url: "https://www.inovardrywall.com/", img: "/portfolio/inovardrywall.png" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative z-20 py-24 bg-white/50 dark:bg-[#020204]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight font-serif text-slate-900 dark:text-white">
            Alguns projetos que já desenvolvemos
          </h2>
          <p className="mt-4 text-base font-light text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Confira exemplos de sites e configurações que criamos para nossos clientes.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {projetos.map((p, i) => (
            <motion.a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-[#050505]/80 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl backdrop-blur-sm block"
            >
              <div className="h-52 sm:h-60 overflow-hidden">
                <img
                  src={p.img}
                  alt={`Preview do site ${p.nome}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div className="text-left">
                  <h3 className="font-semibold text-slate-900 dark:text-white">{p.nome}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{p.tipo}</p>
                </div>
                <ExternalLink className="text-slate-400 group-hover:text-blue-500 transition-colors" size={20} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
