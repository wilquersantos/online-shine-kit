import { MessageCircle, Mail, Instagram, MapPin } from "lucide-react";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5562991715110&text=Ol%C3%A1%2C%20desejo%20colocar%20minha%20empresa%20na%20internet!%0AGostaria%20de%20saber%20mais.";

const Footer = () => {
  return (
    <footer className="relative z-20 border-t border-slate-200 dark:border-white/5 bg-white/70 dark:bg-[#020204]/90 backdrop-blur-sm py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex flex-col mb-4">
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                CLICK<span className="text-blue-600 dark:text-blue-400">IMPULSO</span>
              </span>
              <span className="text-[9px] tracking-widest text-blue-600 dark:text-blue-400 uppercase font-mono mt-0.5">
                Presença Digital
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Seu negócio aparecendo no Google e atraindo clientes todos os dias.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><a href="#solucao" className="hover:text-slate-900 dark:hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#como-funciona" className="hover:text-slate-900 dark:hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#portfolio" className="hover:text-slate-900 dark:hover:text-white transition-colors">Portfólio</a></li>
              <li><a href="#planos" className="hover:text-slate-900 dark:hover:text-white transition-colors">Planos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <MessageCircle size={14} className="text-emerald-500" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">(62) 99171-5110</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-blue-500" />
                <a href="mailto:contato@clickimpulso.com.br" className="hover:text-slate-900 dark:hover:text-white transition-colors">contato@clickimpulso.com.br</a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={14} className="text-purple-500" />
                <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">@clickimpulso</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Localização</h4>
            <p className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400">
              <MapPin size={14} className="mt-0.5 shrink-0 text-blue-500" />
              Atendimento em todo o Brasil
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/5 text-center text-xs text-slate-400 dark:text-slate-500 font-mono tracking-wide">
          © {new Date().getFullYear()} ClickImpulso. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
