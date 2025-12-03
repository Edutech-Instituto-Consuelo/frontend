import { Button } from "@/components/Button";

interface TeacherModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TeacherModal({ isOpen, onClose }: TeacherModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 text-center grid gap-y-4">
        
        {/* Ícone de Relógio/Espera */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h3 className="text-xl black-text">
          Solicitação Enviada!
        </h3>
        
        <p className="text text-base">
          Como você selecionou o perfil de <strong>Professor</strong>, sua conta precisa passar por uma aprovação da coordenação.
        </p>
        
        <div className="p-4 rounded-lg text text-base text-left">
          <p className="font-bold mb-1">Próximos passos:</p>
          <ul className="list-disc pl-4 grid gap-y-1">
            <li>Aguarde o e-mail de confirmação.</li>
            <li>Nossa equipe validará seus dados em até 24h.</li>
          </ul>
        </div>

        <div className="pt-2">
          <Button fullWidth onClick={onClose}>
            Entendi, vou aguardar
          </Button>
        </div>
      </div>
    </div>
  );
}