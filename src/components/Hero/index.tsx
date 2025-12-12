import { Button } from '@/components/Button';

export default function Hero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
      
      {/* Imagem de fundo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80)'
        }}
      />
      
      {/* Overlay escuro para melhor legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
      
      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-4 md:px-8 text-center">
        
        {/* Título principal (h1) */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
          Transforme sua Carreira com os<br className="hidden md:block" />
          Melhores Cursos Online
        </h1>
        
        {/* Subtítulo descritivo */}
        <p className="text-base md:text-lg lg:text-xl text-white/90 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
          Aprenda com especialistas do mercado, no seu próprio ritmo.
          Mais de 10.000 cursos disponíveis em tecnologia, design, negócios e muito mais.
        </p>
        
        {/* Botão de Call-to-Action */}
         <Button 
          variant="accent" 
          className="text-lg px-8 py-4 shadow-lg hover:scale-105 mx-auto"
        >
          Quero me Inscrever
        </Button>

        {/* Informações extras (opcional) */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12 text-white/80 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>Certificado incluso</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>Acesso vitalício</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>Suporte 24/7</span>
          </div>
        </div>
      </div>
      
    </section>
  );
}