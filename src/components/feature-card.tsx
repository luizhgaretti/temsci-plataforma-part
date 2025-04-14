
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function FeatureCard({ title, description, icon: Icon, className }: FeatureCardProps) {
  return (
    <div className={cn(
      "p-6 rounded-lg border border-border bg-white shadow-sm transition-all hover:shadow-md hover:border-temsci-purple/30",
      className
    )}>
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-temsci-purple-light text-temsci-purple">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-temsci-black">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
