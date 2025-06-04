import React, { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

// Анимированный 3D-объект: вращающаяся сфера
const RotatingSphere = () => {
  const meshRef = React.useRef();

  useFrame(() => {
    if (meshRef.current) {
      // @ts-ignore
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshStandardMaterial color="#0ea5e9" metalness={0.7} roughness={0.3} />
    </mesh>
  );
};

// 3D сцена с эффектом "космос"
const Scene3D = () => (
  <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
    <Stars radius={100} depth={50} count={5000} factor={4} fade />
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 5, 5]} castShadow intensity={1.2} shadow-mapSize-width={1024} />
    <Suspense fallback={null}>
      <RotatingSphere />
    </Suspense>
    <OrbitControls enableZoom={false} autoRotateSpeed={0.5} />
  </Canvas>
);

// Основная страница
const DesignPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white relative overflow-hidden">
      {/* 3D секция */}
      <section className="h-screen w-full fixed inset-0 z-0">
        <Scene3D />
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center">
          <h2 className="text-3xl font-bold text-white">UI/UX Design</h2>
          <p className="text-gray-300 mt-2">Creating beautiful and functional interfaces.</p>
        </div>
      </section>

      {/* Контент поверх 3D */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-96 pb-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold leading-tight mb-6 text-center"
        >
          UI/UX Design
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16"
        >
          We create intuitive and visually stunning interfaces that increase user engagement.
        </motion.p>

        {/* Услуги */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-10"
        >
          <div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all">
            <h3 className="text-2xl font-semibold mb-2">User Research</h3>
            <p className="text-gray-400">Studying your audience to build products that truly work for them.</p>
          </div>
          <div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all">
            <h3 className="text-2xl font-semibold mb-2">Wireframing & Prototyping</h3>
            <p className="text-gray-400">Building interactive prototypes before development starts.</p>
          </div>
          <div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all">
            <h3 className="text-2xl font-semibold mb-2">UI Kit & Branding</h3>
            <p className="text-gray-400">Design systems and brand identity for a consistent look and feel.</p>
          </div>
          <div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all">
            <h3 className="text-2xl font-semibold mb-2">Interactive Prototypes</h3>
            <p className="text-gray-400">Animated mockups for presenting ideas to clients or teams.</p>
          </div>
        </motion.div>

        {/* CTA кнопка */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:from-blue-700 hover:to-cyan-600 transition-all">
            Request a Design
          </button>
        </motion.div>
      </main>
    </div>
  );
};

export default DesignPage;