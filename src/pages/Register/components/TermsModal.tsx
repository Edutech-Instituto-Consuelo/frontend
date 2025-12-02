import { Button } from "../../../components/Button";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
};

export function TermsModal({ isOpen, onClose, onAccept }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 space-y-4 relative">
        <h3 className="text-xl font-bold text-gray-900">Termos e Política</h3>
        <div className="h-64 overflow-y-auto text-sm text-gray-600 space-y-4 pr-2 border rounded-md p-4 text-justify">
          <p><strong>1. Termos de Uso</strong><br />Lorem ipsum dolor sit amet...</p>
          <p><strong>2. Política de Privacidade</strong><br />Consectetur adipiscing elit...</p>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={onClose} type="button">Fechar</Button>
          <Button onClick={onAccept} type="button">Li e Concordo</Button>
        </div>
      </div>
    </div>
  );
}