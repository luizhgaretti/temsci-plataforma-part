
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
            <span className="text-gradient">Quem somos</span>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-temsci-purple to-temsci-blue"></div>
          </h2>
        </div>
        
        <div className={`mt-12 space-y-6 text-lg text-gray-700 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="leading-relaxed">
            A TEM SCI – Soluções Contábeis Inteligentes é uma empresa especializada no desenvolvimento de soluções tecnológicas voltadas à modernização da gestão empresarial e pública. Atuamos com foco na conformidade contábil, fiscal, tributária, financeira e administrativa, oferecendo ferramentas inteligentes para empresas e órgãos públicos.
          </p>
          
          <p className="leading-relaxed">
            Nossas soluções são desenvolvidas em estrita conformidade com a legislação vigente, atendendo com rigor às exigências dos órgãos de controle e fiscalização. Com tecnologia, inovação e sólida experiência, promovemos uma gestão mais eficiente, segura e alinhada aos princípios da legalidade, da responsabilidade fiscal e da geração de valor.
          </p>
          
          {/* New animated section */}
          <div className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {[
              { title: "Missão", description: "Plataforma única que automatiza e valida informações fiscais e retenções tributárias com precisão." },
              { title: "Visão", description: "Validamos automaticamente todas as informações fiscais, garantindo conformidade tributária com segurança e confiabilidade." },
              { title: "Valores", description: "Redução de custos, tempo e riscos fiscais com processos inteligentes de retenção tributária" }
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
