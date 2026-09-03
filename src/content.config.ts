import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      type: z.string(),
      order: z.number(),
      stack: z.array(z.string()),
      image: image(),
      github: z.string().url().optional(),
      description: z.string(),
    }),
});

export const collections = { projects };
