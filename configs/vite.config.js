import { defineConfig } from "vite";

// Served from a custom domain (see CNAME) at the site root, not from a
// GitHub Pages project subpath.
export default defineConfig({
  root: "src",
  base: "/",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
