import { CURSOS_LISTA } from "./mocks"; 

// todos os componentes importados
import CoursesCount from "./components/CoursesCount";
import CoursesGrid from "./components/CoursesGrid";
import EmptyState from "./components/EmptyState";

export default function Explore() {
  const hasCourses = CURSOS_LISTA.length > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-4">
      
      {hasCourses ? (
        <>
          <CoursesCount count={CURSOS_LISTA.length} />
          
          <CoursesGrid courses={CURSOS_LISTA} />
        </>
      ) : (
        <EmptyState />
      )}

    </div>
  );
}