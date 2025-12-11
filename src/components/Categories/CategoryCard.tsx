import type { ComponentProps } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const category = tv({
  slots: {
    root: 'bg-white border border-overlay border-solid flex flex-col gap-3 items-center px-2 py-[25px] rounded-[10px] shrink-0 w-[188.667px] hover:shadow-[2px_8px_6px_0px_var(--color-overlay)] hover:border-2 hover:border-blue-500  transition-all duration-300 hover:-translate-y-1 cursor-pointer',
    icon: 'shrink-0 w-10 h-10',
    img: 'block max-w-none w-full h-full',
    labelWrap: 'h-[20px] shrink-0 w-full',
    label: "black-text text-sm",
  },
});

const { root, icon, img, labelWrap, label } = category();

type CategorySchema = VariantProps<typeof category>;

interface CategoryCardProps extends ComponentProps<'button'>, CategorySchema {
  label: string;
  src: string;
}

export function CategoryCard({ label: ariaLabel, src, className, ...props }: CategoryCardProps) {
  return (
    <button className={root({ className })} {...props} aria-label={ariaLabel}>
      <div className={icon()}>
        <img src={src} alt={ariaLabel} className={img()} />
      </div>

      <div className={labelWrap()}>
        <p className={label()}>{ariaLabel}</p>
      </div>
    </button>
  );
}

export default CategoryCard;
