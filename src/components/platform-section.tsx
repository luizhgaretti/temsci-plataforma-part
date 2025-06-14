import { Section } from "@/components/ui/section";
import { BenefitItem } from "@/components/benefit-item";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { GeometricShapes } from "@/components/ui/geometric-shapes";
export function PlatformSection() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2
    });
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
  const scrollToDemo = () => {
    const demoSection = document.getElementById('solicitar-demo');
    if (demoSection) {
      demoSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <Section id="platform-section" className="bg-white py-20 relative overflow-hidden">
      {/* Subtle background shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-temsci-purple/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-temsci-blue/5 rounded-full filter blur-3xl"></div>
      
      <div className="grid gap-16 md:grid-cols-2 items-center">
        <div className={`order-2 md:order-1 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'}`}>
          <h2 className="text-3xl font-bold tracking-tight text-temsci-black mb-6 relative">
            <span className="text-gradient">PART</span> – Plataforma Web de Análise das Retenções Tributárias
            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-temsci-blue to-temsci-purple"></span>
          </h2>
          
          <p className="text-gray-700 mb-6 text-lg font-medium">
            Análise automatizada das retenções tributárias para:
          </p>
          
          <div className="space-y-3 mb-6">
            <BenefitItem text="Órgãos Públicos que buscam aumentar a arrecadação, reduzir riscos e garantir conformidade legal." className="hover:scale-105 transition-transform duration-300" />
            <BenefitItem text="Escritórios de Contabilidade que querem escalar seus atendimentos com precisão." className="hover:scale-105 transition-transform duration-300" />
            <BenefitItem text="Empresas que desejam agilidade e segurança no cumprimento das obrigações fiscais." className="hover:scale-105 transition-transform duration-300" />
          </div>
          
          <p className="text-gray-700 mb-6 text-lg">
            Desenvolvida para automatizar e simplificar a aplicação das regras legais atribuídas aos 
            responsáveis pelas retenções e recolhimentos dos seguintes tributos:
          </p>
          
          <div className="grid grid-cols-1 gap-3 mb-6">
            {["Imposto de Renda – IR", "Contribuição Previdenciária – INSS", "Imposto s/ Serviços de Qualquer Natureza – ISSQN"].map((text, index) => <BenefitItem key={index} text={text} className="hover:scale-105 transition-transform duration-300 opacity-0 animate-fade-in" style={{
            animationDelay: `${index * 0.15}s`,
            animationFillMode: 'forwards'
          }} />)}
          </div>
          
          <div className="space-y-4 text-gray-700 mb-8">
            <p className="border-l-4 border-temsci-purple pl-4 italic bg-gray-50 p-3 rounded shadow-sm hover:shadow-md transition-shadow glass-effect backdrop-blur-sm">
              Com a plataforma, tomadores e prestadores de serviços contam com uma ferramenta poderosa 
              que automatiza, orienta e assegura conformidade no destaque e na retenção dos principais tributos.
            </p>
          </div>

          <div className="mt-8">
            <Button onClick={scrollToDemo} className="bg-temsci-purple hover:bg-temsci-purple/90 text-white px-8 py-3 text-lg font-semibold" size="lg">
              Solicitar Demonstração
            </Button>
          </div>
        </div>
        
        <div className={`order-1 md:order-2 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[50px] opacity-0'}`}>
          <div className="relative rounded-lg overflow-hidden shadow-xl bg-white p-6 z-10">
            
            <div className="relative z-10">
              
              
              <h3 className="text-xl font-bold text-center text-temsci-black mb-4">
                Transforme a gestão tributária da sua empresa
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-all">
                  <h4 className="font-medium text-temsci-purple">Inovação</h4>
                  <p className="text-gray-600 text-justify">Plataforma exclusiva que valida automaticamente informações fiscais com alta precisão, simplificando a complexidade das retenções tributárias.</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-all">
                  <h4 className="font-medium text-temsci-blue">Segurança</h4>
                  <p className="text-gray-600 text-justify">Validação automática das retenções, assegurando conformidade legal e total confiabilidade nos processos de retenções. Minimize erros humanos e garanta conformidade com as regras tributárias.</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-all">
                  <h4 className="font-medium text-temsci-purple">Economia</h4>
                  <p className="text-gray-600 text-justify">Otimização de tempo, redução de custos e de riscos fiscais com processos automáticos e eficientes de apuração tributária. Invista no que é essencial para o seu negócio, reduza custos e riscos com atividades burocráticas.</p>
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
    </Section>;
}