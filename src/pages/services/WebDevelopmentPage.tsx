import React from 'react';
import { useNavigate } from 'react-router-dom'; // или next/router если Next.js

const WebDevelopmentPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Основной контент */}
      <main className="pt-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Заголовок */}
        <section className="text-center mt-12">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Web Development Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating high-performance, scalable and modern web applications tailored to your business needs.
          </p>
        </section>

        {/* What We Do */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold text-center mb-10">What We Build</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-medium mb-3">Custom Websites</h3>
              <p className="text-gray-600">
                From corporate websites to landing pages, we craft pixel-perfect user experiences that convert.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-medium mb-3">E-commerce Platforms</h3>
              <p className="text-gray-600">
                Scalable online stores with secure payments, inventory management, and seamless UX.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-medium mb-3">Web Applications</h3>
              <p className="text-gray-600">
                Full-stack custom apps using the latest technologies like React, Node.js, Supabase and more.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-medium mb-3">Maintenance & Support</h3>
              <p className="text-gray-600">
                Ongoing updates, security patches, performance optimization and technical support.
              </p>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold text-center mb-10">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-6 text-xl text-gray-700">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'Supabase', 'MongoDB', 'PostgreSQL', 'Docker'].map((tech) => (
              <span key={tech} className="bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-100 transition">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mt-20 pb-16">
          <h2 className="text-3xl font-semibold text-center mb-10">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-medium mb-2">Tailored Solutions</h3>
              <p className="text-gray-600">We build exactly what you need, not generic templates.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Agile methodology ensures timely delivery without compromising quality.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-2">Support Included</h3>
              <p className="text-gray-600">Ongoing maintenance and technical support after launch.</p>
            </div>
          </div>
        </section>

        {/* CTA Button */}
        <div className="text-center mb-24">
          <button
            onClick={() => navigate('/contact')}
            className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition"
          >
            Start Your Project
          </button>
        </div>
      </main>
    </div>
  );
};

export default WebDevelopmentPage;