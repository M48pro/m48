// src/components/ThreeBackground.tsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Points, PointMaterial, Stars, OrbitControls } from '@react-three/drei';
import { extend } from '@react-three/fiber';

// Расширяем THREE
extend({ Points, PointMaterial });

interface ThreeBackgroundProps {
  type?: 'particles' | 'sphere' | 'stars' | 'rotatingCube';
}

const ThreeBackground: React.FC<ThreeBackgroundProps> = ({ type = 'particles' }) => {
  const BackgroundScene = () => {
    switch (type) {
      case 'particles':
        return <ParticleField />;
      case 'sphere':
        return <RotatingSphere />;
      case 'stars':
        return <StarField />;
      case 'rotatingCube':
        return <RotatingCube />;
      default:
        return <ParticleField />;
    }
  };

  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 40 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} castShadow />
      <Suspense fallback={null}>
        <BackgroundScene />
      </Suspense>
    </Canvas>
  );
};

// 🔵 Анимированная сетка точек
const ParticleField = () => {
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

// 🟢 Вращающаяся сфера
const RotatingSphere = () => {
  const meshRef = React.useRef<any>();

  useFrame(() => {
    if (meshRef.current) {
      // @ts-ignore
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshStandardMaterial color="#0ea5e9" metalness={0.7} roughness={0.3} />
    </mesh>
  );
};

// 🌌 Звёздное небо
const StarField = () => {
  return <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
};

// 🟠 Вращающийся куб
const RotatingCube = () => {
  const meshRef = React.useRef<any>();

  useFrame(() => {
    if (meshRef.current) {
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

// 🟣 Компонент точки с анимацией
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

export default ThreeBackground;