import { Link } from "react-router-dom";
import { Button } from "../../../components/Button";

export function LoginFooter() {
  return (
    <div className="space-y-3">
      <Link to="/" className="block">
        <Button fullWidth variant="secondary" type="button">
          Voltar
        </Button>
      </Link>

      <p className="text-center text-sm text-neutral-500">
        Não possui conta?{" "}
        <Link to="/register" className="link font-medium">
          Criar conta
        </Link>
      </p>
    </div>
  );
}