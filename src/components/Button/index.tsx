import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const styles = tv({
    base: "py-2 px-4 rounded-lg font-medium",
    variants: {
        background: {
            pink: "bg-pink-500 text-white hover:bg-pink-600",
            blue: "bg-blue-500 text-white hover:bg-blue-600",
        },
        disabled: {
            true: "bg-gray-500 text-white hover:bg-gray-600 opacity-50 cursor-not-allowed",
        }
    }
})

interface IProps extends ComponentProps<'button'>, VariantProps<typeof styles> {}

export function Button(props: IProps) {
    return (
        <button { ...props }>{ props.children }</button>
    );
}