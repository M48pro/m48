import React from 'react';
import { motion } from 'framer-motion';

const PortfolioPage: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration.",
      image: "https://picsum.photos/id/10/600/400" 
    },
    {
      title: "CRM System",
      description: "Custom CRM tool for managing customer relationships.",
      image: "https://picsum.photos/id/11/600/400" 
    },
    {
      title: "Mobile Landing Page",
      description: "Responsive one-page design for mobile users.",
      image: "https://picsum.photos/id/12/600/400" 
    },
    {
      title: "SaaS Dashboard",
      description: "Interactive dashboard for SaaS platform analytics.",
      image: "https://picsum.photos/id/13/600/400" 
    },
    {
      title: "Design System",
      description: "Reusable UI components and design tokens.",
      image: "https://picsum.photos/id/14/600/400" 
    },
    {
      title: "Interactive Prototype",
      description: "Clickable prototype for client presentation.",
      image: "https://picsum.photos/id/15/600/400" 
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white relative overflow-hidden">
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-6 text-center"
        >
          Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 text-center"
        >
          A selection of our latest and most impactful projects.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;