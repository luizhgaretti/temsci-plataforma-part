import { useRef, useState, useEffect } from "react";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight, Quote, UserRound, Award, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
  featured?: boolean;
}
export function FeedbackSection() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const testimonials: Testimonial[] = [{
    id: 1,
    name: "Carlos Silva",
    role: "Contador Sênior",
    company: "ContaFácil Ltda",
    content: "A plataforma TEM.SCI revolucionou nossa forma de trabalhar com as retenções tributárias. Reduziu o tempo de processamento em 70% e praticamente eliminou os erros nas declarações.",
    rating: 5,
    featured: true
  }, {
    id: 2,
    name: "Ana Oliveira",
    role: "Diretora Financeira",
    company: "Grupo Contábil Nacional",
    content: "Estamos utilizando a plataforma há 8 meses e os resultados são impressionantes. A automação dos processos de retenção tributária nos permite focar no que realmente importa: o atendimento consultivo aos nossos clientes.",
    rating: 5
  }, {
    id: 3,
    name: "Roberto Mendes",
    role: "Contador",
    company: "RM Associados",
    content: "A integração com nossos sistemas existentes foi muito mais simples do que esperávamos. O suporte técnico da TEM.SCI é excepcional, sempre disponível para resolver qualquer questão.",
    rating: 4
  }, {
    id: 4,
    name: "Juliana Costa",
    role: "Contadora Tributária",
    company: "JC Contabilidade",
    content: "Conseguimos aumentar nossa carteira de clientes em 30% sem precisar contratar mais profissionais, graças à eficiência que a plataforma trouxe para nossos processos de retenções.",
    rating: 5
  }, {
    id: 5,
    name: "Marcos Almeida",
    role: "Diretor de Operações",
    company: "Contabilidade Digital SA",
    content: "A dashboards de visualização são intuitivos e nos ajudam a ter uma visão clara de todos os processos. A plataforma se tornou essencial para nosso escritório.",
    rating: 4
  }];

  // Autoplay functionality
  useEffect(() => {
    let interval: number;
    if (autoplayEnabled) {
      interval = window.setInterval(() => {
        if (carouselRef.current) {
          const nextButton = carouselRef.current.querySelector('[data-carousel-next]');
          if (nextButton) {
            (nextButton as HTMLButtonElement).click();
          }
        }
      }, 5000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplayEnabled]);
  const renderStars = (rating: number) => {
    return Array.from({
      length: 5
    }).map((_, index) => <Star key={index} className={cn("w-5 h-5", index < rating ? "text-amber-400 fill-amber-400" : "text-gray-300")} />);
  };
  return <Section id="feedbacks" className="bg-gradient-to-br from-indigo-800 to-indigo-950 overflow-hidden relative py-24">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-5"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-temsci-purple/20 blur-3xl animate-morphing"></div>
      <div className="absolute bottom-12 -left-24 w-80 h-80 rounded-full bg-temsci-blue/20 blur-3xl animate-morphing" style={{
      animationDelay: "2s"
    }}></div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-amber-400/40 animate-float" style={{
      animationDelay: "0s"
    }}></div>
      <div className="absolute top-3/4 left-1/4 w-2 h-2 rounded-full bg-temsci-blue/40 animate-float" style={{
      animationDelay: "1.5s"
    }}></div>
      <div className="absolute top-1/3 left-2/3 w-4 h-4 rounded-full bg-temsci-purple/30 animate-float" style={{
      animationDelay: "1s"
    }}></div>
      
      {/* Animated lines */}
      <div className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-temsci-blue/20 to-transparent transform -translate-y-1/2 opacity-70"></div>
      <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-temsci-purple/20 to-transparent transform -translate-x-1/2 opacity-70"></div>
      
      <div className="text-center mb-16 relative z-10">
        
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          O que dizem os <span className="relative">contadores
            <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-temsci-purple to-temsci-blue opacity-70"></span>
          </span>
        </h2>
        <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
          Veja como nossa plataforma está transformando o trabalho dos profissionais contábeis
        </p>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4" ref={carouselRef}>
        <Carousel opts={{
        align: "start",
        loop: true
      }} className="w-full" onMouseEnter={() => setAutoplayEnabled(false)} onMouseLeave={() => setAutoplayEnabled(true)}>
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full" onMouseEnter={() => setActiveItem(testimonial.id)} onMouseLeave={() => setActiveItem(null)}>
                  <div className={cn("relative group transition-all duration-500", activeItem === testimonial.id ? "scale-105" : "")}>
                    {/* Glow effect */}
                    <div className={cn("absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 -z-10", testimonial.featured ? "bg-gradient-to-r from-amber-500/30 to-temsci-purple/30 blur-lg" : "bg-gradient-to-r from-temsci-blue/20 to-temsci-purple/20 blur-lg", activeItem === testimonial.id ? "opacity-100" : "group-hover:opacity-70")}></div>
                    
                    <Card className={cn("border-0 shadow-xl overflow-hidden h-full backdrop-blur-md transition-all duration-500", testimonial.featured ? "bg-gradient-to-br from-indigo-900/80 to-indigo-950/80 border border-amber-500/10" : "bg-white/5 hover:bg-white/8", activeItem === testimonial.id ? "shadow-2xl shadow-indigo-500/10" : "")}>
                      <CardContent className="p-6 relative h-full flex flex-col">
                        <Quote className="absolute top-4 right-4 w-10 h-10 text-temsci-purple/20 rotate-180" />
                        
                        {testimonial.featured && <div className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs px-3 py-1 rounded-bl-md rounded-tr-md flex items-center">
                            <Award className="w-3 h-3 mr-1" />
                            Destaque
                          </div>}
                        
                        <div className="flex items-center mb-4">
                          <div className={cn("flex justify-center items-center rounded-full w-14 h-14 mr-3 ring-2 transition-all duration-300", testimonial.featured ? "ring-amber-500/30 bg-gradient-to-br from-temsci-purple/20 to-temsci-blue/20" : "ring-temsci-blue/20 bg-temsci-blue/10")}>
                            {testimonial.image ? <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-12 h-12 object-cover" /> : <UserRound className={cn("w-7 h-7", testimonial.featured ? "text-amber-400" : "text-temsci-blue")} />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center">
                              <h4 className="font-semibold text-base truncate text-white">{testimonial.name}</h4>
                              {testimonial.featured && <BadgeCheck className="w-4 h-4 text-amber-400 ml-1" />}
                            </div>
                            <p className="text-white/80 text-sm truncate">{testimonial.role}</p>
                            <p className="text-white/60 text-xs truncate">{testimonial.company}</p>
                          </div>
                        </div>
                        
                        <div className="flex mb-4">
                          {renderStars(testimonial.rating)}
                        </div>
                        
                        <blockquote className="relative z-10 text-white/90 italic flex-1 text-sm">
                          <div className="absolute left-0 top-0 text-5xl leading-none text-temsci-purple/20">"</div>
                          <div className="pl-6">{testimonial.content}</div>
                          <div className="absolute right-0 bottom-0 text-5xl leading-none text-temsci-purple/20">"</div>
                        </blockquote>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CarouselItem>)}
          </CarouselContent>
          
          <div className="flex items-center justify-center mt-10 gap-4">
            <div className="flex relative">
              <CarouselPrevious data-carousel-prev className="relative inset-auto h-10 w-10 text-white border border-white/20 bg-indigo-800/50 backdrop-blur-sm hover:bg-temsci-purple/80 opacity-90 hover:opacity-100 transition-all duration-300" />
              <div className="absolute inset-0 bg-temsci-purple/20 rounded-full blur-md animate-pulse opacity-70"></div>
            </div>
            
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map(index => <div key={index} className={cn("w-2 h-2 rounded-full transition-all duration-300", index === activeItem ? "bg-temsci-purple w-6" : "bg-white/30 hover:bg-white/50")}></div>)}
            </div>
            
            <div className="flex relative">
              <CarouselNext data-carousel-next className="relative inset-auto h-10 w-10 text-white border border-white/20 bg-indigo-800/50 backdrop-blur-sm hover:bg-temsci-purple/80 opacity-90 hover:opacity-100 transition-all duration-300" />
              <div className="absolute inset-0 bg-temsci-purple/20 rounded-full blur-md animate-pulse opacity-70"></div>
            </div>
          </div>
        </Carousel>
      </div>
    </Section>;
}