import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const cardStyles = tv({
  base: "bg-white rounded-lg shadow-md overflow-hidden",
});

type CardSchema = VariantProps<typeof cardStyles>;

interface CardProps extends ComponentProps<'div'>, CardSchema {}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div className={cardStyles({ className })} {...props}>
      {children}
    </div>
  );
}