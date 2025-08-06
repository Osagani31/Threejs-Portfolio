import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ReactLogo = () => {
  const groupRef = useRef();
  const electronRef1 = useRef();
  const electronRef2 = useRef();
  const electronRef3 = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
    
    // Rotate electron orbits at different speeds
    if (electronRef1.current) electronRef1.current.rotation.z += 0.02;
    if (electronRef2.current) electronRef2.current.rotation.z += 0.025;
    if (electronRef3.current) electronRef3.current.rotation.z += 0.015;
  });

  const reactBlue = "#61dafb";

  return (
    <group ref={groupRef}>
      {/* Central nucleus */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial 
          color={reactBlue} 
          emissive={reactBlue} 
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* First electron orbit (horizontal) */}
      <group ref={electronRef1} rotation={[0, 0, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.5, 0.015, 16, 100]} />
          <meshStandardMaterial 
            color={reactBlue} 
            emissive={reactBlue} 
            emissiveIntensity={0.2}
          />
        </mesh>
        {/* Electron */}
        <mesh position={[1.5, 0, 0]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial 
            color={reactBlue}
            emissive={reactBlue}
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>

      {/* Second electron orbit (60 degrees) */}
      <group ref={electronRef2} rotation={[Math.PI / 3, 0, Math.PI / 3]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.5, 0.015, 16, 100]} />
          <meshStandardMaterial 
            color={reactBlue} 
            emissive={reactBlue} 
            emissiveIntensity={0.2}
          />
        </mesh>
        {/* Electron */}
        <mesh position={[1.5, 0, 0]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial 
            color={reactBlue}
            emissive={reactBlue}
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>

      {/* Third electron orbit (-60 degrees) */}
      <group ref={electronRef3} rotation={[-Math.PI / 3, 0, -Math.PI / 3]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.5, 0.015, 16, 100]} />
          <meshStandardMaterial 
            color={reactBlue} 
            emissive={reactBlue} 
            emissiveIntensity={0.2}
          />
        </mesh>
        {/* Electron */}
        <mesh position={[1.5, 0, 0]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial 
            color={reactBlue}
            emissive={reactBlue}
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>

      {/* Additional orbital rings for more authentic look */}
      <group rotation={[Math.PI / 6, 0, Math.PI / 6]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.2, 0.01, 16, 100]} />
          <meshStandardMaterial 
            color={reactBlue} 
            emissive={reactBlue} 
            emissiveIntensity={0.1}
            transparent
            opacity={0.6}
          />
        </mesh>
      </group>

      <group rotation={[-Math.PI / 6, 0, -Math.PI / 6]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.2, 0.01, 16, 100]} />
          <meshStandardMaterial 
            color={reactBlue} 
            emissive={reactBlue} 
            emissiveIntensity={0.1}
            transparent
            opacity={0.6}
          />
        </mesh>
      </group>
    </group>
  );
};

export default ReactLogo;
