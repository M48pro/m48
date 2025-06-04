import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomeHero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = 1 - (scrollY / 500);
      const translate = scrollY * 0.3;
      
      heroRef.current.style.opacity = Math.max(opacity, 0).toString();
      heroRef.current.style.transform = `translateY(${translate}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="relative overflow-hidden bg-neutral-900 text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-neutral-900"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
      
      <div className="container relative pt-40 pb-24 md:pt-48 md:pb-32 lg:pt-56 lg:pb-40">
        <div className="max-w-3xl" ref={heroRef}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
            We Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Exceptional</span> Digital Experiences
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-200 mb-8 animate-fade-up animate-delay-100">
            M48 is a premium creative studio specializing in crafting bespoke websites and digital experiences that elevate brands.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-200">
            <Link to="/contact" className="btn btn-primary">
              Discuss Your Project
            </Link>
            
            <Link to="/portfolio" className="btn btn-outline border-white text-white hover:bg-white hover:text-neutral-900 group">
              View Our Work
              <ArrowRight className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up animate-delay-300">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-neutral-300">Years Experience</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-neutral-300">Completed Projects</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-neutral-300">Active Clients</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-neutral-300">Design Awards</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave SVG */}
      <div className="absolute bottom-0 left-0 right-0 w-full transform translate-y-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-neutral-50">
          <path d="M0,96L80,85.3C160,75,320,53,480,64C640,75,800,117,960,117.3C1120,117,1280,75,1360,53.3L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HomeHero;