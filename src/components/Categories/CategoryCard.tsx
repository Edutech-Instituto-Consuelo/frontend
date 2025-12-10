import type { ComponentProps } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const category = tv({
  slots: {
    root: 'bg-white border border-[rgba(0,0,0,0.1)] border-solid flex flex-col gap-3 items-center px-2 py-[25px] relative rounded-[10px] shrink-0 w-[188.667px] hover:shadow-[2px_8px_6px_0px_var(--color-overlay)] hover:border-blue-500 transition',
    icon: 'relative shrink-0 w-[40px] h-[40px]',
    img: 'block max-w-none w-full h-full',
    labelWrap: 'h-[20px] relative shrink-0 w-full',
    label: "absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-1/2 text-[14px] text-center text-neutral-950 top-[-0.5px] -translate-x-1/2",
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
