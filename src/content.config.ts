import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const issues = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/issues' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['question', 'bug', 'other']),
    description: z.string(),
    cmsVersion: z.string().optional(),
  }),
});

export const collections = { issues };
