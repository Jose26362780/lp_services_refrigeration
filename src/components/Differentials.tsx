import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-[#2F3A46] text-background py-12 border-t border-background/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Bloco principal com logo e título */}
          <div className="lg:col-span-2 animate-fadeIn">
            <div className="flex items-center space-x-3 mb-4">
              <Logo className="w-12 h-12" />
              <h3 className="text-xl font-bold text-white leading-tight">
                Engenharia e Serviços – Eng. José Martinez
              </h3>
            </div>

            <p className="text-background/80 mb-6 leading-relaxed">
              Especialista técnico em refrigeração com experiência comprovada
              em manutenção, vendas e instalação de equipamentos para empresas
              e estabelecimentos comerciais.
            </p>

            {/* Ícones sociais */}
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
                  className="border-background/20 text-green-400 bg-white hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300 shadow-sm"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.04 2.004c-5.51 0-9.995 4.484-9.995 9.994 0 1.762.466 3.482 1.35 5.005l-1.435 5.25 5.367-1.406c1.47.801 3.129 1.226 4.802 1.226h.004c5.512 0 9.997-4.485 9.997-9.996 0-2.672-1.04-5.183-2.93-7.07A9.934 9.934 0 0012.04 2.004zm5.85 14.845c-.248.697-1.43 1.328-2.002 1.385-.514.05-1.145.07-1.845-.117-.426-.11-.977-.318-1.682-.623-2.966-1.289-4.89-4.287-5.043-4.492-.149-.205-1.204-1.603-1.204-3.06 0-1.458.76-2.173 1.031-2.472.271-.3.594-.375.792-.375h.567c.18.008.426-.067.67.512.248.597.84 2.06.91 2.21.07.15.117.326.022.525-.09.195-.135.32-.266.49-.135.165-.282.37-.403.497-.135.135-.276.284-.12.557.15.27.669 1.1 1.434 1.78 0 0 1.284 1.138 2.587 1.58.36.125.642.2.868.258.366.093.7.08.96.048.293-.036.9-.37 1.027-.728.135-.36.135-.67.097-.728-.037-.052-.15-.083-.308-.147z" />
                  </svg>
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
                  className="border-background/20 text-red-400 bg-white hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 shadow-sm"
                >
                  <Mail className="h-5 w-5" />
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
                  className="border-background/20 text-blue-500 bg-white hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 shadow-sm"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                  </svg>
                </Button>
              </a>
            </div>
          </div>

          {/* Contato */}
          <div className="animate-fadeIn delay-100">
            <h4 className="font-semibold mb-4 text-white">Contato</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-background/60" />
                <span>(42) 8867-0758</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-background/60" />
                <span>josemmartinez71@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-background/60" />
                <span>Ponta Grossa - PR</span>
              </div>
            </div>
          </div>

          {/* Serviços */}
          <div className="animate-fadeIn delay-200">
            <h4 className="font-semibold mb-4 text-white">Serviços</h4>
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

        <div className="border-t border-background/20 mt-10 pt-6 text-center text-background/60">
          © 2025 Engenharia e Serviços – Engenheiro José Martinez. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export { Footer };
