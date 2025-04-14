
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { GeometricShapes } from "@/components/ui/geometric-shapes";

export function HeroSection() {
  const companyName = "TEM Soluções contábeis inteligentes";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add animation delay for a more dramatic entry
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToDemo = () => {
    const demoSection = document.getElementById('solicitar-demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-temsci-black via-temsci-black to-temsci-purple/80 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-temsci-black/90 via-temsci-black/80 to-temsci-purple/20"></div>
      
      {/* Enhanced geometric background */}
      <GeometricShapes className="opacity-30" />
      
      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-8 items-center">
          <div className="space-y-8">
            <div 
              className={`space-y-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                <span className="text-gradient">Soluções Contábeis</span> Inteligentes
              </h1>
              <p className="text-xl text-gray-300 md:text-2xl">
                Transformando a gestão tributária com tecnologia de ponta para sua empresa.
              </p>
            </div>
            <div 
              className={`flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <Button 
                onClick={scrollToDemo}
                size="lg" 
                className="bg-temsci-purple hover:bg-temsci-purple/80 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Solicitar Demonstração
                  <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-temsci-purple to-temsci-blue opacity-0 transition-opacity group-hover:opacity-100"></span>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-black hover:bg-white/10 group"
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Saiba Mais
                <ChevronDown className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-y-1" />
              </Button>
            </div>
            
            {/* Animated scroll indicator */}
            <div className="pt-8 hidden md:block">
              <div className="animate-bounce flex justify-center">
                <div 
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center cursor-pointer hover:border-white/60 transition-colors"
                >
                  <ChevronDown className="text-white/60" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div 
              className={`relative h-72 w-72 md:h-96 md:w-96 flex items-center justify-center transition-all duration-1000 delay-500 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
            >
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 rounded-full bg-temsci-purple/20 blur-3xl animate-pulse"></div>
              
              {/* Rotating circles around logo */}
              <div className="absolute inset-0 rounded-full border-4 border-temsci-purple/10 animate-[spin_15s_linear_infinite]"></div>
              <div className="absolute inset-8 rounded-full border-4 border-temsci-blue/10 animate-[spin_10s_linear_infinite_reverse]"></div>
              
              {/* Morphing shape behind logo */}
              <div className="absolute inset-8 bg-gradient-to-r from-temsci-purple/20 to-temsci-blue/20 morphing-shape"></div>
              
              {/* Logo with shine effect */}
              <div className="relative h-64 w-64 md:h-80 md:w-80 shine-effect">
                <img
                  src="/lovable-uploads/19e3399a-2176-4ffd-858a-c20e4fbad77d.png"
                  alt="TEM Soluções contábeis inteligentes Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              
              {/* Enhanced floating accents */}
              <div className="absolute top-0 right-0 h-6 w-6 rounded-full bg-temsci-blue animate-float" style={{ animationDelay: "1.2s" }}></div>
              <div className="absolute bottom-8 left-0 h-8 w-8 rounded-full bg-temsci-purple animate-float" style={{ animationDelay: "0.8s" }}></div>
              <div className="absolute top-1/3 left-0 h-4 w-4 rounded-full bg-temsci-blue/80 animate-float" style={{ animationDelay: "1.5s" }}></div>
              
              {/* New particle effects */}
              <div className="absolute bottom-1/4 right-1/4 h-3 w-3 rounded-full bg-white/60 animate-pulse" style={{ animationDelay: "0.3s" }}></div>
              <div className="absolute top-1/4 right-1/3 h-2 w-2 rounded-full bg-white/60 animate-pulse" style={{ animationDelay: "1.2s" }}></div>
              <div className="absolute bottom-1/3 left-1/4 h-2 w-2 rounded-full bg-white/60 animate-pulse" style={{ animationDelay: "0.7s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
