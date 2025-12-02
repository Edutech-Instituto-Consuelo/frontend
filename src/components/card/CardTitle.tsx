import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";

const cardTitleStyles = tv({
  base: "text-base font-normal text-dark-black",
});

export function CardTitle({ className, ...props }: ComponentProps<'h2'>) {
  return (
    <h2 className={cardTitleStyles({ className })} {...props} />
  );
}