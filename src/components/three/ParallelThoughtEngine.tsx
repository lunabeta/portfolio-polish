import { useRef, useMemo, useState } from "react";
import { useFrame, ThreeEvent } from "@react-three/fiber";
import * as THREE from "three";

interface OrbitModuleProps {
  radius: number;
  speed: number;
  offset: number;
  yOffset?: number;
  children: React.ReactNode;
  name?: string;
}

// Generic orbit wrapper for modules with hover detection
const OrbitModule = ({
  radius,
  speed,
  offset,
  yOffset = 0,
  children,
  name = "module",
}: OrbitModuleProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const targetScale = useRef(1);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime * speed + offset;
    groupRef.current.position.x = Math.cos(t) * radius;
    groupRef.current.position.z = Math.sin(t) * radius;
    groupRef.current.position.y = yOffset + Math.sin(t * 2) * 0.1;
    
    // Smooth scale animation on hover
    targetScale.current = hovered ? 1.3 : 1;
    const currentScale = groupRef.current.scale.x;
    const newScale = currentScale + (targetScale.current - currentScale) * 0.1;
    groupRef.current.scale.setScalar(newScale);
  });

  return (
    <group 
      ref={groupRef}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
    >
      {/* Hover glow effect */}
      {hovered && (
        <pointLight position={[0, 0, 0]} color="#22d3ee" intensity={2} distance={1.5} />
      )}
      {children}
    </group>
  );
};

// Frontend Module - UI planes and component blocks
const FrontendModule = ({ hovered }: { hovered?: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* UI Grid planes */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.4, 0.3, 0.02]} />
        <meshStandardMaterial
          color="#22d3ee"
          transparent
          opacity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <mesh position={[0.15, 0.1, 0.03]}>
        <boxGeometry args={[0.15, 0.08, 0.01]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh position={[-0.1, -0.05, 0.03]}>
        <boxGeometry args={[0.12, 0.12, 0.01]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={0.2}
        />
      </mesh>
      {/* Component blocks */}
      {[...Array(3)].map((_, i) => (
        <mesh key={i} position={[-0.12 + i * 0.12, -0.12, 0.02]}>
          <boxGeometry args={[0.08, 0.04, 0.01]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
};

// Backend Module - API flow lines and routes
const BackendModule = () => {
  const groupRef = useRef<THREE.Group>(null);
  const pulseRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
    if (pulseRef.current) {
      const scale = 0.5 + Math.sin(state.clock.elapsedTime * 3) * 0.2;
      pulseRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group ref={groupRef}>
      {/* API endpoint node */}
      <mesh position={[0, 0, 0]}>
        <octahedronGeometry args={[0.12, 0]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.4}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      {/* Request/Response flow tubes */}
      <mesh position={[0.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.015, 0.015, 0.25, 8]} />
        <meshStandardMaterial
          color="#22d3ee"
          transparent
          opacity={0.6}
          emissive="#22d3ee"
          emissiveIntensity={0.2}
        />
      </mesh>
      <mesh position={[-0.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.015, 0.015, 0.25, 8]} />
        <meshStandardMaterial
          color="#a855f7"
          transparent
          opacity={0.6}
          emissive="#a855f7"
          emissiveIntensity={0.2}
        />
      </mesh>
      {/* Pulse indicator */}
      <mesh ref={pulseRef} position={[0, 0, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

// Database Module - Cylindrical data structures
const DatabaseModule = () => {
  const groupRef = useRef<THREE.Group>(null);
  const dataRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
    // Read/write pulse animation
    if (dataRef.current) {
      dataRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Database cylinder layers */}
      {[...Array(3)].map((_, i) => (
        <mesh key={i} position={[0, -0.08 + i * 0.08, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.06, 16]} />
          <meshStandardMaterial
            color={i === 1 ? "#22d3ee" : "#1e3a5f"}
            metalness={0.7}
            roughness={0.3}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
      {/* Data read indicator */}
      <mesh ref={dataRef} position={[0, 0.2, 0]}>
        <boxGeometry args={[0.05, 0.05, 0.05]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
};

// Auth Security Module - Token rings
const AuthSecurityModule = () => {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.5;
      ring1Ref.current.rotation.z = t * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -t * 0.4;
      ring2Ref.current.rotation.y = t * 0.6;
    }
  });

  return (
    <group>
      {/* Token rings */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[0.12, 0.015, 8, 32]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      <mesh ref={ring2Ref}>
        <torusGeometry args={[0.09, 0.012, 8, 32]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      {/* Central lock */}
      <mesh>
        <boxGeometry args={[0.04, 0.05, 0.04]} />
        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
};

// Cloud Storage Module
const CloudStorageModule = () => {
  const groupRef = useRef<THREE.Group>(null);
  const uploadRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
    if (uploadRef.current) {
      uploadRef.current.position.y = 0.1 + Math.sin(state.clock.elapsedTime * 2) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Cloud-like blocks */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.15, 0.08, 0.08]} />
        <meshStandardMaterial
          color="#1e3a5f"
          transparent
          opacity={0.7}
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>
      <mesh position={[0.06, 0.04, 0]}>
        <boxGeometry args={[0.1, 0.06, 0.08]} />
        <meshStandardMaterial
          color="#22d3ee"
          transparent
          opacity={0.5}
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>
      {/* Upload arrow */}
      <mesh ref={uploadRef} position={[0, 0.1, 0]}>
        <coneGeometry args={[0.03, 0.06, 4]} />
        <meshBasicMaterial color="#a855f7" />
      </mesh>
    </group>
  );
};

// Data Recovery Module - Self-healing disk
const DataRecoveryModule = () => {
  const groupRef = useRef<THREE.Group>(null);
  const fragmentsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.3;
    }
    // Self-healing animation - fragments briefly misalign then realign
    if (fragmentsRef.current) {
      const cycle = (t % 8) / 8; // 8-second cycle
      const spread = cycle < 0.3 ? Math.sin(cycle * Math.PI / 0.3) * 0.03 : 0;
      fragmentsRef.current.children.forEach((child, i) => {
        const angle = (i / 4) * Math.PI * 2;
        (child as THREE.Mesh).position.x = Math.cos(angle) * (0.08 + spread);
        (child as THREE.Mesh).position.z = Math.sin(angle) * (0.08 + spread);
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Disk base */}
      <mesh>
        <cylinderGeometry args={[0.1, 0.1, 0.02, 16]} />
        <meshStandardMaterial
          color="#0d1929"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      {/* Disk fragments */}
      <group ref={fragmentsRef}>
        {[...Array(4)].map((_, i) => (
          <mesh key={i} position={[0.08, 0.02, 0]}>
            <boxGeometry args={[0.03, 0.01, 0.05]} />
            <meshStandardMaterial
              color="#22d3ee"
              emissive="#22d3ee"
              emissiveIntensity={0.3}
            />
          </mesh>
        ))}
      </group>
      {/* Binary indicators */}
      <pointLight position={[0, 0.1, 0]} color="#22d3ee" intensity={0.3} distance={0.5} />
    </group>
  );
};

// Main Parallel Thought Engine
const ParallelThoughtEngine = ({ focusBurst }: { focusBurst: boolean }) => {
  const speedMultiplier = focusBurst ? 1.5 : 1;

  return (
    <group>
      {/* Core Orbit - Slow, Stable */}
      <OrbitModule radius={2.5} speed={0.15 * speedMultiplier} offset={0} yOffset={0.5}>
        <FrontendModule />
      </OrbitModule>

      <OrbitModule radius={2.5} speed={0.15 * speedMultiplier} offset={Math.PI * 0.67} yOffset={0.3}>
        <BackendModule />
      </OrbitModule>

      <OrbitModule radius={2.5} speed={0.15 * speedMultiplier} offset={Math.PI * 1.33} yOffset={0.7}>
        <DatabaseModule />
      </OrbitModule>

      {/* Secondary Orbit - Faster, varied heights */}
      <OrbitModule radius={1.8} speed={0.25 * speedMultiplier} offset={0} yOffset={1.2}>
        <AuthSecurityModule />
      </OrbitModule>

      <OrbitModule radius={1.8} speed={0.25 * speedMultiplier} offset={Math.PI * 0.67} yOffset={0.9}>
        <CloudStorageModule />
      </OrbitModule>

      <OrbitModule radius={1.8} speed={0.25 * speedMultiplier} offset={Math.PI * 1.33} yOffset={1.4}>
        <DataRecoveryModule />
      </OrbitModule>
    </group>
  );
};

export default ParallelThoughtEngine;
