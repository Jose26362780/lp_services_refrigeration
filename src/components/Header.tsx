import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-left">
            <h1 className="text-xl md:text-2xl font-bold text-primary">
              Engenharia e Serviços – Eng. José Martinez
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Especialista Técnico em Refrigeração
            </p>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span>(42) 8867-0758</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="h-4 w-4 text-primary" />
              <span>josemmartinez71@gmail.com</span>
            </div>
            <Button className="bg-gradient-hero">
              <a
                  href="https://api.whatsapp.com/send?phone=+5511910976814&text=Ola Engenherio José Martinez! Gostaria de Contratar seus serviços"
                  target="_blank">

              Solicitar Orçamento
                  </a>
            </Button>
          </div>
          
          <Button 
            onClick={scrollToContact} 
            className="md:hidden bg-gradient-hero"
            size="sm"
          >
            Orçamento
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;