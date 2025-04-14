import { Section } from "@/components/ui/section";
import { ContactInfo } from "@/components/contact-info";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Message submitted:", message);
    
    toast({
      title: "Mensagem enviada!",
      description: "Agradecemos seu contato. Retornaremos em breve.",
    });
    
    setMessage({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Section id="contato" className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-temsci-black md:text-4xl">
          Entre em Contato
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Estamos à disposição para esclarecer suas dúvidas e apresentar nossas soluções.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 items-start">
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
          <h3 className="text-xl font-semibold mb-6 text-temsci-black">Informações de Contato</h3>
          
          <ContactInfo
            address="Rua Professor João Machado, 705, Freguêsia do Ó, São Paulo - SP, 02927-00"
            phone="(21) 9999-9999"
            email="contato@temsci.com.br"
          />
          
          <div className="mt-8">
            <h4 className="text-lg font-medium mb-4 text-temsci-black">Horário de Atendimento</h4>
            <p className="text-gray-700">Segunda a Sexta: 9h às 18h</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-6 text-temsci-black">Envie uma Mensagem</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Nome Completo"
                name="name"
                value={message.name}
                onChange={handleChange}
                required
                className="border-gray-300 focus:border-temsci-purple"
              />
            </div>
            <div>
              <Input
                placeholder="Email"
                name="email"
                type="email"
                value={message.email}
                onChange={handleChange}
                required
                className="border-gray-300 focus:border-temsci-purple"
              />
            </div>
            <div>
              <Textarea
                placeholder="Sua mensagem"
                name="message"
                value={message.message}
                onChange={handleChange}
                required
                className="min-h-32 border-gray-300 focus:border-temsci-purple"
              />
            </div>
            <Button type="submit" className="w-full bg-temsci-purple hover:bg-temsci-purple/90 text-white">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
}
