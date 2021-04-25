import React from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { Icosahedron } from "@react-three/drei";
import {
  EffectComposer,
  Glitch,
  Vignette,
  Noise,
} from "@react-three/postprocessing";

interface ThreeRef {
  rotation: { x: number; y: number; z: number };
  position: {
    y: number;
  };
}

const Scene = () => {
  const ico = React.useRef<ThreeRef>();

  const r = 1;

  useFrame((state) => {
    const current = ico.current;
    if (ico && ico.current) {
      ico.current.rotation.x = ico.current.rotation.y = ico.current.rotation.z +=
        0.004 * r + 0.002;
      ico.current.position.y =
        Math.cos(state.clock.getElapsedTime() * 0.8) * (r + 0.002);
    }
  });

  return (
    //@ts-ignore
    <Icosahedron ref={ico} position={[0, 0, 0]} args={[6]}>
      <meshPhongMaterial color="#111" />
    </Icosahedron>
  );
};

export function TagFloater() {
  return (
    <Canvas
      gl={{
        powerPreference: "default",
        antialias: false,
        stencil: false,
        depth: false,
        alpha: true,
      }}
      camera={{ position: [0, 0, 15], near: 5, far: 40 }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight castShadow position={[2.5, 12, 12]} intensity={1} />
      <pointLight position={[20, 20, 20]} />
      <pointLight position={[-20, -20, -20]} intensity={1} />
      <React.Suspense fallback={null}>
        <Scene />
        <EffectComposer multisampling={0}>
          <Glitch delay={[1, 2]} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
          <Noise />
        </EffectComposer>
      </React.Suspense>
    </Canvas>
  );
}
