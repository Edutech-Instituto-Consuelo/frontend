import type { UseFormReturn } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { Input } from "@/components/Form/Input";
import { PasswordStrength } from "./PasswordStrength";
import type { RegisterFormData } from "../hooks/useRegisterForm";
import { ContainerInputs, FormField, Label } from "@/components/Form";

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
    <form onSubmit={onSubmit}>
      <ContainerInputs>
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

        <FormField>
          <Label htmlFor="">Eu sou...</Label>
          <Input
            id="role-student"
            type="radio"
            label="Estudante"
            value="student"
            {...register("role")}
          />

          <Input
            id="role-teacher"
            type="radio"
            label="Professor"
            value="teacher"
            {...register("role")}
          />
        </FormField>

        <Input
          type="checkbox"
          id="acceptedTerms"
          label={
            <>
                Li e concordo com os{" "}
                <button
                  type="button"
                  onClick={onOpenTerms}
                  className="text-blue hover:underline cursor-pointer"
                >Termos de Uso</button>{" "}
                e Política de Privacidade.
            </>
          }
          {...register("acceptedTerms")}
        />

        {errors.acceptedTerms && (
          <p className="text-xs text-red mt-1">{errors.acceptedTerms.message}</p>
        )}

        <Button fullWidth type="submit">Criar Conta</Button>

        <Button fullWidth variant="secondary" type="button" onClick={() => navigate("/")}>
          Voltar
        </Button>
      </ContainerInputs>
    </form>
  );
}