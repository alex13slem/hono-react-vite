import devServer from "@hono/vite-dev-server";
import nodeAdapter from "@hono/vite-dev-server/node";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      build: {
        rollupOptions: {
          input: ["./app/client/index.tsx"],
          output: {
            entryFileNames: "static/client.js",
            chunkFileNames: "static/assets/[name]-[hash].js",
            assetFileNames: "static/assets/[name].[ext]",
          },
        },
        emptyOutDir: false,
        copyPublicDir: false,
      },
    };
  } else {
    return {
      build: {
        ssr: true,
        minify: true,
        rollupOptions: {
          input: "./app/server/index.ts",
          output: {
            entryFileNames: "_worker.js",
          },
        },
      },

      ssr: {
        external: ["react", "react-dom"],
      },

      plugins: [
        devServer({
          adapter: nodeAdapter,
          entry: "./app/server/index.ts",
        }),
      ],
    };
  }
});
