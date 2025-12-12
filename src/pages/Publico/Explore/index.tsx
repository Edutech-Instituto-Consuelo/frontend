import { CURSOS_LISTA } from "./mocks"; 

// todos os componentes importados
import CoursesCount from "./components/CoursesCount";
import CoursesGrid from "./components/CoursesGrid";
import EmptyState from "./components/EmptyState";
import { BaseInput } from "@/components/Form";

export default function Explore() {
  const hasCourses = CURSOS_LISTA.length > 0;

  return (
    <div className="grid md:grid-cols-[25rem_1fr] gap-8 w-full mx-auto py-8 px-2 xs:px-16">
      <form className="inline-flex gap-4 col-span-full w-1/2">
        <BaseInput id="buscar" placeholder="Buscar cursos..." />
      </form>

      <section className="w-full">
      </section>

      <div>
        { hasCourses ? (
          <>
            <CoursesCount count={CURSOS_LISTA.length} />
            
            <CoursesGrid courses={CURSOS_LISTA} />
          </>
        ) : (
        <EmptyState />
        ) }
      </div>
    </div>
  );
}