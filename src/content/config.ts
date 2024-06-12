import { defineCollection, z } from "astro:content";

const experiences = defineCollection({
  schema: ({ image }) =>
    z.object({
      sortOrder: z.number(),
      title: z.string(),
      company: z.string(),
      duration: z.string(),
      icon: image(),
      strong: z.boolean().optional(),
    }),
});

export const collections = {
  experiences,
};
