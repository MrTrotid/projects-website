// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  content: {
    collections: {
      projects: {
        type: 'content',
        schema: ({ z }) => z.object({
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
        })
      }
    }
  }
});
