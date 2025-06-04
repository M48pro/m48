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