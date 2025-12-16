<!--
SYNC IMPACT REPORT
==================
Version change: 0.0.0 → 1.0.0 (MAJOR - initial ratification)
Modified principles: N/A (initial version)
Added sections:
  - Core Principles (5 principles)
  - Technology Stack section
  - Development Workflow section
  - Governance section
Removed sections: N/A (initial version)
Templates requiring updates:
  - .specify/templates/plan-template.md ✅ (no changes needed - generic template)
  - .specify/templates/spec-template.md ✅ (no changes needed - generic template)
  - .specify/templates/tasks-template.md ✅ (no changes needed - generic template)
Follow-up TODOs: None
-->

# VibePortfolio Constitution

## Core Principles

### I. Vibe-First Design

Every visual element MUST prioritize aesthetic appeal and emotional resonance over technical complexity.
Design decisions MUST reflect the "vibe coding" philosophy: intuitive, expressive, and visually striking.
The portfolio MUST create an immediate positive impression within 3 seconds of page load.

**Rationale**: As a vibe coding practitioner, the portfolio itself MUST exemplify this philosophy. First impressions determine whether visitors explore further.

### II. Performance Excellence

Page load time MUST be under 3 seconds on standard broadband connections.
All images MUST be optimized (WebP/AVIF with fallbacks, lazy loading for below-fold content).
Core Web Vitals MUST meet "Good" thresholds (LCP < 2.5s, FID < 100ms, CLS < 0.1).
No blocking resources in critical rendering path without explicit justification.

**Rationale**: A slow portfolio signals poor technical skills. Performance is a non-negotiable demonstration of full-stack competency.

### III. Responsive & Accessible

Layout MUST be fully functional across viewport widths from 320px to 2560px.
All interactive elements MUST be keyboard navigable.
Color contrast MUST meet WCAG 2.1 AA standards.
Images MUST have meaningful alt text describing the work.

**Rationale**: Full-stack developers MUST demonstrate understanding of diverse user needs and devices. Accessibility is professional standard, not optional.

### IV. Content Clarity

Each portfolio item MUST clearly communicate: what it is, what technologies were used, and what problem it solves.
Navigation MUST allow visitors to find specific work within 2 clicks from any page.
No lorem ipsum or placeholder content in production.

**Rationale**: Recruiters and collaborators need to quickly assess relevance. Unclear portfolios lose opportunities.

### V. Maintainability

Code MUST be modular: adding a new portfolio item SHOULD NOT require modifying core layout code.
Configuration (content, metadata) MUST be separated from presentation.
Build process MUST be reproducible with single command.
Dependencies MUST be minimal and regularly audited.

**Rationale**: A portfolio is a living document. Easy updates ensure it stays current and demonstrates ongoing professional growth.

## Technology Stack

This section defines approved technologies for the project.

**Frontend Framework**: Modern JavaScript framework (React, Vue, or vanilla with build tooling) - decision to be made in planning phase based on specific requirements.
**Styling**: CSS-in-JS, Tailwind CSS, or CSS Modules - MUST support responsive design and theming.
**Build Tool**: Vite, Next.js, or equivalent modern bundler with optimization.
**Hosting**: Static hosting with CDN (Vercel, Netlify, Cloudflare Pages, or GitHub Pages).
**Version Control**: Git with meaningful commit messages.

Deviations from approved stack require documented justification in the implementation plan.

## Development Workflow

### Code Quality Gates

- All code MUST pass linting before commit.
- Responsive design MUST be verified at minimum 3 breakpoints (mobile, tablet, desktop).
- Lighthouse score MUST be 90+ for Performance, Accessibility, Best Practices, and SEO before deployment.

### Review Process

- Self-review against this constitution before considering work complete.
- Test on real devices when possible, not just browser dev tools.
- Verify all portfolio items render correctly before deployment.

### Deployment

- Production deployments MUST use HTTPS.
- Preview deployments encouraged for testing changes.
- Rollback plan MUST exist (previous version accessible).

## Governance

This constitution defines the binding principles for the VibePortfolio project. All implementation decisions MUST align with these principles.

### Amendment Procedure

1. Document proposed change with rationale.
2. Assess impact on existing implementation.
3. Update constitution version following semantic versioning:
   - MAJOR: Principle removal or incompatible redefinition
   - MINOR: New principle or significant expansion
   - PATCH: Clarifications and typo fixes
4. Update dependent templates if principle-driven sections change.

### Compliance

- Every feature specification MUST reference applicable principles.
- Implementation plans MUST include a Constitution Check section.
- Code reviews SHOULD verify principle compliance.

**Version**: 1.0.0 | **Ratified**: 2025-12-17 | **Last Amended**: 2025-12-17
