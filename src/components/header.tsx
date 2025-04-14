
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

        {/* Desktop Navigation */}
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
            className="bg-temsci-purple hover:bg-temsci-purple/90 text-white"
          >
            Solicitar Demo
          </Button>
        </nav>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
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
