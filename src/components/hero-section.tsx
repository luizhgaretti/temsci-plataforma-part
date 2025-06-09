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
      demoSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="relative overflow-hidden bg-gradient-to-br from-temsci-black via-temsci-black to-temsci-purple/80 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-temsci-black/90 via-temsci-black/80 to-temsci-purple/20"></div>
      
      {/* Enhanced geometric background */}
      <GeometricShapes className="opacity-30" />
      
      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-8 items-center">
          <div className="space-y-8">
            <div className={`space-y-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                <span className="text-gradient">Soluções Contábeis</span> Inteligentes
              </h1>
              <p className="text-xl text-gray-300 md:text-2xl">Automatizamos processos, entregamos soluções</p>
            </div>
            
            <div className={`flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              <Button variant="outline" size="lg" className="border-white text-black hover:bg-white/10 group" onClick={() => document.getElementById('sobre')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Saiba Mais
                <ChevronDown className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-y-1" />
              </Button>
            </div>
            
            {/* Animated scroll indicator */}
            
          </div>
          
          <div className="flex justify-center">
            
          </div>
        </div>
      </div>
    </div>;
}