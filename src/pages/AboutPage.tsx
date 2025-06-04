import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';

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
  <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <AnimatedGrid />
      </Suspense>
    </>
  </Canvas>
);

export default Scene3D;