import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

// Usei o tailwind-variants pra organizar as variações de estilo de forma limpa
const buttonStyles = tv({
  base: "py-3 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-50 disabled:cursor-not-allowed",
  
  variants: {
    variant: {
      primary: "bg-black text-white hover:bg-gray-800 border border-transparent",
      secondary: "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50",
      accent: "bg-blue-600 text-white hover:bg-blue-700 border border-transparent",
    },
    fullWidth: {
      true: "w-full",
      false: "w-auto",
    },
  },
  
  defaultVariants: {
    variant: "primary",
    fullWidth: false,
  },
});

// Tipagem pro TypeScript reconhecer as variantes no autocomplete
type ButtonSchema = VariantProps<typeof buttonStyles>;
interface ButtonProps extends ComponentProps<'button'>, ButtonSchema {}

export function Button({ className, variant, fullWidth, ...props }: ButtonProps) {
  return (
    <button 
      className={buttonStyles({ variant, fullWidth, className })} 
      {...props} 
    >
      {props.children}
    </button>
  );
}