import { CourseHeader } from "./components/CourseHeader";


export default function CourseDetails() {
    const cursoTeste = {
        title: "Bootcamp Fullstack Java + React",
        rating: 4.8,
        studentCount: 1240,
        duration: 2700,
        difficulty: "Intermediário",
        price: 199.90
    };

    return (
        <div className="w-full">
            <CourseHeader 
                title={cursoTeste.title}
                rating={cursoTeste.rating}
                studentCount={cursoTeste.studentCount}
                duration={cursoTeste.duration}
                difficulty={cursoTeste.difficulty}
                price={cursoTeste.price}
            />
            {/* Espaço para as futuras abas */}
            <div className="container mx-auto px-4 mt-8">
            </div>
        </div>
    );
}