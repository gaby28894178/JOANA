import "./Footer.css";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "5491162972674";
  const displayPhone = "+54 9 11 6297-2674";
  const developerEmail = "gabgabrielligabriel@gmail.com";

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Nuestra Misión</h3>
          <p>
            En Joha Compras entendemos que la alimentación es la base de la salud y que un ambiente aromático nutre el alma.
            Buscamos brindarte productos que armonicen tu cuerpo y tu hogar, promoviendo bienestar integral en cada detalle.
          </p>
        </div>

        <div className="footer-section">
          <h3>Contacto</h3>
          <div className="contact-item">
            <FaWhatsapp className="icon" />
            <a 
              href={`https://wa.me/${whatsappNumber}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {displayPhone}
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Developers</h3>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <a href={`mailto:${developerEmail}`}>
              {developerEmail}
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Joha Compras. Todos los derechos reservados.
      </div>
    </footer>
  );
}