import { CheckCircle, Clock, Shield, Trophy } from "lucide-react";

const Differentials = () => {
  const differentials = [
    {
      icon: <CheckCircle className="h-12 w-12 text-accent" />,
      title: "Atendimento Técnico Especializado",
      description: "Profissionais qualificados com conhecimento técnico aprofundado em refrigeração e engenharia."
    },
    {
      icon: <Clock className="h-12 w-12 text-accent" />,
      title: "Soluções Rápidas e Eficientes",
      description: "Diagnóstico preciso e reparos ágeis para minimizar o tempo de inatividade dos seus equipamentos."
    },
    {
      icon: <Trophy className="h-12 w-12 text-accent" />,
      title: "Experiência Comprovada",
      description: "Anos de experiência em equipamentos industriais e comerciais de diversos portes e complexidades."
    },
    {
      icon: <Shield className="h-12 w-12 text-accent" />,
      title: "Garantia e Confiabilidade",
      description: "Todos os serviços com garantia e uso de peças originais para máxima durabilidade."
    }
  ];

  return (
    <section className="py-16 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por Que Escolher Nossos Serviços?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Diferenciais que fazem da nossa empresa a escolha certa 
            para suas necessidades de refrigeração.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((differential, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-background rounded-lg shadow-card hover:shadow-hero transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">
                {differential.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {differential.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {differential.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Mais de 20 Anos de Excelência em Refrigeração
            </h3>
            <p className="text-foreground text-lg">
              Com duas décadas de dedicação e expertise no mercado, oferecemos soluções técnicas de refrigeração com a confiança e a qualidade que só a experiência pode garantir. 
              Seu equipamento em mãos de especialistas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Differentials };