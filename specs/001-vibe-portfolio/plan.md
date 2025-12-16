# Implementation Plan: Vibe Portfolio Website

**Branch**: `001-vibe-portfolio` | **Date**: 2025-12-17 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-vibe-portfolio/spec.md`

## Summary

构建一个视觉冲击力强的个人作品集网站，展示全栈开发者的项目作品，体现 vibe coding 哲学。采用 Astro + Tailwind CSS + React Islands 架构，实现零 JS 默认、选择性水合的高性能静态站点，支持流畅动画和内容驱动的项目管理。

## Technical Context

**Language/Version**: TypeScript 5.x, Node.js 20+
**Primary Dependencies**: Astro 5.x, Tailwind CSS 4.x, Framer Motion, React 18
**Storage**: N/A (静态内容，使用 Astro Content Collections + MDX/JSON)
**Testing**: Vitest (单元测试), Playwright (E2E 测试)
**Target Platform**: Web browsers (静态托管 - Vercel/Netlify)
**Project Type**: Single (纯前端静态站点)
**Performance Goals**: LCP < 2.5s (目标 < 1.5s), FID < 100ms, CLS < 0.1, Lighthouse 90+ (目标 100)
**Constraints**: 首屏加载 < 3s, 响应式 320px-2560px, 键盘可访问, WCAG 2.1 AA
**Scale/Scope**: 5-20 个项目初始，支持无限扩展

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Requirement | Implementation Approach | Status |
|-----------|-------------|------------------------|--------|
| **I. Vibe-First Design** | 视觉美感优先，3秒内正面印象 | Hero section 使用 Framer Motion 动画，精心设计的配色和排版 | ✅ PASS |
| **II. Performance Excellence** | LCP < 2.5s, CLS < 0.1, 图片优化 | Astro 零 JS 默认，内置图片优化 (<Image>)，预渲染 HTML | ✅ PASS |
| **III. Responsive & Accessible** | 320px-2560px, 键盘导航, WCAG AA | Tailwind 响应式断点，语义化 HTML，aria 属性 | ✅ PASS |
| **IV. Content Clarity** | 2 点击内找到任意项目，清晰信息 | 首页 → 项目列表 → 项目详情（最多 2 次点击） | ✅ PASS |
| **V. Maintainability** | 模块化，内容与展示分离 | Content Collections 管理项目数据，组件化架构 | ✅ PASS |

**Gate Status**: ✅ ALL PASSED - 可以继续 Phase 0

## Project Structure

### Documentation (this feature)

```text
specs/001-vibe-portfolio/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (N/A for static site)
└── tasks.md             # Phase 2 output (/speckit.tasks command)
```

### Source Code (repository root)

```text
src/
├── components/          # 可复用 UI 组件
│   ├── layout/         # 布局组件 (Header, Footer, Container)
│   ├── ui/             # 基础 UI 组件 (Button, Card, Tag)
│   ├── sections/       # 页面区块 (Hero, ProjectGallery, About)
│   └── interactive/    # React Islands (动画组件)
├── content/            # Astro Content Collections
│   ├── projects/       # 项目 MDX 文件
│   └── config.ts       # Collection schema (Zod)
├── layouts/            # 页面布局模板
│   └── BaseLayout.astro
├── pages/              # 路由页面
│   ├── index.astro     # 首页
│   ├── projects/       # 项目列表和详情
│   │   ├── index.astro
│   │   └── [slug].astro
│   └── about.astro     # 关于页面
├── styles/             # 全局样式
│   └── global.css
├── data/               # 静态数据 (profile, skills)
│   └── profile.json
└── lib/                # 工具函数
    └── utils.ts

public/
├── images/             # 项目图片资源
│   └── projects/
├── fonts/              # 自定义字体
└── favicon.svg

tests/
├── unit/               # 组件单元测试
└── e2e/                # 端到端测试
```

**Structure Decision**: 采用 Astro 单项目结构，利用 Content Collections 管理项目数据，React Islands 仅用于需要动画的交互组件。

## Complexity Tracking

> 无宪法违规需要说明
