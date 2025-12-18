import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface PanelData {
  id: string;
  position: THREE.Vector3;
  targetPosition: THREE.Vector3;
  opacity: number;
  targetOpacity: number;
  type: "analytics" | "codeReview" | "wireframe" | "content" | "design";
}

// Individual floating panel component
const WorkspacePanel = ({
  position,
  opacity,
  type,
}: {
  position: THREE.Vector3;
  opacity: number;
  type: string;
}) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Subtle floating motion
      groupRef.current.position.y += Math.sin(state.clock.elapsedTime * 2 + position.x) * 0.0005;
    }
  });

  const getContent = () => {
    switch (type) {
      case "analytics":
        return <AnalyticsPanel />;
      case "codeReview":
        return <CodeReviewPanel />;
      case "wireframe":
        return <WireframePanel />;
      case "content":
        return <ContentPanel />;
      case "design":
        return <DesignPanel />;
      default:
        return <AnalyticsPanel />;
    }
  };

  return (
    <group
      ref={groupRef}
      position={[position.x, position.y, position.z]}
    >
      {/* Panel background */}
      <mesh>
        <planeGeometry args={[0.6, 0.4]} />
        <meshStandardMaterial
          color="#0d1929"
          transparent
          opacity={opacity * 0.8}
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>
      {/* Panel border glow */}
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={[0.62, 0.42]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={opacity * 0.15} />
      </mesh>
      {/* Panel content */}
      <group position={[0, 0, 0.01]}>
        {getContent()}
      </group>
    </group>
  );
};

// Analytics dashboard abstraction
const AnalyticsPanel = () => (
  <group>
    {/* Chart bars */}
    {[...Array(5)].map((_, i) => (
      <mesh key={i} position={[-0.2 + i * 0.1, -0.05, 0]}>
        <boxGeometry args={[0.06, 0.05 + Math.random() * 0.15, 0.01]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.7} />
      </mesh>
    ))}
    {/* Metric indicators */}
    <mesh position={[0, 0.12, 0]}>
      <boxGeometry args={[0.4, 0.06, 0.01]} />
      <meshBasicMaterial color="#a855f7" transparent opacity={0.5} />
    </mesh>
  </group>
);

// Code review abstraction
const CodeReviewPanel = () => (
  <group>
    {/* Code lines with diff markers */}
    {[...Array(6)].map((_, i) => (
      <group key={i} position={[-0.15, 0.12 - i * 0.05, 0]}>
        <mesh position={[-0.1, 0, 0]}>
          <boxGeometry args={[0.015, 0.015, 0.005]} />
          <meshBasicMaterial color={i % 3 === 0 ? "#22c55e" : i % 3 === 1 ? "#ef4444" : "#6b7280"} />
        </mesh>
        <mesh position={[0.05, 0, 0]}>
          <boxGeometry args={[0.2 + Math.random() * 0.1, 0.02, 0.005]} />
          <meshBasicMaterial color="#4b5563" transparent opacity={0.6} />
        </mesh>
      </group>
    ))}
  </group>
);

// UI wireframe abstraction
const WireframePanel = () => (
  <group>
    {/* Header bar */}
    <mesh position={[0, 0.14, 0]}>
      <boxGeometry args={[0.5, 0.04, 0.005]} />
      <meshBasicMaterial color="#374151" transparent opacity={0.8} />
    </mesh>
    {/* Content blocks */}
    <mesh position={[-0.1, 0, 0]}>
      <boxGeometry args={[0.25, 0.2, 0.005]} />
      <meshBasicMaterial color="#1f2937" transparent opacity={0.7} />
    </mesh>
    <mesh position={[0.15, 0.05, 0]}>
      <boxGeometry args={[0.15, 0.1, 0.005]} />
      <meshBasicMaterial color="#22d3ee" transparent opacity={0.3} />
    </mesh>
    <mesh position={[0.15, -0.08, 0]}>
      <boxGeometry args={[0.15, 0.08, 0.005]} />
      <meshBasicMaterial color="#a855f7" transparent opacity={0.3} />
    </mesh>
  </group>
);

