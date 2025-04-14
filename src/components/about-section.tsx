
import { Section } from "@/components/ui/section";

export function AboutSection() {
  return (
    <Section id="sobre" className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-block mb-6">
          <h2 className="text-3xl font-bold tracking-tight text-temsci-black md:text-4xl relative inline-block">
            Quem é a TEM Soluções contábeis inteligentes?
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-temsci-purple to-temsci-blue"></div>
          </h2>
        </div>
        
        <div className="mt-12 space-y-6 text-lg text-gray-700">
          <p className="leading-relaxed">
            A TEM Soluções contábeis inteligentes nasceu para criar e oferecer às empresas e órgãos públicos 
            <span className="text-temsci-purple font-semibold"> soluções tecnológicas </span>
            de naturezas contábil, fiscal, tributária, financeira e administrativa que suprem as necessidades
            diárias no cumprimento das complexas leis vigentes no país.
          </p>
          
          <div className="relative p-6 bg-white rounded-lg shadow-md mt-8 border-l-4 border-temsci-blue">
            <p className="leading-relaxed">
              A escassez de mão de obra qualificada e os elevados custos para atender tamanha burocracia
              exigida dos empresários e gestores públicos, despertou em nós o desejo de disponibilizar ao
              mercado 
              <span className="text-temsci-blue font-semibold"> ferramentas com preços acessíveis </span>
              que propiciam agilidade, segurança, rentabilidade, transparência e gestão dos recursos.
            </p>
            <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-temsci-purple/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </Section>
  );
}
