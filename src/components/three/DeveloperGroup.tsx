import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Stylized developer figure - semi-abstract geometry
const DeveloperModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const chestRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    // Breathing animation - subtle chest movement
    if (chestRef.current) {
      chestRef.current.scale.y = 1 + Math.sin(t * 0.8) * 0.02;
    }

    // Minimal head tilt - focused on work
    if (headRef.current) {
      headRef.current.rotation.x = Math.sin(t * 0.3) * 0.03 - 0.1;
      headRef.current.rotation.y = Math.sin(t * 0.2) * 0.02;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Head - simple geometric form */}
      <mesh ref={headRef} position={[0, 1.6, 0]}>
        <boxGeometry args={[0.35, 0.4, 0.35]} />
        <meshStandardMaterial
          color="#1a2744"
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 1.3, 0]}>
        <cylinderGeometry args={[0.1, 0.12, 0.2, 8]} />
        <meshStandardMaterial color="#1a2744" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* Torso/Chest */}
      <mesh ref={chestRef} position={[0, 0.9, 0]}>
        <boxGeometry args={[0.6, 0.7, 0.35]} />
        <meshStandardMaterial color="#0d1929" metalness={0.4} roughness={0.6} />
      </mesh>

      {/* Shoulders */}
      <mesh position={[0, 1.1, 0]}>
        <boxGeometry args={[0.8, 0.15, 0.3]} />
        <meshStandardMaterial color="#0d1929" metalness={0.4} roughness={0.6} />
      </mesh>

      {/* Left arm */}
      <group position={[-0.45, 0.8, 0.1]}>
        <mesh rotation={[0.4, 0, 0.2]}>
          <boxGeometry args={[0.12, 0.45, 0.12]} />
          <meshStandardMaterial
            color="#1a2744"
            metalness={0.3}
            roughness={0.7}
          />
        </mesh>
        {/* Forearm reaching to keyboard */}
        <mesh position={[0.1, -0.35, 0.2]} rotation={[-0.8, 0, 0]}>
          <boxGeometry args={[0.1, 0.4, 0.1]} />
          <meshStandardMaterial
            color="#1a2744"
            metalness={0.3}
            roughness={0.7}
          />
        </mesh>
      </group>

      {/* Right arm */}
      <group position={[0.45, 0.8, 0.1]}>
        <mesh rotation={[0.4, 0, -0.2]}>
          <boxGeometry args={[0.12, 0.45, 0.12]} />
          <meshStandardMaterial
            color="#1a2744"
            metalness={0.3}
            roughness={0.7}
          />
        </mesh>
        {/* Forearm reaching to keyboard */}
        <mesh position={[-0.1, -0.35, 0.2]} rotation={[-0.8, 0, 0]}>
          <boxGeometry args={[0.1, 0.4, 0.1]} />
          <meshStandardMaterial
            color="#1a2744"
            metalness={0.3}
            roughness={0.7}
          />
        </mesh>
      </group>
    </group>
  );
};

// Minimal modern desk
const DeskModel = () => {
  return (
    <group position={[0, -0.1, 0.4]}>
      {/* Desktop surface */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.8, 0.05, 0.9]} />
        <meshStandardMaterial color="#0a1525" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* Desk legs - minimal */}
      <mesh position={[-0.8, -0.4, 0.35]}>
        <boxGeometry args={[0.05, 0.8, 0.05]} />
        <meshStandardMaterial color="#0a1525" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[0.8, -0.4, 0.35]}>
        <boxGeometry args={[0.05, 0.8, 0.05]} />
        <meshStandardMaterial color="#0a1525" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[-0.8, -0.4, -0.35]}>
        <boxGeometry args={[0.05, 0.8, 0.05]} />
        <meshStandardMaterial color="#0a1525" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[0.8, -0.4, -0.35]}>
        <boxGeometry args={[0.05, 0.8, 0.05]} />
        <meshStandardMaterial color="#0a1525" metalness={0.6} roughness={0.3} />
      </mesh>
    </group>
  );
};

// Laptop with glowing screen
const LaptopModel = ({ onPulse }: { onPulse?: () => void }) => {
  const screenRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.PointLight>(null);
  const lastPulseRef = useRef(0);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // Gentle screen glow pulse
    if (glowRef.current) {
      glowRef.current.intensity = 0.8 + Math.sin(t * 2) * 0.2;
    }

    // Sync pulse every 8-12 seconds
    if (t - lastPulseRef.current > 10) {
      lastPulseRef.current = t;
      if (onPulse) onPulse();
    }
  });

  return (
    <group position={[0, 0.1, 0.2]}>
      {/* Laptop base */}
      <mesh position={[0, 0, 0]} rotation={[0.05, 0, 0]}>
        <boxGeometry args={[0.5, 0.02, 0.35]} />
        <meshStandardMaterial color="#0d1929" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Laptop screen */}
      <group position={[0, 0.18, -0.15]} rotation={[-0.3, 0, 0]}>
        {/* Screen frame */}
        <mesh>
          <boxGeometry args={[0.5, 0.35, 0.015]} />
          <meshStandardMaterial
            color="#0d1929"
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>

        {/* Screen surface - emissive */}
        <mesh ref={screenRef} position={[0, 0, 0.01]}>
          <planeGeometry args={[0.45, 0.3]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={0.3}
            metalness={0}
            roughness={1}
          />
        </mesh>

        {/* Code lines on screen - visual abstraction */}
        {[...Array(6)].map((_, i) => (
          <mesh key={i} position={[-0.1, 0.1 - i * 0.04, 0.015]}>
            <boxGeometry args={[0.2 + Math.random() * 0.1, 0.015, 0.001]} />
            <meshBasicMaterial
              color={i % 2 === 0 ? "#a855f7" : "#22d3ee"}
              transparent
              opacity={0.6}
            />
          </mesh>
        ))}
      </group>

      {/* Screen glow light */}
      <pointLight
        ref={glowRef}
        position={[0, 0.3, 0.1]}
        color="#22d3ee"
        intensity={0.8}
        distance={3}
        decay={2}
      />
    </group>
  );
};

// Main DeveloperGroup component
const DeveloperGroup = ({ onLaptopPulse }: { onLaptopPulse?: () => void }) => {
  return (
    <group position={[0, 0, 0]}>
      <DeveloperModel />
      <DeskModel />
      <LaptopModel onPulse={onLaptopPulse} />
    </group>
  );
};

export default DeveloperGroup;
