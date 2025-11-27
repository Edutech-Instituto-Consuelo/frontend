import React from 'react';
import type { CardComponentProps } from './Card.types';

const CardBody: React.FC<CardComponentProps> = ({ children, className = '' }) => {
    const baseClasses = 'px-[14px] py-[14px] space-y-4';
  
  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
};

export default CardBody;