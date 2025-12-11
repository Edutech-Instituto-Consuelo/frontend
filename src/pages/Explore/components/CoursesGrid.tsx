import { Link } from "react-router-dom";
import { Card } from "@/components/Card"; 

// Definição da interface Course e CoursesGridProps
interface Course {
  id: number;
  title: string;
  author: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
}

interface CoursesGridProps {
  courses: Course[];
}

export default function CoursesGrid({ courses }: CoursesGridProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 animate-fade-in">
      {courses.map((course) => (
        <Link key={course.id} to={`/cursos/${course.id}`} className="group">
          <Card 
            className="h-full transition-all duration-300 hover:-translate-y-1"
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
  );
}