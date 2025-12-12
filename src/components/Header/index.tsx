export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
                 
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#" 
              className="text-neutral-700 hover:text-blue-600 transition-colors font-medium"
            >
              Cursos
            </a>
            <a 
              href="#" 
              className="text-neutral-700 hover:text-blue-600 transition-colors font-medium"
            >
              Categorias
            </a>
            <a 
              href="#" 
              className="text-neutral-700 hover:text-blue-600 transition-colors font-medium"
            >
              Sobre
            </a>
            <a 
              href="#" 
              className="text-neutral-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contato
            </a>
          </nav>

          {/* Botões de ação */}
          <div className="flex items-center gap-3">
            <button className="hidden md:block text-neutral-700 hover:text-blue-600 font-medium px-4 py-2">
              Login
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Cadastrar
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}