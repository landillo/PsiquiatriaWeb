import "./Styles.css";
import logo from "../../assets/logoPsiquiatria.png";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Columna 1 - Logo y nombre */}
        <div className="footer-section footer-brand">
          <div className="footer-logo-group">
            <img src={logo} alt="Logo Psiquiatría" className="footer-logo" />
            <div>
              <h4>Dr. Miguel Ángel Rivera Puente</h4>
              <p>Psiquiatra & Psicoterapia</p>
            </div>
          </div>
        </div>

        {/* Columna 2 - Contacto */}
        <div className="footer-section">
          <h4>Contacto</h4>
          <p><Phone size={16} /> +52 55 1234 5678</p>
          <p><Mail size={16} /> contacto@drmiguelrivera.com</p>
        </div>

        {/* Columna 3 - Redes sociales */}
        <div className="footer-section footer-social">
          <h4>Sígueme</h4>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={44} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={44} />
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Dr. Miguel Ángel Rivera Puente — Todos los derechos reservados.
        </p>
        <span>Diseñado por <strong>Orlando Ledón</strong></span>
      </div>
    </footer>
  );
};
