
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log("Form submitted:", formData);
    
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
        />
      </div>
      <Button type="submit" className="w-full bg-temsci-purple hover:bg-temsci-purple/90 text-white">
        Solicitar Demonstração
      </Button>
    </form>
  );
}
