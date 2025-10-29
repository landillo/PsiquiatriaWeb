import { useEffect, useRef, useState } from 'react';
import { Link, Events } from 'react-scroll';
import './Styles.css';
import logo from '../../assets/logoPsiquiatria.png';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // 🔹 Función para abrir/cerrar el menú
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // 🔹 Cierra el menú si se hace clic fuera del área
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    Events.scrollEvent.register('end', (to) => {
      window.history.pushState(null, "", `/${to}`) // console.log("begin", arguments);
    });
    return () => {
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo Psiquiatría" />
        <div className="navbar-title">
          <h3>Dr. Miguel Angel Rivera Puente</h3>
          <span>Psiquiatra & Psicoterapia</span>
        </div>
      </div>

      {/* Botón hamburguesa */}
      <button
        ref={buttonRef}
        className={`menu-toggle ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Abrir menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Menú principal */}
      <ul ref={menuRef} className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <li key="home"><Link to="home" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)}>Inicio</Link></li>
        <li key="about"><Link to="about" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)}>Sobre Mi</Link></li>
        <li key="services"><Link to="services" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)}>Servicios</Link></li>
        <li key="blog"><Link to="blog" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)}>Blog</Link></li>
        <li key="contact"><Link to="contact" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)}>Contacto</Link></li>
        <li className="mobile-cta">
          <Link to="contact" className="btn-appointment" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)}>
            Reservar Cita
          </Link>
        </li>

      </ul>

      <div className="navbar-cta desktop-only">
         <Link
          to="contact"
          smooth={true}
          duration={600}
          offset={-70}
          className="btn-appointment"
        >
          Reservar Cita
        </Link>
      </div>
    </nav>
  );
};
