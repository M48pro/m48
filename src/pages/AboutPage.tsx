import React, { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'; // ✅ Добавлен useFrame
import { Points, PointMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';

// Расширяем THREE для использования <points> и <pointMaterial />
extend({ Points, PointMaterial });

function Point({ position }: { position: [number, number, number] }) {
  const ref = React.useRef<any>(null);
  const speed = Math.random() * 0.002;

  useFrame(() => {
    if (ref.current) {
      // @ts-ignore
      ref.current.position.y += speed;
      // @ts-ignore
      if (ref.current.position.y > 10) ref.current.position.y = -10;
    }
  });

  return <points ref={ref} position={position} />;
}

const AnimatedGrid = () => {
  const positions = React.useMemo(() => {
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
      {positions.map((pos, i) => (
        <Point key={i} position={pos as [number, number, number]} />
      ))}
    </points>
  );
};

const Scene3D = () => (
  <Canvas camera={{ position: [0, 0, 5], fov: 40 }>
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 5, 5]} />
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
        <Scene3D />
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center">
          <h2 className="text-3xl font-bold text-white">About Us</h2>
          <p className="text-gray-300 mt-2">Meet the team behind our digital creations.</p>
        </div>
      </section>

      {/* Контент поверх 3D */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-96 pb-32">
        {/* Ваш контент */}
      </main>
    </div>
  );
};

export default AboutPage;