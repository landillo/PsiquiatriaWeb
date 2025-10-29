import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutPage } from '../pages/AboutPage/AboutPage';
import { BlogPage } from '../pages/BlogPage/BlogPage';
import { ContactPage } from '../pages/ContactPage/ContactPage';
import { HomePage } from '../pages/HomePage/HomePage';
import { ServicesPage } from '../pages/ServicesPage/ServicesPage';
import { NavBar } from '../components/NavBar/NavBar';
import { Footer } from '../components/Footer/Footer';


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
