import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/global-pr-points-calculator/",
  plugins: [react()],
});
