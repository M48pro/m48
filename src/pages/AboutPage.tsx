import React, { Suspense } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { Points, PointMaterial, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

// Расширяем THREE для использования <points> и <pointMaterial>
extend({ Points, PointMaterial });

const AnimatedGrid = () => {
  const points = React.useMemo(() => {
    const temp = [];
    for (let i = 0; i < 500; i++) {
      temp.push([
        Math.random() * 20 - 10,
        Math.random() * 20 - 10,
        Math.random() * 20 - 10
      ]);
    }
    return temp;
  }, []);

  return (
    <points>
      <pointMaterial color="#6366f1" size={0.07} />
      {points.map((pos, i) => (
        <Point key={i} position={pos as [number, number, number]} />
      ))}
    </points>
  );
};

const Point = ({ position }: { position: [number, number, number] }) => {
  const ref = React.useRef<any>(null);

  useFrame(() => {
    if (ref.current) {
      // @ts-ignore
      ref.current.position.y += 0.002;
    }
  });

  return <points ref={ref} position={position} />;
};

const Scene3D = () => (
  <Canvas shadows camera={{ position: [0, 0, 5], fov: 40 }}>
    <Stars radius={100} depth={50} count={5000} factor={4} fade />
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 5, 5]} castShadow intensity={1.2} shadow-mapSize-width={1024} />
    <Suspense fallback={null}>
      <AnimatedGrid />
    </Suspense>
  </Canvas>
);

const AboutPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white relative overflow-hidden">
      {/* 3D фон */}
      <section className="h-screen w-full fixed inset-0 z-0">
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center">
          <h2 className="text-3xl font-bold text-white">About Us</h2>
          <p className="text-gray-300 mt-2">Meet the team behind our digital creations.</p>
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
          About Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16"
        >
          We are a team of passionate designers and developers creating beautiful, functional digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-10"
        >
          <div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all">
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-400">To build products that not only look great but also work flawlessly across platforms.</p>
          </div>
          <div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all">
            <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
            <ul className="space-y-2 text-gray-400">
              <li>— Quality over quantity</li>
              <li>— Honesty & transparency</li>
              <li>— Innovation and growth</li>
              <li>— Collaborative teamwork</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all">
            View Our Work
          </button>
        </motion.div>
      </main>
    </div>
  );
};

export default AboutPage;