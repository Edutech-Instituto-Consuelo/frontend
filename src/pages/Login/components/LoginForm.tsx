import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Form/Input";
import { loginSchema, type LoginFormData } from "../schemas/loginSchema";

export function LoginForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log("Login enviado:", data);
    // Isso aqui finge que o Backend respondeu "OK" depois de 1 segundo
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate("/");
  };

  const formErrors = errors as unknown as Record<string, Record<string, string>>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Input
        id="email"
        type="email"
        label="Email"
        placeholder="seu@email.com"
        autoFocus
        autoComplete="email"
        {...register("email")}
        errors={formErrors}
      />

      <div className="space-y-1">
        <div className="flex justify-between items-baseline mb-1">
          <label htmlFor="password" className="text-sm font-medium text-neutral-900 cursor-pointer">
            Senha
          </label>
          <Link to="/forgot-password" className="link text-sm">
            Esqueceu sua senha?
          </Link>
        </div>
        
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          autoComplete="current-password"
          {...register("password")}
          errors={formErrors}
          label="" 
        />
      </div>

      <div className="pt-2 flex flex-col gap-3">
        <Button fullWidth type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Entrando..." : "Entrar"}
        </Button>
      </div>
    </form>
  );
}