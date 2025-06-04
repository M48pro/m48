import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../utils/ScrollToTop';

const Layout: React.FC = () => {
  const location = useLocation();
  const [pageLoaded, setPageLoaded] = useState(false);
  
  useEffect(() => {
    setPageLoaded(false);
    
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className={`flex-grow transition-opacity duration-500 ${pageLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;