
import { useState, useEffect, useRef } from "react";
import { Section } from "@/components/ui/section";
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from "recharts";
import { 
  Clock, TrendingDown, DollarSign, CheckCircle, AlertCircle, 
  ClipboardCheck, BarChart2, PieChart as PieChartIcon
} from "lucide-react";

export function TimeEfficiencySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Automatically rotate through pie chart segments
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Time savings data
  const timeComparisonData = [
    { name: "Jan", manual: 120, comTemSCI: 45 },
    { name: "Fev", manual: 130, comTemSCI: 50 },
    { name: "Mar", manual: 140, comTemSCI: 48 },
    { name: "Abr", manual: 145, comTemSCI: 47 },
    { name: "Mai", manual: 150, comTemSCI: 45 },
    { name: "Jun", manual: 155, comTemSCI: 42 },
  ];

  // Error reduction data
  const errorReductionData = [
    { name: "Antes da implementação", value: 8.5 },
    { name: "Após 3 meses", value: 3.2 },
    { name: "Após 6 meses", value: 1.8 },
    { name: "Após 12 meses", value: 0.7 },
  ];

  // Financial impact data
  const financialImpactData = [
    { name: "Redução de custos operacionais", value: 35 },
    { name: "Economia com correção de erros", value: 25 },
    { name: "Redução de multas fiscais", value: 28 },
    { name: "Economia em terceirização", value: 12 },
  ];

  const COLORS = ['#8B5CF6', '#0EA5E9', '#7E69AB', '#33C3F0'];

  // Custom tooltip for financial impact chart
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-md shadow-lg">
          <p className="font-medium">{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Section 
      id="eficiencia" 
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-gray-50 py-20 overflow-hidden"
    >
      <div className="relative">
        {/* Background elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-temsci-purple/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-temsci-blue/5 rounded-full filter blur-3xl"></div>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span className="text-gradient">Eficiência</span> Comprovada
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-temsci-blue to-temsci-purple"></span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Nossa plataforma foi projetada para reduzir drasticamente o tempo gasto em processos contábeis,
            mitigar erros humanos e aumentar a eficiência financeira dos nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Time Savings Chart */}
          <div className={`transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="bg-white rounded-lg shadow-lg p-6 h-full transition-transform hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-temsci-purple h-6 w-6" />
                <h3 className="text-xl font-bold">Economia de Tempo</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Comparação do tempo médio mensal (em horas) gasto nos processos de retenção tributária.
              </p>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={timeComparisonData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="name" />
                    <YAxis label={{ value: 'Horas', angle: -90, position: 'insideLeft' }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '8px',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      }}
                    />
                    <Legend />
                    <Bar 
                      name="Processo Manual" 
                      dataKey="manual" 
                      fill="#9B87F5" 
                      radius={[4, 4, 0, 0]}
                      animationDuration={1500}
                    />
                    <Bar 
                      name="Com TEM.SCI" 
                      dataKey="comTemSCI" 
                      fill="#0EA5E9" 
                      radius={[4, 4, 0, 0]} 
                      animationDuration={1500}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 p-3 bg-temsci-purple/10 rounded-lg">
                <div className="flex items-center gap-2">
                  <TrendingDown className="text-temsci-purple h-5 w-5" />
                  <p className="text-temsci-black font-medium">
                    <span className="text-temsci-purple font-bold">67% de redução</span> no tempo dedicado a processos tributários
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Error Reduction Chart */}
          <div className={`transition-all duration-1000 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="bg-white rounded-lg shadow-lg p-6 h-full transition-transform hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="text-temsci-purple h-6 w-6" />
                <h3 className="text-xl font-bold">Redução de Erros</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Taxa média de erros em declarações fiscais (%) antes e após a implementação da plataforma.
              </p>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={errorReductionData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="name" />
                    <YAxis label={{ value: 'Taxa de Erros (%)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '8px',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#8B5CF6"
                      strokeWidth={3}
                      activeDot={{ r: 8 }}
                      animationDuration={2000}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 p-3 bg-temsci-purple/10 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-temsci-purple h-5 w-5" />
                  <p className="text-temsci-black font-medium">
                    <span className="text-temsci-purple font-bold">Redução de 92%</span> na taxa de erros após 12 meses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Impact Section */}
        <div className={`transition-all duration-1000 delay-600 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="bg-white rounded-lg shadow-lg p-6 overflow-hidden relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-temsci-blue to-temsci-purple rounded-lg blur-lg opacity-20"></div>
            <div className="relative">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <DollarSign className="text-temsci-purple h-6 w-6" />
                  <h3 className="text-2xl font-bold">Impacto Financeiro</h3>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  A implementação da plataforma TEM.SCI resulta em economias significativas e otimização de recursos financeiros.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        activeIndex={activeIndex}
                        activeShape={(props) => {
                          const RADIAN = Math.PI / 180;
                          const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
                          const sin = Math.sin(-RADIAN * midAngle);
                          const cos = Math.cos(-RADIAN * midAngle);
                          const sx = cx + (outerRadius + 10) * cos;
                          const sy = cy + (outerRadius + 10) * sin;
                          const mx = cx + (outerRadius + 30) * cos;
                          const my = cy + (outerRadius + 30) * sin;
                          const ex = mx + (cos >= 0 ? 1 : -1) * 22;
                          const ey = my;
                          const textAnchor = cos >= 0 ? 'start' : 'end';

                          return (
                            <g>
                              <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} className="text-sm font-medium">
                                {payload.name}
                              </text>
                              <text x={cx} y={cy + 20} dy={8} textAnchor="middle" fill="#333" className="text-lg font-bold">
                                {`${value}%`}
                              </text>
                              <text x={cx} y={cy - 20} textAnchor="middle" fill="#999" className="text-xs">
                                Economia
                              </text>
                            </g>
                          );
                        }}
                        data={financialImpactData}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        onMouseEnter={(_, index) => setActiveIndex(index)}
                        animationDuration={1000}
                      >
                        {financialImpactData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold mb-4">Benefícios Financeiros Comprovados</h4>
                  
                  <div className="space-y-6">
                    {[
                      {
                        icon: <BarChart2 className="h-5 w-5 text-temsci-purple" />,
                        title: "Redução de 35% nos custos operacionais",
                        description: "Menos horas dedicadas a processos manuais significa redução direta de custos com pessoal."
                      },
                      {
                        icon: <ClipboardCheck className="h-5 w-5 text-temsci-blue" />,
                        title: "Economia de 25% com correção de erros",
                        description: "Menos retrabalho e retificações de declarações fiscais."
                      },
                      {
                        icon: <PieChartIcon className="h-5 w-5 text-[#7E69AB]" />,
                        title: "28% menos em multas fiscais",
                        description: "Conformidade fiscal aprimorada significa menos penalidades e autuações."
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="mt-1">{item.icon}</div>
                        <div>
                          <h5 className="font-medium text-gray-900">{item.title}</h5>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-temsci-purple/10 rounded-lg border border-temsci-purple/20">
                    <p className="font-medium text-temsci-black">
                      Em média, nossos clientes reportam um <span className="text-temsci-purple font-bold">ROI positivo em menos de 4 meses</span> após a implementação da plataforma TEM.SCI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

