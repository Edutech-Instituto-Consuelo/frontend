import React from 'react';
import type { CardComponentProps } from './Card.types';

const CardImage: React.FC<CardComponentProps> = ({ children, className = '' }) => {
  
  const baseClasses = 'w-full h-[224px] rounded-t-[8px] overflow-hidden object-cover';
  
  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
};

export default CardImage;