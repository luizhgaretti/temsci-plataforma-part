
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { PlatformSection } from "@/components/platform-section";
import { BenefitsSection } from "@/components/benefits-section";
import { DemoSection } from "@/components/demo-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PlatformSection />
        <BenefitsSection />
        <DemoSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
