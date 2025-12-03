import { Link } from "react-router-dom";

export function LoginLink() {
  return (
    <p className="text-center text-sm text-neutral-500 pt-2">
      Já possui conta?{" "}
      <Link 
        to="/login" 
        className="link font-medium"
      >
        Entrar
      </Link>
    </p>
  );
}