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
        formats: ["es"],
        entry: [
          "src/index.ts",
          "src/main.ts",
          "src/index.css",
          "src/theme.css",
        ],
      },
    },
    resolve: {
      alias: {
        $features: path.resolve("./src/features"),
        $lib: path.resolve("./src/lib"),
        $api: path.resolve("./src/shared/api"),
        $components: path.resolve("./src/shared/components"),
        $stores: path.resolve("./src/shared/stores"),
        $utils: path.resolve("./src/shared/utils"),
      },
    },
  };
});
