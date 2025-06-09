
import { Section } from "@/components/ui/section";
import { FeatureCard } from "@/components/feature-card";
import { Calculator } from "lucide-react";

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

      <div className="flex justify-center">
        <FeatureCard
          title="Plataforma PART"
          description="Análise automatizada das Retenções Tributárias para órgãos e entidades públicas"
          icon={Calculator}
        />
      </div>
    </Section>
  );
}
