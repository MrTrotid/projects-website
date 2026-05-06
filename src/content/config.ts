import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    repo: z.string().url(),
    liveDemo: z.string().url().optional(),
    techStack: z.array(z.string()),
    category: z.array(z.string()),
    date: z.date(),
    image: z.string(),
    screenshots: z.array(z.string()).optional(),
    challenges: z.array(z.string()),
    lessons: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  projects: projectsCollection,
};
