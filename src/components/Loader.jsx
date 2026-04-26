import React from "react";
import { Html } from "@react-three/drei";
import { useProgress } from "@react-three/drei";
const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="w-12 h-12 border-4 border-white/40 border-t-blue-400 rounded-full animate-spin"></div>
        <p className="text-white text-sm font-semibold">
          Loading 3D scene... {Math.round(progress)}%
        </p>
      </div>
    </Html>
  );
};

export default Loader;
