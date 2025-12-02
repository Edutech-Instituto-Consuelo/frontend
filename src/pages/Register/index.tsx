import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterHeader } from "./components/RegisterHeader";

// 1. IMPORTANDO A LÓGICA (HOOK)
import { useRegisterForm } from "./hooks/useRegisterForm";

// 2. IMPORTANDO OS COMPONENTES VISUAIS
import { RegisterForm } from "./components/RegisterForm";
import { SuccessMessage } from "./components/SuccessMessage";
import { TermsModal } from "./components/TermsModal";
import { TeacherModal } from "./components/TeacherModal";
import { LoginLink } from "./components/LoginLink";

export default function Register() {
  const navigate = useNavigate();

  // Estado local apenas para o Modal de Termos
  const [showTermsModal, setShowTermsModal] = useState(false);

  //Hook personalizado para trazer a lógica
  const {
    form,
    isSuccess,
    showTeacherModal,
    setShowTeacherModal,
    onSubmit
  } = useRegisterForm();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-6 md:space-y-8">

        {/* DECISÃO VISUAL: Mostra Sucesso ou Formulário */}
        {isSuccess ? (
          <SuccessMessage />
        ) : (
          <>
            <RegisterHeader />

            {/* FORMULÁRIO */}
            <RegisterForm
              form={form}
              onSubmit={onSubmit}
              onOpenTerms={() => setShowTermsModal(true)}
            />

            <LoginLink />
          </>
        )}
      </div>

      {/*  MODAIS GLOBAIS DA PÁGINA */}

      <TermsModal
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
        onAccept={() => {
            // Atualiza o valor no formulário através do objeto 'form' que veio do hook
            form.setValue("acceptedTerms", true, { shouldValidate: true });
            setShowTermsModal(false);
        }}
      />

      <TeacherModal
        isOpen={showTeacherModal}
        onClose={() => {
          setShowTeacherModal(false);
          navigate("/"); // Redireciona ao fechar o aviso do professor
        }}
      />
    </div>
  );
}