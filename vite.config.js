import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.glb"],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (
            id.includes("three") ||
            id.includes("@react-three/fiber") ||
            id.includes("@react-three/drei") ||
            id.includes("@react-spring/three")
          ) {
            return "three-vendor";
          }

          if (
            id.includes("react-router-dom") ||
            id.includes("@remix-run/router")
          ) {
            return "router-vendor";
          }

          if (id.includes("react-toastify")) {
            return "toast-vendor";
          }

          if (id.includes("react") || id.includes("scheduler")) {
            return "react-vendor";
          }

          return "vendor";
        },
      },
    },
  },
});
