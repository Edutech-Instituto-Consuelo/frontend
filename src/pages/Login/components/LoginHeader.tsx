import simbolo from "../../../assets/simbolo_black.svg";

export function LoginHeader() {
  return (
    <div className="text-center space-y-2">
      <div className="flex justify-center mb-6">
        <img src={simbolo} alt="Logo" className="h-16 w-auto" />
      </div>
      <h2 className="text-2xl font-bold text-neutral-900">Bem-vindo(a) de volta!</h2>
      <p className="text-sm font-normal text-neutral-500">
        Entre para continuar aprendendo!
      </p>
    </div>
  );
}