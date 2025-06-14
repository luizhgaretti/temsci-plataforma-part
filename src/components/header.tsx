
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, LogIn } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const companyName = "TEM Soluções contábeis inteligentes";

  const navItems = [
    { name: "Quem Somos", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Contato", href: "#contato" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className={`font-semibold text-lg ${isScrolled ? "text-temsci-black" : "text-white"}`}>
            {companyName}
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className={`transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-temsci-purple"
                  : "text-gray-200 hover:text-white"
              }`}
            >
              {item.name}
            </a>
          ))}
          <Button
            onClick={() => scrollToSection("#solicitar-demo")}
            className="bg-temsci-purple hover:bg-temsci-purple/90 text-white 
            relative overflow-hidden group
            transition-all duration-300 ease-in-out
            shadow-md hover:shadow-lg
            transform hover:scale-[1.02]
            border border-transparent hover:border-temsci-purple/30"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-temsci-purple via-temsci-blue to-temsci-purple 
              bg-[length:200%_200%] 
              opacity-0 group-hover:opacity-20 
              transition-opacity duration-500 ease-in-out">
            </span>
            <span className="relative z-10">
              Solicitar Demonstração
            </span>
          </Button>
          
          <Button
            asChild
            variant="outline"
            className={`flex items-center gap-2 ${
              isScrolled 
                ? "border-temsci-purple text-black hover:bg-temsci-purple/10" 
                : "border-white text-black hover:bg-white/10"
            }`}
          >
            <a href="https://temcontabil-tawny.vercel.app/" target="_blank" rel="noopener noreferrer">
              <LogIn className="w-4 h-4" />
              Área do Cliente
            </a>
          </Button>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? "text-temsci-black" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-temsci-black" : "text-white"} />
          )}
        </button>
      </div>

      {mobileMenuOpen && isMobile && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-gray-700 hover:text-temsci-purple py-2"
                >
                  {item.name}
                </a>
              ))}
              <Button
                onClick={() => scrollToSection("#solicitar-demo")}
                className="bg-temsci-purple hover:bg-temsci-purple/90 text-white w-full
                transition-all duration-300 ease-in-out
                shadow-md hover:shadow-lg
                transform hover:scale-[1.01]"
              >
                Solicitar Demonstração
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="w-full border-temsci-purple text-black hover:bg-temsci-purple/10"
              >
                <a href="https://temcontabil-tawny.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <LogIn className="w-4 h-4" />
                  Área do Cliente
                </a>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
