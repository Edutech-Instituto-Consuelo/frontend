import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";

const styles = tv({
    base: "text-sm text-[#0A0A0A] font-normal"
});

export function FieldLabel(props: ComponentProps<"label">) {
    return (
        <label { ...{
            ...props,
            className: styles(),
        } } />
    );
}