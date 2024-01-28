import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["/src/assets/**.svg", "/src/assets/**/*.jpg"],
  base: "/web-portfolio/",
});
