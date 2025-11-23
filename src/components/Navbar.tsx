import { Link } from "react-router-dom";
import { tv } from "tailwind-variants";
import img from "../assets/logo_black.svg";

const styles = tv({
    slots: {
        navbar: "fixed flex justify-between items-center bg-white px-45 h-17 w-full border-b border-black/10",
    }
});

const { navbar } = styles();

export default function Navbar() {
    return (
        <nav className={navbar()}>
            <Link to="/"><img src={img} alt="Logo Instituto Consuelo" /></Link>

            <div className="flex justify-end items-center gap-4">
                <Link to="/explorar">Explorar Cursos</Link> {/*//! O LINK DEVE SER ESTILIZADO */}
                {/*//! OS BOTOES DEVE SER SUBTITUIDOS PELO COMPONENTE DE BOTAO CORRETO */}
                <button className="border border-solid border-black py-1 px-4">Entrar</button>
                <button className="border border-solid border-black py-1 px-4">Cadastre-se</button>
            </div>
        </nav>
    );
}