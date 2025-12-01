import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const cardProgressStyles = tv({
  base: "px-4 pb-4 pt-2",
});

type CardProgressSchema = VariantProps<typeof cardProgressStyles>;

interface CardProgressProps extends ComponentProps<'div'>, CardProgressSchema {
  progress: number;
  progressText?: string;
}

export function CardProgress({ 
  className, 
  children, 
  progress, 
  progressText, 
  ...props 
}: CardProgressProps) {
  
  const safeProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className={cardProgressStyles({ className })} {...props}>
      
      <div className="flex justify-between items-center text-sm mb-2">
        <span className="text-dark-gray">Progresso</span>
        
        <span className="font-semibold text-blue">
          {progressText || `${safeProgress}% Completo`}
        </span>
      </div>

      <div className="h-2 rounded-full bg-off-white">
        <div 
          className="h-full rounded-full bg-dark-kblue transition-all duration-300" 
          style={{ width: `${safeProgress}%` }}
        />
      </div>
      
      {children}
    </div>
  );
}