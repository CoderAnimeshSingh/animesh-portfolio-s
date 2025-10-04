import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Text3D, Center, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function FloatingShape({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial color={color} speed={2} distort={0.3} />
      </mesh>
    </Float>
  );
}

function Scene3DContent() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <FloatingShape position={[-4, 2, -5]} color="#8B5CF6" />
      <FloatingShape position={[4, -2, -5]} color="#06b6d4" />
      <FloatingShape position={[0, 0, -8]} color="#f97316" />
      
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Scene3DContent />
      </Canvas>
    </div>
  );
}
