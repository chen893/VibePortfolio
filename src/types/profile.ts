export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'weibo' | 'bilibili' | 'email' | 'other';
  url: string;
  label: string;
}

export interface DeveloperProfile {
  name: string;
  title: string;
  bio: string;
  philosophy: string;
  avatar: {
    src: string;
    alt: string;
  };
  skills: Skill[];
  contact: {
    email: string;
    phone?: string;
  };
  socials: SocialLink[];
  seoTitle?: string;
  seoDescription?: string;
}
