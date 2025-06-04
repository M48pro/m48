import React from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';

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

// Статичный лейбл с описанием
const Label = () => (
  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center">
    <h2 className="text-3xl font-bold text-white">Your Web Future</h2>
    <p className="text-gray-300 mt-2">Powered by modern development and design.</p>
  </div>
);

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

// Данные из API (пример)
interface Service {
  id: number;
  title: string;
  description: string;
}

const WebDevelopmentPage: React.FC = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    // Здесь можно подключить API или Supabase
    const mockData = [
      { id: 1, title: 'Custom Websites', description: 'Pixel-perfect landing pages and corporate websites.' },
      { id: 2, title: 'E-commerce Platforms', description: 'Online stores with secure payments and inventory management.' },
      { id: 3, title: 'Full-stack Applications', description: 'Modern apps built with React, Node.js, and Supabase.' },
      { id: 4, title: 'Support & Maintenance', description: 'Ongoing updates, security patches, and technical support.' },
    ];
    setServices(mockData);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white relative overflow-hidden">
      {/* 3D секция */}
      <section className="h-screen w-full fixed inset-0 z-0">
        <Scene3D />
        <Label />
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
          {services.map((service) => (
            <div key={service.id} className="bg-gray-900 bg-opacity-80 p-8 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all">
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
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