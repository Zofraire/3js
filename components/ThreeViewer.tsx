"use client"; // Используем клиентский компонент в Next.js 13+

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import * as THREE from "three";

const ThreeViewer = ({ modelUrl }: { modelUrl: string }) => {
  const [fbxModel, setFbxModel] = useState<THREE.Object3D | null>(null);

  useEffect(() => {
    const loadFBXModel = async () => {
      // Динамически загружаем FBXLoader
      const { FBXLoader } = await import('three/examples/jsm/loaders/FBXLoader');
      
      const loader = new FBXLoader();
      loader.load(
        modelUrl,
        (object: THREE.Object3D) => {
          object.scale.set(0.01, 0.01, 0.01); // Масштаб модели

          setFbxModel(object);
        },
        undefined,
        (error: ErrorEvent) => console.error("Ошибка загрузки модели FBX:", error.message)
      );
    };

    loadFBXModel();
  }, [modelUrl]);

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Canvas
        camera={{ position: [0, 15, -8], fov: 50 }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <OrbitControls />
        {fbxModel && <primitive object={fbxModel} />}
      </Canvas>
    </div>
  );
};

export default ThreeViewer;
