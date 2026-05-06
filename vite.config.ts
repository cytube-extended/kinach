import path from "path";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";
  const outDir = isDev ? "build" : "dist";

  return {
    plugins: [svelte(), tailwindcss()],
    build: {
      target: "esnext",
      outDir,
      emptyOutDir: true,
      cssCodeSplit: true,

      lib: {
        entry: [
          "src/index.ts",
          "src/main.ts",
          "src/index.css",
          "src/theme.css",
        ],
        formats: ["es"],
      },
    },
    resolve: {
      alias: {
        $lib: path.resolve("./src/lib"),
      },
    },
  };
});
