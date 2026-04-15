import { defineConfig } from "vite";

export default defineConfig({
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
