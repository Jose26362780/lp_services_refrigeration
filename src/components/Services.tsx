import { 
  Snowflake, 
  AirVent, 
  Zap, 
  Wrench, 
  ShoppingCart,
  Refrigerator,
  WashingMachine,
  Settings,
  Cog
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Vendas, Manutenção e Instalação",
      description: "Serviços completos para equipamentos de refrigeração com garantia e suporte técnico."
    },
    {
      icon: <Snowflake className="h-8 w-8" />,
      title: "Câmara Fria",
      description: "Projeto, instalação e manutenção de câmaras frias para conservação de alimentos."
    },
    {
      icon: <AirVent className="h-8 w-8" />,
      title: "Ar Condicionado",
      description: "Instalação e manutenção de sistemas de climatização residencial e comercial."
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Máquinas de Fazer Gelo",
      description: "Manutenção e reparo de máquinas de gelo para estabelecimentos comerciais."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Balcão Refrigerado",
      description: "Instalação e manutenção de balcões refrigerados para açougues e padarias."
    },
    {
      icon: <Refrigerator className="h-8 w-8" />,
      title: "Geladeiras",
      description: "Reparo e manutenção de geladeiras domésticas e comerciais."
    },
    {
      icon: <WashingMachine className="h-8 w-8" />,
      title: "Máquinas de Lavar",
      description: "Manutenção e reparo de lavadoras domésticas e industriais."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Elétrica",
      description: "Serviços elétricos complementares e instalações para equipamentos."
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Serviços Gerais",
      description: "Outros serviços técnicos e consultoria especializada em refrigeração."
    }
  ];

  return (
    <section id="services" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em refrigeração e engenharia para atender 
            todas as necessidades do seu negócio.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-card transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-technical-accent rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Services };