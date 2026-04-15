import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [svelte(), tailwindcss()],
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
