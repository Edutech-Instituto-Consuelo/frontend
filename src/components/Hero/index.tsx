import { Button } from '@/components/Button';
import imgHeader from "@/assets/fotoheader.jpg";

export default function Hero() {
  return (
    <section className="bg-linear-to-b from-blue-100 to-white relative pt-28.5 pb-8 xs:pb-28.5 w-full h-fit overflow-hidden">

      {/* Imagem de fundo */}
      <img 
        className="hidden lg:block absolute inset-0 bg-cover bg-no-repeat bg-position-[center_20%] sm:bg-position-[center_40%] md:bg-center"
        src={imgHeader}
        alt="Imagem de fundo do Home"
      />

      {/* Overlay suave para legibilidade */}
      <div className="absolute inset-0 lg:bg-white/70" />

      {/* Conteúdo - Alinhado à esquerda */}
      <div className="grid gap-6 content-center justify-center md:justify-start md:pl-[114.5px] relative px-4 w-full z-10">
        {/* Título com palavra em azul */}
        <h1 className="text-[42px] font-bold text-neutral-900 leading-none">
          Domine as<br />
          Habilidades do<br />
          <span className="text-blue">Futuro</span>
        </h1>

        {/* Subtítulo */}
        <p className="text text-[17.5px] leading-7 max-w-[404px]">
          Impulsione sua carreira e transforme seu potencial em resultados reais. 
          Cursos práticos, instrutores especializados e certificação reconhecida
        </p>

        {/* Botão de Call-to-Action */}
        <Button variant="accent" className='w-fit'>Quero me Inscrever</Button>
      </div>
    </section>
  );
}