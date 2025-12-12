import { Button } from '@/components/Button';

export default function Hero() {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex items-center overflow-hidden">
      
      {/* Imagem de fundo */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat bg-[center_20%] sm:bg-[center_40%] md:bg-center"
        style={{
            backgroundImage: 'url(/fotoheader.jpg)'
        }}
        />
 
      
      {/* Overlay suave para legibilidade */}
      <div className="absolute inset-0 bg-white/70" />
      
      {/* Conteúdo - Alinhado à esquerda */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="max-w-xl">
          
          {/* Título com palavra em azul */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-3 sm:mb-4 leading-tight">
            Domine as<br />
            Habilidades do<br />
            <span className="text-blue-600">Futuro</span>
          </h1>
          
          {/* Subtítulo */}
          <p className="text-sm sm:text-base md:text-lg text-neutral-700 mb-6 sm:mb-8 leading-relaxed">
            Impulsione sua carreira e transforme seu potencial em resultados reais. 
            Cursos práticos, instrutores especializados e certificação reconhecida
          </p>
        
          {/* Botão de Call-to-Action */}
          <Button 
            variant="accent" 
            className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-lg hover:scale-105"
          >
            Quero me Inscrever
          </Button>

        </div>
      </div>
      
    </section>
  );
}