import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import tailwind from "@astrojs/tailwind"
import pagefind from "astro-pagefind"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://bosc.org.np",
  integrations: [
    tailwind(),
    pagefind(),
    sitemap({
      // Skip pages that only redirect to /explore
      filter: (page) =>
        !page.startsWith("https://bosc.org.np/blogs") &&
        page !== "https://bosc.org.np/explore/",
    }),
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
