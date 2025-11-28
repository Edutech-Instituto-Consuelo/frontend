import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Button } from "../components/Button";
import { Input } from "../components/Form/Input";
import simbolo from "../assets/simbolo_black.svg";

export function Register() {
  const navigate = useNavigate();
  
  // 1. Estados (Memória)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
  });
  
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [isSuccess, setIsSuccess] = useState(false); 
  const [showTermsModal, setShowTermsModal] = useState(false);

  // 2. Funções
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessages([]); 
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Cria uma lista temporária para guardar os erros
    const novosErros: string[] = [];
    // Limpa espaços extras do email antes de validar
    const emailLimpo = formData.email.trim();

    // 1. Validação de Campos Vazios
    // Divide o nome pelos espaços e conta quantas partes tem
    if (formData.name.trim().split(" ").length < 2) {
      novosErros.push("Por favor, digite seu nome completo (Nome e Sobrenome).");
    }

    if (!formData.name || !emailLimpo || !formData.password) {
       novosErros.push("Preencha todos os campos obrigatórios.");
    }

    // Termos de Uso
    if (!acceptedTerms) {
      novosErros.push("Você precisa aceitar os Termos de Uso para continuar.");
    }

    // 2. Validação de Email

    // Verifica se tem ponto depois do @
    if (emailLimpo) {
        if (!emailLimpo.includes("@") || !emailLimpo.split("@")[1].includes(".")) {
            novosErros.push("Email inválido: Faltou o '@' ou o domínio (ex: .com).");
        }
    }

    // 3. Validação de Senha
    if (formData.password) {
        if (formData.password.length < 6) {
            novosErros.push("Senha muito curta (mínimo 6 caracteres).");
        }
        if (!/[a-zA-Z]/.test(formData.password)) {
            novosErros.push("A senha precisa ter pelo menos uma letra.");
        }
        if (!/\d/.test(formData.password)) {
            novosErros.push("A senha precisa ter pelo menos um número.");
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
            novosErros.push("A senha precisa ter um caractere especial (ex: @, #).");
        }
    }

    // 4. Confirmação de Senha
    if (formData.password !== formData.confirmPassword) {
        novosErros.push("As senhas digitadas não coincidem.");
    }

    if (novosErros.length > 0) {
        setErrorMessages(novosErros);
        return;
    }

    // Sucesso! :D
    console.log("Dados válidos:", formData);
    setIsSuccess(true);
  };

