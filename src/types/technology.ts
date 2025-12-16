export interface Technology {
  name: string;
  slug: string;
  icon?: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'other';
  color?: string;
}
