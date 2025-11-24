import React from "react";
import "./style.css";
import logoImg from "../../assets/logo.png";

export default function Footer(): React.ReactElement {

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Seção Superior: Conteúdo Principal */}
        <div className="footer-content">
          
          {/* Coluna 1: Marca/Logo */}
          <div className="footer-brand">
            <img
              className="footer-logo"
              alt="Instituto Consuelo Logo"
              src={logoImg}
            />
            <p className="footer-description">
              Capacitando alunos em todo o mundo com educação de qualidade.
            </p>
          </div>

          {/* Coluna 2: Plataforma */}
          <div className="footer-column">
            <h3 className="footer-heading">Plataforma</h3>
            <ul className="footer-links">
              <li><a href="#">Explorar Cursos</a></li>
              <li><a href="#">Seja um Professor</a></li>
            </ul>
          </div>

          {/* Coluna 3: Consuelo */}
          <div className="footer-column">
            <h3 className="footer-heading">Consuelo</h3>
            <ul className="footer-links">
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>

          {/* Coluna 4: Legal */}
          <div className="footer-column">
            <h3 className="footer-heading">Legal</h3>
            <ul className="footer-links">
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Termos de Serviço</a></li>
            </ul>
          </div>

        </div>

        {/* Seção Inferior: Copyright */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © 2025 Instituto Consuelo. Todos os direitos reservados.
          </p>
        </div>
        
      </div>
    </footer>
  );
}