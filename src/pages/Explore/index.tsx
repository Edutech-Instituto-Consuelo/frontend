import { Card } from "../../components/Card"; 
import { Button } from "../../components/Button"; 
import {CURSOS_LISTA}  from "./mocks";
import EmptyState from "./components/EmptyState";
import { Link } from "react-router-dom";

export default function Explore() {
  const hasCourses = CURSOS_LISTA.length > 0;

  return (
    <div className="bg-neutral-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Cabeçalho */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-neutral-900">Explore nossos cursos</h2>
          <p className="text-neutral-500 mt-1">Descubra novas habilidades e impulsione sua carreira.</p>
        </div>

        {/* Lógica de exibição do Grid ou EmptyState */}
        {hasCourses ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CURSOS_LISTA.map((course) => (
              <Link key={course.id} to={`/cursos/${course.id}`} className="group">
                <Card 
                  className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-transparent hover:border-neutral-200"
                >
                  <Card.Image src={course.image} alt={course.title} />
                  <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Author>{course.author}</Card.Author>
                    <Card.Rating rating={course.rating} reviews={course.reviews} />
                    <Card.Price value={course.price} />
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
        
        {hasCourses && (
          <div className="flex justify-center mt-12">
            <Button variant="secondary">Carregar mais cursos</Button>
          </div>
        )}

      </div>
    </div>
  );
}