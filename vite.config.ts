import { defineConfig } from "vite";

const org = "cytube-extended";
const repo = "kinach";
const version = "dev";

export default defineConfig({
  base: `https://cdn.jsdelivr.net/gh/${org}/${repo}@${version}/assets/`,
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
