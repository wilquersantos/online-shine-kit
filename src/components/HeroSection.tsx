import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Monitor, Smartphone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background decoration */}
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
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wide uppercase rounded-full bg-accent text-accent-foreground">
              Agência Digital
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              Coloque sua empresa no{" "}
              <span className="text-primary">Google</span> e comece a receber
              clientes todos os dias
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Criamos sites profissionais e configuramos seu perfil no Google
              para que seu negócio seja encontrado por novos clientes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-base gap-2">
                <a href="#planos">
                  Criar meu site <ArrowRight size={18} />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base gap-2">
                <a href="#contato">
                  <MessageCircle size={18} /> Falar no WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Mockup visual */}
            <div className="relative">
              {/* Desktop mockup */}
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

              {/* Phone mockup */}
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

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground rounded-xl px-4 py-2 shadow-lg flex items-center gap-2 text-sm font-semibold">
                <Smartphone size={16} />
                Responsivo
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
