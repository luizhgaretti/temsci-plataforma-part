
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { CSSProperties } from "react";

interface BenefitItemProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

export function BenefitItem({ text, className, style }: BenefitItemProps) {
  return (
    <div className={cn("flex items-start gap-2", className)} style={style}>
      <div className="flex-shrink-0 mt-1">
        <div className="h-5 w-5 rounded-full bg-temsci-purple-light flex items-center justify-center">
          <Check className="h-3 w-3 text-temsci-purple" />
        </div>
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}
