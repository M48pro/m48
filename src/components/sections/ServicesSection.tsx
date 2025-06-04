import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Palette, Wrench, ChevronRight } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 'web-development',
      icon: <Code className="w-10 h-10 text-primary-600" />,
      title: 'Web Development',
      description: 'We create responsive, fast-loading websites optimized for user experience and conversions.',
      items: ['Landing Pages', 'Multi-page Sites', 'E-commerce', 'Web Applications'],
      link: '/services/web-development'
    },
    {
      id: 'design-services',
      icon: <Palette className="w-10 h-10 text-primary-600" />,
      title: 'Design Services',
      description: 'Elevate your brand with beautiful, purposeful design that communicates your unique value.',
      items: ['Web Design', 'Brand Identity', 'UI/UX Design', 'Print Materials'],
      link: '/services/design'
    },
    {
      id: 'support-maintenance',
      icon: <Wrench className="w-10 h-10 text-primary-600" />,
      title: 'Support & Maintenance',
      description: 'Keep your digital presence running smoothly with our comprehensive support services.',
      items: ['Website Maintenance', 'Performance Optimization', 'Security Updates', '24/7 Support'],
      link: '/services/support'
    }
  ];

  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <ScrollReveal>
          <div className="section-title max-w-2xl mx-auto">
            <h2 className="mb-4">Our Premium Services</h2>
            <p className="text-lg text-neutral-600">
              We offer a comprehensive suite of services to help your business thrive in the digital landscape.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <div className="service-card h-full flex flex-col">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-neutral-600 mb-6">{service.description}</p>
                
                <ul className="mb-6 space-y-2 mt-auto">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-neutral-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800 transition-colors mt-auto"
                >
                  Learn More <ChevronRight className="ml-1 w-5 h-5" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal>
          <div className="mt-12 text-center">
            <Link to="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;