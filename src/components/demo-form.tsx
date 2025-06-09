
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

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
    const emailBody = `
Nova solicitação de demonstração:

Nome: ${data.name}
Email: ${data.email}
Entidade: ${data.entidade}
Telefone: ${data.phone}

Data da solicitação: ${new Date().toLocaleString('pt-BR')}
    `.trim();

    const mailtoLink = `mailto:luizh.rosario@gmail.com?subject=Nova Solicitação de Demonstração - ${data.name}&body=${encodeURIComponent(emailBody)}`;
    
    // Abre o cliente de email padrão
    window.location.href = mailtoLink;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log("Form submitted:", formData);
      
      // Envia o email
      await sendEmail(formData);
      
      toast({
        title: "Solicitação recebida!",
        description: "Entraremos em contato em breve para agendar sua demonstração.",
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
        title: "Erro",
        description: "Houve um problema ao enviar sua solicitação. Tente novamente.",
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
          placeholder="Entidade" 
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
