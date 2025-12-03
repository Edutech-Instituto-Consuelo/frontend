import simbolo from "@/assets/simbolo_black.svg";

export function RegisterHeader() {
  return (
    <div className="grid gap-2 text-center">
      <div className="flex justify-center pb-4">
        <img src={simbolo} alt="Logo" className="h-12 w-auto" />
      </div>

      <h2 className="text-base leading-6 text-neutral-900">Crie sua conta</h2>

      <p className="text-sm text-neutral-600">
        Comece sua jornada de aprendizado hoje!
      </p>
    </div>
  );
}