import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../components/Loader";
import Iceland from "../models/Iceland";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";

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
  const audioRef = useRef(null);

  const [isPlayingMusic, setisPlayingMusic] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [showSecondaryModels, setShowSecondaryModels] = useState(false);

  const adJustPlaneForScreenSize = () => {
    let screenScale, screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 4];
      screenPosition = [0, -3, -4];
    }
    return [screenScale, screenPosition];
  };

  const adjustIcelandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPositon, islandRotation] =
    adjustIcelandForScreenSize();

  const [planeScale, planePositon] = adJustPlaneForScreenSize();

  // play music effects when page loads
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(sakura);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
      audioRef.current.preload = "none";
    }

    if (isPlayingMusic) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    return () => {
      audioRef.current?.pause();
    };
  }, [isPlayingMusic]);

  // Defer heavy models until the browser has some idle time.
  useEffect(() => {
    let timeoutId;
    let idleId;

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(() => {
        setShowSecondaryModels(true);
      });
    } else {
      timeoutId = window.setTimeout(() => {
        setShowSecondaryModels(true);
      }, 1200);
    }

    return () => {
      if (idleId) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <div className="w-full">
      <section className="w-full h-screen relative">
        <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center ">
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>
        <Canvas
          className={`w-full h-screen bg-transparent ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          } `}
          camera={{ near: 0.1, far: 1000 }}
          dpr={[1, 1.5]}
        >
          <Suspense fallback={<Loader />}>
            <Scene />
            <Sky isRotating={isRotating} />
            <Iceland
              position={islandPositon}
              scale={islandScale}
              rotate={islandRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
            />
            {showSecondaryModels && (
              <Suspense fallback={null}>
                <Bird />
                <Plane
                  isRotating={isRotating}
                  scale={planeScale}
                  position={planePositon}
                  rotation={[0, 20.1, 0.2]}
                />
              </Suspense>
            )}
          </Suspense>
        </Canvas>
        <div className="absolute bottom-2 left-2 z-10 flex flex-col justify-start items-baseline">
          <span className="font-bold text-3xl max-w-xs text-white bg-blue-500 p-2 rounded-lg shadow-lg animate-pulse">
            Drag left/right and scroll down to explore
          </span>
          <img
            src={!isPlayingMusic ? soundoff : soundon}
            className="w-10 h-10 cursor-pointer mt-3"
            alt="music icon"
            onClick={() => setisPlayingMusic(!isPlayingMusic)}
          />
        </div>
      </section>
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
