export const locales = ['zh', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'zh';

type MessageValues = Record<string, string | number>;

const messages: Record<Locale, Record<string, string>> = {
  zh: {
    'lang.zh': '中文',
    'lang.en': 'English',
    'lang.switch': '切换语言',

    'nav.home': '首页',
    'nav.projects': '项目',
    'nav.about': '关于',

    'header.homeAria': '返回首页',
    'header.statusOnline': '系统在线',

    'mobileNav.openMenu': '打开菜单',
    'mobileNav.closeMenu': '关闭菜单',
    'mobileNav.navigation': '导航',

    'footer.tagline': '构建数字体验，追求卓越品质。每一行代码都是对完美的追求。',
    'footer.openForCollab': '接受项目合作',
    'footer.rights': '保留所有权利。',

    'hero.iAm': '我是',
    'hero.viewProjects': '查看项目',
    'hero.aboutMe': '关于我',
    'hero.scroll': '向下滚动',

    'home.featuredLabel': '// 精选作品',
    'home.featuredTitleA': '精选',
    'home.featuredTitleB': '项目',
    'home.viewAllProjects': '查看全部项目',
    'home.ctaBadge': '欢迎合作',
    'home.ctaTitleA': '一起打造',
    'home.ctaTitleB': '精彩作品',
    'home.ctaDescription': '无论是新项目、工作机会还是只是想聊聊技术，都欢迎与我联系。',
    'home.ctaContact': '联系我',
    'home.ctaEmail': '发送邮件',
    'home.ctaCopy': '复制',
    'home.ctaCopied': '已复制',

    'about.title': '关于我',
    'about.metaDescription': '了解我的技术背景、技能和开发哲学。',
    'about.philosophyLabel': '// 开发哲学',
    'about.philosophyTitleA': '开发',
    'about.philosophyTitleB': '哲学',
    'about.skillsLabel': '// 技术技能',
    'about.skillsTitleA': '技术',
    'about.skillsTitleB': '栈',
    'about.contactLabel': '// 联系我',
    'about.contactTitleA': '保持',
    'about.contactTitleB': '联系',
    'about.contactDescription': '无论是项目合作、工作机会还是只是想聊聊技术，都欢迎与我联系。',

    'aboutHero.label': '// 关于我',
    'aboutHero.years': '经验年限',
    'aboutHero.projects': '项目',
    'aboutHero.stack': '技术栈',

    'skills.category.frontend': '前端',
    'skills.category.backend': '后端',
    'skills.category.database': '数据库',
    'skills.category.devops': '运维/DevOps',
    'skills.category.tools': '工具',
    'skills.category.other': '其他',

    'projects.title': '项目',
    'projects.metaDescription': '浏览我的项目作品集，探索各种 Web 应用、移动应用和工具的开发案例。',
    'projects.label': '// 项目作品',
    'projects.titleA': '全部',
    'projects.titleB': '项目',
    'projects.description': '探索我参与开发的各类项目，从 Web 应用到后端服务，每个项目都是一次技术实践与创新的旅程。',
    'projects.filterByCategory': '按分类筛选',
    'projects.filterByTech': '按技术栈筛选',
    'projects.noMatchTitle': '未找到匹配项目',
    'projects.noMatchDescription': '当前筛选条件下没有匹配的项目，请尝试调整筛选条件。',

    'project.featured': '精选',
    'project.liveDemo': '在线演示',
    'project.viewSource': '查看源码',
    'project.breadcrumbAria': '面包屑导航',
    'project.sectionBackground': '// 项目背景',
    'project.sectionTech': '// 技术栈',
    'project.sectionContent': '// 详细内容',
    'project.sectionScreenshots': '// 项目截图',
    'project.navAria': '项目导航',
    'project.prevProject': '上一个项目',
    'project.nextProject': '下一个项目',
    'project.backToProjects': '返回全部项目',

    'projectCard.viewProject': '查看项目',

    'gallery.viewImage': '查看图片 {index}: {alt}',
    'gallery.dialogLabel': '{projectTitle} 图片画廊',
    'gallery.close': '关闭画廊',
    'gallery.prev': '上一张图片',
    'gallery.next': '下一张图片',
    'gallery.keyboardHint': '(← → 键切换)',
    'gallery.swipeHint': '(左右滑动切换)',

    'filter.categoryAria': '项目分类筛选',
    'filter.techToggle': '按技术筛选',
    'filter.techAria': '技术栈筛选',

    'skill.proficiency': '熟练度',

    'category.all': '全部',
    'category.web.short': '网页',
    'category.mobile.short': '移动',
    'category.backend.short': '后端',
    'category.fullstack.short': '全栈',
    'category.tool.short': '工具',
    'category.other.short': '其他',
    'category.web.long': 'Web 应用',
    'category.mobile.long': '移动应用',
    'category.backend.long': '后端服务',
    'category.fullstack.long': '全栈项目',
    'category.tool.long': '工具',
    'category.other.long': '其他',

    'proficiency.beginner': '入门',
    'proficiency.intermediate': '熟练',
    'proficiency.advanced': '精通',
    'proficiency.expert': '专家',

    '404.title': '404 - 页面未找到',
    '404.description': '抱歉，您访问的页面不存在。',
    '404.badge': '错误：页面未找到',
    '404.heading': '页面不存在',
    '404.message': '您访问的页面可能已被移动、删除或从未存在于此时空中。',
    '404.backHome': '返回首页',
    '404.browseProjects': '浏览项目',
    '404.quickHome': '首页',
    '404.quickProjects': '项目',
    '404.quickAbout': '关于',
  },
  en: {
    'lang.zh': '中文',
    'lang.en': 'English',
    'lang.switch': 'Switch language',

    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',

    'header.homeAria': 'Back to home',
    'header.statusOnline': 'SYSTEM ONLINE',

    'mobileNav.openMenu': 'Open menu',
    'mobileNav.closeMenu': 'Close menu',
    'mobileNav.navigation': 'Navigation',

    'footer.tagline': 'Building digital experiences with craft and care. Every line of code is a step toward excellence.',
    'footer.openForCollab': 'OPEN FOR COLLAB',
    'footer.rights': 'All rights reserved.',

    'hero.iAm': "I'm",
    'hero.viewProjects': 'View Projects',
    'hero.aboutMe': 'About Me',
    'hero.scroll': 'Scroll',

    'home.featuredLabel': '// FEATURED WORK',
    'home.featuredTitleA': 'Featured',
    'home.featuredTitleB': 'Projects',
    'home.viewAllProjects': 'View All Projects',
    'home.ctaBadge': 'OPEN TO COLLABORATE',
    'home.ctaTitleA': "Let's build",
    'home.ctaTitleB': 'something great',
    'home.ctaDescription': "Whether it’s a new project, a role, or just a tech chat — feel free to reach out.",
    'home.ctaContact': 'Contact Me',
    'home.ctaEmail': 'Send Email',
    'home.ctaCopy': 'Copy',
    'home.ctaCopied': 'Copied',

    'about.title': 'About',
    'about.metaDescription': 'Learn about my background, skills, and development philosophy.',
    'about.philosophyLabel': '// PHILOSOPHY',
    'about.philosophyTitleA': 'My',
    'about.philosophyTitleB': 'Philosophy',
    'about.skillsLabel': '// SKILLS',
    'about.skillsTitleA': 'Tech',
    'about.skillsTitleB': 'Stack',
    'about.contactLabel': '// CONTACT',
    'about.contactTitleA': 'Get',
    'about.contactTitleB': 'in touch',
    'about.contactDescription': "Whether it’s collaboration, an opportunity, or a quick chat — I’d love to hear from you.",
    'about.orFollow': 'Or follow me',

    'aboutHero.label': '// ABOUT ME',
    'aboutHero.years': 'Years',
    'aboutHero.projects': 'Projects',
    'aboutHero.stack': 'Tech Stack',

    'skills.category.frontend': 'Frontend',
    'skills.category.backend': 'Backend',
    'skills.category.database': 'Database',
    'skills.category.devops': 'DevOps',
    'skills.category.tools': 'Tools',
    'skills.category.other': 'Other',

    'projects.title': 'Projects',
    'projects.metaDescription': 'Browse my portfolio and explore web, mobile, backend, and tooling work.',
    'projects.label': '// PROJECTS',
    'projects.titleA': 'All',
    'projects.titleB': 'Projects',
    'projects.description': 'Explore projects I’ve worked on — from web apps to backend services — each one a journey of practice and innovation.',
    'projects.filterByCategory': 'Filter by category',
    'projects.filterByTech': 'Filter by tech stack',
    'projects.noMatchTitle': 'No projects found',
    'projects.noMatchDescription': 'No projects match your filters. Try adjusting them.',

    'project.featured': 'Featured',
    'project.liveDemo': 'Live Demo',
    'project.viewSource': 'Source Code',
    'project.breadcrumbAria': 'Breadcrumb',
    'project.sectionBackground': '// BACKGROUND',
    'project.sectionTech': '// TECH STACK',
    'project.sectionContent': '// DETAILS',
    'project.sectionScreenshots': '// SCREENSHOTS',
    'project.navAria': 'Project navigation',
    'project.prevProject': 'Previous project',
    'project.nextProject': 'Next project',
    'project.backToProjects': 'Back to all projects',

    'projectCard.viewProject': 'View Project',

    'gallery.viewImage': 'View image {index}: {alt}',
    'gallery.dialogLabel': '{projectTitle} image gallery',
    'gallery.close': 'Close gallery',
    'gallery.prev': 'Previous image',
    'gallery.next': 'Next image',
    'gallery.keyboardHint': '(Use ← → keys)',
    'gallery.swipeHint': '(Swipe left/right)',

    'filter.categoryAria': 'Project category filter',
    'filter.techToggle': 'Filter by tech',
    'filter.techAria': 'Tech stack filter',

    'skill.proficiency': 'Proficiency',

    'category.all': 'All',
    'category.web.short': 'Web',
    'category.mobile.short': 'Mobile',
    'category.backend.short': 'Backend',
    'category.fullstack.short': 'Full‑stack',
    'category.tool.short': 'Tool',
    'category.other.short': 'Other',
    'category.web.long': 'Web Apps',
    'category.mobile.long': 'Mobile Apps',
    'category.backend.long': 'Backend',
    'category.fullstack.long': 'Full‑stack',
    'category.tool.long': 'Tools',
    'category.other.long': 'Other',

    'proficiency.beginner': 'Beginner',
    'proficiency.intermediate': 'Intermediate',
    'proficiency.advanced': 'Advanced',
    'proficiency.expert': 'Expert',

    '404.title': '404 - Page not found',
    '404.description': 'Sorry, the page you are looking for does not exist.',
    '404.badge': 'Error: Page not found',
    '404.heading': 'Page not found',
    '404.message': 'The page may have moved, been deleted, or never existed in this timeline.',
    '404.backHome': 'Back Home',
    '404.browseProjects': 'Browse Projects',
    '404.quickHome': 'Home',
    '404.quickProjects': 'Projects',
    '404.quickAbout': 'About',
  },
};

export function t(locale: Locale, key: string, values?: MessageValues): string {
  const template = messages[locale]?.[key] ?? messages[defaultLocale]?.[key] ?? key;
  if (!values) return template;
  return Object.entries(values).reduce((acc, [k, v]) => {
    return acc.replaceAll(`{${k}}`, String(v));
  }, template);
}

export function getHtmlLang(locale: Locale): string {
  return locale === 'zh' ? 'zh-CN' : 'en';
}

export function getOgLocale(locale: Locale): string {
  return locale === 'zh' ? 'zh_CN' : 'en_US';
}

export function getLocaleLabel(locale: Locale): string {
  return locale === 'zh' ? t(locale, 'lang.zh') : t(locale, 'lang.en');
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'zh' ? 'en' : 'zh';
}

