import { api, catchCustom } from "@/services/api";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Esse hook contém a estrutura lógica da pagina de login.
 * 
 * Para testar, chame esse hook dentro do componente de Login.
 * 
 * A versão final deve substituir os valores fixos do corpo da requisição pelos
 * valores obtidos do formulário de login e utilizar a chamada ao endpoint "/auth/me".
 */

interface IUserStorage {
    nome: string;
    tipo_usuario: string;
}

export async function useLogin() {
    // TODO usar o 'from' para redirecionar após o login bem-sucedido
    const from = useLocation().state?.from;
    const navigate = useNavigate();

    //! substituir pelos dados do formulário de login
    const body = {
        email: "teste@teste.teste",
        senha: "123qwe!"
    };

    try {
        const responseLogin = await api.post<typeof body>({ url: '/auth/login', body, token: ''});
        //! DESCOMENTAR REQUISICAO ABAIXO E RETIRAR O TIPO 'ANY' DEPOIS QUE O BACKEND ESTIVER PRONTO
        const responseUser: any = {data:null} //await api.get({ url: '/auth/me', token: ''});
    
        let user: IUserStorage = responseUser?.data;
        let token = responseLogin?.data?.access_token;
    
        //! EXCLUSIVAMENTE PARA TESTES, REMOVER DEPOIS
        if (!user) {
            user = {
                nome: "Luiz",
                tipo_usuario: "instrutor",
            };
        }
        if (!token) {
            token = responseLogin?.access_token
        }
    
        console.log(user, token);
    
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
    
        //* Redireciona o usuário para a página anterior ao login ou para a dashboard conforme o tipo de usuário
        navigate(from || "/"+user.tipo_usuario, { replace: true });
    } catch (err) {
        catchCustom(err);
    }
}

export function useLogout() {
  const navigate = useNavigate();

  localStorage.removeItem('token');
  localStorage.removeItem('user');

  navigate('/', { replace: true });
}