import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { CardImage } from './CardImage';
import { CardProgress } from './CardProgress';

const cardStyles = tv({
  base: "bg-white rounded-lg shadow-md overflow-hidden",
});

type CardSchema = VariantProps<typeof cardStyles>;

interface CardProps extends ComponentProps<'div'>, CardSchema {}

function CardBase({ className, children, ...props }: CardProps) {
  return (
    <div className={cardStyles({ className })} {...props}>
      {children}
    </div>
  );
}

export const Card = Object.assign(CardBase, {
  Header: CardHeader,
  Body: CardBody,
  Image: CardImage,
  Progress: CardProgress,
});