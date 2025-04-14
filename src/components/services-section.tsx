
import { Section } from "@/components/ui/section";
import { FeatureCard } from "@/components/feature-card";
import { Calculator, Building2, FileText, BarChart3 } from "lucide-react";

export function ServicesSection() {
  return (
    <Section id="servicos" className="bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-temsci-black md:text-4xl">
          O que a TEM.SCI oferece?
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Soluções inovadoras para simplificar a complexidade tributária e contábil de sua empresa.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <FeatureCard
          title="Plataforma PART"
          description="Análise automatizada das Retenções Tributárias para empresas e órgãos públicos."
          icon={Calculator}
        />
        <FeatureCard
          title="Soluções para Empresas"
          description="Ferramentas que simplificam o cumprimento das obrigações fiscais e tributárias."
          icon={Building2}
        />
        <FeatureCard
          title="Apoio Contábil"
          description="Suporte especializado para escritórios de contabilidade e departamentos fiscais."
          icon={FileText}
        />
        <FeatureCard
          title="Gestão Tributária"
          description="Controle eficiente dos impostos retidos e recolhidos por sua empresa."
          icon={BarChart3}
        />
      </div>
    </Section>
  );
}
