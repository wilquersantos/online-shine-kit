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
    <section id="portfolio" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Alguns projetos que já desenvolvemos
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Confira exemplos de sites e configurações que criamos para nossos clientes.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {projetos.map((p, i) => (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all block"
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
                  <h3 className="font-bold text-foreground">{p.nome}</h3>
                  <p className="text-sm text-muted-foreground">{p.tipo}</p>
                </div>
                <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
