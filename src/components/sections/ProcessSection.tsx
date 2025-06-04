import React from 'react';
import { ClipboardList, Lightbulb, Code, BarChart } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';

const ProcessSection: React.FC = () => {
  const processSteps = [
    {
      icon: <ClipboardList className="w-10 h-10 text-white" />,
      title: 'Discovery',
      description: 'We begin by understanding your business, goals, target audience, and project requirements.',
      color: 'bg-primary-600'
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-white" />,
      title: 'Strategy & Design',
      description: 'We create a detailed plan and design concepts that align with your brand and objectives.',
      color: 'bg-accent-500'
    },
    {
      icon: <Code className="w-10 h-10 text-white" />,
      title: 'Development',
      description: 'Our expert team brings the designs to life with clean, efficient, and scalable code.',
      color: 'bg-secondary-600'
    },
    {
      icon: <BarChart className="w-10 h-10 text-white" />,
      title: 'Launch & Optimize',
      description: 'We deploy your project and continuously refine it based on real-world performance.',
      color: 'bg-success-600'
    }
  ];

  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <ScrollReveal>
          <div className="section-title max-w-2xl mx-auto">
            <h2 className="mb-4">Our Process</h2>
            <p className="text-lg text-neutral-600">
              We follow a proven methodology to ensure your project is delivered on time, on budget, and exceeds expectations.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="mt-12 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-neutral-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center mb-6 shadow-lg`}>
                    {step.icon}
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-neutral-200 flex items-center justify-center text-lg font-bold text-neutral-800">
                      {index + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                  <p className="text-neutral-600">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;