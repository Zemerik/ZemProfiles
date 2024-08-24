import { z, defineCollection } from 'astro:content';

export const collections = {
  posts: defineCollection({
    type: 'content',
    schema: z.object({
      draft: z.boolean().optional(),
      audioFeedId: z.string().optional(),
      base: z.string(),
      title: z.string(),
      tags: z.array(z.string()).optional(),
      date: z.date(),
      author: z.string(),
      featuredImage: z.string(),
    }),
  }),
  articles: defineCollection({
    type: 'content',
    schema: z.object({
      audioFeedId: z.string().optional(),
      base: z.string(),
      title: z.string(),
      tags: z.array(z.string()).optional(),
      date: z.date(),
      url: z.string(),
      publication: z.string(),
      author: z.string(),
      logo: z.string(),
      featuredImage: z.string().optional(),
    }),
  }),
  streams: defineCollection({
    type: 'content',
    schema: z.object({
      base: z.string(),
      title: z.string(),
      tags: z.array(z.string()).optional(),
      date: z.date(),
      url: z.string(),
      show: z.string(),
      role: z.string(),
      logo: z.string(),
    }),
  }),
  demos: defineCollection({
    type: 'content',
    schema: z.object({
      base: z.string(),
      title: z.string(),
      tags: z.array(z.string()).optional(),
      date: z.date(),
      author: z.string(),
      featuredImage: z.string(),
    }),
  }),
  opensource: defineCollection({
    type: 'content',
    schema: z.object({
      base: z.string(),
      title: z.string(),
      tags: z.array(z.string()).optional(),
      date: z.date(),
      author: z.string(),
      featuredImage: z.string(),
    }),
  }),
  ghosts: defineCollection({
    type: 'content',
    schema: z.object({
      base: z.string(),
      title: z.string(),
      tags: z.array(z.string()).optional(),
      date: z.date(),
      url: z.string(),
      publication: z.string(),
      author: z.string(),
      logo: z.string(),
    }),
  }),
};
