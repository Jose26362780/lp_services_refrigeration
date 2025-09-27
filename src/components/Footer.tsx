import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informações da Empresa */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              Engenharia e Serviços – Eng. José Martinez
            </h3>
            <p className="text-background/80 mb-4 leading-relaxed">
              Especialista técnico em refrigeração com experiência comprovada 
              em manutenção, vendas e instalação de equipamentos para empresas 
              e estabelecimentos comerciais.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="border-background/20 text-background hover:bg-background hover:text-foreground"
              >
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full h-full"
                >
                  <Phone className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-background/20 text-background hover:bg-background hover:text-foreground"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-background/20 text-background hover:bg-background hover:text-foreground"
              >
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-background/60" />
                <span className="text-background/80">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-background/60" />
                <span className="text-background/80">contato@jmartinez.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-background/60" />
                <span className="text-background/80">São Paulo - SP</span>
              </div>
            </div>
          </div>
          
          {/* Serviços */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-background/80">
              <li>• Câmara Fria</li>
              <li>• Ar Condicionado</li>
              <li>• Balcão Refrigerado</li>
              <li>• Máquinas de Gelo</li>
              <li>• Serviços Elétricos</li>
              <li>• Manutenção Geral</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Engenharia e Serviços – Eng. José Martinez. 
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;