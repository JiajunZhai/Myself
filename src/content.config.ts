import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.string().or(z.optional(image())),
			tags: z.array(z.string()).default(['Others']),
			draft: z.boolean().default(false),
			lang: z.enum(['en', 'zh']).default('zh'),
		}),
});

const socials = defineCollection({
	loader: glob({ base: './src/content/socials', pattern: '**/*.{yaml,yml,json}' }),
	schema: z.object({
		platform: z.string(),
		url: z.string().url(),
		icon: z.string(),
		color: z.string().optional(),
	}),
});

const skills = defineCollection({
	loader: glob({ base: './src/content/skills', pattern: '**/*.{yaml,yml,json}' }),
	schema: z.object({
		name: z.string(),
		icon: z.string(),
		category: z.enum(['Frontend', 'Backend', 'Tools', 'Design']),
		level: z.number().min(0).max(100),
	}),
});

const myProjects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{yaml,yml,json}' }),
	schema: z.object({
		repoName: z.string(),
		displayTitle: z.string(),
		description: z.string(),
		isFeatured: z.boolean().default(false),
	}),
});

export const collections = { blog, socials, skills, myProjects };
