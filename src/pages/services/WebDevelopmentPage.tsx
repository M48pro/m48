import React from 'react';
import ThreeBackground from '../components/ThreeBackground.tsx';
const WebDevelopmentPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white relative overflow-hidden">
      <section className="fixed inset-0 h-screen w-full z-0">
        <ThreeBackground type="dynamic-shader" effects={['bloom', 'vignette']} />
      </section>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-96 pb-32">
        <h1 className="text-6xl font-bold mb-4 text-center">Web Development</h1>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
          We build modern web applications with the latest technologies.
        </p>
      </main>
    </div>
  );
};

export default WebDevelopmentPage;