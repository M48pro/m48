import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Расширяем пространство имён для использования Points и PointMaterial (если используются)
import { extend } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
extend({ Points, PointMaterial });

interface ThreeBackgroundProps {
  type?: 'dynamic-shader' | 'interactive-grid' | 'fluid-sphere' | 'glow-cube' | 'starscape';
}

const ThreeBackground: React.FC<ThreeBackgroundProps> = ({ type = 'dynamic-shader' }) => {
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

      {/* Опциональные контроллы */}
      <OrbitControls enableZoom={false} autoRotateSpeed={0.5} />
    </Canvas>
  );
};

// 🌀 Dynamic Shader Plane
function DynamicShaderPlane() {
  const ref = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  const uniforms = {
    u_time: { value: 0 },
    u_mouse: { value: new THREE.Vector2(0, 0) },
    u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
  };

  const geometry = new THREE.PlaneGeometry(10, 10, 200, 200);
  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: `
      uniform float u_time;
      varying vec2 vUv;

      void main() {
        vUv = uv;
        vec3 pos = position;
        float wave = sin(pos.x * 2.0 + u_time) * sin(pos.y * 2.0 + u_time * 0.5);
        pos.z += wave * 0.3;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragmentShader: `
      precision mediump float;
      varying vec2 vUv;

      void main() {
        vec3 color = vec3(vUv.x, vUv.y, abs(sin(vUv.x * 10.0 + vUv.y * 10.0 + u_time)));
        gl_FragColor = vec4(color, 1.0);
      }
    `
  });

  // Обновление времени
  useFrame(({ clock }) => {
    if (ref.current?.material.uniforms.u_time) {
      // @ts-ignore
      ref.current.material.uniforms.u_time.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={ref}>
      <primitive object={geometry} attach="geometry" />
      <primitive object={material} attach="material" />
    </mesh>
  );
}
function InteractiveCrystalGrid() {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  // Ловим движение мыши
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // @ts-ignore
      groupRef.current.rotation.y = mouse.current.x * 0.5 + Math.sin(clock.getElapsedTime()) * 0.1;
      // @ts-ignore
      groupRef.current.rotation.x = mouse.current.y * 0.5 + Math.cos(clock.getElapsedTime()) * 0.1;
    }
  });

  const size = 8;
  const spacing = 1.2;

  return (
    <group ref={groupRef}>
      {[...Array(size)].map((_, i) =>
        [...Array(size)].map((_, j) =>
          [...Array(size)].map((_, k) => (
            <mesh key={`${i}-${j}-${k}`} position={[i - size / 2, j - size / 2, k - size / 2]}>
              <boxGeometry args={[0.3, 0.3, 0.3]} />
              <meshStandardMaterial
                color={`hsl(${Math.random() * 360}, 70%, 60%)`}
                metalness={1}
                roughness={0}
              />
            </mesh>
          ))
        )
      )}
    </group>
  );
}
function FluidSphere() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      const positions = ref.current.geometry.attributes.position;
      const time = clock.getElapsedTime();

      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const z = positions.getZ(i);

        const wave = Math.sin(x * 3.0 + time) * 0.1 +
                     Math.sin(y * 3.0 + time) * 0.1 +
                     Math.sin(z * 3.0 + time) * 0.1;

        positions.setZ(i, wave);
      }

      positions.needsUpdate = true;
      // @ts-ignore
      ref.current.geometry.computeVertexNormals();
    }
  });

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <sphereGeometry args={[1.5, 100, 100]} />
      <meshStandardMaterial color="#a855f7" metalness={1} roughness={0} />
    </mesh>
  );
}
function GlowingCube() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      // @ts-ignore
      ref.current.rotation.y = clock.getElapsedTime() * 0.2;
      // @ts-ignore
      ref.current.rotation.x = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshPhysicalMaterial color="#facc15" emissive="#facc15" thickness={10} reflectivity={1} />
    </mesh>
  );
}
function StarScape() {
  const starsRef = useRef<THREE.Points[]>([]);

  const stars = React.useMemo(() => {
    const temp = [];
    for (let i = 0; i < 1000; i++) {
      temp.push([
        Math.random() * 50 - 25,
        Math.random() * 50 - 25,
        Math.random() * 50 - 25
      ]);
    }
    return temp;
  }, []);

  useFrame(() => {
    if (starsRef.current.length > 0) {
      starsRef.current.forEach(star => {
        // @ts-ignore
        star.position.z -= 0.05;
        // @ts-ignore
        if (star.position.z < -25) star.position.z = 25;
      });
    }
  });

  function Point({ position }: { position: [number, number, number] }) {
    const ref = useRef<THREE.Points>(null);
    starsRef.current.push(ref.current!);
    return <points ref={ref} position={position} />;
  }

  return (
    <>
      {stars.map((pos, i) => (
        <Point key={i} position={pos as [number, number, number]} />
      ))}
    </>
  );
}
