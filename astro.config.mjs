import { defineConfig } from "astro/config"
import mdx from '@astrojs/mdx'

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        experimentalThemes: {
          light: "vitesse-light",
          dark: "material-theme-palenight",
        },
        wrap: true,
      },
      drafts: true,
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "aurora-x",
    },
    gfm: true,
  },
})
