import React from 'react';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardImage from './CardImage';
import CardProgress from './CardProgress'; 

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface CardCompoundProps extends React.FC<CardProps> {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Image: typeof CardImage;
  Progress: typeof CardProgress;
}

const CardBase: React.FC<CardProps> = ({ children, className = '' }) => {
  
  const baseClasses = 'bg-white rounded-[14px] shadow-lg overflow-hidden';

  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
};

const Card = CardBase as CardCompoundProps;
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Image = CardImage;
Card.Progress = CardProgress;

export default Card;