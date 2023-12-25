import { hattip } from "@hattip/vite";
import react from "@vitejs/plugin-react";
import ssr from "vike/plugin";
import { defineConfig } from "vite";
import vercel from "vite-plugin-vercel";

export default defineConfig({
  plugins: [
    hattip(),
    react({
      jsxRuntime: "automatic",
    }),
    ssr({
      prerender: true,
    }),
    vercel(),
  ],
});
