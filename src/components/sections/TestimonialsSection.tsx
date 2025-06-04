import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';
import { testimonialData } from '../../data/testimonialData';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const nextTestimonial = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % testimonialData.length);
  };
  
  const prevTestimonial = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [activeIndex]);
  
  // Auto advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isTransitioning]);
  
  return (
    <section className="section bg-neutral-100 overflow-hidden">
      <div className="container relative">
        <ScrollReveal>
          <div className="section-title max-w-2xl mx-auto">
            <h2 className="mb-4">What Our Clients Say</h2>
            <p className="text-lg text-neutral-600">
              Don't just take our word for it. Here's what our clients have to say about working with M48.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="mt-12 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-200 opacity-30">
            <Quote className="w-32 h-32" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="relative h-[300px] md:h-[250px]">
              {testimonialData.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute top-0 left-0 right-0 transition-all duration-500 ease-out-expo ${
                    index === activeIndex 
                      ? 'opacity-100 translate-x-0 z-10' 
                      : index < activeIndex 
                        ? 'opacity-0 -translate-x-16 z-0' 
                        : 'opacity-0 translate-x-16 z-0'
                  }`}
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                        />
                      </div>
                      
                      <div>
                        <p className="text-neutral-700 mb-6 italic">"{testimonial.text}"</p>
                        
                        <div>
                          <h4 className="font-medium text-lg">{testimonial.name}</h4>
                          <p className="text-neutral-500">{testimonial.position}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonialData.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex ? 'bg-primary-600 scale-125' : 'bg-neutral-300'
                  }`}
                  onClick={() => {
                    if (isTransitioning) return;
                    setIsTransitioning(true);
                    setActiveIndex(index);
                  }}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex justify-center mt-6 gap-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:bg-neutral-100 transition-colors"
                aria-label="Previous testimonial"
                disabled={isTransitioning}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:bg-neutral-100 transition-colors"
                aria-label="Next testimonial"
                disabled={isTransitioning}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;