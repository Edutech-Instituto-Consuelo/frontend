import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// 1. SCHEMA DE VALIDAÇÃO (ZOD)
const registerSchema = z.object({
  name: z.string().min(1, "Campo obrigatório").refine((name) => name.trim().split(" ").length >= 2, "Digite seu nome completo (Nome e Sobrenome)"),
  email: z.string().min(1, "Campo obrigatório").email("Formato de email inválido"),
  password: z.string()
    .min(6, "Mínimo 6 caracteres")
    .regex(/[a-zA-Z]/, "Pelo menos uma letra")
    .regex(/\d/, "Pelo menos um número")
    .regex(/[!@#$%^&*(),.?":{}|<>]/, "Pelo menos um caractere especial"),
  confirmPassword: z.string().min(1, "Confirmação obrigatória"),
  role: z.enum(["student", "teacher"]),
  acceptedTerms: z.boolean().refine((val) => val === true, {
    message: "Você precisa aceitar os termos de uso",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "As senhas não coincidem",
});

export type RegisterFormData = z.infer<typeof registerSchema>;

export function useRegisterForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [showTeacherModal, setShowTeacherModal] = useState(false);

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: "student",
      acceptedTerms: false,
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log("Dados do formulário:", data);
    
    if (data.role === "teacher") {
      setShowTeacherModal(true);
    } else {
      setIsSuccess(true);
    }
  };

  return {
    form,
    isSuccess,
    showTeacherModal,
    setShowTeacherModal,
    onSubmit: form.handleSubmit(onSubmit),
  };
}