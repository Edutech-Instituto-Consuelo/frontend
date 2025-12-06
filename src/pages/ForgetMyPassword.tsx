import { Card } from "@/components/Card.tsx";
import { Button } from "@/components/Button";
import { useState } from "react";

export default function ForgetMyPassword() {
    const [emailEnviado, setEmailEnviado] = useState(false);
    const [email, setEmail] = useState("");
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setEmailEnviado(true);
    };
    return (
        <main className="flex min-h-screen w-full justify-center items-center bg-[#f2f6fb]">
            <Card className="flex flex-col items-center w-full max-w-md bg-white border border-black/10 rounded-2xl p-8">
                {!emailEnviado ? (
                    <>
                        <header className="flex flex-col items-center text-center w-full mb-6">
                            <img
                                src="/src/assets/simbolo_black.svg"
                                alt="Instituto Consuelo Símbolo"
                                className="h-14 mb-4"
                                loading="lazy"
                            />
                            <p className="black-text mb-2">
                                Esqueceu sua senha?
                            </p>

                            <p className="text">
                                Escreva seu email e enviaremos um link de recuperação.
                            </p>
                        </header>
                        <form onSubmit={handleSubmit} className="flex flex-col w-full">
                            <label htmlFor="email" className="black-text mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                autoComplete="email"
                                placeholder="seu@email.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="base-input mb-4"
                            />
                            <Button
                                type="submit"
                                aria-label="Enviar link de recuperação"
                                className="w-full py-3 rounded-xl bg-[#030213] text-white text-sm mt-2"
                            >
                                Enviar link de recuperação
                            </Button>
                        </form>
                        <a href="/login" className="link mt-6">
                            Voltar para Entrar
                        </a>
                    </>
                ) : (
                    <div className="flex flex-col items-center text-center p-4">
                        <svg width="64" height="64" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="2" fill="none" />
                            <path d="M8 12.5l3 3 5-6" stroke="#22c55e" strokeWidth="2" fill="none" />
                        </svg>
                        <p className="black-text mt-4">Cheque seu email</p>
                        <p className="text mt-2">
                            Enviamos o link de recuperação para <br />
                            <span className="font-semibold text-black">{email}</span>
                        </p>
                        <a
                            href="/login"
                            className="mt-6 bg-[#030213] text-white px-6 py-3 rounded-xl text-sm"
                        >
                            Voltar para Entrar
                        </a>
                    </div>
                )}
            </Card>
        </main>
    );
}
