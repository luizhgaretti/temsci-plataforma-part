
import { Section } from "@/components/ui/section";

export function AboutSection() {
  return (
    <Section id="sobre" className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-temsci-black md:text-4xl">
          Quem é a TEM.SCI?
        </h2>
        <div className="mt-8 space-y-4 text-lg text-gray-700">
          <p>
            A TEM.SCI nasceu para criar e oferecer às empresas e órgãos públicos soluções tecnológicas de
            naturezas contábil, fiscal, tributária, financeira e administrativa que suprem as necessidades
            diárias no cumprimento das complexas leis vigentes no país.
          </p>
          <p>
            A escassez de mão de obra qualificada e os elevados custos para atender tamanha burocracia
            exigida dos empresários e gestores públicos, despertou em nós o desejo de disponibilizar ao
            mercado ferramentas com preços acessíveis que propiciam agilidade, segurança, rentabilidade,
            transparência e gestão dos recursos.
          </p>
        </div>
      </div>
    </Section>
  );
}
