# Research: Vibe Portfolio Website

**Feature**: 001-vibe-portfolio
**Date**: 2025-12-17
**Status**: Complete

## Technology Stack Decision

### Decision: Astro + Tailwind CSS + React Islands

**Rationale**:
1. **零 JS 默认**: Astro 默认不向客户端发送 JavaScript，只有交互组件才会水合，实现极致性能
2. **Content Collections**: 原生支持 MDX/JSON 内容管理，类型安全，适合项目数据管理
3. **React Islands**: 需要动画的组件可以使用 Framer Motion，其他保持静态
4. **构建性能**: 比 Next.js 快 40-70%，Lighthouse 典型得分 100/100
5. **部署友好**: Vercel/Netlify 零配置部署

**Alternatives Considered**:

| 方案 | 优点 | 缺点 | 决定 |
|------|------|------|------|
| Next.js | 成熟生态，SSR/SSG 灵活 | JS bundle 较大 (40-60KB)，对静态站点过度 | ❌ 不选 |
| React + Vite | 纯 SPA，开发体验好 | 无原生 SSG，需要手动配置，SEO 不友好 | ❌ 不选 |
| **Astro** | 零 JS 默认，<20KB bundle，原生内容管理 | 生态相对较新 | ✅ 选择 |

## Styling Solution

### Decision: Tailwind CSS 4.x

**Rationale**:
1. 宪法批准的样式方案之一
2. 响应式设计内置 (sm/md/lg/xl/2xl 断点)
3. 与 Astro 完美集成
4. 支持暗色模式
5. 构建时清除未使用样式

**Configuration**:
- 自定义配色方案体现 vibe 美学
- 扩展断点支持 320px-2560px
- 自定义字体配置

## Animation Solution

### Decision: Framer Motion + CSS Transitions

**Rationale**:
1. Framer Motion 用于复杂交互动画 (Hero, 项目卡片悬浮)
2. CSS Transitions 用于简单过渡 (颜色变化, 缩放)
3. React Islands 模式确保动画组件只在需要时加载

**Animation Patterns**:
- Hero: 渐入动画，视差滚动
- 项目卡片: 悬浮放大，图片淡入
- 导航: 平滑滚动，菜单过渡
- 页面过渡: View Transitions API (Astro 原生支持)

## Content Management

### Decision: Astro Content Collections + MDX

**Rationale**:
1. 类型安全: Zod schema 验证项目数据
2. MDX 支持: 项目描述可以包含组件
3. 热重载: 内容修改即时预览
4. 无数据库: 纯文件系统，Git 版本控制

**Content Structure**:
```text
src/content/
├── projects/
│   ├── project-1.mdx    # 项目内容
│   └── project-2.mdx
└── config.ts            # Collection schema
```

## Image Optimization

### Decision: Astro <Image> Component

**Rationale**:
1. 构建时优化: WebP/AVIF 自动转换
2. 响应式图片: srcset 自动生成
3. 懒加载: loading="lazy" 默认
4. 尺寸检测: 防止 CLS

**Implementation**:
- 项目缩略图: 固定宽高比，优化为 WebP
- 详情图片: 响应式 srcset
- 占位符: 模糊 placeholder 或项目名称文本

## Hosting & Deployment

### Decision: Vercel (Primary) / Netlify (Alternative)

**Rationale**:
1. 零配置 Astro 部署
2. 全球 CDN 边缘节点
3. 自动 HTTPS
4. 预览部署 (PR 自动部署)
5. 分析工具集成

**Deployment Strategy**:
- `main` 分支 → 生产环境
- PR → 预览部署
- 环境变量管理敏感信息

## Performance Targets

| 指标 | 目标 | 预期 | 验证方法 |
|------|------|------|----------|
| LCP | < 2.5s | < 1.5s | Lighthouse |
| FID | < 100ms | < 50ms | Lighthouse |
| CLS | < 0.1 | < 0.05 | Lighthouse |
| Lighthouse Performance | 90+ | 100 | Lighthouse CI |
| JS Bundle | < 50KB | < 20KB | 构建分析 |
| 首屏加载 | < 3s | < 2s | WebPageTest |

## Accessibility Compliance

### WCAG 2.1 AA Requirements

| 要求 | 实现方案 |
|------|----------|
| 颜色对比 | 4.5:1 文本, 3:1 UI 元素 |
| 键盘导航 | tabindex, focus-visible |
| 屏幕阅读器 | 语义化 HTML, aria-label |
| 图片替代文本 | 所有 <img> 必须有 alt |
| 焦点指示器 | 可见的 focus ring |

## SEO Considerations

| 要素 | 实现方案 |
|------|----------|
| Meta Tags | 每页独立 title, description |
| Open Graph | 项目缩略图作为 og:image |
| Structured Data | JSON-LD Person + CreativeWork |
| Sitemap | astro-sitemap 集成 |
| Robots.txt | 允许全站索引 |

## Dependencies Summary

### Production Dependencies

```json
{
  "astro": "^5.0.0",
  "@astrojs/react": "^4.0.0",
  "@astrojs/tailwind": "^6.0.0",
  "react": "^18.3.0",
  "react-dom": "^18.3.0",
  "framer-motion": "^11.0.0",
  "tailwindcss": "^4.0.0"
}
```

### Development Dependencies

```json
{
  "typescript": "^5.0.0",
  "vitest": "^2.0.0",
  "playwright": "^1.40.0",
  "@astrojs/check": "^0.9.0"
}
```

## Risk Assessment

| 风险 | 影响 | 缓解措施 |
|------|------|----------|
| Astro 5.x 新版本问题 | 中 | 锁定版本，渐进升级 |
| 动画性能 | 低 | GPU 加速，按需加载 |
| 图片加载慢 | 中 | CDN + 图片优化 + 懒加载 |
| SEO 不足 | 低 | 预渲染 HTML + 结构化数据 |
