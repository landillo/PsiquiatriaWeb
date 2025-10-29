import './Styles.css';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const ContactPage = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contáctame</h2>
      <p className="contact-subtitle">
        Estoy aquí para ayudarte a encontrar bienestar y equilibrio emocional. Puedes comunicarte por los siguientes medios o agendar una cita directamente.
      </p>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-item">
            <Phone size={22} className="contact-icon" />
            <div>
              <h4>Teléfono</h4>
              <p>+52 55 1234 5678</p>
            </div>
          </div>

          <div className="contact-item">
            <Mail size={22} className="contact-icon" />
            <div>
              <h4>Correo Electrónico</h4>
              <p>dr.rivera@psiquiatria.mx</p> 
            </div>
          </div>

          <div className="contact-item">
            <MapPin size={22} className="contact-icon" />
            <div>
              <h4>Ubicación</h4>
              <p>Av. Reforma #123, Col. Juárez, CDMX</p>
            </div>
          </div>

          <div className="contact-item">
            <Clock size={22} className="contact-icon" />
            <div>
              <h4>Horario</h4>
              <p>Lunes a Viernes: 9:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Mapa embebido */}
        <div className="contact-map">
          <iframe
            title="Ubicación del consultorio"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.3817288588827!2d-99.1605480259131!3d19.43794804196187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92c7ab2b8a5%3A0x66bafda5db44a21!2sAv.%20Paseo%20de%20la%20Reforma%2C%20Ju%C3%A1rez%2C%20Cuauht%C3%A9moc%2C%2006600%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1697146883560!5m2!1ses!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