// Social media content abstraction
const ContentPanel = () => (
  <group>
    {/* Image placeholder */}
    <mesh position={[0, 0.03, 0]}>
      <boxGeometry args={[0.35, 0.2, 0.005]} />
      <meshBasicMaterial color="#1e3a5f" transparent opacity={0.7} />
    </mesh>
    {/* Text lines */}
    {[...Array(3)].map((_, i) => (
      <mesh key={i} position={[-0.05, -0.12 - i * 0.03, 0]}>
        <boxGeometry args={[0.3 - i * 0.05, 0.015, 0.005]} />
        <meshBasicMaterial color="#4b5563" transparent opacity={0.5} />
      </mesh>
    ))}
  </group>
);

// Design timeline abstraction
const DesignPanel = () => (
  <group>
    {/* Timeline track */}
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[0.5, 0.02, 0.005]} />
      <meshBasicMaterial color="#374151" transparent opacity={0.7} />
    </mesh>
    {/* Timeline keyframes */}
    {[...Array(5)].map((_, i) => (
      <mesh key={i} position={[-0.2 + i * 0.1, 0, 0.005]}>
        <boxGeometry args={[0.025, 0.025, 0.005]} />
        <meshBasicMaterial color={i % 2 === 0 ? "#22d3ee" : "#a855f7"} />
      </mesh>
    ))}
    {/* Layers */}
    {[...Array(3)].map((_, i) => (
      <mesh key={i} position={[-0.1, 0.08 + i * 0.04, 0]}>
        <boxGeometry args={[0.25, 0.025, 0.005]} />
        <meshBasicMaterial color="#1f2937" transparent opacity={0.6 - i * 0.1} />
      </mesh>
    ))}
  </group>
);

// Main WorkspacePanels component with controlled chaos behavior
const WorkspacePanels = ({ focusBurst }: { focusBurst: boolean }) => {
  const [panels, setPanels] = useState<PanelData[]>([]);
  const lastReorganizeRef = useRef(0);

  // Initialize panels
  useEffect(() => {
    const types: PanelData["type"][] = [
      "analytics",
      "codeReview",
      "wireframe",
      "content",
      "design",
    ];

    const initialPanels: PanelData[] = types.map((type, i) => {
      const angle = (i / types.length) * Math.PI * 2;
      const radius = 3.5;
      const pos = new THREE.Vector3(
        Math.cos(angle) * radius,
        1 + Math.sin(i) * 0.5,
        Math.sin(angle) * radius
      );
      return {
        id: type,
        position: pos.clone(),
        targetPosition: pos.clone(),
        opacity: 0.7,
        targetOpacity: 0.7,
        type,
      };
    });

    setPanels(initialPanels);
  }, []);

  // Panel reorganization logic
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const reorganizeInterval = focusBurst ? 5 : 12; // Faster during focus burst

    if (t - lastReorganizeRef.current > reorganizeInterval) {
      lastReorganizeRef.current = t;

      setPanels((prev) =>
        prev.map((panel, i) => {
          // Calculate new non-overlapping position
          const angle = ((i + Math.random() * 0.5) / prev.length) * Math.PI * 2;
          const radius = 3.2 + Math.random() * 0.6;
          const newTarget = new THREE.Vector3(
            Math.cos(angle) * radius,
            0.8 + Math.random() * 1.2,
            Math.sin(angle) * radius
          );

          return {
            ...panel,
            targetPosition: newTarget,
            targetOpacity: 0.5 + Math.random() * 0.4,
          };
        })
      );
    }

    // Smooth interpolation to target positions
    setPanels((prev) =>
      prev.map((panel) => ({
        ...panel,
        position: panel.position.lerp(panel.targetPosition, focusBurst ? 0.02 : 0.008),
        opacity: panel.opacity + (panel.targetOpacity - panel.opacity) * 0.01,
      }))
    );
  });

  return (
    <group>
      {panels.map((panel) => (
        <WorkspacePanel
          key={panel.id}
          position={panel.position}
          opacity={panel.opacity}
          type={panel.type}
        />
      ))}
    </group>
  );
};

export default WorkspacePanels;
