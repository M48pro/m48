// src/components/ThreeBackground.tsx
import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Postprocessing
import { EffectComposer, Bloom, Vignette, Glitch, Pixelation } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

// Расширяем пространство имён для использования Points и PointMaterial
import { extend } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
extend({ Points, PointMaterial });

interface ThreeBackgroundProps {
  type?: 'dynamic-shader' | 'interactive-grid' | 'fluid-sphere' | 'glow-cube' | 'starscape';
  effects?: ('bloom' | 'vignette' | 'glitch' | 'pixelation')[];
}

const ThreeBackground: React.FC<ThreeBackgroundProps> = ({ type = 'dynamic-shader', effects = ['bloom'] }) => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 10]} />

      {/* Фон по типу */}
      {type === 'dynamic-shader' && <DynamicShaderPlane />}
      {type === 'interactive-grid' && <InteractiveCrystalGrid />}
      {type === 'fluid-sphere' && <FluidSphere />}
      {type === 'glow-cube' && <GlowingCube />}
      {type === 'starscape' && <StarScape />}

      {/* Постобработка */}
      <EffectComposer>
        {effects.includes('bloom') && <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} intensity={1.3} blendFunction={BlendFunction.ADD} />}
        {effects.includes('vignette') && <Vignette eskil={false} offset={0.5} darkness={1.0} />}
        {effects.includes('pixelation') && <Pixelation granularity={80} />}
        {effects.includes('glitch') && <Glitch strength={0.3} active={true} delay={{ min: 1, max: 3 }} duration={{ min: 0.6, max: 1.5 }} ratio={0.85} />
      </EffectComposer>

      {/* Контроллы камеры */}
      <OrbitControls enableZoom={false} autoRotateSpeed={0.5} />
    </Canvas>
  );
};