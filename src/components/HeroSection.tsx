import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Monitor, Smartphone, MapPin, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Micro-compromisso: badge que gera curiosidade */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold tracking-wide uppercase rounded-full bg-secondary/10 text-secondary">
              <Zap size={14} /> +50 empresas já transformadas
            </span>

            {/* Headline: promessa clara + resultado tangível em 3 segundos */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              Seu negócio aparecendo{" "}
              <span className="text-primary">todos os dias no Google</span>
            </h1>

            {/* Slogan */}
            <p className="mt-4 text-xl font-medium text-foreground/80 max-w-xl">
              Um clique para colocar sua empresa na frente de quem procura.
            </p>

            {/* Subheadline */}
            <p className="mt-3 text-lg text-muted-foreground max-w-xl">
              Criamos sites, posicionamos sua empresa no Google e atraímos novos clientes todos os dias.
            </p>

            {/* Prova social rápida - gera confiança instantânea */}
            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center"
                  >
                    <Users size={12} className="text-primary" />
                  </div>
                ))}
              </div>
              <span>
                <strong className="text-foreground">+50 empresários</strong>{" "}
                já escolheram aparecer no Google
              </span>
            </div>

            {/* CTAs: ação principal + ação de baixo compromisso */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-base gap-2">
                <a href="#planos">
                  Quero aparecer no Google <ArrowRight size={18} />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base gap-2">
                <a href="#contato">
                  <MessageCircle size={18} /> É rápido, fale conosco
                </a>
              </Button>
            </div>

            {/* Redutor de objeção */}
            <p className="mt-4 text-xs text-muted-foreground">
              ✓ Resultado em até 10 dias &nbsp; ✓ Orçamento grátis &nbsp; ✓ Suporte incluso
            </p>
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
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-secondary/60" />
                </div>
                <div className="bg-muted rounded-lg p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Monitor className="text-primary" size={28} />
                    <div className="h-3 w-32 bg-primary/20 rounded" />
                  </div>
                  <div className="h-2 w-full bg-border rounded" />
                  <div className="h-2 w-3/4 bg-border rounded" />
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    <div className="h-20 bg-primary/10 rounded-lg" />
                    <div className="h-20 bg-secondary/10 rounded-lg" />
                    <div className="h-20 bg-primary/10 rounded-lg" />
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

              {/* Badge de resultado - prova tangível */}
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground rounded-xl px-4 py-2 shadow-lg flex items-center gap-2 text-sm font-semibold">
                <Smartphone size={16} />
                100% Responsivo
              </div>

              {/* Notificação flutuante - gatilho visual de resultado */}
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
