
import { Section } from "@/components/ui/section";
import { BenefitItem } from "@/components/benefit-item";
import { useEffect, useState } from "react";
import { GeometricShapes } from "@/components/ui/geometric-shapes";

export function PlatformSection() {
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

    const element = document.getElementById('platform-section');
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
    <Section id="platform-section" className="bg-white py-20 relative overflow-hidden">
      {/* Subtle background shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-temsci-purple/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-temsci-blue/5 rounded-full filter blur-3xl"></div>
      
      <div className="grid gap-16 md:grid-cols-2 items-center">
        <div className={`order-2 md:order-1 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'}`}>
          <h2 className="text-3xl font-bold tracking-tight text-temsci-black mb-6 relative">
            <span className="text-gradient">Plataforma</span> de Retenção Contábil
            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-temsci-blue to-temsci-purple"></span>
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            Desenvolvida para automatizar e facilitar a aplicação das regras atribuídas aos tomadores de serviços,
            responsáveis pelas retenções e recolhimentos dos seguintes tributos:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              "Imposto de Renda – IR",
              "Contribuição Previdenciária – INSS",
              "Imposto s/ Serviços de Qualquer Natureza – ISSQN"
            ].map((text, index) => (
              <BenefitItem 
                key={index} 
                text={text} 
                className="hover:scale-105 transition-transform duration-300 opacity-0 animate-fade-in"
                style={{ 
                  animationDelay: `${index * 0.15}s`, 
                  animationFillMode: 'forwards' 
                }}
              />
            ))}
          </div>
          
          <div className="space-y-4 text-gray-700">
            <p className="border-l-4 border-temsci-purple pl-4 italic bg-gray-50 p-3 rounded shadow-sm hover:shadow-md transition-shadow glass-effect backdrop-blur-sm">
              Por outro lado, os prestadores de serviços são obrigados a destacar corretamente nos
              documentos fiscais os tributos a serem retidos pelos tomadores, facilidade também oferecida
              pela Plataforma Web de Análise das Retenções Tributárias – PART.
            </p>
          </div>
        </div>
        
        <div className={`order-1 md:order-2 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[50px] opacity-0'}`}>
          <div className="relative rounded-lg overflow-hidden shadow-xl bg-white p-6 z-10">
            {/* Removed glowing background effect that was causing flashing */}
            
            <div className="relative z-10">
              
              
              <h3 className="text-xl font-bold text-center text-temsci-black mb-4">
                Transforme a gestão tributária da sua empresa
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-all">
                  <h4 className="font-medium text-temsci-purple">Automatização completa</h4>
                  <p className="text-gray-600">
                    Minimize erros humanos e garanta conformidade com as normas fiscais através da nossa plataforma inteligente.
                  </p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-all">
                  <h4 className="font-medium text-temsci-blue">Economia de tempo</h4>
                  <p className="text-gray-600">
                    Reduza drasticamente o tempo gasto em tarefas manuais e foque no que realmente importa para sua empresa.
                  </p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-all">
                  <h4 className="font-medium text-temsci-purple">Suporte especializado</h4>
                  <p className="text-gray-600">
                    Nossa equipe de especialistas em tributação está sempre disponível para ajudar com suas dúvidas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <div className="inline-block p-4 rounded-lg bg-gradient-animated text-white shadow-lg">
              <h3 className="text-xl font-bold">
                TEM Soluções contábeis inteligentes
              </h3>
              <p className="text-gray-100">
                Transformando a gestão tributária com inteligência e inovação
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
