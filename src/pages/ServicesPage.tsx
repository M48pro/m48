import React, { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

// Вращающаяся геометрическая фигура — додекаэдр
const RotatingPolyhedron = () => {
  const meshRef = React.useRef();

  useFrame(() => {
    if (meshRef.current) {
      // @ts-ignore
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <dodecahedronGeometry args={[1.4, 0]} />
      <meshStandardMaterial color="#6366f1" metalness={0.7} roughness={0.3} />
    </mesh>
  );
};

const Scene3D = () => (
  <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
    <Stars radius={100} depth={50} count={5000} factor={4} fade />
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 5, 5]} castShadow intensity={1.2} shadow-mapSize-width={1024} />
    <Suspense fallback={null}>
      <RotatingPolyhedron />
    </Suspense>
    <OrbitControls enableZoom={false} autoRotateSpeed={0.5} />
  </Canvas>
);

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building modern websites and scalable web applications."
    },
    {
      title: "UI/UX Design",
      description: "Creating beautiful and functional user interfaces."
    },
    {
      title: "Support & Maintenance",
      description: "Ongoing updates, security patches, and technical support."
    },
    {
      title: "SEO Optimization",
      description: "Improving your site’s visibility in search engines."
    },
    {
      title: "Consulting",
      description: "Strategic advice on digital product development."
    },
    {
      title: "Branding",
      description: "Developing a strong visual identity for your business."
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white relative overflow-hidden">
      {/* 3D секция */}
      <section className="h-screen w-full fixed inset-0 z-0">
        <Scene3D />
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center">
          <h2 className="text-3xl font-bold text-white">Our Services</h2>
          <p className="text-gray-300 mt-2">What we offer to our clients.</p>
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
          Our Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16"
        >
          We provide a wide range of services tailored to your needs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-10"
        >
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-gray-900 bg-opacity-80 p-8 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all"
            >
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all">
            Get Started
          </button>
        </motion.div>
      </main>
    </div>
  );
};

export default ServicesPage;