import { Link } from "react-router-dom";

export function LoginLink() {
  return (
    <p className="text-center text-sm text-gray-600">
      Já possui conta?{" "}
      <Link 
        to="/login" 
        className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
      >
        Entrar
      </Link>
    </p>
  );
}