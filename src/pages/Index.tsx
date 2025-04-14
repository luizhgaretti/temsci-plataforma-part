
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { PlatformSection } from "@/components/platform-section";
import { TimeEfficiencySection } from "@/components/time-efficiency-section";
import { BenefitsSection } from "@/components/benefits-section";
import { FeedbackSection } from "@/components/feedback-section";
import { DemoSection } from "@/components/demo-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { useEffect } from "react";

const Index = () => {
  // Add animation classes to elements as they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.add("opacity-0");
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PlatformSection />
        <TimeEfficiencySection />
        <BenefitsSection />
        <FeedbackSection />
        <DemoSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
