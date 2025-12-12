import cursosPopulares from "@/data/cursosPopulares";
import { Card } from "@/components/Card/index";
import CategoriesGrid from '@/components/Categories/CategoriesGrid';
import { BaseInput } from "@/components/Form";
import { Button } from "@/components/Button";
import { Link, useNavigate } from "react-router-dom";
import Hero from "@/components/Hero";
import Header from "@/components/Header";

export default function Home() {
  const navigate = useNavigate();

  function handleSubmit(event: any) {
    event.preventDefault();
    const busca = event.target.buscar.value;

    navigate(`/explorar?busca=${busca}`);
  }

  return (
    <div className="grid gap-8 pb-12">
      <Header />

      <Hero />

      <form onSubmit={handleSubmit} className="grid xs:inline-flex gap-2 w-full max-w-200 px-4 mx-auto">
        <BaseInput id="buscar" placeholder="O que você gostaria de aprender?" />
        <Button>Buscar</Button>
      </form>

      <section className="px-4 md:px-8 mx-auto w-full max-w-[1300px]">
        <h2 className="text-base font-normal mb-6 text-neutral-900">
          🔥 Cursos Populares
        </h2>

        <div className="responsive gap-6 animate-fade-in">
          {cursosPopulares.map((curso) => (
            <Link to={`/cursos/${curso.id}`} key={curso.id}>
              <Card key={curso.id} className="transition-all duration-300 hover:-translate-y-1">
                <Card.Image src={curso.imagem} alt={curso.titulo} />
                <Card.Body>
                  <Card.Title>{curso.titulo}</Card.Title>
                  <Card.Author>{curso.instrutor}</Card.Author>
                  <Card.Rating rating={curso.avaliacao} reviews={curso.numeroAvaliacoes} />
                  <Card.Price value={curso.preco} />
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
      </section>

        <CategoriesGrid />
    </div>
  )
}