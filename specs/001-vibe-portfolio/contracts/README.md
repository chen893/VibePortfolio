# Contracts: Vibe Portfolio Website

**Feature**: 001-vibe-portfolio
**Date**: 2025-12-17

## Overview

本项目是纯静态网站，无后端 API。所有数据通过 Astro Content Collections 在构建时处理。

## Data Contracts

### Project Collection Schema

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

export const projectSchema = z.object({
  title: z.string().min(1).max(100),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  description: z.string().min(10).max(500),
  problemStatement: z.string().min(10).max(1000),
  category: z.enum(['web', 'mobile', 'backend', 'fullstack', 'tool', 'other']),
  technologies: z.array(z.string()).min(1).max(10),
  thumbnail: z.object({
    src: z.string(),
    alt: z.string().min(10),
  }),
  images: z.array(z.object({
    src: z.string(),
    alt: z.string().min(10),
    caption: z.string().optional(),
  })).optional(),
  liveUrl: z.string().url().optional(),
  repoUrl: z.string().url().optional(),
  featured: z.boolean().default(false),
  order: z.number().int().min(0).default(0),
  publishedDate: z.coerce.date(),
  seoTitle: z.string().max(60).optional(),
  seoDescription: z.string().max(160).optional(),
});

export type Project = z.infer<typeof projectSchema>;
```

### Profile Data Contract

```typescript
// src/types/profile.ts
export interface DeveloperProfile {
  name: string;
  title: string;
  bio: string;
  philosophy: string;
  avatar: {
    src: string;
    alt: string;
  };
  skills: Skill[];
  contact: {
    email: string;
    phone?: string;
  };
  socials: SocialLink[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'weibo' | 'bilibili' | 'other';
  url: string;
  label: string;
}
```

### Technology Data Contract

```typescript
// src/types/technology.ts
export interface Technology {
  name: string;
  slug: string;
  icon?: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'other';
  color?: string;
}
```

## URL Routes

| 路由 | 页面 | 数据源 |
|------|------|--------|
| `/` | 首页 | featured projects, profile |
| `/projects` | 项目列表 | all projects |
| `/projects/[slug]` | 项目详情 | single project |
| `/about` | 关于页面 | profile |

## Component Props Contracts

### ProjectCard

```typescript
interface ProjectCardProps {
  project: {
    title: string;
    slug: string;
    description: string;
    thumbnail: { src: string; alt: string };
    technologies: string[];
    category: string;
  };
  variant?: 'default' | 'featured';
}
```

### SkillBadge

```typescript
interface SkillBadgeProps {
  skill: {
    name: string;
    proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    icon?: string;
  };
}
```

### SocialLinks

```typescript
interface SocialLinksProps {
  links: Array<{
    platform: string;
    url: string;
    label: string;
  }>;
  variant?: 'icon' | 'full';
}
```

## Notes

由于本项目是静态站点，不存在传统的 REST/GraphQL API contracts。所有数据契约通过 TypeScript 类型和 Zod schema 在编译时验证。
