import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import * as random from "maath/random/dist/maath-random.esm";

// Stylized Computer Monitor
const Monitor = () => {
  const screenRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (screenRef.current) {
      // Subtle screen glow pulse
      const material = screenRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group position={[0, 0.8, 0]}>
      {/* Monitor frame */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.4, 1.5, 0.1]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Screen */}
      <mesh ref={screenRef} position={[0, 0, 0.06]}>
        <boxGeometry args={[2.2, 1.3, 0.02]} />
        <meshStandardMaterial 
          color="#0f0f1a" 
          emissive="#915eff" 
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Code lines on screen */}
      {[...Array(8)].map((_, i) => (
        <mesh key={i} position={[-0.8 + (i % 2) * 0.2, 0.4 - i * 0.12, 0.08]}>
          <boxGeometry args={[0.3 + Math.random() * 0.8, 0.04, 0.01]} />
          <meshStandardMaterial 
            color={i % 3 === 0 ? "#915eff" : i % 3 === 1 ? "#00cea8" : "#aaa6c3"} 
            emissive={i % 3 === 0 ? "#915eff" : i % 3 === 1 ? "#00cea8" : "#aaa6c3"}
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
      
      {/* Monitor stand neck */}
      <mesh position={[0, -0.9, 0]}>
        <boxGeometry args={[0.15, 0.4, 0.1]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Monitor stand base */}
      <mesh position={[0, -1.15, 0.1]}>
        <boxGeometry args={[0.8, 0.05, 0.5]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
};

// Stylized Keyboard
const Keyboard = () => {
  return (
    <group position={[0, -0.35, 0.8]}>
      {/* Keyboard base */}
      <mesh>
        <boxGeometry args={[1.4, 0.05, 0.5]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.6} roughness={0.3} />
      </mesh>
      
      {/* Keys */}
      {[...Array(4)].map((_, row) => (
        [...Array(12)].map((_, col) => (
          <mesh 
            key={`${row}-${col}`} 
            position={[-0.55 + col * 0.1, 0.04, -0.15 + row * 0.1]}
          >
            <boxGeometry args={[0.08, 0.03, 0.08]} />
            <meshStandardMaterial 
              color="#2a2a4e" 
              emissive="#915eff" 
              emissiveIntensity={0.05}
            />
          </mesh>
        ))
      ))}
    </group>
  );
};

// Desk
const Desk = () => {
  return (
    <group position={[0, -0.5, 0]}>
      {/* Desk surface */}
      <mesh>
        <boxGeometry args={[4, 0.1, 2]} />
        <meshStandardMaterial color="#16162a" metalness={0.3} roughness={0.7} />
      </mesh>
      
      {/* Desk legs */}
      {[[-1.8, -0.8], [1.8, -0.8], [-1.8, 0.8], [1.8, 0.8]].map(([x, z], i) => (
        <mesh key={i} position={[x, -0.8, z]}>
          <boxGeometry args={[0.1, 1.5, 0.1]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.5} roughness={0.5} />
        </mesh>
      ))}
    </group>
  );
};

// Coffee mug
const CoffeeMug = () => {
  return (
    <group position={[1.3, -0.3, 0.5]}>
      <mesh>
        <cylinderGeometry args={[0.1, 0.08, 0.2, 16]} />
        <meshStandardMaterial color="#2a2a4e" />
      </mesh>
      {/* Handle */}
      <mesh position={[0.12, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.06, 0.02, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#2a2a4e" />
      </mesh>
    </group>
  );
};

// Floating geometric shapes
const FloatingShapes = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floating cubes */}
      <mesh position={[-2, 1, -1]} rotation={[0.5, 0.5, 0]}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial 
          color="#915eff" 
          emissive="#915eff" 
          emissiveIntensity={0.3}
          transparent
          opacity={0.7}
        />
      </mesh>
      
      <mesh position={[2.5, 0.5, -0.5]} rotation={[0.3, 0.7, 0]}>
        <octahedronGeometry args={[0.2]} />
        <meshStandardMaterial 
          color="#00cea8" 
          emissive="#00cea8" 
          emissiveIntensity={0.3}
          transparent
          opacity={0.7}
        />
      </mesh>
      
      <mesh position={[-1.5, 2, 0.5]} rotation={[0.2, 0.4, 0.6]}>
        <tetrahedronGeometry args={[0.25]} />
        <meshStandardMaterial 
          color="#ff6b6b" 
          emissive="#ff6b6b" 
          emissiveIntensity={0.3}
          transparent
          opacity={0.7}
        />
      </mesh>
    </group>
  );
};

// Rotating Stars background
const Stars = () => {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => 
    random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 }) as Float32Array
  );

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#915eff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// Computer setup
const ComputerSetup = ({ isMobile }: { isMobile: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Subtle floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <group ref={groupRef} scale={isMobile ? 0.6 : 0.85} position={[0, isMobile ? -1.5 : -1, 0]}>
      <Monitor />
      <Keyboard />
      <Desk />
      <CoffeeMug />
      <FloatingShapes />
    </group>
  );
};

// Main scene
const Scene = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[0, 2, 2]} intensity={0.5} color="#915eff" />
      
      {/* Computer setup */}
      <ComputerSetup isMobile={isMobile} />
      
      {/* Stars background */}
      <Stars />
    </>
  );
};

const ComputerScene = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={0.5}
          />
          <Scene isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputerScene;
