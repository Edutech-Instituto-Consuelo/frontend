import React from 'react';
import type { CardComponentProps } from './Card.types';

const CardHeader: React.FC<CardComponentProps> = ({ children, className = '' }) => {
    const baseClasses = 'px-[14px] py-[14px]';
  
  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
};

export default CardHeader;