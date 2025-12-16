# Tasks: Vibe Portfolio Website

**Input**: Design documents from `/specs/001-vibe-portfolio/`
**Prerequisites**: plan.md ✅, spec.md ✅, research.md ✅, data-model.md ✅, contracts/ ✅

**Tests**: 未在规范中明确要求测试，因此测试任务标记为可选。

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `public/`, `tests/` at repository root
- Astro project structure per plan.md

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create Astro project with `npm create astro@latest` using minimal template in repository root
- [x] T002 Install core dependencies: `@astrojs/react`, `@astrojs/tailwind`, `react`, `react-dom`, `framer-motion` in package.json
- [x] T003 [P] Configure TypeScript in tsconfig.json with strict mode
- [x] T004 [P] Configure Tailwind CSS in tailwind.config.mjs with custom color scheme
- [x] T005 [P] Configure ESLint and Prettier in .eslintrc.cjs and .prettierrc
- [x] T006 Create directory structure: src/components/, src/content/, src/data/, src/layouts/, src/pages/, src/styles/, src/lib/, public/images/

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T007 Create Content Collections schema in src/content/config.ts with Project collection using Zod validation
- [x] T008 [P] Create TypeScript types in src/types/profile.ts for DeveloperProfile, Skill, SocialLink
- [x] T009 [P] Create TypeScript types in src/types/technology.ts for Technology interface
- [x] T010 Create BaseLayout component in src/layouts/BaseLayout.astro with SEO meta tags, global styles, and responsive viewport
- [x] T011 [P] Create global styles in src/styles/global.css with CSS reset, custom fonts, and base typography
- [x] T012 [P] Create utility functions in src/lib/utils.ts for date formatting and slug generation
- [x] T013 Create sample project content in src/content/projects/sample-project.mdx for testing
- [x] T014 Create profile data in src/data/profile.json with placeholder developer information
- [x] T015 [P] Create technologies data in src/data/technologies.json with common tech stack items

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - First Impression Landing (Priority: P1) 🎯 MVP

**Goal**: 创建视觉冲击力强的首页，3秒内给访客留下正面印象

**Independent Test**: Load homepage at `/`, verify hero section renders with navigation visible above fold, page loads < 3s

### Implementation for User Story 1

- [x] T016 [P] [US1] Create Header component in src/components/layout/Header.astro with navigation links (首页, 项目, 关于)
- [x] T017 [P] [US1] Create Footer component in src/components/layout/Footer.astro with copyright and social links
- [x] T018 [P] [US1] Create Container component in src/components/layout/Container.astro for max-width constraint
- [x] T019 [US1] Create Hero section React Island in src/components/interactive/Hero.tsx with Framer Motion entrance animations
- [x] T020 [US1] Create homepage in src/pages/index.astro integrating Header, Hero, featured projects preview, and Footer
- [x] T021 [US1] Add responsive styles to Hero for mobile/tablet/desktop breakpoints in Hero.tsx
- [x] T022 [US1] Implement keyboard navigation for Header links with visible focus states
- [x] T023 [US1] Add favicon and site metadata in src/layouts/BaseLayout.astro

**Checkpoint**: Homepage functional with visual impact, navigation, and responsive design

---

## Phase 4: User Story 2 - Browse Portfolio Projects (Priority: P1)

**Goal**: 创建项目画廊页面，展示所有项目并支持筛选

**Independent Test**: Navigate to `/projects`, verify all projects display with thumbnails, filter by technology works

### Implementation for User Story 2

- [x] T024 [P] [US2] Create ProjectCard component in src/components/ui/ProjectCard.astro with thumbnail, title, description, tech tags
- [x] T025 [P] [US2] Create TechTag component in src/components/ui/TechTag.astro for technology badges
- [x] T026 [US2] Create ProjectGallery section in src/components/sections/ProjectGallery.astro with grid layout
- [x] T027 [US2] Create ProjectFilter React Island in src/components/interactive/ProjectFilter.tsx for category/tech filtering
- [x] T028 [US2] Create projects list page in src/pages/projects/index.astro with gallery and filter
- [x] T029 [US2] Implement lazy loading for project images using Astro Image component with loading="lazy"
- [x] T030 [US2] Add empty state handling when no projects match filter in ProjectGallery.astro
- [x] T031 [US2] Implement keyboard navigation for filter buttons and project cards

**Checkpoint**: Project gallery functional with filtering, lazy loading, and keyboard accessibility

---

## Phase 5: User Story 3 - View Project Details (Priority: P1)

**Goal**: 创建项目详情页，展示完整项目信息和媒体

**Independent Test**: Click any project card, verify detail page shows all fields (title, description, problem, tech, images, links)

### Implementation for User Story 3

- [x] T032 [P] [US3] Create ImageGallery React Island in src/components/interactive/ImageGallery.tsx with lightbox and navigation
- [x] T033 [P] [US3] Create ExternalLink component in src/components/ui/ExternalLink.astro for live demo and repo links
- [x] T034 [US3] Create project detail page in src/pages/projects/[slug].astro with dynamic routing
- [x] T035 [US3] Implement getStaticPaths in [slug].astro to generate pages from Content Collections
- [x] T036 [US3] Add project navigation (previous/next) in project detail page
- [x] T037 [US3] Handle missing live demo or repo URL gracefully without broken links
- [x] T038 [US3] Add breadcrumb navigation in project detail for easy return to gallery

**Checkpoint**: Project detail pages functional with all content, media gallery, and navigation

---

## Phase 6: User Story 4 - Learn About Developer (Priority: P2)

**Goal**: 创建关于页面，展示开发者信息、技能和联系方式

**Independent Test**: Navigate to `/about`, verify bio, skills, vibe coding philosophy, and contact info display

### Implementation for User Story 4

