import { useEffect, useState } from "react";
import  img1  from "../../assets/homePsiquiatra1.jpeg";
import  img2  from "../../assets/homePsiquiatra2.jpeg";
import  img3  from "../../assets/homePsiquiatra3.jpeg";
import "./Styles.css";

// Simulamos los datos de los slides
const slides = [
  {
    id: 1,
    title: "Encuentra Claridad, Bienestar y Apoyo.",
    subtitle: "Tu camino hacia la salud mental comienza aquí.",
    buttonText: "Conoce más",
    image: img1,
  },
  {
    id: 2,
    title: "Terapia Individual y de Pareja",
    subtitle: "Un espacio seguro para mejorar tu bienestar emocional.",
    buttonText: "Agendar cita",
    image: img2,
  },
  {
    id: 3,
    title: "Atención profesional en línea o presencial",
    subtitle: "Apoyo psicológico adaptado a tus necesidades.",
    buttonText: "Contactar ahora",
    image: img3,
  },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Cambia automáticamente cada 5 s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay">
            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <a href="/about" className="hero-button">
                {slide.buttonText}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Indicadores inferiores */}
      <div className="hero-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};
