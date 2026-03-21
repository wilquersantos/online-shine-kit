import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Monitor, Smartphone, MapPin, Users, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Headline que captura em 3 segundos — foco no RESULTADO */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-foreground">
              Clientes procurando{" "}
              <span className="text-accent">o que você vende</span>
              {" "}— e te encontrando{" "}
              <span className="text-secondary">no Google.</span>
            </h1>

            {/* Subtítulo simples e direto */}
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Em até 10 dias, sua empresa aparece para quem está buscando agora.
            </p>

            {/* CTA WhatsApp grande e visível */}
            <div className="mt-8">
              <Button size="lg" asChild className="text-lg gap-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 shadow-xl shadow-secondary/25">
                <a
                  href="https://api.whatsapp.com/send?phone=5562991715110&text=Ol%C3%A1%2C%20desejo%20colocar%20minha%20empresa%20na%20internet!%0AGostaria%20de%20saber%20mais."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={22} /> Falar no WhatsApp
                </a>
              </Button>
            </div>

            <p className="mt-3 text-xs text-muted-foreground">
              ✓ Orçamento grátis &nbsp; ✓ Resposta em minutos &nbsp; ✓ Sem compromisso
            </p>

            {/* Prova social simples e real */}
            <div className="mt-8 bg-muted/50 rounded-xl p-4 border border-border max-w-md">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                "Recebi <strong>12 ligações em 15 dias</strong> só pelo Google. Antes ninguém me encontrava."
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                — João Silva, Loja de Autopeças
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="bg-card rounded-2xl shadow-2xl border border-border p-3">
                <div className="flex gap-1.5 mb-3">
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-secondary/60" />
                </div>
                <div className="bg-muted rounded-lg p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Monitor className="text-foreground" size={28} />
                    <div className="h-3 w-32 bg-foreground/20 rounded" />
                  </div>
                  <div className="h-2 w-full bg-border rounded" />
                  <div className="h-2 w-3/4 bg-border rounded" />
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    <div className="h-20 bg-accent/10 rounded-lg" />
                    <div className="h-20 bg-secondary/10 rounded-lg" />
                    <div className="h-20 bg-accent/10 rounded-lg" />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-8 w-36 bg-card rounded-2xl shadow-xl border border-border p-2">
                <div className="bg-muted rounded-lg p-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="text-secondary" size={16} />
                    <div className="h-2 w-12 bg-secondary/20 rounded" />
                  </div>
                  <div className="h-1.5 w-full bg-border rounded" />
                  <div className="h-1.5 w-2/3 bg-border rounded" />
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-foreground text-background rounded-xl px-4 py-2 shadow-lg flex items-center gap-2 text-sm font-semibold">
                <Smartphone size={16} />
                100% Responsivo
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
                className="absolute -bottom-4 -right-6 bg-card rounded-xl px-4 py-2.5 shadow-xl border border-border flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-xs font-medium text-foreground">Novo cliente encontrou você!</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
