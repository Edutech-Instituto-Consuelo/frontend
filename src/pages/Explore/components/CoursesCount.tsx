interface CoursesCountProps {
  count: number;
}

export default function CoursesCount({ count }: CoursesCountProps) {
  // Se não tiver cursos, a gente não mostra "0 resultados" aqui, 
  // porque o EmptyState já vai cuidar disso visualmente.
  if (count === 0) return null;

  return (
    <div className="mb-6 animate-fade-in">
      <p className="text-sm text-neutral-500">
        Foram encontrados <span className="font-bold text-neutral-900">{count}</span> resultados
      </p>
    </div>
  );
}