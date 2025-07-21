import { defineConfig } from "wxt";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  srcDir: "src",
  vite: () => ({
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }),
  manifest: {
    name: "Cookie Editor",
    description:
      "With a modern and clear design, Cookie Editor lets you view, edit, delete, and create cookies - as well as import, export and share them",
    permissions: ["cookies", "tabs", "sidePanel"],
    host_permissions: ["<all_urls>"],
  },
});
