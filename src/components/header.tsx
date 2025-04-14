import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const companyName = "TEM Soluções contábeis inteligentes";

  const navItems = [
    { name: "Sobre", href: "#sobre" },
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
          <img
            src="/tem-logo.png"
            alt="TEM.SCI Logo"
            className="h-8 w-auto md:h-10"
          />
          <div className={`ml-4 font-semibold text-lg ${isScrolled ? "text-temsci-black" : "text-white"}`}>
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
            animate-pulse 
            hover:animate-none
            transition-all duration-300
            shadow-lg hover:shadow-xl 
            border-2 border-transparent hover:border-temsci-blue/50
            transform hover:scale-105"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-temsci-purple via-temsci-blue to-temsci-purple 
            bg-[length:200%_200%] 
            group-hover:animate-gradient-shift 
            opacity-0 group-hover:opacity-30 
            transition-opacity duration-300">
          </span>
          <span className="relative z-10 flex items-center gap-2">
            Solicitar Demo
            <div className="relative">
              <span className="absolute -inset-1 bg-temsci-blue rounded-full animate-ping opacity-30"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-temsci-blue"></span>
            </div>
          </span>
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
                className="bg-temsci-purple hover:bg-temsci-purple/90 text-white w-full"
              >
                Solicitar Demo
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
