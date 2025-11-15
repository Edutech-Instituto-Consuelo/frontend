import { tv, type VariantProps } from "tailwind-variants";

const styles = tv({
    base: "bg-white dark:bg-gray-800 shadow-md rounded-lg p-4",
});

interface IProps extends VariantProps<typeof styles> {
    children: React.ReactNode,
    className?: string
}

export function Card({ children, className } : IProps) {
    return (
        <div className={styles({ className })}>{ children }</div>
    );
}