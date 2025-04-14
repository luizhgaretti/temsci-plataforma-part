
import { Section } from "@/components/ui/section";
import { BenefitItem } from "@/components/benefit-item";

export function PlatformSection() {
  return <Section className="bg-white py-20">
      <div className="grid gap-16 md:grid-cols-2 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold tracking-tight text-temsci-black mb-6 relative">
            Plataforma de Retenção Contábil
            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-temsci-blue to-temsci-purple"></span>
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            Desenvolvida para automatizar e facilitar a aplicação das regras atribuídas aos tomadores de serviços,
            responsáveis pelas retenções e recolhimentos dos seguintes tributos:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            <BenefitItem text="Imposto de Renda – IR" className="hover:scale-105 transition-transform duration-300" />
            <BenefitItem text="Contribuição Social s/ Lucro Líquido – CSLL" className="hover:scale-105 transition-transform duration-300" />
            <BenefitItem text="Programa de Integração Social – PIS" className="hover:scale-105 transition-transform duration-300" />
            <BenefitItem text="Contribuição para o Financiamento da Seguridade Social – COFINS" className="hover:scale-105 transition-transform duration-300" />
            <BenefitItem text="Contribuição Previdenciária – INSS" className="hover:scale-105 transition-transform duration-300" />
            <BenefitItem text="Imposto s/ Serviços de Qualquer Natureza – ISSQN" className="hover:scale-105 transition-transform duration-300" />
          </div>
          
          <div className="space-y-4 text-gray-700">
            <p className="border-l-4 border-temsci-purple pl-4 italic bg-gray-50 p-3 rounded">
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
        
        <div className="order-1 md:order-2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-temsci-blue to-temsci-purple rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <div className="bg-gradient-to-br from-temsci-blue/90 to-temsci-purple/90 aspect-square flex items-center justify-center p-8">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3" alt="Plataforma PART em uso" className="w-full h-auto object-cover rounded-lg mix-blend-overlay" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    TEM Soluções contábeis inteligentes
                  </h3>
                  <p className="text-white/90 max-w-md">
                    Transformando a gestão tributária com inteligência e inovação
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>;
}
