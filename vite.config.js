import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // Ensure correct base path
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure the build directory is correct
  },
  server: {
    historyApiFallback: true, // Fix routing in dev mode
  },
  preview: {
    historyApiFallback: true, // Fix routing in production preview
  },
});
