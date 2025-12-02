import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const cardBodyStyles = tv({
  base: "px-4 pt-4 pb-6 space-y-2",
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