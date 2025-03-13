import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/arisebitcrown_frontend/", // Ensure correct base path
  plugins: [react()],
});
