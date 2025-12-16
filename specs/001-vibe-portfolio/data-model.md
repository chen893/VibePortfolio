# Data Model: Vibe Portfolio Website

**Feature**: 001-vibe-portfolio
**Date**: 2025-12-17
**Status**: Complete

## Overview

数据模型采用 Astro Content Collections，使用 Zod schema 进行类型验证。所有内容存储为 MDX/JSON 文件，无需数据库。

## Entity Definitions

### 1. Project (项目)

**Location**: `src/content/projects/*.mdx`

```typescript
// src/content/config.ts
import { z, defineCollection } from 'astro:content';

const projectSchema = z.object({
  // 基本信息
  title: z.string().min(1).max(100),
  slug: z.string().regex(/^[a-z0-9-]+$/),
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
  images: z.array(z.object({
    src: z.string(),
    alt: z.string().min(10),
    caption: z.string().optional(),
  })).optional(),

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
});

export type Project = z.infer<typeof projectSchema>;
```

**Example MDX File**: `src/content/projects/vibe-portfolio.mdx`

```mdx
---
title: "Vibe Portfolio"
slug: "vibe-portfolio"
description: "个人作品集网站，展示全栈开发项目"
problemStatement: "作为全栈开发者，需要一个专业且有视觉冲击力的平台来展示作品，吸引潜在合作者和雇主"
category: "web"
technologies: ["Astro", "React", "Tailwind CSS", "TypeScript"]
thumbnail:
  src: "/images/projects/vibe-portfolio/thumb.webp"
  alt: "Vibe Portfolio 首页截图，展示深色主题的现代设计"
images:
  - src: "/images/projects/vibe-portfolio/home.webp"
    alt: "首页完整视图"
    caption: "响应式首页设计"
  - src: "/images/projects/vibe-portfolio/projects.webp"
    alt: "项目列表页面"
liveUrl: "https://portfolio.example.com"
repoUrl: "https://github.com/username/vibe-portfolio"
featured: true
order: 1
publishedDate: 2025-12-17
---

## 项目亮点

这是项目的详细内容，支持 MDX 格式...
```

### 2. Developer Profile (开发者档案)

**Location**: `src/data/profile.json`

```typescript
// src/types/profile.ts
interface DeveloperProfile {
  // 基本信息
  name: string;
  title: string;
  bio: string;
  philosophy: string;

  // 头像
  avatar: {
    src: string;
    alt: string;
  };

  // 技能
  skills: Skill[];

  // 联系方式
  contact: {
    email: string;
    phone?: string;
  };

  // 社交链接
  socials: SocialLink[];

  // SEO
  seoTitle?: string;
  seoDescription?: string;
}

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'weibo' | 'bilibili' | 'other';
  url: string;
  label: string;
}
```

**Example**: `src/data/profile.json`

```json
{
  "name": "开发者姓名",
  "title": "全栈开发者 | Vibe Coding 实践者",
  "bio": "热爱用代码创造美好体验的全栈开发者...",
  "philosophy": "我相信好的代码应该像艺术品一样...",
  "avatar": {
    "src": "/images/avatar.webp",
    "alt": "开发者头像"
  },
  "skills": [
    {
      "name": "TypeScript",
      "category": "frontend",
      "proficiency": "expert",
      "icon": "typescript"
    },
    {
      "name": "React",
      "category": "frontend",
      "proficiency": "expert",
      "icon": "react"
    }
  ],
  "contact": {
    "email": "hello@example.com"
  },
  "socials": [
    {
      "platform": "github",
      "url": "https://github.com/username",
      "label": "GitHub"
    },
    {
      "platform": "linkedin",
      "url": "https://linkedin.com/in/username",
      "label": "LinkedIn"
    }
  ]
}
```

### 3. Technology Tag (技术标签)

**Location**: `src/data/technologies.json`

```typescript
// src/types/technology.ts
interface Technology {
  name: string;
  slug: string;
  icon?: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'other';
  color?: string;
}
```

**Example**: `src/data/technologies.json`

```json
[
  {
    "name": "React",
    "slug": "react",
    "icon": "react",
    "category": "frontend",
    "color": "#61DAFB"
  },
  {
    "name": "TypeScript",
    "slug": "typescript",
    "icon": "typescript",
    "category": "frontend",
    "color": "#3178C6"
  },
  {
    "name": "Node.js",
    "slug": "nodejs",
    "icon": "nodejs",
    "category": "backend",
    "color": "#339933"
  }
]
```

## Entity Relationships

```
┌─────────────────┐
│    Project      │
├─────────────────┤
│ technologies[]  │──────┐
│ category        │      │
└─────────────────┘      │
                         ▼
                 ┌───────────────┐
                 │  Technology   │
                 ├───────────────┤
                 │ name          │
                 │ slug          │
                 │ category      │
                 └───────────────┘

┌─────────────────┐
│ DeveloperProfile│
├─────────────────┤
│ skills[]        │
│ socials[]       │
└─────────────────┘
```

## Validation Rules

### Project

| 字段 | 规则 |
|------|------|
| title | 必填，1-100 字符 |
| slug | 必填，小写字母、数字、连字符 |
| description | 必填，10-500 字符 |
| technologies | 必填，至少 1 个，最多 10 个 |
| thumbnail.alt | 必填，至少 10 字符 (无障碍) |
| liveUrl | 可选，必须是有效 URL |
| repoUrl | 可选，必须是有效 URL |

### DeveloperProfile

| 字段 | 规则 |
|------|------|
| name | 必填 |
| email | 必填，有效邮箱格式 |
| skills | 至少 1 个技能 |

## State Transitions

项目内容为静态，无状态转换。

**构建时流程**:
1. Astro 读取 `src/content/projects/*.mdx`
2. Zod schema 验证每个文件
3. 生成静态 HTML 页面
4. 部署到 CDN

## Data Volume Assumptions

| 数据类型 | 初始量 | 最大预期 |
|----------|--------|----------|
| Projects | 5-10 | 50+ |
| Technologies | 10-15 | 30 |
| Images/Project | 3-5 | 10 |

## Content Collections Configuration

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    problemStatement: z.string(),
    category: z.enum(['web', 'mobile', 'backend', 'fullstack', 'tool', 'other']),
    technologies: z.array(z.string()),
    thumbnail: z.object({
      src: image(),
      alt: z.string(),
    }),
    images: z.array(z.object({
      src: image(),
      alt: z.string(),
      caption: z.string().optional(),
    })).optional(),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    publishedDate: z.coerce.date(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
```
