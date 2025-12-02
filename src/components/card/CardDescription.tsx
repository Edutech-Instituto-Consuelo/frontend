import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";
import { Star } from 'lucide-react'; 

// card para instrutor do curso
const authorStyles = tv({
  base: "text-sm text-zinc-500",
});

export function CardAuthor({ className, ...props }: ComponentProps<'p'>) {
  return <p className={authorStyles({ className })} {...props} />;
}

// card para avaliação do curso
const ratingStyles = tv({
  base: "flex items-center gap-1 text-sm",
});

interface CardRatingProps extends ComponentProps<'div'> {
  rating: number;  
  reviews: number; 
}

export function CardRating({ rating, reviews, className, ...props }: CardRatingProps) {
  return (
    <div className={ratingStyles({ className })} {...props}>
      <Star size={16} className="text-yellow-500 fill-yellow-500" />
      
      <span className="font-bold text-dark-black">{rating}</span>
      <span className="text-zinc-400">({reviews})</span>
    </div>
  );
}

// card para preço do curso
const priceStyles = tv({
  base: "font-bold text-lg text-blue-600 mt-auto",
});

interface CardPriceProps extends ComponentProps<'span'> {
  value: number; 
}

export function CardPrice({ value, className, ...props }: CardPriceProps) {
  
  const valorFormatado = !value ? "Grátis" : new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return (
    <span className={priceStyles({ className })} {...props}>
      {valorFormatado}
    </span>
  );
}