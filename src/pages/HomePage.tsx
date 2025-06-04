import React from 'react';
import HomeHero from '../components/hero/HomeHero';
import ServicesSection from '../components/sections/ServicesSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ProcessSection from '../components/sections/ProcessSection';
import CtaSection from '../components/sections/CtaSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HomeHero />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default HomePage;