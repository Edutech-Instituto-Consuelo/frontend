import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const cardStyles = tv({
  base: "bg-white border border-solid border-black/10 rounded-lg hover:shadow-[2px_8px_6px_0px_#00000040] overflow-hidden cursor-pointer",
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