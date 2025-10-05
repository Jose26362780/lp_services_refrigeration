import { Award, Users, Clock } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-16 bg-technical-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sobre o Engenheiro José Martinez
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Especialista técnico com vasta experiência em refrigeração, 
              oferecendo soluções completas para empresas e estabelecimentos comerciais.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-foreground leading-relaxed">
                Com anos de experiência no setor de refrigeração e engenharia, 
                o Engenheiro José Martinez é reconhecido pela excelência técnica e 
                comprometimento com soluções eficientes e duradouras.
              </p>
              
              <p className="text-foreground leading-relaxed">
                Especializado em manutenção, vendas e instalação de equipamentos 
                de refrigeração, além de serviços elétricos complementares, 
                atendendo desde pequenos estabelecimentos até grandes indústrias.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-primary">
                  <Award className="h-5 w-5" />
                  <span className="font-semibold">Certificado Técnico</span>
                </div>
                <div className="flex items-center space-x-2 text-primary">
                  <Users className="h-5 w-5" />
                  <span className="font-semibold">200+ Clientes Atendidos</span>
                </div>
                <div className="flex items-center space-x-2 text-primary">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold">Atendimento sob agendamento</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-section p-8 rounded-lg shadow-card">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Compromisso com a Qualidade
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground">Diagnóstico preciso e rápido</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground">Peças originais e garantia</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground">Atendimento personalizado</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground">Soluções sustentáveis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };