// src/pages/services/WebDevelopmentPage.tsx
import React from 'react';
import ThreeBackground from '@/components/ThreeBackground';

const WebDevelopmentPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white relative overflow-hidden">
      <section className="fixed inset-0 h-screen w-full z-0">
        <ThreeBackground />
      </section>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-96 pb-32 text-center">
        <h1 className="text-6xl font-bold">Web Development</h1>
        <p className="text-xl text-gray-300 mt-4">We build modern web apps with the latest tech.</p>
      </main>
    </div>
  );
};

export default WebDevelopmentPage;