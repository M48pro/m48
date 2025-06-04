import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-neutral-400 mb-6">
              Crafting exceptional digital experiences through innovative design and development.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/web-development" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/design" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  Design Services
                </Link>
              </li>
              <li>
                <Link to="/services/support" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  Support & Maintenance
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  Our Work
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-primary-500 mr-3 mt-0.5" />
                <span className="text-neutral-400">hello@m48studio.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-primary-500 mr-3 mt-0.5" />
                <span className="text-neutral-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-400">
                  48 Creative Avenue, Suite 200<br />
                  San Francisco, CA 94103
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} M48 Creative Studio. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-neutral-500 text-sm hover:text-primary-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-neutral-500 text-sm hover:text-primary-500 transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-neutral-500 text-sm hover:text-primary-500 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;