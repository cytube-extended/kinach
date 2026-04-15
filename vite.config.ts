import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "esnext",
    outDir: "assets",
    emptyOutDir: true,

    lib: {
      entry: ["src/index.ts", "src/main.ts"],
      formats: ["es"],
    },
  },
});
