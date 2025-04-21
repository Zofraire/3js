"use client"; // Используем клиентский компонент в Next.js 13+

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import * as THREE from "three";

const ThreeViewer = ({ modelUrl }: { modelUrl: string }) => {
  const [fbxModel, setFbxModel] = useState<THREE.Object3D | null>(null);

  useEffect(() => {
    // Асинхронная функция для загрузки модели
    const loadFBXModel = async () => {
      try {
        const { FBXLoader } = await import("three-stdlib"); // Используем FBXLoader из three-stdlib

        const loader = new FBXLoader();
        loader.load(
          modelUrl, // Используем переданный путь к FBX модели
          (object: THREE.Object3D) => {
            object.scale.set(0.01, 0.01, 0.01); // Масштаб модели
            setFbxModel(object);
          },
          undefined,
          (error: ErrorEvent) => console.error("Ошибка загрузки модели FBX:", error.message)
        );
      } catch (error) {
        console.error("Ошибка при загрузке FBXLoader:", error);
      }
    };

    loadFBXModel(); // Вызываем асинхронную функцию

  }, [modelUrl]); // Будет вызвано, когда modelUrl изменится

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