// Função para calcular força da senha (0 a 4)
  const calculateStrength = (password: string) => {
    let score = 0;
    if (!password) return 0;

    if (password.length >= 6) score++; // Tem tamanho
    if (/[a-zA-Z]/.test(password)) score++; // Tem letra
    if (/\d/.test(password)) score++; // Tem número
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++; // Tem especial

    return score;
  };

  const strength = calculateStrength(formData.password);

  // Define a cor da barra baseada na força
  const getStrengthColor = () => {
    if (strength <= 1) return "bg-red-500";
    if (strength <= 3) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-6 md:space-y-8">
        
        {/* AQUI COMEÇA A TROCA DE TELA */}
        {isSuccess ? (
          
          // OPÇÃO A: TELA DE SUCESSO (Aparece se isSuccess for true)
          <div className="text-center space-y-6 animate-fade-in">
            <div className="flex justify-center mb-4">
               <img src={simbolo} alt="Logo" className="h-16 w-auto opacity-50" />
            </div>
            
            <h2 className="text-2xl font-bold text-green-600">
              Conta criada com sucesso!
            </h2>
            
            <p className="text-gray-600">
              Seja bem-vindo(a)! Sua conta foi registrada.
            </p>

            <div className="pt-4">
              <Button fullWidth onClick={() => navigate("/login")}>
                Ir para o Login
              </Button>
            </div>
          </div>

        ) : (

            // OPÇÃO B: FORMULÁRIO DE REGISTRO (Aparece se isSuccess for false) 
          <>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <img src={simbolo} alt="Logo" className="h-12 w-auto" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Crie sua conta</h2>
              <p className="mt-2 text-sm text-gray-600">
                Comece sua jornada de aprendizado hoje!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                id="name"
                label="Nome Completo"
                placeholder="Digite seu nome completo"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <Input
                id="email"
                type="email"
                label="Email"
                placeholder="seu@email.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <Input
                id="password"
                type="password"
                label="Senha"
                placeholder="••••••••"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <Input
                id="confirmPassword"
                type="password"
                label="Confirmar Senha"
                placeholder="••••••••"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />

              <div className="space-y-3">
                <p className="text-sm font-medium text-gray-700">Eu sou...</p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center">
                    <Input
                      id="role-student"
                      type="radio"
                      label="Estudante"
                      name="role"
                      value="student"
                      checked={formData.role === "student"}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex items-center">
                    <Input
                      id="role-teacher"
                      type="radio"
                      label="Professor"
                      name="role"
                      value="teacher"
                      checked={formData.role === "teacher"}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

                {/* BARRINHA DE FORÇA DA SENHA */}
              {formData.password && (
                <div className="flex gap-1 h-1 mt-1">
                  {/* Cria 4 barrinhas que acendem conforme o score */}
                  {[...Array(4)].map((_, index) => (
                    <div
                      key={index}
                      className={`h-full flex-1 rounded-full transition-all duration-300 ${
                        index < strength ? getStrengthColor() : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
              )}
              {formData.password && (
                 <p className="text-xs text-gray-500 text-right">
                   Força: {["Fraca", "Média", "Forte", "Muito Forte"][Math.min(strength - 1, 3)] || "Fraca"}
                 </p>
              )}

              {/* CHECKBOX DE TERMOS */}
              <div className="flex items-start gap-2 pt-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                />
                <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                Li e concordo com os{" "}
                <button
                type="button"
                onClick={() => setShowTermsModal(true)}
                className="text-blue-600 hover:underline font-medium"
                >
                Termos de Uso
                </button>{" "}
                e{" "}
                <button
                type="button"
                onClick={() => setShowTermsModal(true)}
                className="text-blue-600 hover:underline font-medium"
                >
                Política de Privacidade
                </button>
                .
                </label>
              </div>  

              {/* MENSAGEM DE ERRO */}
              {errorMessages.length > 0 && (
                <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-200 text-left">
                  <ul className="list-disc pl-5 space-y-1">
                    {errorMessages.map((erro, index) => (
                      <li key={index}>{erro}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-3 pt-2">
                <Button fullWidth type="submit">
                  Criar Conta
                </Button>
                
                <Button fullWidth variant="secondary" type="button" onClick={() => navigate("/")}>
                  Voltar
                </Button>
              </div>
            </form>

            <p className="text-center text-sm text-gray-600">
              Já possui conta?{" "}
              <button 
                onClick={() => navigate("/login")} 
                className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
              >
                Entrar
              </button>
            </p>
          </>
        )}
        
      </div>
      {/* --- MODAL DE TERMOS --- */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 space-y-4 relative">
            
            {/* Título */}
            <h3 className="text-xl font-bold text-gray-900">Termos e Política</h3>
            
            {/* Texto de Rolagem */}
            {/* Texto de Rolagem (Lorem Ipsum) */}
            <div className="h-64 overflow-y-auto text-sm text-gray-600 space-y-4 pr-2 border rounded-md p-4 text-justify">
              <p>
                <strong>1. Termos de Uso</strong><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
              </p>
              <p>
                <strong>2. Política de Privacidade</strong><br />
                Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi.
              </p>
              <p>
                Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi.
              </p>
            </div>

            {/* Botão de Fechar */}
            <div className="flex justify-end gap-2">
              <Button 
                variant="secondary" 
                onClick={() => setShowTermsModal(false)}
              >
                Fechar
              </Button>
              <Button 
                onClick={() => {
                  setAcceptedTerms(true); // Já marca o checkbox pra facilitar
                  setShowTermsModal(false);
                }}
              >
                Li e Concordo
              </Button>
            </div>

          </div>
        </div>
      )}
      {/* ----------------------- */}  
    </div>
  );
}