import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';
import { portfolioData } from '../../data/portfolioData';

const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const filters = ['all', 'web', 'design', 'branding'];
  
  const filteredProjects = activeFilter === 'all' 
    ? portfolioData.slice(0, 6) 
    : portfolioData.filter(project => project.category === activeFilter).slice(0, 6);

  return (
    <section className="section bg-white">
      <div className="container">
        <ScrollReveal>
          <div className="section-title max-w-2xl mx-auto">
            <h2 className="mb-4">Featured Work</h2>
            <p className="text-lg text-neutral-600">
              Explore our portfolio of award-winning projects that have helped businesses achieve their goals.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <div className="flex justify-center mt-8 mb-12">
            <div className="inline-flex flex-wrap justify-center gap-2 p-1 bg-neutral-100 rounded-lg">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-all ${
                    activeFilter === filter
                      ? 'bg-white shadow-sm text-primary-600'
                      : 'text-neutral-600 hover:text-primary-600'
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <Link to={`/portfolio/${project.id}`} className="portfolio-item group block">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-64 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                />
                <div className="portfolio-overlay rounded-lg">
                  <div className="text-center p-6">
                    <h3 className="text-xl font-medium text-white mb-2">{project.title}</h3>
                    <p className="text-neutral-200 mb-4">{project.shortDescription}</p>
                    <span className="inline-flex items-center text-white font-medium">
                      View Case Study <ArrowRight className="ml-1 w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal>
          <div className="mt-12 text-center">
            <Link to="/portfolio" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PortfolioSection;