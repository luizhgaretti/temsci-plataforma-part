import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

export function DemoForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    entidade: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (data: typeof formData) => {
    // Configuração do EmailJS
    const serviceId = 'service_demo_form'; // Você precisará configurar isso no EmailJS
    const templateId = 'template_demo_form'; // Você precisará configurar isso no EmailJS
    const publicKey = 'YOUR_PUBLIC_KEY'; // Você precisará configurar isso no EmailJS

    const templateParams = {
      to_email: 'luizh.rosario@gmail.com',
      from_name: data.name,
      from_email: data.email,
      entidade: data.entidade,
      phone: data.phone,
      message: `
Nova solicitação de demonstração:

Nome: ${data.name}
Email: ${data.email}
Entidade: ${data.entidade}
Telefone: ${data.phone}

Data da solicitação: ${new Date().toLocaleString('pt-BR')}
      `.trim()
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log("Form submitted:", formData);
      
      // Envia o email
      await sendEmail(formData);
      
      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Seu email foi enviado. Entraremos em contato em breve para agendar sua demonstração.",
      });
      
      // Clear form
      setFormData({
        name: "",
        email: "",
        entidade: "",
        phone: "",
      });
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: "Erro ao enviar",
        description: "Houve um problema ao enviar sua solicitação. Tente novamente ou entre em contato diretamente conosco.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      
      <div>
        <Input 
          placeholder="Nome Completo" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
          className="border-black focus:border-black text-black"
          disabled={isSubmitting}
        />
      </div>
      <div>
        <Input 
          placeholder="Email" 
          name="email" 
          type="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
          className="border-black focus:border-black text-black"
          disabled={isSubmitting}
        />
      </div>
      <div>
        <Input 
          placeholder="Entidade / Empresa" 
          name="entidade" 
          value={formData.entidade} 
          onChange={handleChange} 
          required 
          className="border-black focus:border-black text-black"
          disabled={isSubmitting}
        />
      </div>
      <div>
        <Input 
          placeholder="Telefone" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange} 
          required 
          className="border-black focus:border-black text-black"
          disabled={isSubmitting}
        />
      </div>
      <Button 
        type="submit" 
        className="w-full bg-temsci-purple hover:bg-temsci-purple/90 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Solicitar Demonstração"}
      </Button>
    </form>
  );
}
