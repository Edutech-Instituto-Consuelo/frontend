import { Card as CardBase } from './Card';
import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { CardImage } from './CardImage';
import { CardProgress } from './CardProgress';

export const Card = Object.assign(CardBase, {
  Header: CardHeader,
  Body: CardBody,
  Image: CardImage,
  Progress: CardProgress,
});