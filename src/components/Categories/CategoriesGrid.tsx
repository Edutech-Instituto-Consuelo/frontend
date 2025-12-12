import CategoryCard from './CategoryCard';
import { tv, type VariantProps } from 'tailwind-variants';
import { TbCategory } from 'react-icons/tb';

const grid = tv({
  slots: {
    root: 'py-12 px-4 md:px-8 mx-auto max-w-[1300px]',
    headingWrap: 'content-stretch flex items-center justify-center px-0 py-0 w-full mb-6',
    heading: "black-text shrink-0 text-[16px] text-center",
    list: 'content-center flex flex-wrap gap-4 items-center justify-center w-full',
  },
});

const { root, headingWrap, heading, list } = grid();

type GridSchema = VariantProps<typeof grid>;

export default function CategoriesGrid(_props?: GridSchema) {
  type Category = {
    id: string;
    label: string;
    icon?: React.ReactNode;
    category: string;
  };

  const categories: Category[] = [
    { id: 'programacao', label: 'Programação', category: 'programacao', icon: <TbCategory /> },
    { id: 'design', label: 'Design', category: 'design', icon: <TbCategory /> },
    { id: 'negocios', label: 'Negocios', category: 'negocios', icon: <TbCategory /> },
    { id: 'marketing', label: 'Marketing', category: 'marketing', icon: <TbCategory /> },
  ];

  return (
    <section className={root()}>
      <div className={headingWrap()}>
        <p className={heading()}>Pesquise por categoria</p>
      </div>

      <div className={list()}>
        {categories.map((cat: typeof categories[0]) => (
          <CategoryCard key={cat.id} label={cat.label} category={cat.category} icon={cat.icon} />
        ))}
      </div>
    </section>
  );
}
