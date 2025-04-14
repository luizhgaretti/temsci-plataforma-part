
import { Section } from "@/components/ui/section";
import { BenefitItem } from "@/components/benefit-item";

export function BenefitsSection() {
  const benefits = [
    "Minimização dos riscos fiscais",
    "Redução dos custos com mão de obra",
    "Agilidade na análise dos documentos",
    "Segurança na aplicação das regras legais",
    "Transparência nos processos de análise",
    "Minimização de erros de análise",
    "Armazenamento eletrônico de processos para comprovação fiscal",
    "Aumento na arrecadação dos órgãos públicos",
    "Facilidade de acesso (plataforma web e mobile)",
    "Software modular, garantindo a otimização de custos"
  ];

  return (
    <Section className="bg-temsci-purple/5">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-temsci-black md:text-4xl">
          Benefícios das Nossas Soluções
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Ao utilizar nossas ferramentas, sua empresa ou órgão público obtém vantagens competitivas significativas.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <BenefitItem key={index} text={benefit} className="p-2" />
        ))}
      </div>
    </Section>
  );
}
