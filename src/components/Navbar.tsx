import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const links = [
  { label: "Serviços", href: "#solucao" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
];

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5562991715110&text=Ol%C3%A1%2C%20desejo%20colocar%20minha%20empresa%20na%20internet!%0AGostaria%20de%20saber%20mais.";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 border-b bg-white/70 dark:bg-[#020204]/70 backdrop-blur-xl border-slate-200 dark:border-white/5 transition-all duration-300">
      <a href="#" className="flex items-center gap-2 group">
        <div className="relative flex items-center justify-center w-9 h-9 transition-transform group-active:scale-95 bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-blue-500/20 dark:to-emerald-500/20 rounded-lg border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
          <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">CI</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm tracking-tight font-bold text-slate-900 dark:text-white leading-none">
            CLICK<span className="text-blue-600 dark:text-blue-400">IMPULSO</span>
          </span>
          <span className="text-[9px] tracking-widest text-blue-600 dark:text-blue-400 uppercase font-mono mt-0.5">
            Presença Digital
          </span>
        </div>
      </a>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-1 p-1 rounded-full border backdrop-blur-md bg-slate-100/50 dark:bg-white/5 border-slate-200 dark:border-white/5">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5"
          >
            {l.label}
          </a>
        ))}
      </div>

      <div className="hidden md:block">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-all font-medium text-sm shadow-lg shadow-emerald-500/20 active:scale-95"
        >
          <MessageCircle size={16} /> Falar no WhatsApp
        </a>
      </div>

      <button className="md:hidden text-slate-600 dark:text-slate-400" onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 md:hidden bg-white/95 dark:bg-[#020204]/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 px-6 pb-6 pt-2 space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full mt-3 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-all font-medium text-sm"
          >
            <MessageCircle size={16} /> Falar no WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
