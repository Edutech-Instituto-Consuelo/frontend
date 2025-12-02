import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const cardHeaderStyles = tv({
  base: "px-1 py-1 space-y-2",
});

type CardHeaderSchema = VariantProps<typeof cardHeaderStyles>;

interface CardHeaderProps extends ComponentProps<'div'>, CardHeaderSchema {}

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div className={cardHeaderStyles({ className })} {...props}>
      {children}
    </div>
  );
}