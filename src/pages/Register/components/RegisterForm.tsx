import type { UseFormReturn } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { Input } from "@/components/Form/Input";
import { PasswordStrength } from "./PasswordStrength";
import type { RegisterFormData } from "../hooks/useRegisterForm";

interface RegisterFormProps {
  form: UseFormReturn<RegisterFormData>;
  onSubmit: () => void;
  onOpenTerms: () => void;
}

export function RegisterForm({ form, onSubmit, onOpenTerms }: RegisterFormProps) {
  const navigate = useNavigate();
  const { register, watch, formState: { errors } } = form;
  
  const passwordValue = watch("password") || "";
  
  // Cast seguro para erros
  const formErrors = errors as unknown as Record<string, Record<string, string>>;

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <Input
        id="name"
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        {...register("name")}
        errors={formErrors}
      />

      <Input
        id="email"
        type="email"
        label="Email"
        placeholder="seu@email.com"
        {...register("email")}
        errors={formErrors}
      />

      <div>
        <Input
          id="password"
          type="password"
          label="Senha"
          placeholder="••••••••"
          {...register("password")}
          errors={formErrors}
        />
        <PasswordStrength password={passwordValue} />
      </div>

      <Input
        id="confirmPassword"
        type="password"
        label="Confirmar Senha"
        placeholder="••••••••"
        {...register("confirmPassword")}
        errors={formErrors}
      />

      <div className="space-y-3">
        <p className="text-sm font-medium text-gray-700">Eu sou...</p>
        <div className="flex flex-col gap-3">
          <div className="flex items-center">
            <Input
              id="role-student"
              type="radio"
              label="Estudante"
              value="student"
              {...register("role")}
            />
          </div>
          <div className="flex items-center">
            <Input
              id="role-teacher"
              type="radio"
              label="Professor"
              value="teacher"
              {...register("role")}
            />
          </div>
        </div>
      </div>

      <div className="flex items-start gap-2 pt-2">
        <input
          type="checkbox"
          id="acceptedTerms"
          className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
          {...register("acceptedTerms")}
        />
        <label htmlFor="acceptedTerms" className="text-sm text-gray-600 cursor-pointer">
          Li e concordo com os{" "}
          <button
            type="button"
            onClick={onOpenTerms}
            className="text-blue-600 hover:underline font-medium"
          >
            Termos de Uso
          </button>{" "}
          e Política de Privacidade.
        </label>
      </div>
      {errors.acceptedTerms && (
        <p className="text-xs text-red-500 mt-1">{errors.acceptedTerms.message}</p>
      )}

      <div className="space-y-3 pt-2">
        <Button fullWidth type="submit">Criar Conta</Button>
        <Button fullWidth variant="secondary" type="button" onClick={() => navigate("/")}>
          Voltar
        </Button>
      </div>
    </form>
  );
}