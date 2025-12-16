/**
 * 格式化日期为中文格式
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * 格式化日期为短格式
 */
export function formatDateShort(date: Date): string {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

/**
 * 生成 URL 友好的 slug
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * 截断文本并添加省略号
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * 类名合并工具
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * 获取技能熟练度对应的中文标签
 */
export function getProficiencyLabel(
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert'
): string {
  const labels = {
    beginner: '入门',
    intermediate: '熟练',
    advanced: '精通',
    expert: '专家',
  };
  return labels[proficiency];
}

/**
 * 获取技能熟练度对应的百分比
 */
export function getProficiencyPercentage(
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert'
): number {
  const percentages = {
    beginner: 25,
    intermediate: 50,
    advanced: 75,
    expert: 100,
  };
  return percentages[proficiency];
}

/**
 * 获取项目分类的中文标签
 */
export function getCategoryLabel(
  category: 'web' | 'mobile' | 'backend' | 'fullstack' | 'tool' | 'other'
): string {
  const labels = {
    web: 'Web 应用',
    mobile: '移动应用',
    backend: '后端服务',
    fullstack: '全栈项目',
    tool: '工具',
    other: '其他',
  };
  return labels[category];
}
