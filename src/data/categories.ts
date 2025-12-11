import programacao from '@/assets/categories/programacao.svg';
import design from '@/assets/categories/design.svg';
import negocios from '@/assets/categories/negocios.svg';
import marketing from '@/assets/categories/marketing.svg';
import fotografia from '@/assets/categories/fotografia.svg';
import musica from '@/assets/categories/musica.svg';

export type Category = {
  id: string;
  key: string;
  label: string;
  img: string;
  href?: string;
};

const categories: Category[] = [
  { id: 'programacao', key: 'programacao', label: 'Programação', img: programacao },
  { id: 'design', key: 'design', label: 'Design', img: design },
  { id: 'negocios', key: 'negocios', label: 'Negocios', img: negocios },
  { id: 'marketing', key: 'marketing', label: 'Marketing', img: marketing },
  { id: 'fotografia', key: 'fotografia', label: 'Fotografia', img: fotografia },
  { id: 'musica', key: 'musica', label: 'Musica', img: musica },
];

export default categories;
