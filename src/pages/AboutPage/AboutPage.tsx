import './Styles.css';
import doctorImg from '../../assets/doctorAbout.jpeg';
import { FaUserMd, FaHandshake, FaLightbulb, FaLaptopMedical } from 'react-icons/fa';

export const AboutPage = () => {
  return (
    <section className="about-section">
      <h2 className="about-title">Sobre Mí</h2>

      <div className="about-container">
        {/* Imagen */}
        <div className="about-image">
          <img src={doctorImg} alt="Doctor Psiquiatra" />
        </div>

        {/* Descripción */}
        <div className="about-text">
          <p>
            Soy el Dr. Miguel Ángel Rivera, psiquiatra con enfoque en la salud mental integral.
            Mi práctica se centra en ofrecer un espacio de comprensión, claridad y apoyo para
            promover el bienestar emocional a través de terapia individual, de pareja y consultas en línea.
          </p>
        </div>

        {/* Íconos de servicios */}
        <div className="about-icons">
          <div className="icon-item">
            <FaUserMd className="icon" />
            <span>Terapia Individual</span>
          </div>
          <div className="icon-item">
            <FaHandshake className="icon" />
            <span>Terapia de Pareja</span>
          </div>
          <div className="icon-item">
            <FaLightbulb className="icon" />
            <span>Formación</span>
          </div>
          <div className="icon-item">
            <FaLaptopMedical className="icon" />
            <span>Terapia Online</span>
          </div>
        </div>
      </div>
    </section>
  );
};
