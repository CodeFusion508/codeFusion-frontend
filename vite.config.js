import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  test: {
    environment : "happy-dom",
    globals     : true
  },
  server: {
    host : "127.0.0.1",
    port : 3000
  },
  plugins : [vue()],
  resolve : {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
});
