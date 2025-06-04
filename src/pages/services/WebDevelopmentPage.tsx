import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

// Компонент 3D куба
const RotatingCube = () => {
  const meshRef = React.useRef();

  useFrame((state) => {
    if (meshRef.current) {
      // @ts-ignore
      meshRef.current.rotation.x += 0.01;
      // @ts-ignore
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#4f46e5" metalness={0.7} roughness={0.2} />
    </mesh>
  );
};

// 3D сцена
const Scene3D = () => (
  <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
    <Stars radius={100} depth={50} count={5000} factor={4} fade />
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 5, 5]} castShadow intensity={1.2} shadow-mapSize-width={1024} />
    <Suspense fallback={null}>
      <RotatingCube />
    </Suspense>
    <OrbitControls enableZoom={false} autoRotateSpeed={0.5} />
  </Canvas>
);

const WebDevelopmentPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen text-white relative overflow-hidden">
      {/* 3D секция */}
      <section className="h-screen w-full fixed inset-0 z-0">
        <Scene3D />
      </section>

      {/* Контент поверх 3D */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-96 pb-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold leading-tight mb-6 text-center"
        >
          Web Development
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16"
        >
          We build high-performance, scalable and modern web applications tailored to your business needs.
        </motion.p>

        {/* Услуги */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-10"
        >
          <div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all">
            <h3 className="text-2xl font-semibold mb-2">Custom Websites</h3>
            <p className="text-gray-400">Pixel-perfect landing pages and corporate websites.</p>
          </div>
          <div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all">
            <h3 className="text-2xl font-semibold mb-2">E-commerce Platforms</h3>
            <p className="text-gray-400">Online stores with secure payments and inventory management.</p>
          </div>
          <div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all">
            <h3 className="text-2xl font-semibold mb-2">Full-stack Applications</h3>
            <p className="text-gray-400">Modern apps built with React, Node.js, and Supabase.</p>
          </div>
          <div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all">
            <h3 className="text-2xl font-semibold mb-2">Support & Maintenance</h3>
            <p className="text-gray-400">Ongoing updates, security patches, and technical support.</p>
          </div>
        </motion.div>

        {/* CTA кнопка */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => navigate('/contact')}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:from-purple-700 hover:to-blue-700 transition-all"
          >
            Start Your Project
          </button>
        </motion.div>
      </main>
    </div>
  );
};

export default WebDevelopmentPage;