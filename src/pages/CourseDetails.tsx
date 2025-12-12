import { CourseTabs } from "../components/CourseContent";

export default function CourseDetails() {
    return (
        <div className="w-full bg-white min-h-screen pb-20">
            
            {/* --- MOCK DO HEADER --- */}
    
            <div className="w-full h-[400px] bg-blue-700 flex flex-col items-center justify-center text-white gap-2">
                <h1 className="text-3xl font-bold">Header Indisponível</h1>
                <p className="opacity-80">(Estará visível quando juntar as branches)</p>
            </div>

            
            <div className="container mx-auto px-4 mt-8 md:mt-12 max-w-5xl">
                <CourseTabs />
            </div>

        </div>
    );
}