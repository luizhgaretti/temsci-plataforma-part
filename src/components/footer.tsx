
import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-temsci-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4">
              <img
                src="/tem-logo.png"
                alt="TEM.SCI Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 max-w-xs">
              Soluções tecnológicas de naturezas contábil, fiscal, tributária, financeira e administrativa.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-white transition-colors">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#solicitar-demo" className="text-gray-400 hover:text-white transition-colors">
                  Solicitar Demo
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-temsci-purple" />
                <span className="text-gray-400">(21) 9999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-temsci-purple" />
                <a href="mailto:contato@temsci.com.br" className="text-gray-400 hover:text-white transition-colors">
                  contato@temsci.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} TEM Soluções Contábeis Inteligentes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
