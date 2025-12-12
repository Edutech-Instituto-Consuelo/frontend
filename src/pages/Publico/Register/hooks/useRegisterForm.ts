import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Importando o schema e o tipo que define a estrutura do formulário
import { registerSchema, type RegisterFormData } from "../schemas/registerSchema";

// Re-exportando o tipo para que o componente visual (index.tsx) possa usar se precisar
export type { RegisterFormData };

export function useRegisterForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [showTeacherModal, setShowTeacherModal] = useState(false);

  // Configuração do React Hook Form usando o schema importado
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: "student",
      acceptedTerms: false,
    },
  });

  // Função de envio do formulário
  const onSubmit = (data: RegisterFormData) => {
    console.log("Dados do formulário válidos:", data);
    
    // Lógica de decisão: Professor -> Modal de aviso | Aluno -> Sucesso direto
    if (data.role === "teacher") {
      setShowTeacherModal(true);
    } else {
      setIsSuccess(true);
    }
  };

  // Retorna tudo que a tela precisa para funcionar
  return {
    form,
    isSuccess,
    showTeacherModal,
    setShowTeacherModal,
    onSubmit: form.handleSubmit(onSubmit), 
  };
}