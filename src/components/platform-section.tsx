
import { Section } from "@/components/ui/section";
import { BenefitItem } from "@/components/benefit-item";
import { useEffect, useState } from "react";
import { ChartContainer } from "@/components/ui/chart";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell
} from "recharts";

export function PlatformSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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

  // Animation for pie chart
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 6);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Sample data for charts
  const barData = [
    { name: "IRPJ", value: 85 },
    { name: "CSLL", value: 75 },
    { name: "PIS", value: 65 },
    { name: "COFINS", value: 90 },
    { name: "INSS", value: 70 },
    { name: "ISSQN", value: 60 },
  ];

  const pieData = [
    { name: "IRPJ", value: 20 },
    { name: "CSLL", value: 15 },
    { name: "PIS", value: 10 },
    { name: "COFINS", value: 25 },
    { name: "INSS", value: 18 },
    { name: "ISSQN", value: 12 },
  ];

  const COLORS = ['#8B5CF6', '#9B87F5', '#7E69AB', '#6E59A5', '#0EA5E9', '#33C3F0'];

  return (
    <Section id="platform-section" className="bg-white py-20">
      <div className="grid gap-16 md:grid-cols-2 items-center">
        <div className={`order-2 md:order-1 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'}`}>
          <h2 className="text-3xl font-bold tracking-tight text-temsci-black mb-6 relative">
            Plataforma de Retenção Contábil
            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-temsci-blue to-temsci-purple"></span>
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            Desenvolvida para automatizar e facilitar a aplicação das regras atribuídas aos tomadores de serviços,
            responsáveis pelas retenções e recolhimentos dos seguintes tributos:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              "Imposto de Renda – IR",
              "Contribuição Social s/ Lucro Líquido – CSLL",
              "Programa de Integração Social – PIS",
              "Contribuição para o Financiamento da Seguridade Social – COFINS",
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
            <p className="border-l-4 border-temsci-purple pl-4 italic bg-gray-50 p-3 rounded shadow-sm hover:shadow-md transition-shadow">
              Por outro lado, os prestadores de serviços são obrigados a destacar corretamente nos
              documentos fiscais os tributos a serem retidos pelos tomadores, facilidade também oferecida
              pela Plataforma Web de Análise das Retenções Tributárias – PART.
            </p>
            
            <p className="text-gray-700">
              Escritórios de contabilidade, organizações indispensáveis no apoio às empresas, fazem parte na
              nossa carteira de clientes, assim como órgãos públicos, potenciais tomadores de serviços.
            </p>
          </div>
        </div>
        
        <div className={`order-1 md:order-2 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[50px] opacity-0'}`}>
          <div className="relative rounded-lg overflow-hidden shadow-xl bg-white p-4">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-center text-temsci-black mb-4">
                Distribuição de Retenções Tributárias
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Bar Chart */}
                <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0'}`}>
                  <div className="bg-white rounded-lg shadow-sm p-4 h-[300px]">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Eficiência de Processamento (%)</h4>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={barData}
                        margin={{ top: 20, right: 10, left: 10, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                        <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                        <YAxis tick={{ fontSize: 10 }} />
                        <Tooltip />
                        <Bar 
                          dataKey="value" 
                          fill="#8B5CF6"
                          animationDuration={2000}
                          animationEasing="ease-in-out"
                          radius={[4, 4, 0, 0]}
                        >
                          {barData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                {/* Pie Chart */}
                <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0'}`}>
                  <div className="bg-white rounded-lg shadow-sm p-4 h-[300px]">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Distribuição por Tipo (%)</h4>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={1}
                          dataKey="value"
                          animationDuration={1000}
                          animationEasing="ease-out"
                        >
                          {pieData.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={COLORS[index % COLORS.length]} 
                              opacity={index === activeIndex ? 1 : 0.7}
                              stroke={index === activeIndex ? '#fff' : 'none'}
                              strokeWidth={index === activeIndex ? 2 : 0}
                            />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -inset-1 bg-gradient-to-r from-temsci-blue to-temsci-purple rounded-lg blur-lg opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          </div>
          
          <div className="mt-6 text-center">
            <div className="inline-block p-4 rounded-lg bg-temsci-purple/5 animate-float">
              <h3 className="text-xl font-bold text-temsci-black">
                TEM Soluções contábeis inteligentes
              </h3>
              <p className="text-gray-600">
                Transformando a gestão tributária com inteligência e inovação
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
