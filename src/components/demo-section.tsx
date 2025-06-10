import { Section } from "@/components/ui/section";
import { DemoForm } from "@/components/demo-form";
export function DemoSection() {
  return <Section id="solicitar-demo" className="bg-gradient-to-br from-temsci-black to-temsci-black/95 text-white">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
            Solicite uma Demonstração
          </h2>
          <p className="text-gray-300 mb-6 text-base">O futuro da gestão tributária começa agora! Agende uma apresentação personalizada com nossa equipe técnica preenchendo o formulário abaixo.</p>
          <div className="p-6 rounded-lg bg-white/5 backdrop-blur border border-white/10">
            <DemoForm />
          </div>
        </div>
        
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-temsci-purple to-temsci-blue opacity-30 blur-xl"></div>
            <div className="relative rounded-lg bg-temsci-black/60 backdrop-blur p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-white">O que você verá na demonstração:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-temsci-purple/20 text-temsci-purple">1</span>
                  <span>Funcionalidades completas da Plataforma PART</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-temsci-purple/20 text-temsci-purple">2</span>
                  <span>Automação inteligente das retenções tributárias</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-temsci-purple/20 text-temsci-purple">3</span>
                  <span>Relatórios e dashboards personalizados</span>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>;
}