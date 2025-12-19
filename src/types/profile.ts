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

export interface WorkExperience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  projects: {
    name: string;
    description: string;
    techStack: string[];
    highlights: string[];
  }[];
}

export interface Education {
  school: string;
  degree: string;
  major: string;
  startDate: string;
  endDate: string;
}

export interface Award {
  title: string;
  date: string;
  description?: string;
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
  workExperience?: WorkExperience[];
  education?: Education[];
  awards?: Award[];
  seoTitle?: string;
  seoDescription?: string;
}
