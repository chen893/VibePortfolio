# Vibe Portfolio

一个现代化的个人作品集网站，采用 Vibe Coding 设计理念，展示开发者的项目、技能和个人风格。

![Vibe Portfolio](https://img.shields.io/badge/Astro-5.x-ff5d01?style=flat-square&logo=astro)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?style=flat-square&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ 特性

- **视觉冲击力** - 深色主题配合渐变色彩，打造独特的 Vibe 风格
- **响应式设计** - 完美适配桌面端、平板和移动设备
- **流畅动画** - 使用 Framer Motion 实现优雅的页面过渡和交互动效
- **国际化** - 内置中/英双语（默认中文 `/`，英文 `/en`），支持页面内一键切换
- **SEO 优化** - 内置 sitemap、JSON-LD 结构化数据和 meta 标签
- **无障碍访问** - 符合 WCAG 2.1 AA 标准，支持键盘导航
- **高性能** - 静态生成，零 JavaScript 默认加载，按需激活交互组件

## 🛠 技术栈

- **框架**: [Astro 5.x](https://astro.build/) - 内容驱动的静态站点生成器
- **样式**: [Tailwind CSS 4.x](https://tailwindcss.com/) - 原子化 CSS 框架
- **交互**: [React 18](https://react.dev/) + [Framer Motion](https://www.framer.com/motion/) - Islands 架构
- **语言**: [TypeScript 5.x](https://www.typescriptlang.org/) - 类型安全
- **内容**: [Content Collections](https://docs.astro.build/en/guides/content-collections/) - 类型安全的内容管理

## 🚀 快速开始

### 环境要求

- Node.js 18.x 或更高版本
- npm 9.x 或更高版本

### 安装

```bash
# 克隆仓库
git clone https://github.com/yourusername/vibe-portfolio.git
cd vibe-portfolio

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

开发服务器将在 `http://localhost:4321` 启动。

### 构建

```bash
# 生产构建
npm run build

# 预览生产构建
npm run preview
```

## 📁 项目结构

```
vibe-portfolio/
├── public/                 # 静态资源
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
├── src/
│   ├── components/
│   │   ├── interactive/    # React Islands (客户端交互)
│   │   │   ├── Hero.tsx
│   │   │   ├── ImageGallery.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   └── ProjectFilter.tsx
│   │   ├── layout/         # 布局组件
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── Container.astro
│   │   ├── sections/       # 页面区块
│   │   │   ├── AboutHero.astro
│   │   │   ├── ProjectGallery.astro
│   │   │   └── SkillsGrid.astro
│   │   └── ui/             # UI 组件
│   │       ├── ProjectCard.astro
│   │       ├── TechTag.astro
│   │       ├── SkillBadge.astro
│   │       ├── SocialLinks.astro
│   │       └── ExternalLink.astro
│   ├── content/
│   │   ├── config.ts       # Content Collections 配置
│   │   └── projects/       # 项目内容 (MDX)
│   ├── data/
│   │   ├── profile.json    # 个人信息配置
│   │   └── technologies.json
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro     # 首页
│   │   ├── about.astro     # 关于页
│   │   ├── 404.astro       # 404 页面
│   │   └── projects/
│   │       ├── index.astro # 项目列表
│   │       └── [slug].astro # 项目详情
│   ├── styles/
│   │   └── global.css      # 全局样式 + Tailwind 配置
│   ├── types/
│   │   ├── profile.ts
│   │   └── technology.ts
│   └── lib/
│       └── utils.ts
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## ⚙️ 配置指南

### 个人信息

编辑 `src/data/profile.json`（中文）和 `src/data/profile.en.json`（英文）配置你的个人信息：

```json
{
  "name": "你的名字",
  "title": "全栈开发者 | Vibe Coding 实践者",
  "bio": "你的个人简介...",
  "philosophy": "你的开发哲学...",
  "avatar": {
    "src": "/images/avatar.png",
    "alt": "头像描述"
  },
  "skills": [...],
  "contact": {
    "email": "your@email.com"
  },
  "socials": [...]
}
```

界面文案翻译位于 `src/i18n/ui.ts`。

### 添加项目

在 `src/content/projects/` 目录下创建 `.mdx` 文件：

```mdx
---
title: "项目名称"
description: "项目简短描述"
problemStatement: "项目要解决的问题..."
category: "web" # web | mobile | backend | fullstack | tool | other
technologies:
  - React
  - TypeScript
  - Node.js
thumbnail:
  src: "/images/projects/project-thumb.png"
  alt: "项目缩略图描述"
images:
  - src: "/images/projects/project-1.png"
    alt: "截图描述"
    caption: "可选的图片说明"
liveUrl: "https://demo.example.com"
repoUrl: "https://github.com/username/repo"
featured: true
order: 1
publishedDate: 2024-01-15
---

## 项目详情

这里写项目的详细介绍，支持 Markdown 语法...
```

### 自定义主题

主题配置在 `src/styles/global.css` 的 `@theme` 块中：

```css
@theme {
  --color-primary-500: #0ea5e9;  /* 主色调 */
  --color-accent-500: #d946ef;   /* 强调色 */
  --color-dark-950: #020617;     /* 背景色 */
  /* ... 更多颜色配置 */
}
```

### 网站配置

编辑 `astro.config.mjs` 配置网站 URL：

```js
export default defineConfig({
  site: 'https://your-domain.com',
  // ...
});
```

## 🌐 部署

### Vercel (推荐)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/vibe-portfolio)

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/vibe-portfolio)

### 手动部署

```bash
npm run build
# 将 dist/ 目录部署到任何静态托管服务
```

## 🧞 开发命令

| 命令 | 描述 |
|------|------|
| `npm run dev` | 启动开发服务器 (`localhost:4321`) |
| `npm run build` | 构建生产版本到 `./dist/` |
| `npm run preview` | 预览生产构建 |
| `npm run astro` | 运行 Astro CLI |

## ⚡ 性能优化

- **静态生成** - 所有页面在构建时生成，无需服务器
- **Islands 架构** - 仅交互组件加载 JavaScript
- **图片懒加载** - 自动延迟加载非视口图片
- **View Transitions** - 原生页面过渡，无需额外 JS
- **代码分割** - 按页面自动分割 JavaScript

## 🌍 浏览器支持

- Chrome (最新)
- Firefox (最新)
- Safari (最新)
- Edge (最新)

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

- [Astro](https://astro.build/) - 优秀的静态站点生成器
- [Tailwind CSS](https://tailwindcss.com/) - 强大的 CSS 框架
- [Framer Motion](https://www.framer.com/motion/) - 流畅的动画库

---

用 ❤️ 和 Vibe Coding 理念构建
