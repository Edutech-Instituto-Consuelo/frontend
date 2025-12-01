import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const cardBodyStyles = tv({
  base: "px-4 pt-4 space-y-1",
});

type CardBodySchema = VariantProps<typeof cardBodyStyles>;

interface CardBodyProps extends ComponentProps<'div'>, CardBodySchema {}

export function CardBody({ className, children, ...props }: CardBodyProps) {
  return (
    <div className={cardBodyStyles({ className })} {...props}>
      {children}
    </div>
  );
}