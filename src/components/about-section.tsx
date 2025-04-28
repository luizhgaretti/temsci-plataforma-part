
import { Section } from "@/components/ui/section";
import { useEffect, useState } from "react";
import { GeometricShapes } from "@/components/ui/geometric-shapes";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('sobre');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <Section id="sobre" className="bg-gradient-to-b from-white to-gray-50 py-24 relative overflow-hidden">
      {/* Geometric patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <GeometricShapes />
      </div>
      
      {/* Morphing shapes */}
      <div className="absolute -top-[20%] -right-[10%] w-[40%] h-[40%] bg-gradient-to-br from-temsci-purple/5 to-temsci-blue/5 rounded-full blur-2xl morphing-shape"></div>
      <div className="absolute -bottom-[20%] -left-[10%] w-[40%] h-[40%] bg-gradient-to-tl from-temsci-blue/5 to-temsci-purple/5 rounded-full blur-2xl morphing-shape" style={{ animationDelay: '3s' }}></div>
      
      <div className="mx-auto max-w-4xl text-center relative z-10">
        <div className={`inline-block mb-6 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold tracking-tight text-temsci-black md:text-4xl relative inline-block">
            Quem é a <span className="text-gradient">TEM</span> Soluções contábeis inteligentes?
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-temsci-purple to-temsci-blue"></div>
          </h2>
        </div>
        
        <div className={`mt-12 space-y-6 text-lg text-gray-700 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="leading-relaxed">
            A TEM Soluções Contábeis Inteligentes é uma empresa especializada no desenvolvimento e fornecimento de 
            <span className="text-temsci-purple font-semibold"> soluções tecnológicas </span>
            voltadas à modernização e à eficiência da gestão contábil, fiscal, tributária, financeira e administrativa de órgãos públicos, como prefeituras, câmaras municipais, autarquias e demais entidades da administração pública. Todas as soluções são desenvolvidas em conformidade com a legislação vigente, atendendo às exigências da Receita Federal, do INSS e dos demais órgãos de controle.
          </p>
          
          <div className="relative p-6 bg-white rounded-lg shadow-md mt-8 border-l-4 border-temsci-blue glass-effect">
            <div className="absolute -inset-1 bg-gradient-to-r from-temsci-blue/20 to-temsci-purple/20 rounded-lg blur-sm opacity-50 animate-pulse"></div>
            <div className="relative">
              <p className="leading-relaxed">
                A escassez de mão de obra qualificada e os elevados custos para atender tamanha burocracia
                exigida dos empresários e gestores públicos, despertou em nós o desejo de disponibilizar ao
                mercado 
                <span className="text-temsci-blue font-semibold"> ferramentas com preços acessíveis </span>
                que propiciam agilidade, segurança, rentabilidade, transparência e gestão dos recursos.
              </p>
            </div>
            <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-temsci-purple/10 rounded-full blur-xl"></div>
          </div>
          
          {/* New animated section */}
          <div className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {[
              { title: "Inovação", description: "Plataforma única que automatiza e valida informações fiscais e retenções tributárias com precisão." },
              { title: "Segurança", description: "Processos seguros e confiáveis para garantir a conformidade com a legislação tributária." },
              { title: "Economia", description: "Redução de custos operacionais com otimização de processos contábeis e fiscais." }
            ].map((item, index) => (
              <div 
                key={index} 
                className="p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-temsci-purple/10 to-temsci-blue/10 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-temsci-purple to-temsci-blue"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-temsci-black">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
