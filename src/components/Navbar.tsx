import { Link } from "react-router-dom";
import { tv } from "tailwind-variants";
import simbolo from "../assets/simbolo_black.svg";
import logo from "../assets/logo_black.svg";

const styles = tv({
    slots: {
        navbar: "fixed flex justify-between items-center bg-white px-4 xs:px-[7.3vw] h-17 w-full border-b border-black/10",
    }
});

const { navbar } = styles();

export default function Navbar() {
    return (
        <nav className={navbar()}>
            <Link to="/">
                <img className="xs:hidden" src={simbolo} alt="Logo Instituto Consuelo" />
                <img className="hidden xs:inline" src={logo} alt="Logo Instituto Consuelo" />
            </Link>

            <div className="flex justify-end items-center gap-4">
                <Link to="/explorar" className="hidden md:inline">Explorar Cursos</Link> {/*//! O LINK DEVE SER ESTILIZADO */}
                {/*//! OS BOTOES DEVE SER SUBTITUIDOS PELO COMPONENTE DE BOTAO CORRETO */}
                <button className="border border-solid border-black py-1 px-4">Entrar</button>
                <button className="border border-solid border-black py-1 px-4">Cadastre-se</button>
            </div>
        </nav>
    );
}