
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    },
    {
      id: 4,
      name: "Juliana Costa",
      role: "Contadora Tributária",
      company: "JC Contabilidade",
      content: "Conseguimos aumentar nossa carteira de clientes em 30% sem precisar contratar mais profissionais, graças à eficiência que a plataforma trouxe para nossos processos de retenções.",
      rating: 5
    },
    {
      id: 5,
      name: "Marcos Almeida",
      role: "Diretor de Operações",
      company: "Contabilidade Digital SA",
      content: "A dashboards de visualização são intuitivos e nos ajudam a ter uma visão clara de todos os processos. A plataforma se tornou essencial para nosso escritório.",
      rating: 4
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        className={cn(
          "w-5 h-5", 
          index < rating 
            ? "text-magenta-500 fill-magenta-500" 
            : "text-gray-300"
        )} 
      />
    ));
  };

  return (
    <Section id="feedbacks" className="bg-gradient-to-br from-purple-600 to-purple-800 overflow-hidden relative py-20">
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-magenta-500/20 animate-morphing"></div>
      <div className="absolute bottom-12 -left-24 w-80 h-80 rounded-full bg-orange-500/20 animate-morphing" style={{ animationDelay: "2s" }}></div>
      
      <div className="text-center mb-14 relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          O que dizem os contadores
        </h2>
        <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
          Veja como nossa plataforma está transformando o trabalho dos profissionais contábeis
        </p>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full">
                  <Card className="border-0 shadow-2xl hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full bg-white/10 backdrop-blur-lg">
                    <CardContent className="p-6 relative h-full flex flex-col">
                      <Quote className="absolute top-4 right-4 w-10 h-10 text-magenta-500/20 rotate-180" />
                      
                      <div className="flex items-center mb-4">
                        <div className="flex justify-center items-center bg-magenta-500/20 rounded-full w-14 h-14 mr-3">
                          {testimonial.image ? (
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="rounded-full w-12 h-12 object-cover"
                            />
                          ) : (
                            <UserRound className="w-7 h-7 text-magenta-500" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-base truncate text-white">{testimonial.name}</h4>
                          <p className="text-white/80 text-sm truncate">{testimonial.role}</p>
                          <p className="text-white/60 text-xs truncate">{testimonial.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex mb-4">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      <blockquote className="relative z-10 text-white/90 italic flex-1 text-sm">
                        "{testimonial.content}"
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center mt-8 gap-2">
            <CarouselPrevious className="relative inset-auto h-9 w-9 text-white opacity-70 hover:opacity-100 transition-opacity" />
            <CarouselNext className="relative inset-auto h-9 w-9 text-white opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </Carousel>
      </div>
    </Section>
  );
}

