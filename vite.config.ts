import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  base: "./",
  build: {
    minify: false, // <--- Add this!
    terserOptions: {
      mangle: false, // <--- This prevents the "S" and "_" renaming
    },
  },
});
