import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

// Articles under src/content/blog. The `slug` frontmatter field becomes the
// entry id and the URL: /explore/article/<slug>
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    authImage: z.string(),
    coverImage: z.string(),
    summary: z.string(),
    type: z.enum(["Article", "Tutorial", "Video"]),
  }),
})

export const collections = { blog }
