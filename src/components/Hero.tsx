import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-refrigeration.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Equipamentos profissionais de refrigeração"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Soluções Completas em
            <span className="block text-accent-foreground">
              Refrigeração e Engenharia
            </span>
          </h2>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experiência técnica especializada em instalação, manutenção e vendas 
            de equipamentos de refrigeração para empresas e estabelecimentos comerciais.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToServices}
              size="lg"
              className="bg-accent  text-accent-foreground shadow-hero hover:bg-white  hover:text-primary hover:border-2 hover:border-primary"
            >

              <a
                  href="https://api.whatsapp.com/send?phone=+554288670758&text=Ola Engenherio José Martinez! Gostaria de Contratar seus serviços"
                  target="_blank">

                    Solicitar Orçamento Gratuito

                  </a>

            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary-foreground 
                   bg-primary-foreground 
                 text-primary"
              onClick={scrollToContact}
            >
              Conheça Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
      
      {/* Technical Pattern Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export { Hero };