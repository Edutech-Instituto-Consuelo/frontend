import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";

const styles = tv({
    slots: {
        label: "text-sm text-[#0A0A0A] font-normal cursor-pointer",
        span: "text-red-500 ml-1",
    },
});

interface IPropsLabel extends ComponentProps<"label"> {
    required?: boolean;
}

export function Label(props: IPropsLabel) {
    return (
        <label { ...{
            ...props,
            className: styles().label({ className: props.className }),
        } }>
            { props.children }
            { props.required && (<span className={styles().span()}>*</span> )}
        </label>
    );
}