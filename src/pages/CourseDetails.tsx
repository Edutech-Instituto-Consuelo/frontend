import { CourseHeader } from "../components/CourseHeader";


export default function CourseDetails() {
    const cursoTeste = {
        title: "Desenvolvimento Fullstack com Node.js e React",
        rating: 4.8,
        studentCount: 1240,
        duration: "45h",
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
                Ambiente para futuras abas!
            </div>
        </div>
    );
}