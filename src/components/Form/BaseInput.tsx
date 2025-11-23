import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const styles = tv({
    base: `base-input placeholder`,
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