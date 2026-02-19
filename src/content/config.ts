import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const videos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    videoId: z.string(),
    tags: z.array(z.string()).default([]),
    keyTakeaways: z.array(z.string()).default([]),
    relatedPost: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, videos };
