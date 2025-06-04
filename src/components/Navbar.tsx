import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import Logo from './Logo';
import AuthModal from './auth/AuthModal';
import { useAuth } from '@/contexts/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleServices = (e: React.MouseEvent) => {
    if (window.innerWidth < 1024) {
      e.preventDefault();
      setServicesOpen(!servicesOpen);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    closeMenu();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [location]);

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container flex items-center justify-between">
          <Link to="/" className="z-10">
            <Logo />
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-1">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
            
            <div className="relative group">
              <NavLink to="/services" className={({ isActive }) => `nav-link flex items-center ${isActive || location.pathname.includes('/services/') ? 'active' : ''}`}
                     onClick={toggleServices}>
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </NavLink>
              
              <div className="absolute left-0 mt-2 w-64 hidden group-hover:block">
                <div className="bg-white shadow-lg rounded-lg p-3 space-y-1">
                  <NavLink to="/services/web-development" className="block px-4 py-2 text-sm hover:bg-neutral-100 rounded-md">
                    Web Development
                  </NavLink>
                  <NavLink to="/services/design" className="block px-4 py-2 text-sm hover:bg-neutral-100 rounded-md">
                    Design Services
                  </NavLink>
                  <NavLink to="/services/support" className="block px-4 py-2 text-sm hover:bg-neutral-100 rounded-md">
                    Support & Maintenance
                  </NavLink>
                </div>
              </div>
            </div>
            
            <NavLink to="/portfolio" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Portfolio
            </NavLink>
            
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              About
            </NavLink>
            
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Contact
            </NavLink>
          </nav>
          
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 text-neutral-700 hover:text-primary-600">
                  <User className="w-5 h-5" />
                  <span>Account</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 hidden group-hover:block">
                  <div className="bg-white shadow-lg rounded-lg py-2">
                    <Link to="/dashboard" className="block px-4 py-2 text-sm hover:bg-neutral-100">
                      Dashboard
                    </Link>
                    <button
                      onClick={() => signOut()}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-neutral-100 text-red-600"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="btn btn-primary"
              >
                Sign In
              </button>
            )}
          </div>
          
          <button
            className="lg:hidden z-10 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-neutral-800" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-800" />
            )}
          </button>
          
          {/* Mobile Menu */}
          <div
            className={`lg:hidden fixed inset-0 bg-white transition-transform duration-300 ease-in-out ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full pt-20 px-6">
              <div className="flex flex-col space-y-4">
                <NavLink to="/" className="text-xl font-medium py-2" onClick={closeMenu}>
                  Home
                </NavLink>
                
                <div>
                  <button
                    className="flex items-center justify-between w-full text-xl font-medium py-2"
                    onClick={toggleServices}
                  >
                    Services
                    <ChevronDown className={`w-5 h-5 transform transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <div className={`ml-4 space-y-2 mt-2 ${servicesOpen ? 'block' : 'hidden'}`}>
                    <NavLink to="/services/web-development" className="block py-2" onClick={closeMenu}>
                      Web Development
                    </NavLink>
                    <NavLink to="/services/design" className="block py-2" onClick={closeMenu}>
                      Design Services
                    </NavLink>
                    <NavLink to="/services/support" className="block py-2" onClick={closeMenu}>
                      Support & Maintenance
                    </NavLink>
                  </div>
                </div>
                
                <NavLink to="/portfolio" className="text-xl font-medium py-2" onClick={closeMenu}>
                  Portfolio
                </NavLink>
                
                <NavLink to="/about" className="text-xl font-medium py-2" onClick={closeMenu}>
                  About
                </NavLink>
                
                <NavLink to="/contact" className="text-xl font-medium py-2" onClick={closeMenu}>
                  Contact
                </NavLink>
              </div>
              
              <div className="mt-8">
                {user ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="btn btn-primary w-full mb-4"
                      onClick={closeMenu}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        signOut();
                        closeMenu();
                      }}
                      className="btn btn-outline w-full text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      setShowAuthModal(true);
                      closeMenu();
                    }}
                    className="btn btn-primary w-full"
                  >
                    Sign In
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
};

export default Navbar;