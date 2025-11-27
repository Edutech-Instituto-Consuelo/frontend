import React from 'react';
import type { CardComponentProps } from './Card.types';

interface CardProgressProps extends CardComponentProps {
  value: number;
  progressText?: string; 
}

const CardProgress: React.FC<CardProgressProps> = ({ 
  value, 
  progressText, 
  children, 
  className = '' 
}) => {
  
  const baseClasses = 'px-[14px] pb-[14px] pt-2';
  
  const safeValue = Math.min(100, Math.max(0, value));

  const progressColor = '#030213';
  const progressBgColor = '--color-off-white-bg';

  return (
    <div className={`${baseClasses} ${className}`}>
        
        <div className="flex justify-between items-center text-sm mb-2">
            <span className="text-dark-gray">Progresso</span>
            
            <span className="font-semibold text-blue">
                {progressText || `${safeValue}% Completo`}
            </span> 
        </div>

        <div className={`h-2 rounded-full bg-[var(${progressBgColor})]`}>
            <div 
                className="h-full rounded-full" 
                style={{ 
                    width: `${safeValue}%`,
                    backgroundColor: progressColor 
                }}
            ></div>
        </div>
        
        {children} 
    </div>
  );
};

export default CardProgress;