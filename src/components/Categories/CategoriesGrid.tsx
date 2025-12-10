import categories from '@/data/categories';
import CategoryCard from './CategoryCard';
import { tv, type VariantProps } from 'tailwind-variants';

const grid = tv({
  slots: {
    root: 'py-12 px-4 md:px-8 mx-auto max-w-[1300px]',
    headingWrap: 'content-stretch flex items-center justify-center px-0 py-0 relative w-full mb-6',
    heading: "font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-neutral-950",
    list: 'content-center flex flex-wrap gap-[16px] items-center justify-center relative w-full',
  },
});

const { root, headingWrap, heading, list } = grid();

type GridSchema = VariantProps<typeof grid>;

export default function CategoriesGrid(_props?: GridSchema) {
  return (
    <section className={root()}>
      <div className={headingWrap()}>
        <p className={heading()}>Pesquise por categoria</p>
      </div>

      <div className={list()}>
        {categories.map((cat: typeof categories[0]) => (
          <CategoryCard key={cat.id} label={cat.label} src={cat.img} />
        ))}
      </div>
    </section>
  );
}
