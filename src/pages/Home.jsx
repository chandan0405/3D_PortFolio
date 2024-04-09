import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import Loader from "../components/Loader";
import { SpotLight } from "@react-three/drei";
import Iceland from "../models/Iceland";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";

const Scene = () => {
  return (
    <>
      <directionalLight position={[1, 2, 1]} intensity={2} />
      <ambientLight intensity={0.5} />
      <pointLight />
      <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
    </>
  );
};

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adJustPlaneForScreenSize = () => {
    let screenScale, screenPositon;
    if (window.innerWidth < 786) {
      screenScale = [1.5, 1.5, 1.5];
      screenPositon = [0, -1.5, 1.5];
    } else {
      screenScale = [3, 3, 3];
      screenPositon = [0, -4, 0];
    }
    return [screenScale, screenPositon];
  };

  const adjustIcelandForScreenSize = () => {
    let screenScale = null;
    let screenPositon = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPositon, rotation];
  };
  const [islandScale, islandPositon, islandRotation] =
    adjustIcelandForScreenSize();
  const [planeScale, planePositon] = adJustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center ">
        {currentStage && <HomeInfo  currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        } `}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <Scene />
          <Bird />
          <Sky isRotating={isRotating} />
          <Iceland
            position={islandPositon}
            scale={islandScale}
            rotate={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            planeScale={planeScale}
            planePositon={planePositon}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
