import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import tailwind from "@astrojs/tailwind"
import pagefind from "astro-pagefind"

// https://astro.build/config
export default defineConfig({
  site: "https://bosc.org.np",
  integrations: [
    tailwind(),
    pagefind(),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        themes: {
          light: "vitesse-light",
          dark: "material-theme-palenight",
        },
        wrap: true,
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "aurora-x",
    },
    gfm: true,
  },
})
