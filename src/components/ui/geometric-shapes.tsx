
import { useEffect, useState } from "react";

export function GeometricShapes({ className }: { className?: string }) {
  const [shapes, setShapes] = useState<JSX.Element[]>([]);
  
  useEffect(() => {
    const shapesArray: JSX.Element[] = [];
    const shapeTypes = ["circle", "square", "triangle"];
    const colors = ["#8B5CF6", "#0EA5E9", "#9B87F5", "#7E69AB"];
    
    // Generate 8-15 random shapes
    const numShapes = Math.floor(Math.random() * 8) + 8;
    
    for (let i = 0; i < numShapes; i++) {
      const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.floor(Math.random() * 60) + 10; // 10px to 70px
      const left = Math.floor(Math.random() * 100); // 0% to 100%
      const top = Math.floor(Math.random() * 100); // 0% to 100%
      const opacity = (Math.random() * 0.5) + 0.1; // 0.1 to 0.6
      const animationDelay = `${Math.random() * 5}s`;
      const animationDuration = `${Math.random() * 10 + 10}s`;
      
      let shape;
      if (shapeType === "circle") {
        shape = (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              left: `${left}%`,
              top: `${top}%`,
              opacity: opacity,
              animationDelay,
              animationDuration
            }}
          />
        );
      } else if (shapeType === "square") {
        shape = (
          <div
            key={i}
            className="absolute rotate-45 animate-float"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              left: `${left}%`,
              top: `${top}%`,
              opacity: opacity,
              animationDelay,
              animationDuration
            }}
          />
        );
      } else {
        // Triangle
        shape = (
          <div
            key={i}
            className="absolute w-0 h-0 animate-float"
            style={{
              borderLeft: `${size/2}px solid transparent`,
              borderRight: `${size/2}px solid transparent`,
              borderBottom: `${size}px solid ${color}`,
              left: `${left}%`,
              top: `${top}%`,
              opacity: opacity,
              animationDelay,
              animationDuration
            }}
          />
        );
      }
      
      shapesArray.push(shape);
    }
    
    setShapes(shapesArray);
  }, []);
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {shapes}
    </div>
  );
}
