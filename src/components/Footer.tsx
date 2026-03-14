import { MessageCircle, Mail, Instagram, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DigitalPro</h3>
            <p className="text-background/60 text-sm">
              Colocamos sua empresa na internet para que você receba clientes todos os dias.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><a href="#solucao" className="hover:text-background transition-colors">Serviços</a></li>
              <li><a href="#como-funciona" className="hover:text-background transition-colors">Como Funciona</a></li>
              <li><a href="#portfolio" className="hover:text-background transition-colors">Portfólio</a></li>
              <li><a href="#planos" className="hover:text-background transition-colors">Planos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li className="flex items-center gap-2">
                <MessageCircle size={16} />
                <a href="https://wa.me/5500000000000" className="hover:text-background transition-colors">(00) 00000-0000</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:contato@digitalpro.com.br" className="hover:text-background transition-colors">contato@digitalpro.com.br</a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={16} />
                <a href="#" className="hover:text-background transition-colors">@digitalpro</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Localização</h4>
            <p className="flex items-start gap-2 text-sm text-background/60">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              Atendimento em todo o Brasil
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center text-sm text-background/40">
          © {new Date().getFullYear()} DigitalPro. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
