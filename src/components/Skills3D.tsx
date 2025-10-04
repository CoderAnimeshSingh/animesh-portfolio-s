import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float, MeshDistortMaterial } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

interface SkillSphereProps {
  position: [number, number, number];
  skill: string;
  color: string;
}

function SkillSphere({ position, skill, color }: SkillSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position}>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <sphereGeometry args={[0.8, 32, 32]} />
          <MeshDistortMaterial color={color} speed={2} distort={0.2} roughness={0.4} />
        </mesh>
        <Text
          position={[0, 0, 1]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {skill}
        </Text>
      </group>
    </Float>
  );
}

export default function Skills3D() {
  const skills = [
    { name: 'React', position: [-3, 2, 0] as [number, number, number], color: '#61dafb' },
    { name: 'Node.js', position: [3, 2, 0] as [number, number, number], color: '#68a063' },
    { name: 'Python', position: [-3, -1, 0] as [number, number, number], color: '#3776ab' },
    { name: 'MongoDB', position: [3, -1, 0] as [number, number, number], color: '#4db33d' },
    { name: 'TypeScript', position: [0, 0.5, -2] as [number, number, number], color: '#3178c6' },
    { name: 'Git/GitHub', position: [0, 3.5, 0] as [number, number, number], color: '#f05032' },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
          Technical Skills
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Interact with the 3D skills - hover and drag to explore
        </p>
        <div className="h-[600px] w-full">
          <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -10]} color="#8B5CF6" intensity={0.5} />
            
            {skills.map((skill, index) => (
              <SkillSphere
                key={index}
                position={skill.position}
                skill={skill.name}
                color={skill.color}
              />
            ))}
            
            <OrbitControls enableZoom={true} enablePan={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
