import { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import DeveloperGroup from "./DeveloperGroup";
import ParallelThoughtEngine from "./ParallelThoughtEngine";
import WorkspacePanels from "./WorkspacePanels";

// Slow orbital camera system
const CameraSystem = () => {
  const { camera } = useThree();
  const cameraGroupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // Slow orbital movement around Y-axis
    const orbitRadius = 7;
    const orbitSpeed = 0.03;
    camera.position.x = Math.sin(t * orbitSpeed) * orbitRadius;
    camera.position.z = Math.cos(t * orbitSpeed) * orbitRadius;

    // Small sinusoidal vertical drift
    camera.position.y = 2.5 + Math.sin(t * 0.1) * 0.3;

    // Always look at the developer
    camera.lookAt(0, 0.5, 0);
  });

  return null;
};

// Lighting setup
const LightingGroup = () => {
  return (
    <group>
      {/* Ambient light - low intensity for soft overall illumination */}
      <ambientLight intensity={0.15} color="#a0c4ff" />

      {/* Key light - soft directional from above-front-right */}
      <directionalLight
        position={[5, 8, 3]}
        intensity={0.4}
        color="#ffffff"
        castShadow
      />

      {/* Rim light - behind developer for silhouette clarity */}
      <pointLight
        position={[0, 3, -4]}
        intensity={0.6}
        color="#22d3ee"
        distance={10}
        decay={2}
      />

      {/* Accent light from left */}
      <pointLight
        position={[-5, 2, 0]}
        intensity={0.3}
        color="#a855f7"
        distance={8}
        decay={2}
      />
    </group>
  );
};

// Environment - subtle depth fog and grid
const EnvironmentGroup = () => {
  const { scene } = useThree();

  useEffect(() => {
    // Add fog for depth
    scene.fog = new THREE.FogExp2("#050810", 0.04);
    return () => {
      scene.fog = null;
    };
  }, [scene]);

  return (
    <group>
      {/* Depth grid - very subtle */}
      <gridHelper
        args={[40, 40, "#1e3a5f", "#0d1929"]}
        position={[0, -1.5, 0]}
      />

      {/* Particle field for depth */}
      <ParticleField />
    </group>
  );
};

// Subtle particle field for atmosphere
const ParticleField = () => {
  const count = 150;
  const particlesRef = useRef<THREE.Points>(null);

  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = Math.random() * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#22d3ee"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
};

// Data pulse effect - light beam from modules to laptop
const DataPulseLines = ({ active }: { active: boolean }) => {
  const lineRef = useRef<THREE.Mesh>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (active) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 800);
      return () => clearTimeout(timer);
    }
  }, [active]);

  useFrame((state) => {
    if (lineRef.current && visible) {
      const scale = Math.sin(state.clock.elapsedTime * 10) * 0.5 + 0.5;
      lineRef.current.scale.x = scale;
    }
  });

  if (!visible) return null;

  return (
    <mesh ref={lineRef} position={[0, 0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[0.01, 0.01, 3, 8]} />
      <meshBasicMaterial color="#22d3ee" transparent opacity={0.6} />
    </mesh>
  );
};

// Import React for useMemo
import React from "react";

// Main scene component
const Scene = () => {
  const [focusBurst, setFocusBurst] = useState(false);
  const [pulseActive, setPulseActive] = useState(false);
  const lastBurstRef = useRef(0);

  // Focus burst cycle - every 12-15 seconds
  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (t - lastBurstRef.current > 14) {
      lastBurstRef.current = t;
      setFocusBurst(true);
      setTimeout(() => setFocusBurst(false), 2500); // 2.5 second burst
    }
  });

  const handleLaptopPulse = () => {
    setPulseActive(true);
    setTimeout(() => setPulseActive(false), 1000);
  };

  return (
    <>
      <CameraSystem />
      <LightingGroup />
      <EnvironmentGroup />

      {/* Central Anchor - Developer, Desk, Laptop */}
      <DeveloperGroup onLaptopPulse={handleLaptopPulse} />

      {/* Parallel Thought Engine - Orbiting Modules */}
      <ParallelThoughtEngine focusBurst={focusBurst} />

      {/* Workspace Panels - Controlled Chaos */}
      <WorkspacePanels focusBurst={focusBurst} />

      {/* Data Pulse Effects */}
      <DataPulseLines active={pulseActive} />
    </>
  );
};

// Main export component
const ParallelWorkspaceScene = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 2.5, 7], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ParallelWorkspaceScene;
