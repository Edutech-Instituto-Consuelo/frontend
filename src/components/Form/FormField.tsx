import { tv } from "tailwind-variants";

const styles = tv({
    base: "grid auto-rows-auto gap-2",
    variants: {
        inline: {
            true: "grid-cols-[auto_1fr] items-center gap-x-6",
        },
    }
});

export function FormField({ children, className } : { children: React.ReactNode, className?: string }) {
  return (
    <div className={styles({ className })}>
        { children }
    </div>
  );
}