
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
          
          {/* Updated Missão, Visão e Valores section - Always horizontal */}
          <div className={`mt-16 grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {[
              { 
                title: "Missão", 
                description: "Desenvolver soluções tecnológicas inovadoras e acessíveis que simplifiquem e otimizem os processos contábeis, fiscais, tributários e administrativos de empresas e órgãos públicos, promovendo eficiência, conformidade e gestão inteligente.",
                icon: "🎯"
              },
              { 
                title: "Visão", 
                description: "Ser referência nacional em tecnologia aplicada à gestão empresarial e pública, reconhecida pela excelência, confiabilidade e capacidade de transformar rotinas manuais em processos automatizados, promovendo eficiência e inovação nas instituições.",
                icon: "🔮"
              },
              { 
                title: "Valores", 
                description: "• Inovação com Propósito – Construímos soluções tecnológicas focadas em resultados práticos.\n• Eficiência – Priorizamos agilidade, economia de tempo e apoio à decisão.\n• Conformidade – Atuamos com rigor legal.\n• Ética e Transparência – Valorizamos a integridade em todas as relações.\n• Parceria Duradoura – Construímos relações sólidas baseadas em confiança mútua.",
                icon: "⭐"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="p-4 md:p-6 lg:p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-temsci-purple/20 h-full flex flex-col"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center justify-center mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-temsci-purple/10 to-temsci-blue/10 flex items-center justify-center text-lg md:text-2xl">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4 text-temsci-black text-center">{item.title}</h3>
                <div className="flex-1 flex items-start">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed text-left whitespace-pre-line">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
