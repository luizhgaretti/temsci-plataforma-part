import { Mail, Phone } from "lucide-react";
export function Footer() {
  const companyName = "TEM Soluções contábeis inteligentes";
  return <footer className="bg-temsci-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4">
              <img src="/lovable-uploads/dc643f90-d32b-46d9-bb57-89217bd99123.png" alt={`${companyName} Logo`} className="h-16 w-auto" />
            </div>
            <p className="text-gray-400 max-w-xs">Soluções tecnológicas nas áreas contábil, fiscal, tributária, financeira e administrativa, desenvolvidas para atender empresas e órgãos públicos.
          </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Quem Somos</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#solicitar-demo" className="text-gray-400 hover:text-white transition-colors">Solicitar Demonstração</a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-1 text-temsci-purple">
                  <Mail size={18} />
                </div>
                <span className="text-gray-400">contato@temsci.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-temsci-purple">
                  <Phone size={18} />
                </div>
                <span className="text-gray-400">(21) 9999-9999</span>
              </li>
              <li className="text-gray-400">
                <p>Rua Professor João Machado, 705</p>
                <p>Freguêsia do Ó, São Paulo - SP</p>
                <p>CEP: 02927-00</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} {companyName}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
}