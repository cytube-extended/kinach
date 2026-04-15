import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
  build: {
    target: "esnext",
    outDir: "assets",
    emptyOutDir: true,
    cssCodeSplit: true,

    lib: {
      entry: ["src/index.ts", "src/main.ts", "src/index.css"],
      formats: ["es"],
    },
  },
});
