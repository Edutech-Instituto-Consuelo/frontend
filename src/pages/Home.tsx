import cursosPopulares from "@/data/cursosPopulares";
import { Card } from "@/components/Card/index";

export default function Home() {
  return (
    <div>
      <section className="py-12 px-4 md:px-8">
        <h2 className="text-base font-normal mb-6 text-dark-black">
          🔥 Cursos Populares
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {cursosPopulares.map((curso) => (
            <Card key={curso.id}>
              <Card.Image src={curso.imagem} alt={curso.titulo} />
              <Card.Body>
                <Card.Title>{curso.titulo}</Card.Title>
                <Card.Author>{curso.instrutor}</Card.Author>
                <Card.Rating rating={curso.avaliacao} reviews={curso.numeroAvaliacoes} />
                <Card.Price value={curso.preco} />
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}