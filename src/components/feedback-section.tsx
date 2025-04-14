
import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote,
  UserRound
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

export function FeedbackSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Carlos Silva",
      role: "Contador Sênior",
      company: "ContaFácil Ltda",
      content: "A plataforma TEM.SCI revolucionou nossa forma de trabalhar com as retenções tributárias. Reduziu o tempo de processamento em 70% e praticamente eliminou os erros nas declarações.",
      rating: 5
    },
    {
      id: 2,
      name: "Ana Oliveira",
      role: "Diretora Financeira",
      company: "Grupo Contábil Nacional",
      content: "Estamos utilizando a plataforma há 8 meses e os resultados são impressionantes. A automação dos processos de retenção tributária nos permite focar no que realmente importa: o atendimento consultivo aos nossos clientes.",
      rating: 5
    },
    {
      id: 3,
      name: "Roberto Mendes",
      role: "Contador",
      company: "RM Associados",
      content: "A integração com nossos sistemas existentes foi muito mais simples do que esperávamos. O suporte técnico da TEM.SCI é excepcional, sempre disponível para resolver qualquer questão.",
      rating: 4
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        className={cn(
          "w-5 h-5", 
          index < rating 
            ? "text-yellow-400 fill-yellow-400" 
            : "text-gray-300"
        )} 
      />
    ));
  };

  return (
    <Section id="feedbacks" className="bg-temsci-purple-light overflow-hidden relative">
      {/* Elementos decorativos de fundo */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-temsci-blue/10 animate-morphing"></div>
      <div className="absolute bottom-12 -left-24 w-80 h-80 rounded-full bg-temsci-purple/10 animate-morphing" style={{ animationDelay: "2s" }}></div>
      
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-temsci-black md:text-4xl">
          O que dizem os contadores
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Veja como nossa plataforma está transformando o trabalho dos profissionais contábeis
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="relative overflow-hidden py-10">
          <div 
            className="transition-transform duration-500 ease-in-out flex"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="w-full flex-shrink-0 px-4"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <CardContent className="p-8 relative">
                    <Quote className="absolute top-4 left-4 w-12 h-12 text-temsci-purple/20 rotate-180" />
                    
                    <div className="flex items-center mb-6 mt-2">
                      <div className="flex justify-center items-center bg-temsci-purple/10 rounded-full w-16 h-16 mr-4">
                        {testimonial.image ? (
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="rounded-full w-14 h-14 object-cover"
                          />
                        ) : (
                          <UserRound className="w-8 h-8 text-temsci-purple" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                        <p className="text-gray-500 text-xs">{testimonial.company}</p>
                      </div>
                      <div className="ml-auto flex">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    
                    <blockquote className="relative z-10 text-gray-700 italic mb-4">
                      "{testimonial.content}"
                    </blockquote>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Controles de navegação */}
        <div className="flex justify-center gap-4 mt-6">
          <button 
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-temsci-purple/50"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6 text-temsci-purple" />
          </button>
          
          <div className="flex gap-2 items-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all",
                  activeIndex === index 
                    ? "bg-temsci-purple w-8" 
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-temsci-purple/50"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6 text-temsci-purple" />
          </button>
        </div>
      </div>
    </Section>
  );
}
