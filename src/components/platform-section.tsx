
import { Section } from "@/components/ui/section";
import { BenefitItem } from "@/components/benefit-item";
import { useEffect, useState, useRef } from "react";
import { ChartContainer } from "@/components/ui/chart";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Sector, RadarChart, PolarGrid, PolarAngleAxis, Radar, Legend
} from "recharts";
import { GeometricShapes } from "@/components/ui/geometric-shapes";

export function PlatformSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverBarIndex, setHoverBarIndex] = useState<number | null>(null);
  const barChartRef = useRef<HTMLDivElement>(null);
  const pieChartRef = useRef<HTMLDivElement>(null);

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

  const radarData = [
    { subject: 'Eficiência', A: 120, B: 110, fullMark: 150 },
    { subject: 'Precisão', A: 98, B: 130, fullMark: 150 },
    { subject: 'Automação', A: 86, B: 130, fullMark: 150 },
    { subject: 'Compliance', A: 99, B: 100, fullMark: 150 },
    { subject: 'Economia', A: 85, B: 90, fullMark: 150 },
    { subject: 'Agilidade', A: 65, B: 85, fullMark: 150 },
  ];

  const COLORS = ['#8B5CF6', '#9B87F5', '#7E69AB', '#6E59A5', '#0EA5E9', '#33C3F0'];

  // Custom active shape for pie chart
  const renderActiveShape = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-midAngle * Math.PI / 180);
    const cos = Math.cos(-midAngle * Math.PI / 180);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          stroke="#fff"
          strokeWidth={2}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#999">{`${payload.name}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#333">
          {`${value}%`}
        </text>
      </g>
    );
  };

  // Mouse effects for bar chart
  const handleBarMouseEnter = (data: any, index: number) => {
    setHoverBarIndex(index);
    if (barChartRef.current) {
      barChartRef.current.style.transform = "scale(1.02)";
    }
  };

  const handleBarMouseLeave = () => {
    setHoverBarIndex(null);
    if (barChartRef.current) {
      barChartRef.current.style.transform = "scale(1)";
    }
  };

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
            <p className="border-l-4 border-temsci-purple pl-4 italic bg-gray-50 p-3 rounded shadow-sm hover:shadow-md transition-shadow glass-effect backdrop-blur-sm">
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
          <div className="relative rounded-lg overflow-hidden shadow-xl bg-white p-4 z-10">
            {/* Glowing background effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-temsci-blue to-temsci-purple rounded-lg blur-lg opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            
            <div className="mb-6 relative">
              <h3 className="text-xl font-bold text-center text-temsci-black mb-4">
                Distribuição de Retenções Tributárias
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Bar Chart */}
                <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0'}`}>
                  <div 
                    ref={barChartRef}
                    className="bg-white rounded-lg shadow-sm p-4 h-[300px] transition-transform duration-300"
                  >
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Eficiência de Processamento (%)</h4>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={barData}
                        margin={{ top: 20, right: 10, left: 10, bottom: 20 }}
                        onMouseMove={(e) => e?.activeTooltipIndex !== undefined && handleBarMouseEnter(e, e.activeTooltipIndex)}
                        onMouseLeave={handleBarMouseLeave}
                      >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                        <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                        <YAxis tick={{ fontSize: 10 }} />
                        <Tooltip 
                          contentStyle={{ 
                            background: 'rgba(255, 255, 255, 0.8)', 
                            backdropFilter: 'blur(4px)',
                            border: '1px solid rgba(139, 92, 246, 0.2)',
                            borderRadius: '8px'
                          }} 
                        />
                        <Bar 
                          dataKey="value" 
                          fill="#8B5CF6"
                          animationDuration={2000}
                          animationEasing="ease-in-out"
                          radius={[4, 4, 0, 0]}
                        >
                          {barData.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={COLORS[index % COLORS.length]} 
                              opacity={hoverBarIndex === null || hoverBarIndex === index ? 1 : 0.5}
                              strokeWidth={hoverBarIndex === index ? 2 : 0}
                              stroke="#fff"
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                {/* Pie Chart */}
                <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0'}`}>
                  <div 
                    ref={pieChartRef}
                    className="bg-white rounded-lg shadow-sm p-4 h-[300px] transition-transform duration-300"
                  >
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Distribuição por Tipo (%)</h4>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          activeIndex={activeIndex}
                          activeShape={renderActiveShape}
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={1}
                          dataKey="value"
                          animationDuration={1000}
                          animationEasing="ease-out"
                          onMouseEnter={(_, index) => setActiveIndex(index)}
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
                        <Tooltip 
                          contentStyle={{ 
                            background: 'rgba(255, 255, 255, 0.8)', 
                            backdropFilter: 'blur(4px)',
                            border: '1px solid rgba(139, 92, 246, 0.2)',
                            borderRadius: '8px'
                          }} 
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              
              {/* Added new Radar Chart */}
              <div className={`mt-6 transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0'}`}>
                <div className="bg-white rounded-lg shadow-sm p-4 h-[300px]">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Análise Comparativa de Performance</h4>
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                      <PolarGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#666', fontSize: 10 }} />
                      <Radar name="Antes" dataKey="B" stroke="#0EA5E9" fill="#0EA5E9" fillOpacity={0.3} />
                      <Radar name="Depois" dataKey="A" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.3} />
                      <Legend iconType="circle" />
                      <Tooltip
                        contentStyle={{ 
                          background: 'rgba(255, 255, 255, 0.8)', 
                          backdropFilter: 'blur(4px)',
                          border: '1px solid rgba(139, 92, 246, 0.2)',
                          borderRadius: '8px'
                        }}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
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
