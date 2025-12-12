import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Input } from "@/components/Form/Input";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function ForgotMyPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/SuccessEmail", { state: { email } });
    };

    return (
        <main className="flex min-h-screen w-full justify-center items-center bg-neutral-25">
            <Card className="flex flex-col items-center w-full max-w-md bg-white border border-overlay rounded-2xl p-10">

                <header className="flex flex-col items-center text-center w-full mb-6">
                    <img
                        src="/src/assets/simbolo_black.svg"
                        alt="Instituto Consuelo Símbolo"
                        className="h-14 mb-4"
                        loading="lazy"
                    />

                    <p className="black-text mb-2 text-lg">Esqueceu sua senha?</p>
                    <p className="text text-center">
                        Escreva seu email e enviaremos um link de recuperação.
                    </p>
                </header>

                <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">

                    <Input
                        id="email"
                        type="email"
                        label="Email"
                        required
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        classNames={{ input: "base-input placeholder" }}
                    />

                    <Button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-neutral-950 text-white text-sm"
                    >
                        Enviar link de recuperação
                    </Button>
                </form>

                <a href="/login" className="link mt-6">
                    Voltar para Entrar
                </a>
            </Card>
        </main>
    );
}
