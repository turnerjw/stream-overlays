import React from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { Box, Sphere, Icosahedron, ContactShadows } from "@react-three/drei";
import {
  EffectComposer,
  SSAO,
  SMAA,
  Glitch,
  Vignette,
  Noise,
} from "@react-three/postprocessing";

const Scene = () => {
  //   const sphere = React.useRef();
  //   const box = React.useRef();
  const ico = React.useRef();

  const r = 1;

  //   useFrame((state) => {
  //     sphere.current.rotation.x = sphere.current.rotation.y = sphere.current.rotation.z +=
  //       0.004 * r;
  //     sphere.current.position.y = Math.sin(state.clock.getElapsedTime() * r) * r;
  //   });

  //   useFrame((state) => {
  //     box.current.rotation.x = box.current.rotation.y = box.current.rotation.z +=
  //       0.004 * r;
  //     box.current.position.y = Math.cos(state.clock.getElapsedTime() * r) * r;
  //   });

  useFrame((state) => {
    ico.current.rotation.x = ico.current.rotation.y = ico.current.rotation.z +=
      0.004 * r + 0.002;
    ico.current.position.y =
      Math.cos(state.clock.getElapsedTime() * 0.8) * (r + 0.002);
  });

  return (
    <>
      {/* <Sphere ref={sphere} args={[2, 32, 32]}>
        <meshPhongMaterial color="#000" />
      </Sphere>
      <Box ref={box} position={[3, 3, 1]} args={[2, 2, 2]}>
        <meshPhongMaterial color="#000" />
      </Box> */}
      <Icosahedron ref={ico} position={[4, 0, 0]} args={[5, 0]}>
        <meshPhongMaterial color="#111" />
      </Icosahedron>
    </>
  );
};

export function Floater() {
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
        {/* <ContactShadows
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -7, 0]}
          opacity={1}
          width={40}
          height={40}
          blur={1}
          far={9}
        /> */}
        {/* <EffectComposer multisampling={0}>
          <SSAO
            samples={25}
            intensity={40}
            luminanceInfluence={0.5}
            radius={10}
            scale={0.5}
            bias={0.5}
          />
          <SMAA edgeDetectionMode={EdgeDetectionMode.DEPTH} />
        </EffectComposer> */}
        <EffectComposer multisampling={0}>
          <Glitch delay={[1, 2]} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
          <Noise />
        </EffectComposer>
      </React.Suspense>
      {/* <Rig /> */}
    </Canvas>
  );
}
