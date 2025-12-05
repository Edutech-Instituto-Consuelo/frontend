import { useLocation } from "react-router-dom";

export default function Login() {
    const from = useLocation().state?.from || "/";
    // TODO usar o 'from' para redirecionar após o login bem-sucedido

    return (
        <div>
            <h1>Login</h1>
        </div>
    );
}