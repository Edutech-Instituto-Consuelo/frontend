import simbolo from "@/assets/simbolo_black.svg";

export function RegisterHeader() {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        <img src={simbolo} alt="Logo" className="h-16 w-auto" />
      </div>
      <h2 className="text-2xl font-extrabold text-neutral-900">Crie sua conta</h2>
      <p className="text-sm font-medium text-neutral-500">
        Comece sua jornada de aprendizado hoje!
      </p>
    </div>
  );
}