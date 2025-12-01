import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const cardImageStyles = tv({
  base: "w-full h-56 object-cover rounded-t-lg",
});

type CardImageSchema = VariantProps<typeof cardImageStyles>;

interface CardImageProps extends ComponentProps<'img'>, CardImageSchema {
  src: string;
  alt: string;
}

export function CardImage({ className, src, alt, ...props }: CardImageProps) {
  return (
    <img 
      src={src}
      alt={alt}
      className={cardImageStyles({ className })} 
      {...props}
    />
  );
}
