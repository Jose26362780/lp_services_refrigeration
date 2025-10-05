import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

const Header = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-6">
          {/* Logo + Título */}
          <div className="flex items-center gap-4">
            <Logo className="w-14 h-auto" />
            <div className="text-left leading-tight">
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-primary">
                Engenharia e Serviços – Eng. José Martinez
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Especialista Técnico em Refrigeração
              </p>
            </div>
          </div>

          {/* Contato + Botão */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-foreground">(42) 8867-0758</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-foreground">josemmartinez71@gmail.com</span>
            </div>

            <Button
              className="bg-gradient-hero text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.05] transition-transform duration-300"
            >
              <a
                href="https://api.whatsapp.com/send?phone=+554288670758&text=Olá Engenheiro José Martinez! Gostaria de contratar seus serviços."
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Orçamento
              </a>
            </Button>
          </div>

          {/* Botão mobile */}
          <Button
            onClick={scrollToContact}
            className="md:hidden bg-gradient-hero text-white"
            size="sm"
          >
            Orçamento
          </Button>
        </div>
      </div>
    </header>
  );
};

export { Header };
