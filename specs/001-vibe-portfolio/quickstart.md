# Quickstart: Vibe Portfolio Website

**Feature**: 001-vibe-portfolio
**Date**: 2025-12-17

## Prerequisites

- Node.js 20+ (推荐使用 fnm 或 nvm 管理版本)
- pnpm 9+ (推荐) 或 npm 10+
- Git
- 代码编辑器 (推荐 VS Code + Astro 扩展)

## Quick Setup

```bash
# 1. 克隆仓库
git clone <repo-url>
cd vibe-portfolio

# 2. 安装依赖
pnpm install

# 3. 启动开发服务器
pnpm dev

# 4. 打开浏览器
# http://localhost:4321
```

## Project Structure

```text
vibe-portfolio/
├── src/
│   ├── components/     # UI 组件
│   ├── content/        # 项目内容 (MDX)
│   ├── data/           # 静态数据 (JSON)
│   ├── layouts/        # 页面布局
│   ├── pages/          # 路由页面
│   └── styles/         # 全局样式
├── public/             # 静态资源
├── tests/              # 测试文件
├── astro.config.mjs    # Astro 配置
├── tailwind.config.mjs # Tailwind 配置
└── package.json
```

## Common Tasks

### 添加新项目

1. 在 `src/content/projects/` 创建新的 MDX 文件:

```bash
touch src/content/projects/my-new-project.mdx
```

2. 填写项目信息:

```mdx
---
title: "我的新项目"
slug: "my-new-project"
description: "项目简短描述"
problemStatement: "这个项目解决的问题..."
category: "web"
technologies: ["React", "TypeScript"]
thumbnail:
  src: "/images/projects/my-new-project/thumb.webp"
  alt: "项目缩略图描述"
featured: false
order: 10
publishedDate: 2025-12-17
---

## 项目详情

这里写项目的详细内容...
```

3. 添加项目图片到 `public/images/projects/my-new-project/`

4. 开发服务器会自动重载

### 更新个人资料

编辑 `src/data/profile.json`:

```json
{
  "name": "你的名字",
  "title": "你的职位",
  "bio": "你的简介...",
  "skills": [...],
  "contact": { "email": "your@email.com" },
  "socials": [...]
}
```

### 运行测试

```bash
# 单元测试
pnpm test

# E2E 测试
pnpm test:e2e

# 类型检查
pnpm check
```

### 构建生产版本

```bash
# 构建
pnpm build

# 预览生产版本
pnpm preview
```

### 代码质量检查

```bash
# Lint
pnpm lint

# 格式化
pnpm format

# Lighthouse CI
pnpm lighthouse
```

## Development Commands

| 命令 | 说明 |
|------|------|
| `pnpm dev` | 启动开发服务器 (localhost:4321) |
| `pnpm build` | 构建生产版本 |
| `pnpm preview` | 预览生产版本 |
| `pnpm check` | TypeScript 类型检查 |
| `pnpm lint` | ESLint 代码检查 |
| `pnpm format` | Prettier 格式化 |
| `pnpm test` | 运行单元测试 |
| `pnpm test:e2e` | 运行 E2E 测试 |

## Environment Variables

创建 `.env` 文件 (可选):

```bash
# 站点 URL (用于 sitemap 和 SEO)
SITE_URL=https://your-domain.com

# 分析 (可选)
VERCEL_ANALYTICS_ID=xxx
```

## Deployment

### Vercel (推荐)

1. 连接 GitHub 仓库到 Vercel
2. 自动检测 Astro 项目
3. 点击 Deploy

或使用 CLI:

```bash
pnpm i -g vercel
vercel
```

### Netlify

```bash
pnpm i -g netlify-cli
netlify deploy --prod
```

## Troubleshooting

### 常见问题

**问题**: 图片不显示
**解决**: 确保图片在 `public/images/` 目录，路径以 `/` 开头

**问题**: TypeScript 错误
**解决**: 运行 `pnpm check` 查看详细错误

**问题**: 构建失败
**解决**: 检查 MDX frontmatter 格式是否正确

## Next Steps

1. 自定义 `tailwind.config.mjs` 中的配色方案
2. 添加你的项目到 `src/content/projects/`
3. 更新 `src/data/profile.json` 中的个人信息
4. 部署到 Vercel 或 Netlify

## Resources

- [Astro 文档](https://docs.astro.build/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Framer Motion 文档](https://www.framer.com/motion/)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
