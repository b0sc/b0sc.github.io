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

// Official club documents such as the constitution, rendered on their own
// pages under /explore
const documents = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/documents" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    lastUpdated: z.coerce.date(),
  }),
})

export const collections = { blog, documents }
