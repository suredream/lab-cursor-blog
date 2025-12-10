// astro.config.mjs
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static", // 静态导出，方便 GitHub Pages
  srcDir: "src",
  publicDir: "public",
  site: "https://suredream.github.io/lab-cursor-blog", // 可先留空或稍后改
});
