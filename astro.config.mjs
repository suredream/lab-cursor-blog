// astro.config.mjs
import { defineConfig } from "astro/config";

export default defineConfig({
  output: 'static',
  srcDir: 'src',
  publicDir: 'public',
  site: 'https://suredream.github.io',
  base: '/lab-cursor-blog',
});
