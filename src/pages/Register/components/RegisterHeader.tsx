import simbolo from "@/assets/simbolo_black.svg";

export function RegisterHeader() {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        <img src={simbolo} alt="Logo" className="h-12 w-auto" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900">Crie sua conta</h2>
      <p className="mt-2 text-sm text-gray-600">
        Comece sua jornada de aprendizado hoje!
      </p>
    </div>
  );
}