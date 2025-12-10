import { CURSOS_LISTA } from "./mocks"; 

// todos os componentes importados
import ExploreHeader from "./components/ExplorerHeader";
import CoursesCount from "./components/CoursesCount";
import CoursesGrid from "./components/CoursesGrid";
import EmptyState from "./components/EmptyState";
import LoadMoreButton from "./components/LoadMoreButton";

export default function Explore() {
  const hasCourses = CURSOS_LISTA.length > 0;

  return (
    <div className="bg-neutral-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-8">
        
        <ExploreHeader />

        {hasCourses ? (
          <>
            <CoursesCount count={CURSOS_LISTA.length} />
            
            <CoursesGrid courses={CURSOS_LISTA} />
            
            <LoadMoreButton onClick={() => console.log("Carregar mais...")} />
          </>
        ) : (
          <EmptyState />
        )}

      </div>
    </div>
  );
}