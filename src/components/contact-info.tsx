
import { MapPin, Phone, Mail } from "lucide-react";

interface ContactInfoProps {
  address: string;
  phone: string;
  email: string;
}

export function ContactInfo({ address, phone, email }: ContactInfoProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <MapPin className="h-5 w-5 text-temsci-purple mt-1 flex-shrink-0" />
        <p className="text-gray-700">{address}</p>
      </div>
      <div className="flex items-center gap-3">
        <Phone className="h-5 w-5 text-temsci-purple flex-shrink-0" />
        <p className="text-gray-700">{phone}</p>
      </div>
      <div className="flex items-center gap-3">
        <Mail className="h-5 w-5 text-temsci-purple flex-shrink-0" />
        <a href={`mailto:${email}`} className="text-gray-700 hover:text-temsci-purple transition-colors">
          {email}
        </a>
      </div>
    </div>
  );
}
