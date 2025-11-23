import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const styles = tv({
    base: `bg-[#F3F3F5] py-1 px-3 h-9 w-full rounded-lg placeholder:text-sm placeholder:text-[#717182] placeholder:font-normal cursor-pointer`,
    variants: {
        typeInput: {
            radio: "h-3.5",
            checkbox: "h-3.5",
        },
    },
});

interface IProps extends ComponentProps<"input">, VariantProps<typeof styles> {
    id: string;
}

export function BaseInput(props: IProps) {
    return (
        <input { ...{
            ...props,
            name: props.name ?? props.id,
            className: styles({ typeInput: props.type as IProps["typeInput"] }),
        } } />
    );
}