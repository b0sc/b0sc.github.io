import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import tailwind from "@astrojs/tailwind"
import pagefind from "astro-pagefind"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://bosc.org.np",
  redirects: {
    // The constitution used to be published as an article
    "/explore/article/constitution": {
      status: 301,
      destination: "/explore/constitution",
    },
    "/blogs/constitution": {
      status: 301,
      destination: "/explore/constitution",
    },
  },
  integrations: [
    tailwind(),
    pagefind(),
    sitemap({
      // Skip pages that only redirect to /explore
      filter: (page) =>
        !page.startsWith("https://bosc.org.np/blogs") &&
        page !== "https://bosc.org.np/explore/" &&
        page !== "https://bosc.org.np/explore/article/constitution/",
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
