import { Element } from 'react-scroll';
import { HomePage } from './pages/HomePage/HomePage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { ServicesPage } from './pages/ServicesPage/ServicesPage';
import { BlogPage } from './pages/BlogPage/BlogPage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import './styles/global.css';

function App() {

  return (
    <>
      <NavBar />
      <div>
        <Element name="home" key="home">
          <HomePage />
        </Element>
        <Element name="about" key="about">
          <AboutPage />
        </Element>
        <Element name="services" key="services">
          <ServicesPage />
        </Element>
        <Element name="blog" key="blog">
          <BlogPage />
        </Element>
        <Element name="contact" key="contact">
          <ContactPage />
        </Element>
      </div>
      <Footer />
    </>
  )
}

export default App
