import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const cardHeaderStyles = tv({
  base: "px-4 py-4 space-y-1",
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