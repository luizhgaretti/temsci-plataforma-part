import { Section } from "@/components/ui/section";
import { BenefitItem } from "@/components/benefit-item";
export function PlatformSection() {
  const benefits = ["Minimização dos riscos fiscais", "Redução dos custos com mão de obra", "Agilidade na análise dos documentos", "Segurança na aplicação das regras legais", "Transparência nos processos de análise", "Minimização de erros de análise", "Armazenamento eletrônico de processos para comprovação fiscal", "Aumento na arrecadação dos órgãos públicos", "Facilidade de acesso (plataforma web e mobile)", "Software modular, garantindo a otimização de custos"];
  return <Section className="bg-white">
      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div>
          <div className="rounded-lg bg-temsci-blue-light p-1">
            <div className="overflow-hidden rounded-lg bg-gradient-to-br from-temsci-blue to-temsci-purple">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3" alt="Plataforma PART em uso" className="w-full h-auto object-cover mix-blend-overlay opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white text-center px-4">
              </h3>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-temsci-black mb-6">
            Plataforma de Retenção Contábil
          </h2>
          <p className="text-gray-700 mb-6">
            Desenvolvida para automatizar e facilitar a aplicação das regras atribuídas aos tomadores de serviços,
            responsáveis pelas retenções e recolhimentos dos seguintes tributos:
          </p>
          
          <div className="grid grid-cols-2 gap-2 mb-6">
            <BenefitItem text="Imposto de Renda – IR" />
            <BenefitItem text="Contribuição Social s/ Lucro Líquido – CSLL" />
            <BenefitItem text="Programa de Integração Social – PIS" />
            <BenefitItem text="Contribuição para o Financiamento da Seguridade Social – COFINS" />
            <BenefitItem text="Contribuição Previdenciária – INSS" />
            <BenefitItem text="Imposto s/ Serviços de Qualquer Natureza – ISSQN" />
          </div>
          
          <p className="text-gray-700 mb-6">
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
    </Section>;
}