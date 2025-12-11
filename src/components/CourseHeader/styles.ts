// Objeto simples para organizar as classes de deixar limpo
export const styles = {
  container: "w-full bg-gradient-to-r from-[#1C398E] to-[#1447E6] pt-12 pb-16",
  contentWrapper: "container mx-auto px-4 md:px-8",
  
  category: "text-sm font-bold text-blue-100 uppercase tracking-wider mb-4",
  title: "text-3xl md:text-5xl font-bold text-white leading-tight max-w-4xl mb-4",
  description: "text-lg text-blue-100 leading-relaxed max-w-3xl mb-8 font-light",
  
  // Estilos específicos para a área de Tags
  tagsWrapper: "flex flex-wrap gap-y-3 gap-x-6 text-sm font-medium text-white mb-10 items-center",
  tagItem: "flex items-center gap-2",
  starIcon: "text-yellow text-lg",
  icon: "text-blue-100 text-lg",
  
  // Estilos específicos para a área de Preço
  priceWrapper: "flex flex-col sm:flex-row items-start sm:items-center gap-6",
  priceText: "text-4xl font-bold text-white",
  buttonContainer: "w-full sm:w-auto",
  button: "h-12 px-8 text-base"
};