
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const companyName = "TEM Soluções contábeis inteligentes";

  const scrollToDemo = () => {
    const demoSection = document.getElementById('solicitar-demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-temsci-black via-temsci-black to-temsci-purple/80 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-temsci-black/90 via-temsci-black/80 to-temsci-purple/20"></div>
      
      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-8 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Soluções Contábeis Inteligentes
              </h1>
              <p className="text-xl text-gray-300 md:text-2xl">
                Transformando a gestão tributária com tecnologia de ponta para sua empresa.
              </p>
            </div>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button 
                onClick={scrollToDemo}
                size="lg" 
                className="bg-temsci-purple hover:bg-temsci-purple/80"
              >
                Solicitar Demonstração
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-black hover:bg-white/10"
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Saiba Mais
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative h-72 w-72 md:h-96 md:w-96 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-temsci-purple/20 blur-3xl"></div>
              <img
                src="/tem-logo.png"
                alt="TEM Soluções contábeis inteligentes Logo"
                className="relative h-48 w-48 md:h-64 md:w-64 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
