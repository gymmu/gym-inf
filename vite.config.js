import path from "node:path";
import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react";
import { defineConfig, normalizePath } from "vite";
import prismjsPlugin from "vite-plugin-prismjs";
import { viteStaticCopy } from "vite-plugin-static-copy";

function generateAlias(absolutePath) {
  // eslint-disable-next-line no-undef
  return path.resolve(process.cwd(), absolutePath);
}

// Plugin to mock react-syntax-highlighter during SSR
function mockSyntaxHighlighterForSSR() {
  return {
    name: "mock-syntax-highlighter-ssr",
    enforce: "pre",
    resolveId(id, importer, options) {
      // Only mock during SSR build
      if (options?.ssr) {
        if (id === "react-syntax-highlighter") {
          return generateAlias("src/mocks/react-syntax-highlighter.jsx");
        }
        if (id.startsWith("react-syntax-highlighter/dist/esm/styles")) {
          return generateAlias("src/mocks/react-syntax-highlighter-styles.js");
        }
      }
      return null;
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mockSyntaxHighlighterForSSR(),
    {
      enforce: "pre",
      ...mdx({
        /* jsxImportSource: …, otherOptions… */
      }),
    },
    prismjsPlugin({
      languages: ["html", "css", "javascript", "json", "git"],
      plugins: ["copy-to-clipboard", "show-language", "match-braces"],
      theme: "dark",
      css: true,
    }),
    react({
      include: /\.(jsx|js|mdx|md|tsx|ts)$/,
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
          src: normalizePath(
            path.resolve(__dirname, "src/sites/md/praktikum") + "/*.mdx",
          ),
          dest: "./assets/sites/md/praktikum/",
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
      "@": generateAlias("src"),
      "@pages": generateAlias("src/sites/md"),
      "@pages-gym": generateAlias("src/pages/gym"),
      "@pages-fms": generateAlias("src/pages/fms"),
      "@components": generateAlias("src/components"),
      "@context": generateAlias("src/context"),
      "@icons": generateAlias("src/assets/icons"),
      "@img": generateAlias("src/assets/img"),
      "@quizzes": generateAlias("src/data/quizzes"),
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".mdx"],
  },
  build: {
    outDir: "docs",
  },
  base: "/gym-inf/",
  // SSR/SSG Configuration
  ssr: {
    // Exclude browser-only modules from SSR
    noExternal: [/@mdx-js/],
    external: [
      "react-syntax-highlighter",
      "matter-js", // Physics engine is browser-only
      "reveal.js", // Presentation library is browser-only
    ],
  },
  // SSG-specific options
  ssgOptions: {
    script: "async",
    formatting: "minify",
    mock: true, // Mock browser globals during SSG
    onBeforePageRender(route, appCtx) {
      // Optional: Custom logic before rendering each page
    },
  },
});