- [x] T039 [P] [US4] Create SkillBadge component in src/components/ui/SkillBadge.astro with proficiency indicator
- [x] T040 [P] [US4] Create SkillsGrid component in src/components/sections/SkillsGrid.astro grouped by category
- [x] T041 [P] [US4] Create SocialLinks component in src/components/ui/SocialLinks.astro with platform icons
- [x] T042 [US4] Create AboutHero section in src/components/sections/AboutHero.astro with avatar and bio
- [x] T043 [US4] Create about page in src/pages/about.astro integrating all about components
- [x] T044 [US4] Load profile data from src/data/profile.json in about page
- [x] T045 [US4] Add contact section with email link (mailto:) and social links

**Checkpoint**: About page functional with complete developer profile and contact options

---

## Phase 7: User Story 5 - Mobile-First Experience (Priority: P2)

**Goal**: 确保所有页面在移动设备上完美运行

**Independent Test**: Test all pages on 320px viewport, verify touch interactions, readable text, and working links

### Implementation for User Story 5

- [x] T046 [US5] Create mobile navigation menu (hamburger) in src/components/layout/MobileNav.tsx with Framer Motion
- [x] T047 [US5] Update Header.astro to include MobileNav for small screens
- [x] T048 [US5] Optimize touch targets to minimum 44x44px for all interactive elements
- [x] T049 [US5] Add responsive image srcset for project thumbnails in ProjectCard.astro
- [x] T050 [US5] Test and fix horizontal scrolling issues across all pages
- [x] T051 [US5] Ensure email links use mailto: and phone numbers are tappable (if any)
- [x] T052 [US5] Add swipe gestures for ImageGallery on touch devices

**Checkpoint**: All pages fully functional on mobile with touch-optimized interactions

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T053 [P] Add sitemap generation using @astrojs/sitemap in astro.config.mjs
- [x] T054 [P] Add robots.txt in public/robots.txt allowing full site indexing
- [x] T055 [P] Add JSON-LD structured data for Person schema in BaseLayout.astro
- [x] T056 Implement image placeholder/fallback for failed image loads across all components
- [x] T057 Add page transitions using Astro View Transitions in BaseLayout.astro
- [ ] T058 Run Lighthouse audit and fix any issues to achieve 90+ scores
- [x] T059 [P] Add 404 error page in src/pages/404.astro with navigation back to home
- [x] T060 Verify WCAG 2.1 AA color contrast compliance across all pages
- [x] T061 Test keyboard navigation end-to-end on all pages
- [x] T062 Create production build and verify all pages render correctly with `npm run build && npm run preview`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-7)**: All depend on Foundational phase completion
  - US1, US2, US3 are all P1 priority - implement sequentially or in parallel
  - US4, US5 are P2 priority - can start after P1 stories
- **Polish (Phase 8)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational - creates base layout used by all pages
- **User Story 2 (P1)**: Can start after US1 - uses Header/Footer from US1
- **User Story 3 (P1)**: Can start after US2 - linked from ProjectCard
- **User Story 4 (P2)**: Can start after US1 - uses same layout components
- **User Story 5 (P2)**: Can start after US1-US4 complete - mobile optimization across all pages

### Within Each User Story

- Layout components before page components
- Shared UI components before sections
- React Islands for interactive features
- Page assembly last

### Parallel Opportunities

- T003, T004, T005 can run in parallel (config files)
- T008, T009, T011, T012, T015 can run in parallel (types and utilities)
- T016, T017, T018 can run in parallel (layout components)
- T024, T025 can run in parallel (UI components)
- T032, T033 can run in parallel (detail page components)
- T039, T040, T041 can run in parallel (about page components)
- T053, T054, T055, T059 can run in parallel (SEO and static pages)

---

## Parallel Example: Phase 2 Foundational

```bash
# Launch these in parallel:
Task: "Create TypeScript types in src/types/profile.ts"
Task: "Create TypeScript types in src/types/technology.ts"
Task: "Create global styles in src/styles/global.css"
Task: "Create utility functions in src/lib/utils.ts"
Task: "Create technologies data in src/data/technologies.json"
```

## Parallel Example: User Story 1

```bash
# Launch layout components in parallel:
Task: "Create Header component in src/components/layout/Header.astro"
Task: "Create Footer component in src/components/layout/Footer.astro"
Task: "Create Container component in src/components/layout/Container.astro"
```

---

## Implementation Strategy

### MVP First (User Stories 1-3)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1 (Homepage)
4. **STOP and VALIDATE**: Test homepage independently
5. Complete Phase 4: User Story 2 (Project Gallery)
6. Complete Phase 5: User Story 3 (Project Details)
7. **MVP COMPLETE**: Deploy with core functionality

### Incremental Delivery

1. Setup + Foundational → Foundation ready
2. Add User Story 1 → Test → Deploy (Homepage live)
3. Add User Story 2 → Test → Deploy (Gallery live)
4. Add User Story 3 → Test → Deploy (Details live) **← MVP**
5. Add User Story 4 → Test → Deploy (About page)
6. Add User Story 5 → Test → Deploy (Mobile optimized)
7. Polish → Final deployment

### Single Developer Strategy

Recommended order for solo development:

1. Phase 1 + 2 (Setup + Foundation): ~2-3 hours
2. Phase 3 (US1 Homepage): ~3-4 hours
3. Phase 4 (US2 Gallery): ~3-4 hours
4. Phase 5 (US3 Details): ~2-3 hours
5. Phase 6 (US4 About): ~2-3 hours
6. Phase 7 (US5 Mobile): ~2-3 hours
7. Phase 8 (Polish): ~2-3 hours

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Use `npm run dev` to test changes live during development
- Run `npm run build` before each checkpoint to verify production build
