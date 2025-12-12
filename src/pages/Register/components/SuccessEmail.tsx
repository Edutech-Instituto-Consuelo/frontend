import { Link, useLocation } from "react-router-dom";
import { Card } from "@/components/Card";

export function SuccessEmail() {
    const { state } = useLocation();
    const email: string = state?.email || "seu@email.com";

    return (
        <main className="flex min-h-screen w-full justify-center items-center bg-neutral-25">
            <Card className="flex flex-col items-center w-full max-w-md bg-white border border-overlay rounded-2xl p-10">

                <img
                    src="/src/assets/success.svg"
                    alt="Ícone de sucesso"
                    className="h-14 mb-6"
                    loading="lazy"
                />

                <p className="black-text text-center text-lg mb-1">
                    Cheque seu email
                </p>

                <p className="text text-center mb-6">
                    Enviamos o link de recuperação para <br />
                    <span className="font-semibold text-neutral-900">{email}</span>
                </p>

                <Link
                    to="/login"
                    className="mt-2 bg-neutral-950 text-white px-6 py-3 rounded-xl text-sm"
                >
                    Voltar para Entrar
                </Link>

            </Card>
        </main>
    );
}
