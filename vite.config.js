import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/netology-ra16-hoc-time/",
  plugins: [react()],
});
