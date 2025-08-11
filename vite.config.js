import { defineConfig, normalizePath } from "vite"
import mdx from "@mdx-js/rollup"
import react from "@vitejs/plugin-react"
import { viteStaticCopy } from "vite-plugin-static-copy"
import path from "node:path"

function generateAlias(absolutePath) {
    // eslint-disable-next-line no-undef
  return path.resolve(process.cwd(), absolutePath);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    { 
        enforce: "pre",
        ...mdx({/* jsxImportSource: …, otherOptions… */})
    },
    react({
        include: /\.(jsx|js|mdx|md|tsx|ts)$/
    }),
    viteStaticCopy({
      targets: [
        {
          src: normalizePath(
            path.resolve(__dirname, "src/sites/md") + "/*.mdx",
          ),
          dest: "./assets/sites/md/",
        },
        {
          src: normalizePath(
            path.resolve(__dirname, "src/sites/md/fms") + "/*.mdx",
          ),
          dest: "./assets/sites/md/fms/",
        },
        {
          src: normalizePath(path.resolve(__dirname, "public/icons") + "/*svg"),
          dest: "./assets/icons/",
        },
        {
          src: normalizePath(path.resolve(__dirname, "public/audio") + "/*mp3"),
          dest: "./assets/audio/",
        },
      ],
    }),
  ],
  resolve: {
    alias: {
            '@': generateAlias('src'),
            '@pages': generateAlias('src/sites/md'),
            '@components': generateAlias('src/components'),
            '@context': generateAlias('src/context'),
            '@icons': generateAlias('public/icons')
        },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".mdx"]
  },
  build: {
    outDir: "docs",
  },
  base: "/gym-inf/",
})
