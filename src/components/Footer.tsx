import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informações da Empresa */}
          <div className="lg:col-span-2">
            <Logo className="w-14 h-auto" />
            <h3 className="text-xl font-bold mb-4">
              Engenharia e Serviços – Eng. José Martinez
            </h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Especialista técnico em refrigeração com experiência comprovada 
              em manutenção, vendas e instalação de equipamentos para empresas 
              e estabelecimentos comerciais.
            </p>

            {/* Ícones de redes sociais */}
            <div className="flex space-x-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/554288670758"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="border-background/30 text-green-400 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300"
                >
                  <Phone className="h-4 w-4" />
                </Button>
              </a>

              {/* Gmail */}
              <a
                href="mailto:josemmartinez71@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="border-background/30 text-red-400 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300"
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/josé-manuel-martinez-rodriguez-30277220a"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="border-background/30 text-blue-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Button>
              </a>

             
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-background/60" />
                <span className="text-background/80">(42) 8867-0758</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-background/60" />
                <span className="text-background/80">josemmartinez71@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-background/60" />
                <span className="text-background/80">Ponta Grossa - PR</span>
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
            © 2025 Engenharia e Serviços – Engenheiro José Martinez. 
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
