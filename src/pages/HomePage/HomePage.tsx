import './Styles.css';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import { Element } from 'react-scroll';

export const HomePage = () => {
  return (
    <Element name="home">
      <HeroSection /> 
    </Element>
  );
};
