
import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  container?: boolean;
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ children, className, container = true, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-16 md:py-20", className)}
        {...props}
      >
        {container ? (
          <div className="container mx-auto px-4 md:px-6">{children}</div>
        ) : (
          children
        )}
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };
