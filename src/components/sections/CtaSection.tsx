import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-neutral-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-500 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            
            <p className="text-xl text-neutral-200 mb-10">
              Let's collaborate to create a stunning digital experience that elevates your brand and drives results.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="btn bg-white text-primary-900 hover:bg-neutral-100 focus:ring-white group"
              >
                Discuss Your Project
                <ArrowRight className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link 
                to="/portfolio" 
                className="btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary-900 focus:ring-white group"
              >
                Download Portfolio
                <Download className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CtaSection;