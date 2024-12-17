import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      protocolImports: true, // Hỗ trợ các import dạng node:crypto
    }),
  ],
  resolve: {
    alias: {
      // Polyfill các module cần thiết
      buffer: "buffer",
      crypto: "crypto-browserify",
      stream: "stream-browserify",
      util: "util",
      process: "process/browser",
    },
  },
  define: {
    global: "window", // Định nghĩa global cho các module phụ thuộc
  },
});
