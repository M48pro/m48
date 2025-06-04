import React, { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const ParticleNetwork = () => {
  const points = React.useMemo(() => {
    const temp = [];
    for (let i = 0; i < 300; i++) {
      temp.push([
        Math.random() * 20 - 10,
        Math.random() * 20 - 10,
        Math.random() * 20 - 10
      ]);
    }
    return temp;
  }, []);

  return (
    <Points>
      <pointMaterial color="#a855f7" size={0.05} />
      {points.map((pos, i) => (
        <PointsItem key={i} position={pos as [number, number, number]} />
      ))}
    </Points>
  );
};

const PointsItem = ({ position }: { position: [number, number, number] }) => {
  const ref = React.useRef<THREE.Points>(null);
  const speed = Math.random() * 0.002;

  useFrame(() => {
    if (ref.current) {
      // @ts-ignore
      ref.current.position.y += speed;
      if (ref.current.position.y > 10) {
        // @ts-ignore
        ref.current.position.y = -10;
      }
    }
  });

  return <points ref={ref} position={position} />;
};

const Scene3D = () => (
  <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
    <Suspense fallback={null}>
      <ParticleNetwork />
    </Suspense>
  </Canvas>
);

const ContactPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white relative overflow-hidden">
      {/* 3D фон */}
      <section className="h-screen w-full fixed inset-0 z-0">
        <Scene3D />
      </section>

      {/* Форма связи */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb-6 text-center"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 mb-12 text-center"
        >
          Have a project or idea? Let’s make it happen together.
        </motion.p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
            <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded-md p-3 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
            <input type="email" className="w-full bg-gray-900 border border-gray-700 rounded-md p-3 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
            <textarea rows={5} className="w-full bg-gray-900 border border-gray-700 rounded-md p-3 focus:outline-none"></textarea>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-md font-semibold transition hover:shadow-lg hover:from-purple-700 hover:to-pink-700"
          >
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
};

export default ContactPage;