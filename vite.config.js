import { defineConfig, normalizePath } from "vite"
import mdx from "@mdx-js/rollup"
import react from "@vitejs/plugin-react"
import { viteStaticCopy } from "vite-plugin-static-copy"
import path from "node:path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    { enforce: "pre", ...mdx(/* jsxImportSource: …, otherOptions… */) },
    react(),
    viteStaticCopy({
      targets: [
        {
          src: normalizePath(
            path.resolve(__dirname, "src/sites/md") + "/*.mdx",
          ),
          dest: "./assets",
        },
      ],
    }),
  ],
  build: {
    outDir: "docs",
  },
  base: "/gym-inf/",
})
