import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      order: z.number().optional(),
      image: image().optional(),
      tags: z.array(z.string()).optional(),
      authors: z.array(z.string()).optional(),
      draft: z.boolean().optional(),
    }),
})

const authors = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/authors' }),
  schema: z.object({
    name: z.string(),
    pronouns: z.string().optional(),
    avatar: z.string().url().or(z.string().startsWith('/')),
    bio: z.string().optional(),
    mail: z.string().email().optional(),
    website: z.string().url().optional(),
    twitter: z.string().url().optional(),
    github: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    discord: z.string().url().optional(),
  }),
})

const ctfs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/ctfs' }),
  schema: z.object({
    name: z.string(),
    url: z.string().url(),
    team: z.string().optional(),
    placement: z.string(),
    description: z.string().optional(),
    month: z.number().min(1).max(12),
    year: z.number(),
    // Optional extended review fields for detail pages
    review: z.string().optional(),
    quality: z.union([z.number(), z.string()]).optional(),
    wouldPlayAgain: z.union([z.boolean(), z.string()]).optional(),
    notes: z.string().optional(),
    writeupUrl: z
      .union([z.string().url(), z.string().startsWith('/')])
      .optional(),
  }),
})

export const collections = { blog, authors, ctfs }
