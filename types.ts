export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  period?: string;
  location?: string;
  description?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
  iconName: string;
}

export interface Publication {
  id: string;
  title: string;
  venue: string;
  type: 'Journal' | 'Book Chapter' | 'Conference' | 'Case Report';
  year: string;
}

export interface ContactLink {
  label: string;
  href: string;
  iconName: string;
}