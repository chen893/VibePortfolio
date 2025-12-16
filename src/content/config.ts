import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    // 基本信息
    title: z.string().min(1).max(100),
    description: z.string().min(10).max(500),
    problemStatement: z.string().min(10).max(1000),

    // 分类
    category: z.enum(['web', 'mobile', 'backend', 'fullstack', 'tool', 'other']),
    technologies: z.array(z.string()).min(1).max(10),

    // 媒体
    thumbnail: z.object({
      src: z.string(),
      alt: z.string().min(10),
    }),
    images: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string().min(10),
          caption: z.string().optional(),
        })
      )
      .optional(),

    // 链接
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),

    // 元数据
    featured: z.boolean().default(false),
    order: z.number().int().min(0).default(0),
    publishedDate: z.coerce.date(),

    // SEO
    seoTitle: z.string().max(60).optional(),
    seoDescription: z.string().max(160).optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
